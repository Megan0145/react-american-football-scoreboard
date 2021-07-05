//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [gameQuarter, setGameQuarter] = useState(0);

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

    const updateQuarter = () => {
      if (gameQuarter < 4) {
      setGameQuarter(gameQuarter + 1);
      } else {
        reset();
        setGameQuarter(0);
      }
    }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore = {homeScore} awayScore = {awayScore} />
        <BottomRow quarter = {gameQuarter}/>
      </section>
        <Buttons setPoints = {setPoints} touchdown = {touchdown} fieldGoal = {fieldGoal} reset = {reset} updateQuarter = {updateQuarter}/>
    </div>
  );
}

export default App;
