//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const touchdown = 7;
    const fieldGoal = 3;
 
    const setPoints = (teamName, points) => {
      if(teamName === 'Lions') {
        return () => { setHomeScore(homeScore + points);}
      } return () => { setAwayScore(awayScore + points);}
    }

    const reset = () =>  {
      setHomeScore(0);
      setAwayScore(0);
    }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore = {homeScore} awayScore = {awayScore} />
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {setPoints('Lions', touchdown)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {setPoints('Lions', fieldGoal)}>Home Field Goal</button>
          <button className="homeButtons__fieldGoal" onClick = {reset}>Reset Scores</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {setPoints('Tigers', touchdown)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {setPoints('Tigers', fieldGoal)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
