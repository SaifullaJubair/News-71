import { GoogleAuthProvider } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const {
    providerLogin,
    logOut,
    forgotPassword,
    signIn,
    user,
    updateUserProfile,
    createUser,
  } = useContext(AuthContext);

  const router = useRouter();
  if (user) {
    router.push("/");
  }
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [createUserEmail, setCreateUserEmail] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const currentUser = {
          displayName: user.displayName,
          email: user.email,
        };
        updateUserProfile(currentUser)
          .then(() => {
            saveUser(user.displayName, user.email, user.photoURL);
          })
          .catch((error) => console.error(error));
        console.log(currentUser);
        setError("");
      })
      .catch((error) => console.error(error, error.message));
  };

  const saveUser = (displayName, email, photoURL) => {
    const createdAt = new Date().toISOString();
    const user = {
      name: displayName,
      email,
      role: "user",
      createdAt,
      img: photoURL,
    };
    fetch("http://localhost:5000/adduser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreateUserEmail(user.email);
        console.log(user.email);
        toast("Register success", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(result);
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        setError("");
        toast("login success", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((e) => {
        console.error(e);

        console.error(e.message);

        setError(e.message);
      });
  };

  const handleEmailBlur = (event) => {
    const form = event.target;
    const email = form.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();

    console.log(userEmail);

    forgotPassword(userEmail)
      .then(() => {
        setError("");
        toast("reset mail sent. Check Your mail box", {
          position: toast.POSITION.TOP_CENTER,
        });
        // alert('sent reset link')
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl ">Welcome To Login Page</h2>
      <div className="w-full justify-around lg:flex my-auto">
        <div className=" text-xl text-center font-bold m-auto ">
          <img
            className="w-full "
            src="https://i.ibb.co/njKWbpV/hello-login.gif"
            alt=""
          />
        </div>

        <div className=" bg-red-5 md:px-10 px-4 py-4 my-8 lg:w-1/2">
          <h1 className="text-black text-5xl text-center font-bold mb-5 ">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="Type Your email"
                required
                shadow
                name="email"
                onBlur={handleEmailBlur}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput
                id="password2"
                type="password"
                name="password"
                required
                shadow={true}
                placeholder={"Type Your passWord"}
              />
            </div>
            {/* Error show  */}
            <p className="text-red-500">{error}</p>

            {/* {loading ? (
           <p>Loading...</p>
          ) : (
            <Button className="lg:w-1/2 lg:mx-auto text-center " type="submit">
              Log in
            </Button>
          )} */}
            <Button className=" lg:mx-auto text-center w-full " type="submit">
              Log in
            </Button>
          </form>
          <p className="my-4">
            Forgot Password{" "}
            <button
              onClick={handleForgotPassword}
              className=" underline text-blue-600"
            >
              reset
            </button>
          </p>
          <p>
            Don't have an account?{" "}
            <Link className="text-blue-500 underline" href="/register">
              Register
            </Link>
          </p>
          <div className="flex justify-between  py-8">
            <div className="flex w-full">
              <div className="flex flex-col w-full border-opacity-50">
                <div className=""></div>
                <div className="divider text-xl font-bold text-black">
                  Or continue with
                </div>
                <div className="grid h-20 card  rounded-box place-items-center ">
                  <div className="flex gap-4 w-full">
                    <Button
                      onClick={handleGoogleSignIn}
                      gradientDuoTone="purpleToBlue"
                      className="btn btn-white text-3xl w-full"
                    >
                      <FcGoogle className="mr-4 text-xl " /> Google
                    </Button>
                    <Button
                      onClick={handleGoogleSignIn}
                      gradientDuoTone="purpleToBlue"
                      className="btn btn-white text-3xl w-full"
                    >
                      <FaFacebookF className="mr-4 text-xl " /> Facebook
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
