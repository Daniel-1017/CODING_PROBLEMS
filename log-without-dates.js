/* 
It is known that all events are recorded in chronological order and two events can't occur in the same second.

Return the minimum number of days during which the log is written.

Example:

Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
Output -> 1

Input -> ["12:12:12"]
Output -> 1

Input -> ["12:00:00", "23:59:59", "00:00:00"]
Output -> 2

Input -> []
Output -> 0
*/

function checkLogs(events) {
    if (events.length === 0) return 0;

    let days = 1,
        previousEvent = events[0];

    for (let i = 1; i < events.length; i++) {
        if (events[i] <= previousEvent) days++;
        previousEvent = events[i];
    }

    return days;
}
