import HeaderTwoBtns from "../common/HeaderTwoBtns";

const NewProgram = ({ onExit }) =>
  HeaderTwoBtns({
    mainTitle: "НОВАЯ ПРОГРАММА",
    leftBtnTitle: "Сохранить программу",
    onLeftBtnClk: () => console.log("Program saved!"),
    rightBtnTitle: "Вернуться к списку",
    onRightBtnClk: onExit,
  });

export default NewProgram;
