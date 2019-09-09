import React, {useState} from "react";
import "./App.css";


const TopRow = () => {

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const touchdown = 7;
  const fieldGoal = 3;

  const setPoints = (teamName, points) => {
    if(teamName === 'Lions') {
      return () => { setHomeScore(homeScore + points);}
    } return () => { setAwayScore(awayScore + points);}
  }

  return (
    <div className="topRow">
    <div className="home">
      <h2 className="home__name">Lions</h2>

      {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

      <div className="home__score">{homeScore}</div>
    </div>
    <div className="timer">00:03</div>
    <div className="away">
      <h2 className="away__name">Tigers</h2>
      <div className="away__score">{awayScore}</div>
    </div>
  </div>
  );
};

export default TopRow;
