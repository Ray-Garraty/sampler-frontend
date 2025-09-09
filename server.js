/* eslint-disable no-console */
import fs from "fs";

import cors from "cors";
import express from "express";

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

let activeProgNum = 0;

const reviveNumbers = (key, value) => {
  if (
    typeof value === "string" &&
    !Number.isNaN(parseFloat(value)) &&
    Number.isFinite(value)
  ) {
    if (Number.isInteger(parseFloat(value))) {
      return parseInt(value, 10);
    }
    return parseFloat(value);
  }
  return value;
};

app.listen(port, () => {
  console.log(`\n Local server is listening at http://localhost:${port}\n`);
});

app.get("/fetchActiveProgNum", (req, res) => {
  console.log(activeProgNum);
  res.send(activeProgNum);
});

app.get("/stopProgram", (req, res) => {
  console.log("Deactivating current program...");
  activeProgNum = 0;
  res.send(0);
});

app.get("/fetchPrograms", (req, res) => {
  fs.readFile("data/programs.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading programs.json file:", err);
    }
    console.log("Sending programs...");
    res.send(data);
  });
});

app.post("/setActiveProgNum", (req, res) => {
  const { progNum } = req.body;
  console.log(`Setting program #${progNum} active...`);
  activeProgNum = progNum;
  res.json({
    message: "Program activated successfully",
    data: { activeProgNum },
  });
});

app.post("/deleteProgram", (req, res) => {
  const { progNum } = req.body;
  if (activeProgNum === progNum) {
    activeProgNum = 0;
  }
  fs.readFile("data/programs.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading programs.json file:", err);
    }
    const oldPrograms = JSON.parse(data, reviveNumbers);
    console.log(`\nDeleting program #${progNum}...\n`);
    const updatedPrograms = oldPrograms.filter(({ num }) => num !== progNum);
    const newProgramsString = JSON.stringify(updatedPrograms, null, 2);
    fs.writeFile("data/programs.json", newProgramsString, (error) => {
      if (error) {
        console.error("Error writing programs.json file:", error);
        return;
      }
      res.json({
        message: `Program ${progNum} deleted successfully`,
        data: updatedPrograms,
      });
    });
  });
});

app.post("/saveNewProg", (req, res) => {
  const program = req.body;
  console.table(program);
  program.num = 1;
  let newPrograms;
  program.createdAt = new Date().toLocaleString("ru-RU");

  fs.readFile("data/programs.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading programs.json file:", err);
      return;
    }
    if (data.trim().length !== 0) {
      const oldPrograms = JSON.parse(data, reviveNumbers);
      program.num =
        1 +
        oldPrograms.reduce((prev, current) =>
          current.num > prev.num ? current : prev,
        ).num;
      newPrograms = [program, ...oldPrograms];
    } else {
      newPrograms = [program];
    }
    const newProgramsString = JSON.stringify(newPrograms, null, 2);
    fs.writeFile("data/programs.json", newProgramsString, (error) => {
      if (error) {
        console.error("Error writing programs.json file:", error);
        return;
      }
      res.json({
        message: "Program saved successfully",
        data: { newProgNum: program.num, newProgDateTime: program.createdAt },
      });
    });
  });
});
