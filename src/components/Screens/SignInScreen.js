import React, { useEffect, useRef, useState } from "react";

import db, { auth } from "../../firebase";
import "./signInScreen.css";
function SignInScreen() {
  const [inputValue, setInputValue] = useState(
    "https://i.pinimg.com/originals/db/70/dc/db70dc468af8c93749d1f587d74dcb08.png"
  );
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
    // updating data in profileUrl
    db.collection("usersprofile")
      .doc(email)
      .set({
        imgUrl: inputValue,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    // end profileUrl
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const updateData = () => {
    console.log("iM in");
  };
  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <input
          className="hideInput"
          type="url"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signInScreenGray">New to Netflix?</span>
          <span className="signInLInk" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
