import background from "./images/tempbackground.jpg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import cat from "./images/cat.jpg";
import OpenAI from "openai";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Login, Signup, SignOut, UserState, StoreScene } from "./login.js";
import Layout from "./layout";
import { db } from "./firebase";
import { set, ref, get, child, getDatabase } from "firebase/database";
import { auth } from "./firebase";
import {
  Scene,
  Scene2,
  Scene3,
  Scene4,
  Scene5,
  Scene6,
  Journal,
} from "./Scenes";
export async function generateImg(prompt) {
  try {
    const result = await fetch(
      `https://us-central1-terry-pic-gen.cloudfunctions.net/app?prompt=${prompt}`,
      {
        method: "POST",
      }
    );
    return result.json();
  } catch (error) {
    console.log(error);
  }
}
//react app
export default function App() {
  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  return (
    <div>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/scene" element={<Scene />} />
            <Route path="/scene2" element={<Scene2 />} />
            <Route path="/scene3" element={<Scene3 />} />
            <Route path="/scene4" element={<Scene4 />} />
            <Route path="/scene5" element={<Scene5 />} />
            <Route path="/scene6" element={<Scene6 />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

//home
function Home() {
  const navigate = useNavigate();
  let ustate = UserState();
  console.log(ustate);
  const toLogin = () => {
    navigate("/login", { replace: true });
  };
  const toScene = () => {
    const user = auth.currentUser;
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          navigate(snapshot.val().progress, { replace: true });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      {ustate ? (
        <div>
          <div className="top-right-container">
          <div className = "top-right-button">
          <button onClick={SignOut} >
            Signout
            <svg
              width="79"
              height="46"
              viewBox="0 0 79 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_618_1123)">
                <path
                  d="M42.9 2H76.5L34.5 44H2L42.9 2Z"
                  fill="url(#paint0_linear_618_1123)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_618_1123"
                  x1="76.5"
                  y1="2.00002"
                  x2="34.5"
                  y2="44"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.6" />
                  <stop offset="1" stop-color="white" stop-opacity="0.05" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          <button onClick={StoreScene("/scene")} >
            Reset Game
            <svg
              width="79"
              height="46"
              viewBox="0 0 79 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_618_1123)">
                <path
                  d="M42.9 2H76.5L34.5 44H2L42.9 2Z"
                  fill="url(#paint0_linear_618_1123)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_618_1123"
                  x1="76.5"
                  y1="2.00002"
                  x2="34.5"
                  y2="44"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.6" />
                  <stop offset="1" stop-color="white" stop-opacity="0.05" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          </div>
          </div>
          <div className = "container">
          <div className="button-container">
            <button onClick={toScene} id="startbtn" className="glowing-btn">
            <span className="glowing-txt">
              S<span className="faulty-letter">T</span>ART
            </span>
          </button>
          </div>
          </div>
        </div>
      ) : (
      <div className = "container">
          <div className="button-container">
            <button onClick={toLogin} id="startbtn2" className="glowing-btn">
          <span className="glowing-txt">
            S<span className="faulty-letter">T</span>ART
          </span>
        </button>
        </div>
        </div>
      )}
    </div>
  );
  //design of the button is credited to Kshitij https://codepen.io/Ks145/pen/MWGxbYr
}
