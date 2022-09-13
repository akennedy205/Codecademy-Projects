const getSleepHours = day => {

    switch (day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 7
            break;
        case 'wednesday':
            return 8
            break;
        case 'thursday':
            return 5
            break;
        case 'friday':
            return 8
            break;
        case 'saturday':
            return 7
            break;
        case 'sunday':
            return 8
            break;

        default:
            return "Error!"
    }

};

//Collating ACTUAL sleep hours from the Switch statement
const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours())

//Collating IDEAL hours
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

//calculating sleep debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
        console.log("You've got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours){
        console.log("You've got" + (idealSleepHours - actualSleepHours) + "more hours of sleep this week.");
    } else if (actualSleepHours < idealSleepHours){
        console.log("You should get some rest because you've slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.")
    } else {
        console.log("Error! Something went wrong, check your code")
    }
}

calculateSleepDebt();