const months = ["_", "January","February","March","April","May","June","July", "August","September","October","November","December"];

function driver([forename, middle_name, surname, date_of_birth, gender]) {
    const [day, month, year] = date_of_birth.split("-")

    const SURNAME = surname.slice(0, 5).toUpperCase().padEnd(5, "9")
    const DECADE = year[year.length - 2]
    const MONTH_OF_BIRTH = months.indexOf(months.filter(m => m.includes(month))[0]).toString().padStart(2, "0")
    const MONTH_OF_BIRTH_INCREMENTED = gender === "F" ? `${+MONTH_OF_BIRTH[0] + 5}${MONTH_OF_BIRTH[1]}` : MONTH_OF_BIRTH
    const DATE = day
    const YEAR = year[year.length - 1]
    const FIRST_MID_INITIALS = `${forename[0]}${middle_name ? middle_name[0] : "9"}`
    const NINE = "9"
    const AA = "AA"

    const licence = `${SURNAME}${DECADE}${MONTH_OF_BIRTH_INCREMENTED}${DATE}${YEAR}${FIRST_MID_INITIALS}${NINE}${AA}`

    return licence
}