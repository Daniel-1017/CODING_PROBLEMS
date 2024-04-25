/* 
Write a function that tells you when is the next train to Brighton you can take, given the time of day and the minutes it takes you to get to the station.

There is one train every half an hour from 05:00 to 23:30.

The current time is represented by a string in the format "hh:mm". The minutes you need to arrive at the station are also represented by a string.

The result is a string that says "The next train is at hh:mm" (see examples below).

If it's too late for the last train of the day (e.g. it's 23:50 and you need 40 minutes to get to the station), the function returns "The next train is at 05:00.".

EXAMPLES

nextTrain("17:40", "30") => "The next train is at 18:30."
nextTrain("23:20", "25") => "The next train is at 05:00."
nextTrain("03:36", "95") => "The next train is at 05:30."
*/

// MY SOLUTION
const nextTrain = (time, minutes) => {
    const [h, m] = time.split(":");

    const updatedHours =
        (parseInt(h) + Math.floor((parseInt(m) + parseInt(minutes)) / 60)) % 24;
    const updatedMinutes = (parseInt(m) + parseInt(minutes)) % 60;

    if (
        (updatedHours === 23 && updatedMinutes >= 30) ||
        (updatedHours >= 0 && updatedHours < 5)
    )
        return `The next train is at 05:00.`;

    if (updatedMinutes <= 30)
        return `The next train is at ${updatedHours
            .toString()
            .padStart(2, "0")}:30.`;
    else
        return `The next train is at ${(updatedHours + 1)
            .toString()
            .padStart(2, "0")}:00.`;
};

// SOLUTION OF OTHERS
function nextTrain(time, minutes) {
    let [hr, min] = time.match(/\d+/g).map(x => +x);
    min += +minutes;
    (hr = ((hr + min / 60) | 0) % 24), (min %= 60);
    if (min > 30) (hr = (hr + 1) % 24), (min = 0);
    else min = 30;
    if (hr < 5) (hr = 5), (min = 0);

    function zfill(s, len = 2, fill = "0") {
        return ("" + s).padStart(len, fill);
    }

    return `The next train is at ${zfill(hr)}:${zfill(min)}.`;
}
