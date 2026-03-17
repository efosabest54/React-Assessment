"use client";

import React from "react";




const SubComponent = () => {
  const allPosts = [
    {
      title: "Building modern applications with react",
      desc: "React patterns, use state, hooks, components and use effect",
      creator: "Efosa Best",
      date: "17-03-2026",
    },
    {
      title: "Quick tips for better component designs",
      desc: "Clear prop naming",
      creator: "Cruc1875",
      date: "04-12-2022",
    },
    {
      title: "Next Js and all its added advantages",
      desc: "How to use next js in 2026",
      creator: "Efosa Best",
      date: "21-01-2026",
    },
  ];
  return <div>
    <h1 className="h1">Latest Post</h1>
    {allPosts.map((student, index) => (
        <div key={index}>
         <p>Title: {student.title}</p>
         <p>Desc: {student.desc}</p>
         <p>Creator: {student.creator}</p>
         <p>Date: {student.date}</p>
        </div>
    )
    )

    }
  </div>;
};

export default SubComponent;
