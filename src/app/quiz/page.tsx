'use client'
import React, { useContext } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import PathwayHeader from "../img/pathway-header.svg";
import Floating from "../img/quiz_floating.svg";
import Career from "../img/quiz_career.svg";
import Adventure from "../img/quiz_adventure.svg";
import QuizQuestion from "../components/QuizQuestion/QuizQuestion";
import SolidButton from "../components/SolidButton/SolidButton";
import QuizContext, { defaultQuizContext } from "./QuizContext";
import "./Quiz.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Quiz = (props: any) => {

    const router = useRouter();
  const {setQuizResults} = useContext(QuizContext)

  let quizResults = defaultQuizContext.quizResults;

  return (
    <div>
      <PageHeader
        header="Your Pathway"
        subheader="Answer the following questions to get started!"
        img={PathwayHeader}
        imgStyle={{
          backgroundSize: "423px 297px",
          backgroundPosition: "100%",
        }}
      />
      <Image src={Floating} alt=""/>
      <Image src={Career} alt=""/>
      <Image src={Adventure} alt="" />
      <QuizQuestion
        type="dropdown"
        question="Which technology do you want to learn?"
        choices={["HTML/CSS", "Javascript", "React", "Git"]}
        onChange={(event : any) => {
          quizResults = {
            ...quizResults,
            category: event.target.value}
          }}
      />
      <QuizQuestion
        type="radio"
        question="How experienced are you?"
        choices={["Beginner", "Intermediate", "Advanced"]}
        onChange={(event : any)=> {
          quizResults = {
            ...quizResults,
            difficulty: event.target.value}
          }}
      />
      <QuizQuestion
        type="radio"
        question="What kind of resources do you prefer?"
        choices={["Video", "Article", "Game", "Documentation"]}
        onChange={(event : any) => {
          quizResults = {
            ...quizResults,
            type: event.target.value}
          }}
      />
      <QuizQuestion
        type="radio"
        question="What's your ideal timeline?"
        choices={["3 days", "1 week", "2 weeks", "1 month"]}
        onChange={(event : any) => {
            quizResults = {
              ...quizResults,
              time: event.target.value}
            }}
      />
      <QuizQuestion
        type="radio"
        question="How long do you want to spend learning each week?"
        choices={["2 hours", "5 hours", "10 hours", "20 hours"]}
        onChange={(event : any) => {
          quizResults = {
            ...quizResults,
            hours: event.target.value
          }
        }}
      />
      <SolidButton
        type="radio"
        className="goto-pathway-button"
        text="Generate"
        onClick={() => {
        //   setQuizResults(quizResults);
          router.push("/pathway");
        }}
      />
    </div>
  );
};

export default Quiz;
