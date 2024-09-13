/* 
If the first day of the month is a Friday, it is likely that the month will have an Extended Weekend. That is, it could have five Fridays, five Saturdays and five Sundays.

In this Kata, you will be given a start year and an end year. Your task will be to find months that have extended weekends and return:

- The first and last month in the range that has an extended weekend
- The number of months that have extended weekends in the range, inclusive of start year and end year.
For example:

solve(2016,2020) = ["Jan","May",5]. //The months are: Jan 2016, Jul 2016, Dec 2017, Mar 2019 and May 2020
*/

const solve = (startYear, endYear) => {
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let firstExtendedMonth = null,
        lastExtendedMonth = null,
        extendedMonthCount = 0;

    for (let year = startYear; year <= endYear; year++) {
        for (let month = 0; month < 12; month++) {
            let daysInMonth = new Date(year, month + 1, 0).getDate(); // Get number of days in the month

            // We are only interested in months with 31 days
            if (daysInMonth === 31) {
                let fridayCount = 0;
                let saturdayCount = 0;
                let sundayCount = 0;

                // Loop through all days in the month
                for (let day = 1; day <= 31; day++) {
                    let currentDay = new Date(year, month, day).getDay();
                    if (currentDay === 5) fridayCount++; // 5 = Friday
                    if (currentDay === 6) saturdayCount++; // 6 = Saturday
                    if (currentDay === 0) sundayCount++; // 0 = Sunday
                }

                // Check if there are 5 Fridays, Saturdays, and Sundays
                if (
                    fridayCount === 5 &&
                    saturdayCount === 5 &&
                    sundayCount === 5
                ) {
                    extendedMonthCount++;

                    // Set firstExtendedMonth if it's the first match
                    if (!firstExtendedMonth)
                        firstExtendedMonth = monthNames[month];
                    // Update the lastExtendedMonth each time a match is found
                    lastExtendedMonth = monthNames[month];
                }
            }
        }
    }

    return [firstExtendedMonth, lastExtendedMonth, extendedMonthCount];
};
