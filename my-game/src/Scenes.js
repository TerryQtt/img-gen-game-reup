import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { generateImg } from "./App";
import { Login, Signup, SignOut, UserState, StoreScene } from "./login.js";

export function Scene() {
  //TODO final design should have scene take some kind of input so there isnt a billion scene pages
  StoreScene("/scene");
  const navigate = useNavigate();
  const toScene2 = () => {
    navigate("/scene2", { replace: true });
  };
  const toScene3 = () => {
    navigate("/scene3", { replace: true });
  };
  useEffect(() => {
    generateImg(
      "A beat up window sill with moonlight coming through, a crappy dorm room can be seen. Emphasize the shadow, In the style of cyberpunk"
    ).then((res) => {
      console.log(res);
      setImgurl(res.imgurl);
    });
  }, []);
  const [imgurl, setImgurl] = useState("");
  //here
  return (
    <div className="scene-container">
      {imgurl ? (
        <>
        <div className="image-container">
          <img src={imgurl} key={imgurl} alt="funnycat"></img>
          </div>
          {/* dialogue starts */}
          <div className="dialogue-container">
          <dialog open id="mainDial">
            <p>
              You open your eyes to a full moon, the silvery light slips through
              the decrepit window sill, and pours down onto the floor, leaving
              just a shadow.
            </p>
            <form method="/scene2">
              <button onClick={toScene2}>Keep Laying Down</button>
            </form>
            <form method="/scene3">
              <button onClick={toScene3}> Get Up</button>
            </form>
          </dialog>
          </div>
        </>
      ) : (
        <ClipLoader />
      )}
    </div>
  );
}
//scene2 function
export function Scene2() {
  const navigate = useNavigate();
  StoreScene("/scene2");
  const toScene4 = () => {
    navigate("/scene4", { replace: true });
  };
  useEffect(() => {
    generateImg(
      "First person pespective, laying down. a girl with short blue hair and a tattoo of a bow and arrow over one of her eyes stands at your bedside, in a crappy beat up room, in the style of cyberpunk"
    ).then((res) => {
      console.log(res);
      setImgurl(res.imgurl);
    });
  }, []);
  const [imgurl, setImgurl] = useState("");
  //here
  return (
    <div className="scene-container">
      {imgurl ? (
        <>
              <div className="image-container">
          <img src={imgurl} key={imgurl} alt="funnycat"></img>
          </div>
          {/* dialogue starts */}
          <div className="dialogue-container">
          <dialog open id="mainDial">
            <p>"Ready to go? Hey... It's Eileen. Do you know where you are?"</p>
            <form method="/scene4">
              <button onClick={toScene4}>Nod</button>
            </form>
            <form method="/scene4">
              <button onClick={toScene4}> "Home...Undercity..."</button>
            </form>
          </dialog>
          </div>
        </>
      ) : (
        <ClipLoader />
      )}
    </div>
  );
}
//scene3
export function Scene3() {
  const navigate = useNavigate();
  StoreScene("/scene3");
  const toScene4 = () => {
    navigate("/scene4", { replace: true });
  };
  useEffect(() => {
    generateImg(
      "First person pespective, standing up. a girl in tactical gear with short blue hair and a tattoo of a bow and arrow over one of her eyes sits at her desk writing in some kind of journal as she turns towards you, in a crappy beat up room, in the style of cyberpunk"
    ).then((res) => {
      console.log(res);
      setImgurl(res.imgurl);
    });
  }, []);
  const [imgurl, setImgurl] = useState("");
  //here
  return (
    <div className="scene-container">
      {imgurl ? (
        <>
              <div className="image-container">
          <img src={imgurl} key={imgurl} alt="funnycat"></img>
          </div>
          {/* dialogue starts */}
          <div className="dialogue-container">
          <dialog open id="mainDial">
            <p>"Ready to go?"</p>
            <form method="/scene4">
              <button onClick={toScene4}>I guess</button>
            </form>
            <form method="/scene4">
              <button onClick={toScene4}> "Where...Where Am I"</button>
            </form>
          </dialog>
          </div>
        </>
      ) : (
        <ClipLoader />
      )}
    </div>
  );
}

export function Scene4() {
  const navigate = useNavigate();
  StoreScene("/scene4");
  const toScene5 = () => {
    navigate("/scene5", { replace: true });
  };
  useEffect(() => {
    generateImg(
      "First person pespective, standing up. a girl in tactical gear with short blue hair and a tattoo of a bow and arrow over one of her eyes stands up and hands you a journal, in a crappy beat up room, in the style of cyberpunk"
    ).then((res) => {
      console.log(res);
      setImgurl(res.imgurl);
    });
  }, []);
  const [imgurl, setImgurl] = useState("");
  //here
  return (
    <div className="scene-container">
      {imgurl ? (
        <>
              <div className="image-container">
          <img src={imgurl} key={imgurl} alt="funnycat"></img>
          </div>
          {/* dialogue starts */}
          <div className="dialogue-container">
          <dialog open id="mainDial">
            <p>"You Might Need This"</p>
            <form method="/scene5">
              <button onClick={toScene5}>Take Journal</button>
            </form>
            <form method="/scene5">
              <button onClick={toScene5}> "What is this"</button>
            </form>
          </dialog>
          </div>
        </>
      ) : (
        <ClipLoader />
      )}
    </div>
  );
}

export function Scene5() {
  const navigate = useNavigate();
  StoreScene("/scene5");
  const toJournal = () => {
    navigate("/journal", { replace: true });
  };
  const toScene6 = () => {
    navigate("/scene6", { replace: true });
  };
  useEffect(() => {
    generateImg(
      "First person pespective, close up of your hand holding a journal, the journal is beat up and has a dark moon on the cover, in a crappy beat up room, in the style of cyberpunk"
    ).then((res) => {
      console.log(res);
      setImgurl(res.imgurl);
    });
  }, []);
  const [imgurl, setImgurl] = useState("");
  //here
  return (
    <div className="scene-container">
      {imgurl ? (
        <>
              <div className="image-container">
          <img src={imgurl} key={imgurl} alt="funnycat"></img>
          </div>
          {/* dialogue starts */}
          <div className="dialogue-container">
          <dialog open id="mainDial">
            <p>
              "This journal will help you remember, the things that you forget,
              that is..."
            </p>
            <form method="/journal">
              <button onClick={toJournal}>Open Journal</button>
            </form>
            <form method="/scene6">
              <button onClick={toScene6}> "What is this"</button>
            </form>
          </dialog>
          </div>
        </>
      ) : (
        <ClipLoader />
      )}
    </div>
  );
}

export function Scene6() {
  StoreScene("/scene6");
  console.log("demo ends here");
  return (
    <div className="scene-container">
       <div className="dialogue-container">
      <dialog open>
        <p>To Be Continued....</p>
      </dialog>
      </div>
    </div>
  );
}

export function Journal() {
  console.log("demo ends here");
  const entries = [
    "If found confused and dazed, call eileen iva the undercity hotline!",
    "number: 1658900",
  ];
  return (
    <div className="scene-container">
      <div className="dialogue-container">
      <dialog open>
        <p>
          {entries.map((entry) => (
            <p>{entry}</p>
          ))}
        </p>
        <p>To Be Continued...</p>
      </dialog>
      </div>
    </div>
  );
}
