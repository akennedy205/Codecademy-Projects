let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 25;

if (runnerAge > 18 && registeredEarly){
    raceNumber += 1000;
};

if (runnerAge > 18 && registeredEarly){
  console.log(`Adult race number ${raceNumber} will start off at 9:30am`);
} else if (runnerAge > 18 && !registeredEarly){
  console.log(`Late Adult race number ${raceNumber} will start at 11:00am`);
} else if (runnerAge < 18){
  console.log(`Under-18 race number ${raceNumber} will start at 12:30am`);
} else if(runnerAge === 18 && registeredEarly){
  console.log(`Early registered runners aged ${runnerAge}, please see the registration desk`);
} else if (runnerAge === 18 && !registeredEarly){
  console.log(`Late entries for ${runnerAge} years old races, please see the registration desk`);
}
