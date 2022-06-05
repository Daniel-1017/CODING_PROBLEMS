function dutyFree(normPrice, discount, hol) {
  return ~~(hol / ((normPrice * discount) / hol));
}
