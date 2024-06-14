import React from "react";
import MainList from "./components/FirstSurvey/MainList";
import SecondPage from "./components/SecondSurvey/SecondPage";
import ThanksPage from "./components/ThanksPage/ThanksPage";
import EndSurvey from "./components/EndPage/EndSurvey";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainList />} />
        <Route path="/survey" element={<SecondPage />}/>
        <Route path="/thanks" element={<ThanksPage />}/>
        <Route path="/last" element={<EndSurvey />}/>
      </Routes>
  );
};

export default App;
