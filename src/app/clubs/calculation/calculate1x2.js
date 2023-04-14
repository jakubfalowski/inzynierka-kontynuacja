export function calculate1x2(homePercent, awayPercent, goals) {
  let winHomePercent = 27;
  let drawPercent = 46;
  let winAwayPercent = 27;
  let result = "";
  let degreeGoals = 0;

  if (goals < 60) degreeGoals = 1; // poniżej 2 goli na mecz
  if (goals >= 60 && goals < 70) degreeGoals = 2; // 2-2.(3)
  if (goals >= 70 && goals < 80) degreeGoals = 3; // 2.(3)-2.(6)
  if (goals >= 80 && goals < 90) degreeGoals = 4; // 2.(6)-3
  if (goals >= 90) degreeGoals = 5; // 3+

  if (homePercent > 50 && homePercent < 60) {
    winHomePercent += (homePercent - 50) * 1.5;
    drawPercent -= (homePercent - 50) * 1.1;
    winAwayPercent -= (homePercent - 50) * 0.4;
  } else if (homePercent >= 60 && homePercent < 70) {
    winHomePercent += 15 + (homePercent - 60) * 1.8;
    drawPercent -= 11 - (homePercent - 60);
    winAwayPercent -= 14 - (homePercent - 60) * 0.8;
  } else if (homePercent >= 70) {
    winHomePercent += 33 + (homePercent - 60) * (4 / 3);
    drawPercent -= 21 - (homePercent - 60) * (25 / 30);
    winAwayPercent -= 12 - (homePercent - 60) * 0.5;
  } else if (homePercent <= 50 && homePercent > 40) {
    winAwayPercent += (awayPercent - 50) * 1.5;
    drawPercent -= (awayPercent - 50) * 1.1;
    winHomePercent -= (awayPercent - 50) * 0.4;
  } else if (homePercent <= 40 && homePercent > 30) {
    winAwayPercent += 15 + (awayPercent - 50) * 1.8;
    drawPercent -= 11 - (awayPercent - 50);
    winHomePercent -= 14 - (awayPercent - 50) * 0.8;
  } else {
    winAwayPercent += 33 + (awayPercent - 60) * (4 / 3);
    drawPercent -= 21 - (awayPercent - 60) * (25 / 30);
    winHomePercent -= 12 - (awayPercent - 60) * 0.8;
  }

  // 50-50 27-46-27
  // 60-40 42-35-23

  // W 10:
  // 1 +15
  // X -11
  // 2 -4

  // 60-40 42-35-23
  // 70-30 60-25-15

  // W 10:
  // 1 +18
  // X -10
  // 2 -8

  // 70-30 60-25-15
  // 100-0 100-0-0

  // W 30:
  // 1 40+
  // 2 25-
  // 3 15-

  if (drawPercent > winAwayPercent && drawPercent > winHomePercent) {
    if (degreeGoals === 1) result = "0-0";
    else if (degreeGoals === 2 || degreeGoals === 3) result = "1-1";
    else if (degreeGoals === 4 || degreeGoals === 5) result = "2-2";
  } else if (winHomePercent > winAwayPercent && winHomePercent > drawPercent) {
    if (winHomePercent < drawPercent + 10) {
      if (degreeGoals === 1 || degreeGoals === 2) result = "1-0";
      if (degreeGoals === 3 || degreeGoals === 4) result = "2-1";
      if (degreeGoals === 5) result = "3-2";
    } else if (
      winHomePercent >= drawPercent + 10 &&
      winHomePercent < drawPercent + 25
    ) {
      if (degreeGoals === 1 || degreeGoals === 2) result = "2-0";
      if (degreeGoals === 3 || degreeGoals === 4) result = "3-1";
      if (degreeGoals === 5) result = "4-2";
    } else if (
      winHomePercent >= drawPercent + 25 &&
      winHomePercent < drawPercent + 40
    ) {
      if (degreeGoals === 1 || degreeGoals === 2 || degreeGoals === 3)
        result = "3-0";
      if (degreeGoals === 4) result = "4-1";
      if (degreeGoals === 5) result = "5-2";
    } else {
      result = "4-0";
    }
  } else if (winHomePercent < winAwayPercent && winAwayPercent > drawPercent) {
    if (winAwayPercent < drawPercent + 10) {
      if (degreeGoals === 1 || degreeGoals === 2) result = "0-1";
      if (degreeGoals === 3 || degreeGoals === 4) result = "1-2";
      if (degreeGoals === 5) result = "2-3";
    } else if (
      winAwayPercent >= drawPercent + 10 &&
      winAwayPercent < drawPercent + 25
    ) {
      if (degreeGoals === 1 || degreeGoals === 2) result = "0-2";
      if (degreeGoals === 3 || degreeGoals === 4) result = "1-3";
      if (degreeGoals === 5) result = "2-4";
    } else if (
      winAwayPercent >= drawPercent + 25 &&
      winAwayPercent < drawPercent + 40
    ) {
      if (degreeGoals === 1 || degreeGoals === 2 || degreeGoals === 3)
        result = "0-3";
      if (degreeGoals === 4) result = "1-4";
      if (degreeGoals === 5) result = "2-5";
    } else {
      result = "0-4";
    }
  }
  return {
    result: result,
    home: winHomePercent,
    draw: drawPercent,
    away: winAwayPercent,
  };
}
