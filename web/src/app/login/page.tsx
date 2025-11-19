import Link from "next/link";
import React from "react";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

                <h1 className="text-2xl font-bold mb-6 text-center">
                    Sign In to your account
                </h1>

                {/* FORM */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="john.doe@gmail.com"
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        SIGN IN
                    </button>
                </form>

                {/* SIGN UP */}
                <p className="text-center text-sm mt-4">
                    Don’t have an account yet?{" "}
                    <a className="text-blue-600 font-semibold hover:underline" href="/signup">
                        Sign Up here
                    </a>
                </p>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-3 text-gray-500">Or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Google Login */}
                <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-gray-50 transition">
                    <span className="text-blue-600 text-lg font-bold">G</span>
                    SIGN IN WITH GOOGLE
                </button>

            </div>
        </div>
    );
}
