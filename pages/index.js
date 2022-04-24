import Head from "next/head";
import Users from "./User";
// import React, { useState } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Random user generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Users />
    </div>
  );
}
