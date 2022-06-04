function enough(cap, on, wait) {
  const freeSeats = cap - on;

  if (freeSeats < wait) {
    return Math.abs(wait - freeSeats);
  } else {
    return 0;
  }
}
