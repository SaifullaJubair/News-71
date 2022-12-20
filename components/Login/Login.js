import { Button, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import { FaBeer, FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            <div className="w-full justify-around lg:flex my-auto">
                <div className=" text-xl text-center font-bold m-auto ">
                    <h2>Welcome To Login Page</h2>
                    <img className="w-full " src="https://i.ibb.co/njKWbpV/hello-login.gif" alt="" />
                </div>

                <div className=" bg-red-5 md:px-10 px-4 py-4 my-8 lg:w-1/2">
                    <h1 className="text-black text-5xl text-center font-bold mb-5 ">Login</h1>
                    <form className="flex flex-col gap-4">
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
                                placeholder={'Type Your passWord'}
                            />
                        </div>
                        {/* Error show  */}
                        <p className="text-red-500">error</p>

                        {/* {loading ? (
           <p>Loading...</p>
          ) : (
            <Button className="lg:w-1/2 lg:mx-auto text-center " type="submit">
              Log in
            </Button>
          )} */}
                        <Button className="lg:w-1/2 lg:mx-auto text-center " type="submit">
                            Log in
                        </Button>
                    </form>
                    <p className="my-4">
                        Forgot Password{" "}
                        <button

                            className=" underline text-blue-600"
                        >
                            reset
                        </button>
                    </p>
                    <p>
                        Don't have an account?{" "}
                        <button className="text-blue-500 underline" to="/signup">
                            Register
                        </button>
                    </p>
                    <div className="flex justify-between  py-8">
                        <div className="flex w-full">
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className=""></div>
                                <div className="divider text-xl font-bold text-black">
                                    Or continue with
                                </div>
                                <div className="grid h-20 card  rounded-box place-items-center">
                                    <div>
                                        <Button

                                            gradientDuoTone="purpleToBlue"
                                            className="btn btn-white text-3xl"
                                        >
                                            <FcGoogle className="mr-4 text-xl " /> Google
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