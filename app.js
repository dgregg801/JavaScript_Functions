console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    //1. Initialization
    //2. Conditional
    //3. Incrementor
    //Absolute value of number
    const posCount = Math.abs(count);
    const sign = (count/posCount);
    for ( let i = 1; i <= posCount; i++ ) {
       if (i % 2 == 1){
       console.log(sign*i);
}
    
}
}

//printOdds(10);
//printOdds(-33);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (!userName){
        console.log("Invalid name");
        return;
    }

    if (age >= 16) {
        console.log(aboveSixteen);
    } else if (age >= 16) {
        console.log(belowSixteen);
    } else {
        console.log("Invalid age");
    }
}

checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

/*function whichQuadrant(x, y) {
    if (x > 0 && y > 0) {
        console.log("Quadrant 1");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 2");
    } else if (x < 0 && y < 0) {
        console.log("Quadrant 3");
    } else if (x > 0 && y < 0) {
        console.log("Quadrant 4");
    } else {
        console.log("Not in any quandrant")
    }
}*/

const cartesian = (x, y) => {
    if(x == 0 && y == 0){
        console.log("Origin Point");
    } else if (y == 0){
        console.log("X-Axis");
    } else if (x == 0){
        console.log("Y-Axis");
    } else if (x > 0){
        if (y > 0){
            console.log("Quadrant 1");
        } else {
            console.log("Quadrant 4");
        }
    } else {
        if (y > 0){
            console.log("Quadrant 1");
        } else {
            console.log("Quadrant 3");
        }
    }
}

//cartesian(0, 0);
cartesian(0, 2);
//cartesian(1, 0);
//cartesian(-1, 0);
//cartesian(-1, -1);

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

/*function whichTriangle(side1, side2, side3) {
    let triangleType = "";
    if (side1 == side2 && side1 == side3) {
        triangleType = "equilateral";
    } else if (side1 == side2 || side1 == side3) {
        triangleType = "isosceles";
    } else {
        triangleType = "scalene";
    }
    return console.log(
        `Sides [${side1}, ${side2}, ${side3}] what type of Triangle: ${triangleType}`
    );
}
whichTriangle(1, 2, 2);*/

const getTriangleType = (a, b, c) => {
    if (a + b <= c || a + c <= b || b + a <= c){
        return "Invalid Triangle";
    } else if (a == b && a == c) {
        return "Equilateral";
    } else if (a != b && a !== c && b != c) {
        return "Scalene";
    } else {
        return "Isosceles";
    }
}

console.log(getTriangleType(1, 2, 2));
console.log(getTriangleType(1, 1, 2));
console.log(getTriangleType(2, 2, 2));
console.log(getTriangleType(3, 4, 5));

//Exercise 5

/*function dataUsageFeedback(planLimit, day, usage) {
    const daysRemaining = 30 - day;
    const averageDailyUsage = usage / day;

    if (day > 30) {
        return "Your 30-day period has ended. Please renew your plan.";
    } else if (usage >= planLimit) {
        return "You have already exceeded your data plan.";
    } else {
        const remainingData = planLimit - usage;
        const maxDailyUsageToStayWithinPlan = remainingData / daysRemaining;

        let feedback = `${day} days used, ${daysRemaining} days remaining\n`;
        feedback += `Average daily use: ${averageDailyUsage.toFixed(3)} GB/day\n`;

        if (averageDailyUsage > maxDailyUsageToStayWithinPlan) {
            const excessUsage = (averageDailyUsage - maxDailyUsageToStayWithinPlan) * daysRemaining;
            feedback += `You are EXCEEDING your average daily use (${averageDailyUsage.toFixed(3)} GB/day),\n`;
            feedback += `continuing this high usage, you'll exceed your data plan by\n`;
            feedback += `${excessUsage.toFixed(1)} GB.\n`;
            feedback += `To stay below your data plan, use no more than ${maxDailyUsageToStayWithinPlan.toFixed(2)} GB/day.`;
        } else {
            feedback += `You are within your data plan. You can afford to use up to ${maxDailyUsageToStayWithinPlan.toFixed(2)} GB/day.`;
        }

        return feedback;
    }
}

// Example usage:
const planLimit = 100; // GB
const currentDay = 15;
const totalUsage = 50; // GB

const feedback = dataUsageFeedback(planLimit, currentDay, totalUsage);
console.log(feedback);
*/

function dataPlan(planLimit, day, usage) {
    const daysRemaining = 30 - day;
    const dataRemaining = planLimit - usage;
    const idealUsageRemaining = (dataRemaining / daysRemaining).toFixed(3);
    const perfectAvg = (planLimit / 30).toFixed(3);
    const currAvg = (usage / day).toFixed(3);
    const projectedTotalUsage = currAvg * 30;
    const totalUsageDifference = planLimit-projectedTotalUsage;

    //Plug in the variables into the paragraph
    let output = `${day} days used, ${daysRemaining} days remaining\nAverage daily use: ${perfectAvg} GB/day\n`;

    if (usage >= planLimit) {
        output += `You've used ALL of your allotted data for the month. You will be charged $700/GB of extra data used. Please keep using data, we enjoy taking your money\n If you keep up this pace, you will owe $${projectedTotalUsage * 700} by the end of the month.`;
    } else if (currAvg < perfectAvg) {
        //They are under their limit
        output += `You are UNDER your average daily use (${currAvg} GB/day); Continuing this low usage, you'll have ${totalUsageDifference} GB of data unused. To maximize your remaining data, use ${idealUsageRemaining} GB/day`;
    } else if (currAvg > perfectAvg) {
        //They are over their limit
        output += `You are EXCEEDING your average daily use (${currAvg} GB/day); Continuing this high usage, you'll exceed your data plan by ${-totalUsageDifference} GB. To stay below your data plan, use no more than ${idealUsageRemaining} GB/day.`
    } else if (perfectAvg == currAvg){
        //They are perfectly on track
        output += `You will be removed from our system. Your account has been flagged as a robot. You will be penalized and sentenced accordingly`;
    }

    return output;
}

console.log(dataPlan(100, 15, 45));
console.log(dataPlan(100, 15, 55));
console.log(dataPlan(100, 15, 105));
console.log(dataPlan(100, 15, 50));















