import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { db } from "./firebase";
import { set, ref, get, child, getDatabase } from "firebase/database";

export function Login() {
  const navigate = useNavigate();
  const toScene = (user) => {
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
  const toSignup = () => {
    navigate("/signup", { replace: true });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        //TODO add cookie here
        return toScene(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    // TODO add input form
    <div>
      <form onSubmit={onLogin}>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className = "container">
        <div className = "button-container">
        <button id="loginbtn" className="glowing-btn">
          <span className="glowing-txt">
            L<span className="faulty-letter">O</span>GIN
          </span>
        </button>

      <button onClick={toSignup} id="signupbtn" className="glowing-btn">
        <span className="glowing-txt">
          S<span className="faulty-letter">IGN </span>UP
        </span>
      </button>
   
        </div>
        </div>
      </form>

    </div>
  );
}

//signup
export function Signup() {
  const toScene = (user) => {
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
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login", { replace: true });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            StoreScene("/scene");
            //TODO add cookie here
            toScene(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  //TODO handle sign up, navigate to scene if signed up
  return (
    // TODO add input form
    <div>
      <form onSubmit={onSignUp}>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container"> <button id="loginbtn" className="glowing-btn">
          <span className="glowing-txt">
            S<span className="faulty-letter">I</span>GNUP
          </span>
        </button></div>
       
      </form>
    </div>
  );
}

export function SignOut() {
  const auth = getAuth();
  //const navigate = useNavigate();
  // const toHome = () => {
  //   navigate("/", { replace: true });
  // };
  signOut(auth)
    .then(() => {
      setTimeout(function () {
        window.location.reload();
      });
    })
    .catch((error) => {});
}

export function UserState() {
  const user = auth.currentUser;
  if (user) {
    return true;
  } else {
    return false;
  }
}

export function StoreScene(scene) {
  if (auth.currentUser) {
    const userid = auth.currentUser.uid;
    if (userid) {
      set(ref(db, "users/" + userid), {
        username: userid,
        progress: scene,
      });
    }
  } else {
    console.log("no user logged in");
  }
}
