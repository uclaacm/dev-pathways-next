import React from "react";
import "./PathwaysSection.css";
import SolidButton from "../SolidButton/SolidButton";
import pathway1 from "./pathway1.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PathwaysSection = () => {
  const router = useRouter();
  return (
    <div className="pathway-section">
      <h2>Your Pathway</h2>
      <div className="pathway-container">
        <Image src={pathway1} alt="" />
        <div className="pathway-info">
          Want to learn a technology but don&apos;t know where to start? Dev
          Pathways will guide you through it! Simply answer a few questions and
          we&apos;ll take care of the rest.
          <br />
          <br />
          Based on your answers, a unique learning pathway full of both ACM and
          external resources will be generated! Soon enough, you&apos;ll be
          ready to contribute to all of our projects at ACM. Welcome to the
          team.
          <SolidButton
            className="gen-pathway-button"
            text="Generate"
            onClick={() => router.push("/quiz")}
          />
        </div>
      </div>
    </div>
  );
};

export default PathwaysSection;
