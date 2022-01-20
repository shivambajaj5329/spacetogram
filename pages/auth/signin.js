
import {getProviders, signIn as signInToProvider} from "next-auth/react"
import React from 'react';

import Header from "../../components/Header"

//Browser Level

function signIn({providers}) {
  return (
    <>

    <Header />

    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">

        <img className="w-90" src='https://i.imgur.com/74DIHd9.png' />

        <p className="font-xs italic">I made this app for the 2022 summer internship challenge set up by Shopify, its not a real App</p>
            <div className="mt-40">
        {Object.values(providers).map((provider) => (

            <div key = {provider.name}>

                <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => signInToProvider(provider.id , {callbackUrl: '/'})}>

                    Sign in with {provider.name}
                </button>
            </div>

        ))}
</div>
    </div>



    </>


  );
}


//Server - level

export async function getServerSideProps(){

    const providers = await getProviders();


    return {
        props: {
            providers
        }
    }
}

export default signIn;
