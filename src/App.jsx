/* eslint-disable import-x/extensions */
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import DebugMenu from "./assets/DebugMenu.jsx";
import Diagnostics from "./assets/Diagnostics.jsx";
import MainMenu from "./assets/MainMenu.jsx";
import ManageProgram from "./assets/ManageProgram.jsx";
import ManualMode from "./assets/ManualMode.jsx";
import ProgramsList from "./assets/ProgramsList.jsx";
import ProgramStatus from "./assets/ProgramStatus.jsx";
import PumpCal from "./assets/PumpCal.jsx";
import SystemSettings from "./assets/SystemSettings.jsx";

const App = () => {
  const [activeMenu, setActiveMenu] = useState("MainMenu");
  switch (activeMenu) {
    case "MainMenu":
      return <MainMenu switchMenu={(menuName) => setActiveMenu(menuName)} />;
    case "ProgramsList":
      return (
        <ProgramsList returnToMainMenu={() => setActiveMenu("MainMenu")} />
      );
    case "ProgramStatus":
      return (
        <ProgramStatus returnToMainMenu={() => setActiveMenu("MainMenu")} />
      );
    case "ManageProgram":
      return (
        <ManageProgram returnToMainMenu={() => setActiveMenu("MainMenu")} />
      );
    case "ManualMode":
      return <ManualMode returnToMainMenu={() => setActiveMenu("MainMenu")} />;
    case "PumpCal":
      return <PumpCal returnToMainMenu={() => setActiveMenu("MainMenu")} />;
    case "SystemSettings":
      return (
        <SystemSettings returnToMainMenu={() => setActiveMenu("MainMenu")} />
      );
    case "Diagnostics":
      return <Diagnostics returnToMainMenu={() => setActiveMenu("MainMenu")} />;
    case "DebugMenu":
      return <DebugMenu returnToMainMenu={() => setActiveMenu("MainMenu")} />;
    default:
      return new Error("Unknown main menu component...");
  }
};

export default App;
