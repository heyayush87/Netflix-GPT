import React from "react";
import { useState, useRef } from "react";
import { Validate } from "../utils/Validate";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import LoginPage from "./LoginPage";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/UserSlice";
import { avtaar } from "../utils/constant";
import { bglogo } from "../utils/constant";

const Header = () => {
  const [signin, setsignin] = useState(true);
  const [errorMessage, seterrorMessage] = useState(false);
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  // sign in toggle
  const HandleSignUp = () => {
    setsignin(!signin);
  };

  // check validation
  const handleclick = () => {
    const message = Validate(email.current.value, password.current.value);
    seterrorMessage(message);

    if (!signin) {
      // signup if signin is not done

      createUserWithEmailAndPassword(
        auth,
        email.current.value, //  this both email and passwd line will came from using useref
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: avtaar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(adduser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      // signin if signup is already done

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="absolute">
        <img src={bglogo} alt="bg-Logo" />
      </div>
      <LoginPage />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12 absolute  bg-black bg-opacity-70 p-12 mx-auto right-0 left-0 bottom-0 text-white "
      >
        <h1 className="text-3xl font-bold">{signin ? "Sign IN" : "Sign UP"}</h1>
        {!signin && (
          <input
            ref={name}
            className="p-2 my-2 bg-slate-600 "
            type="search"
            placeholder="Full Name "
          />
        )}
        <input
          ref={email}
          className="p-2 my-2 bg-slate-600 "
          type="search"
          placeholder="Email / Phone Number "
        />

        <input
          ref={password}
          className="p-2 my-2 bg-slate-600 "
          type="password"
          placeholder="password "
        />

        <p className="text-red-600 ">{errorMessage}</p>

        <button
          className=" p-2 my-4 w-full bg-red-700 text-white rounded-sm "
          onClick={handleclick}
        >
          {signin ? "Sign IN" : "Sign UP"}
        </button>

        <p className="py-2 cursor-pointer w-full" onClick={HandleSignUp}>
          {signin ? "New To Netflix/Sign Up" : " Already Register/Sign IN"}
        </p>
      </form>
    </div>
  );
};

export default Header;
