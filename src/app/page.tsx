"use client";

import Image from "next/image";
import styles from "./page.module.css";

import React from "react";
import SearchSection from "./components/SearchSection/SearchSection";
import TeamSection from "./components/TeamSection/TeamSection";
import PathwaysSection from "./components/PathwaysSection/PathwaysSection";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="Home">
        <SearchSection />
        <TeamSection />
        <PathwaysSection />
      </div>
      <Footer></Footer>
    </div>
  );
}
