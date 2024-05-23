import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Tutorial from "./components/tutorial/tutorial";
import Feature from "./components/feature/feature";
import PopularDesign from "./components/PopularDesign/PopularDesign";
import FunctionSection from "./components/funtion/functionSection";
import PricingSection from "./components/pricing/pricingSection";
import ReadyToLearn from "./components/readyToLearn/readyToLearn";
import FooterSection from "./components/footer/footerSection";
import QuestionSection from "./components/questions/questionSection";
import FreeTutorial from "./components/freetutorial/freeTutorial";

function App() {
  return (
    <>
      <Header />
      <Tutorial />
      <Feature />
      <PopularDesign />
      <FunctionSection />
      <PricingSection />
      <FreeTutorial />
      <QuestionSection />
      <ReadyToLearn />
      <FooterSection />
    </>
  );
}

export default App;
