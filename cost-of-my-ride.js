/* 
This Kata is intended as a small challenge for my students

Create a function, called insurance(), that computes the cost of renting a car. The function takes 3 arguments: the age of the renter, the size of the car, and the number days for the rental. The function should return an integer number of the calculated total cost of the rental.

Age (integer) : There is a daily charge of $10 if the driver is under 25

Car Size (string) : There may be an additional daily charge based on the car size:

car size surcharge "economy" $0 "medium" $10 "full-size" $15

Rental Days (integer) : There is a base daily charge of $50 for renting a car. Simply multiply the one day cost by the number of days the car is rented in order to get the full cost.

Note: Negative rental days should return 0 cost. Any other car size NOT listed should come with a same surcharge as the "full-size", $15.

insurance(18, "medium", 7); // => 490
insurance(30,"full-size",30); // => 1950
insurance(21,"economy",-10); // => 0
insurance(42,"my custom car",7); // => 455
*/

const insurance = (age, size, numOfDays) => {
  // If rental days < 0 return 0
  if (numOfDays < 0) return 0

  let costOfRental = 0

  const DAILY_CHARGE_FOR_UNDER_25 = 10
  const CAR_SIZES = { economy: 0, medium: 10, "full-size": 15 }
  const BASE_DAILY_CHARGE = 50

  // If age under 25 daily charge of 10$
  if (age < 25) costOfRental += DAILY_CHARGE_FOR_UNDER_25 * numOfDays

  // Check if car size exists; if true, multiply car size value by rental days,
  // otherwise, multiply by 'full-size' value
  if (CAR_SIZES[size] != null) costOfRental += CAR_SIZES[size] * numOfDays
  else costOfRental += CAR_SIZES["full-size"] * numOfDays

  // Daily charge of 50$
  costOfRental += BASE_DAILY_CHARGE * numOfDays

  return costOfRental
}