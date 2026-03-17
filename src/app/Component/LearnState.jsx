"use client";

import React, { useState, useEffect } from "react";

const LearnState = () => {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");

 

  return (
    <div>
     

      <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />
      <button onClick={() => alert('Email updated\nPassword updated')}>click</button>

      
      <div>
       
        <p>EMAIL: {email}</p>
        <p>PASSWORD: {passsword}</p>
      </div>
    </div>
  );
};

export default LearnState;
