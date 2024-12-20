//1. You have a thermometer that measures room temperature. Write an if-elseif condition to determine:

//If the temperature is below 18°C, print "It's too cold, turn on the heater."
//If the temperature is between 18°C and 25°C, print "The temperature is comfortable."
//If the temperature is above 25°C, print "It's too hot, turn on the fan."
let temp = 15

if (temp < 18) {
    console.log("Its to cold")
} else if (temp <= 25) {
    console.log("The temprature is comfortable")
} else {
    console.log("Its to hot")
}


//2. A student gets a score out of 100 in an exam. Write an if-elseif condition to determine:

//If the score is 90 or above, print "Grade A."
///If the score is between 75 and 89, print "Grade B."
//If the score is between 50 and 74, print "Grade C."
//If the score is below 50, print "Grade D."
let score = 45
if (score >= 90) {
    console.log("Grade A")
}
else if (score > 75) {
    console.log("Grade B")
}
else if (score > 50) {
    console.log("Grade C")
}
else if (score < 50) {
    console.log("Grade D")
}

//3. You are driving and approach a traffic signal. Write an if-elseif condition to determine:

//If the light is "Red", print "Stop."
//If the light is "Yellow", print "Slow down."
//If the light is "Green", print "Go."

let light = "red";

if (light === "red") {
    console.log("Stop");
} else if (light === "yellow") {
    console.log("Slow Down first");
} else if (light === "yellow") {
    console.log("Slow Down second");
} else if (light === "green") {
    console.log("Go");
} else {
    console.log("Invalid color ");
}

// 4. A store is giving discounts based on the total bill amount. Write an if-elseif condition to determine:

//If the bill is less than $50, no discount.
//If the bill is between $50 and $100, give a 10% discount.
//If the bill is more than $100, give a 20% discount.

let bill = 900
if (bill < 50) {
    console.log("No Discount")
}
else if (bill >= 100) {
    console.log(" 10% Discount")
}
else if (bill > 100) {
    console.log("20% Discount")
}


//5. You have different tasks to do based on the time of day. Write an if-elseif condition to determine:

//If the time is before 7 AM, print "It's too early, sleep a bit more."
//If the time is between 7 AM and 10 AM, print "Time for breakfast and morning exercise."
//If the time is between 10 AM and 6 PM, print "Time to work or study."
//If the time is after 6 PM, print "Relax for the day."
let time = "7AM";
if (time < "7AM") {
    console.log("Its too early")
}
else if (time >= "10AM") {
    console.log("Time for breakfast and morning exercise")
}
else if (time >= "6PM") {
    console.log("Time to work or study.")
}
else if (time > "6PM") {
    console.log("Relax for the day.")
}
//6. Find the Lowest and Highest Temperatures
//You have recorded the temperature for a day: temperature1 = 32°C. Initialize lowestTemperature to Infinity
//  and highestTemperature to -Infinity. Write conditions to:
//Update lowestTemperature if temperature1 is lower than the current lowestTemperature.
//Update highestTemperature if temperature1 is higher than the current highestTemperature.
//Print "Lowest temperature: and "Highest temperature: " in innerHTML