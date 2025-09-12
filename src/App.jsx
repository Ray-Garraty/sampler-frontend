import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import MainMenu from "./assets/components/slices/MainMenu";
import ManualMode from "./assets/components/slices/ManualMode";
import ProgramEditor from "./assets/components/slices/ProgramEditor";
import ProgramsList from "./assets/components/slices/ProgramsList";
import ProgramStatus from "./assets/components/slices/ProgramStatus";
import SamplingReport from "./assets/components/slices/SamplingReport";
import SystemSettings from "./assets/components/slices/SystemSettings";

const App = () => {
  const [activeSlice, setActiveSlice] = useState("MainMenu");
  const [progParams, setProgParams] = useState(null);

  switch (activeSlice) {
    case "MainMenu":
      return (
        <MainMenu activateSlice={(menuName) => setActiveSlice(menuName)} />
      );
    case "ProgramsList":
      return (
        <ProgramsList
          onCreateNew={() => setActiveSlice("ProgramEditor")}
          onEdit={() => setActiveSlice("ProgramEditor")}
          onExit={() => setActiveSlice("MainMenu")}
          transferProgParams={setProgParams}
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
    case "ProgramEditor":
      return (
        <ProgramEditor
          clearProgParams={setProgParams}
          onExit={() => setActiveSlice("ProgramsList")}
          progData={progParams}
        />
      );
    case "SamplingReport":
      return <SamplingReport onExit={() => setActiveSlice("ProgramStatus")} />;
    default:
      return new Error("Unknown main menu component...");
  }
};

export default App;
