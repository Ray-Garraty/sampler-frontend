/* eslint-disable import-x/extensions */
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import MainMenu from "./assets/components/slices/MainMenu.jsx";
import ManualMode from "./assets/components/slices/ManualMode.jsx";
import NewProgram from "./assets/components/slices/NewProgram.jsx";
import ProgramsList from "./assets/components/slices/ProgramsList.jsx";
import ProgramStatus from "./assets/components/slices/ProgramStatus.jsx";
import SamplingReport from "./assets/components/slices/SamplingReport.jsx";
import SystemSettings from "./assets/components/slices/SystemSettings.jsx";

const App = () => {
  const [activeSlice, setActiveSlice] = useState("MainMenu");
  switch (activeSlice) {
    case "MainMenu":
      return (
        <MainMenu activateSlice={(menuName) => setActiveSlice(menuName)} />
      );
    case "ProgramsList":
      return (
        <ProgramsList
          onCreateNew={() => setActiveSlice("NewProgram")}
          onExit={() => setActiveSlice("MainMenu")}
        />
      );
    case "ProgramStatus":
      return (
        <ProgramStatus
          onExit={() => setActiveSlice("MainMenu")}
          onViewReport={() => setActiveSlice("SamplingReport")}
        />
      );
    case "ManualMode":
      return <ManualMode onExit={() => setActiveSlice("MainMenu")} />;
    case "SystemSettings":
      return <SystemSettings onExit={() => setActiveSlice("MainMenu")} />;
    case "NewProgram":
      return (
        <NewProgram
          onExit={() => {
            if (
              confirm(
                "Несохранённые данные будут утеряны.\nВы уверены, что хотите выйти?",
              )
            ) {
              setActiveSlice("ProgramsList");
            }
          }}
        />
      );
    case "SamplingReport":
      return <SamplingReport onExit={() => setActiveSlice("ProgramStatus")} />;
    default:
      return new Error("Unknown main menu component...");
  }
};

export default App;
