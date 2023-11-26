function flickSwitch(arr) {
  let bool = true;
  return arr.map(item => {
    if (item === 'flick') bool = !bool;
    return bool;
  });
}
