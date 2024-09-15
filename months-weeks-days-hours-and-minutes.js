/* 
Given a number of minutes, translate it into a readible human timestamp.

For example: 100 minutes equals "1 hour 40 minutes" And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"

Given that each month has 28 days.

The largest amount of minutes you'll have to test for is under a year so you'll have to translate it to Months, Weeks, Days, Hours and Minutes.
*/

// MY SOLUTION
const MINUTES_IN_28_DAYS = 40320,
    MINUTES_IN_7_DAYS = MINUTES_IN_28_DAYS / 4,
    MINUTES_IN_1_DAY = MINUTES_IN_7_DAYS / 7;

const formatPlural = (word, value) =>
    value ? (value > 1 ? `${value} ${word + "s"} ` : `${value} ${word} `) : "";

function displayValue(value) {
    let months, weeks, days, hours, minutes;

    if (value / MINUTES_IN_28_DAYS >= 1) {
        months = parseInt(value / MINUTES_IN_28_DAYS);
        value -= months * MINUTES_IN_28_DAYS;
    }

    if (value / MINUTES_IN_7_DAYS >= 1) {
        weeks = parseInt(value / MINUTES_IN_7_DAYS);
        value -= weeks * MINUTES_IN_7_DAYS;
    }

    if (value / MINUTES_IN_1_DAY >= 1) {
        days = parseInt(value / MINUTES_IN_1_DAY);
        value -= days * MINUTES_IN_1_DAY;
    }

    if (value / 60 >= 1) {
        hours = parseInt(value / 60);
        value -= hours * 60;
    }

    if (value < 60) minutes = value;
    else if (value / 60 >= 1) {
        minutes = parseInt(value / 60);
        value -= minutes * 60;
    }

    return `${formatPlural("month", months)}${formatPlural(
        "week",
        weeks
    )}${formatPlural("day", days)}${formatPlural("hour", hours)}${formatPlural(
        "minute",
        minutes
    )}`.trim();
}

// SOLUTION OF OTHERS
function Quantum(name, durationInMinutes, maxAmount) {
    this.name = name;
    this.duration = durationInMinutes;
    this.max = maxAmount;

    this.amount = function (minutes) {
        t = Math.floor(minutes / this.duration) % this.max;
        return t ? `${t} ${this.name}${t > 1 ? "s" : ""}` : "";
    };
}

const intervals = {
    month: new Quantum("month", 40320, Infinity),
    week: new Quantum("week", 10080, 4),
    day: new Quantum("day", 1440, 7),
    hour: new Quantum("hour", 60, 24),
    minute: new Quantum("minute", 1, 60),
};

function displayValue(value) {
    return Object.keys(intervals)
        .map(x => intervals[x].amount(value))
        .filter(Boolean)
        .join(" ");
}
