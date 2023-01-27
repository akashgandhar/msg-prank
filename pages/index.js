import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState();
  const [t, setT] = useState();

  return (
    <>
      <Head>
        <title>Secret Msg</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {name && (
        <div class="flex h-screen w-screen justify-center items-center bg-black">
          <img
            onClick={() => {
              setName();
            }}
            className="w-64 h-80 p-5"
            src="/image.png"
            alt="new"
          />
          <h1 class="animate-spin-slow animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
            Fuck You {name}
          </h1>
        </div>
      )}

      {!name && (
        <div class="flex h-screen w-screen justify-center items-center bg-black">
          <input
            onChange={(e) => {
              setT(e.target.value);
            }}
            class="block p-3 pl-10 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter your Name"
            type="email"
            id="email"
            required=""
          />
          <div>
            <button
              onClick={() => {
                if (!t) {
                  alert("enter name");
                } else {
                  setName(t);
                }
              }}
              type="submit"
              class="hover:bg-sky-600 py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
