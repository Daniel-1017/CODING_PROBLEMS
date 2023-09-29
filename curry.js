// Infinite currying
const add = a => b => !b ? a : add(a + b)