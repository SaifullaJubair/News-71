import { GoogleAuthProvider } from "firebase/auth";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState, } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Loader from "../Shared/Loader/Loader";
// import { FaBeer, FcGoogle } from "react-icons/fc";
const Register = () => {

    const { logout, updateUserProfile, providerLogin, createUser, user } = useContext(AuthContext)
    console.log(user)

    const router = useRouter()
    if (user) {
        router.push('/')
    }

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [termsAccepted, setTermsAccepted] = useState(false);

    const termsAndCondition = (event) => {
        setTermsAccepted(event.target.checked);

    };
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                setError("");
            })
            .catch((error) => console.error(error, error.message));
    };

    const [passwordMatch, setPasswoedMatched] = useState()

    const onchangeHande = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(event.target.value)
        setPasswoedMatched(event.target.value)
    }
    const onchangeHande1 = (event) => {
        event.preventDefault();
        const form = event.target;
        const second = event.target.value
        if (second !== passwordMatch) {
            setError(' Password not matched')

        }
        else {
            setError('')
            return
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password2 = form.password2.value;
        const password = form.password.value;
        const image = form.photo.files[0];
        if (password !== password2) {
            setError('password Password not matched')
            return
        }
        setLoading(true)
        setError('')

        console.log(name, image, email, password, password2,);

        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=2d5b1a5401d8ef6742d2329ac8957810`

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                createUser(email, password)
                    .then((result) => {
                        console.log(result.user)
                        // console.log(result.user)
                        const currentUser = { displayName: name, photoURL: imgData.data.url }
                        console.log(name)
                        updateUserProfile(currentUser)
                            .then(result => {
                                // const users =  { name, email, password, createdAt: new Date().toISOString(), photoURL: data?.data?.display_url };
                                console.log(result)
                                fetch('http://localhost:5000/adduser', {
                                    method: 'POST',
                                    headers: {
                                        "content-type": "application/json"
                                    },
                                    body: JSON.stringify(insertUser)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        setLoading(false)
                                        console.log(data)
                                        setCreateUserEmail(email)
                                        toast("Registration successful", {
                                            position: toast.POSITION.TOP_CENTER

                                        })
                                        form.reset()
                                        router.push('/')


                                    })
                                    .catch(err => console.log(err))
                                const user = result.user;
                                console.log(user)
                                setLoading(false)
                                setError("");
                                if (user.email) {
                                    console.log(user)

                                    toast("Registration successful", {
                                        position: toast.POSITION.TOP_CENTER

                                    })
                                    // navigate(from, { replace: true });
                                    setLoading(false)
                                }

                            })
                            .catch(err => console.log(err))

                        // code start data store to mongodb 
                        console.log(user)
                        const insertUser = { name: name, email: email, img: imgData.data.url, role: 'user', createdAt: new Date().toISOString(), }


                    })
                    .catch((e) => {
                        console.log(e);
                        setError(e.message);
                        setLoading(false)
                    });
            })
            .catch(err => console.log(err))

    };


    return (
        <div className="md:mx-6">
            <div className="w-full justify-around my-8 lg:flex">
                <div className="w-full text-center text-xl font-bold flex flex-col justify-center items-center">
                    <h2 className="text-2xl text-black my-auto">Welcome To Our Page</h2>
                    <img
                        src="https://i.ibb.co/FDFvSHx/119048-login-verification.gif"
                        alt=""
                    />
                </div>
                <div className=" bg-red-5 md:px-10 px-4 py-4 my-8 lg:w-4/5">
                    <h1 className="text-black text-5xl font-bold mb-5 text-center ">Sign Up</h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4">
                        {/* name  */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your Name" />
                            </div>
                            <TextInput
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Type Your Name"
                                required
                                shadow
                            />
                        </div>
                        {/* email  */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Your email" />
                            </div>
                            <TextInput
                                id="email2"
                                name="email"
                                type="email"
                                placeholder="email@example.com"
                                required
                                shadow
                            />
                        </div>
                        {/* photo */}
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-red-900 dark:text-white"
                                htmlFor="photo"
                            >
                                Upload Your photo
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-green-500 rounded-lg cursor-pointer bg-gray-230 dark:text-gray-400 focus:outline-none dark:bg-red-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="photo"
                                type="file"
                                name="photo"
                            ></input>
                        </div>


                        {/* password 1  */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password" />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                required
                                onChange={onchangeHande}
                                shadow
                            />
                        </div>
                        {/* repeate password  */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password2" value="Repeat password" />
                            </div>
                            <TextInput
                                onChange={onchangeHande1}
                                id="password2"
                                type="password"
                                required
                                shadow

                                name="password2"
                            />
                        </div>

                        {/* Error show  */}
                        <p className="text-red-500">
                            {error}

                        </p>
                        {/* check box / mark  */}
                        <div className="flex items-center gap-2">
                            <Checkbox
                                onClick={termsAndCondition}
                                id="agree"
                                type="checkbox"
                            />
                            <Label htmlFor="agree">
                                I agree with the{" "}
                                <Link
                                    href="/login"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    terms and conditions
                                </Link>
                            </Label>{" "}
                        </div>
                        <p className="flex items-center gap-2">
                            Already SIgn Up{" "}
                            <Link className="text-blue-500 underline" href="/login">
                                Login
                            </Link>
                        </p>
                        {/* {
                            loading ?
                                (
                                    <div className="text-center m-auto "> <Loading></Loading></div>
                                )
                                :
                                (
                                    <Button className="lg:w-1/2 lg:mx-auto" disabled={!termsAccepted} type="submit">
                                        Sign Up
                                    </Button>
                                )
                        } */}
                        {
                            loading ? <Loader></Loader> :
                                <Button className=" lg:mx-auto w-full"

                                    disabled={!termsAccepted}
                                    type="submit">
                                    Sign Up
                                </Button>
                        }

                        <div className="flex justify-between  py-8">
                            <div className="flex w-full">
                                <div className="flex flex-col w-full border-opacity-50">
                                    <div className=""></div>
                                    <div className="divider text-xl font-bold text-black">
                                        Or continue with
                                    </div>
                                    <div className="grid w-full card  rounded-box place-items-center">
                                        <div className="flex gap-4 w-full">
                                            <Button
                                                disabled={!termsAccepted}
                                                gradientDuoTone="purpleToBlue"
                                                className="btn btn-white text-3xl w-full"
                                                onClick={handleGoogleSignIn}
                                            >
                                                {/* <FcGoogle className="mr-4 text-xl " /> */}
                                                Google
                                            </Button>
                                            <Button
                                                disabled={!termsAccepted}
                                                gradientDuoTone="purpleToBlue"
                                                className="btn btn-white text-3xl w-full "
                                            // onClick={handleGoogleLogin}
                                            >
                                                {/* <FcGoogle className="mr-4 text-xl " /> */}
                                                Facebook
                                            </Button>











                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;