// Make me slow! Calling makeMeSlow() should take at least 7 seconds.

function makeMeSlow() {
  const startTime = Date.now();

  // Simulate a delay of at least 7 seconds
  while (Date.now() - startTime < 7000) {
    // Do nothing, just wait
  }
}
