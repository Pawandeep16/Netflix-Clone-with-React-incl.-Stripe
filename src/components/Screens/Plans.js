import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./plans.css";

function Plans() {
  const [plans, setPlans] = useState([]);
  const [index, setIndex] = useState(undefined);
  const [sid, setSid] = useState(undefined);

  useEffect(() => {
    db.collection("plans")
      .get()
      .then((querySnapshot) => {
        const products = {};
        // querySnapshot.docs.map(  (item) =>{
        //   return(

        //     db.collection("plans").doc(item.id).collection('price').get()
        //     .then( res=>{
        //        products.pricePlan= res.docs[0].data()
        //     })

        //   )
        // })
        querySnapshot.forEach(async (planDoc) => {
          products[planDoc.id] = planDoc.data();
          const prices = await planDoc.ref.collection("price").get();
          prices.docs.forEach((price) => {
            products[planDoc.id].priceList = {
              pricesId: price.id,
              pricesData: price.data(),
            };
          });
        });
        setPlans(products);
      });
  }, []);

  // updaing Data in Firestore
  const updateData = (id, active) => {
    active === "false"
      ? alert("Are You Want To Subscribe TO This Survice")
      : alert("YOu Want To Unsubscribe");

    db.collection("plans")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map(async (item) => {
          return id === item.id
            ? db
                .collection("plans")
                .doc(item.id)
                .update(
                  active === "false"
                    ? {
                        Active: "true",
                      }
                    : {
                        Active: "false",
                      }
                )
                .then(() => {
                  console.log("Document successfully updated!");
                  window.location.reload(false);
                })
            : db
                .collection("plans")
                .doc(item.id)
                .update({
                  Active: "false",
                })
                .then(() => {
                  console.log("Document successfully updated!");
                  window.location.reload(false);
                });
        });
      });
  };

  // end udaeye
  // test

  // endtest

  return (
    <div className="plans">
      {Object.entries(plans).map(([id, data]) => {
        return (
          <div className="plans_details " key={id}>
            <div className="plans_details_left">
              <h6>{data.name}</h6>
              <h6>{data.Description}</h6>
              <h6>{data.Active}</h6>
            </div>
            <div className="plans_details_right">
              <button
                onClick={() => {
                  id !== sid ? setSid(id) : setSid(undefined);
                  index === id ? setIndex(undefined) : setIndex(id);
                }}
                className={`${
                  data.Active === "true" ? "disable_button" : "active"
                }`}
              >
                {data.Active === "true" ? "Current Plan" : "View Details"}
              </button>
              {id === index ? (
                <div className="priceList">
                  <p>{`Rs.${data?.priceList?.pricesData?.price}`}</p>
                  <p>{data?.priceList?.pricesData?.name}</p>
                  <p>{data?.priceList?.pricesData?.description}</p>
                  <button
                    onClick={() => {
                      sid && updateData(sid, data?.Active);
                    }}
                    className="Activate"
                  >
                    {data.Active === "true" ? "UnSubscribe" : "Subscribe"}
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
