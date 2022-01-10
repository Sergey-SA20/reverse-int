function reverseInt(Int) {
    let str = String(Int),
        reverse = str.split("").reverse().join(""),
        newInt = Number(reverse);
    return newInt;
  }