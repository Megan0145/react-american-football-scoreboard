import React from "react";
import "./App.css";

const Buttons = (props) => {



  return (
    <section className="buttons">
<div className="homeButtons">
  {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
  <button className="homeButtons__touchdown" onClick = {props.setPoints('Lions', props.touchdown)}>Home Touchdown</button>
  <button className="homeButtons__fieldGoal" onClick = {props.setPoints('Lions', props.fieldGoal)}>Home Field Goal</button>
  <button className="homeButtons__fieldGoal" onClick = {props.reset}>Reset Scores</button>
</div>
<div className="awayButtons">
  <button className="awayButtons__touchdown" onClick = {props.setPoints('Tigers', props.touchdown)}>Away Touchdown</button>
  <button className="awayButtons__fieldGoal" onClick = {props.setPoints('Tigers', props.fieldGoal)}>Away Field Goal</button>
  <button className="awayButtons__fieldGoal" onClick = {props.updateQuarter}>Increment Game Quarter</button>
</div>
</section>
  );
  };
export default Buttons;






