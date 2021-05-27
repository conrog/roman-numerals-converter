let tenths = {
    0 : "",
    1 : "I",
    2 : "II",
    3 : "III",
    4 : "IV",
    5 : "V",
    6 : "VI",
    7 : "VII",
    8 : "VIII",
    9 : "IX"
  };
  
  let hundreths = {
    0 : "",
    1 : "X",
    2 : "XX",
    3 : "XXX",
    4 : "XL",
    5 : "L",
    6 : "LX",
    7 : "LXX",
    8 : "LXXX",
    9 : "XC"
  };
  
  let thousands = {
    0 : "",
    1 : "C",
    2 : "CC",
    3 : "CCC",
    4 : "CD",
    5 : "D",
    6 : "DC",
    7 : "DCC",
    8 : "DCCC",
    9 : "CM"
  };
  
  let yeah = {
    0 : "",
    1 : "M",
    2 : "MM",
    3 : "MMM"
  };
  
  function convertToRoman(num) {
    num = num.toString().split("");
    switch(num.length){
      case 1:
        num[0] = tenths[num[0]];
        break;
      case 2:
        num[0] = hundreths[num[0]];
        num[1] = tenths[num[1]];
        break;
      case 3:
        num[0] = thousands[num[0]];
        num[1] = hundreths[num[1]];
        num[2] = tenths[num[2]];
        break;
      case 4:
        num[0] = yeah[num[0]];
        num[1] = thousands[num[1]];
        num[2] = hundreths[num[2]];
        num[3] = tenths[num[3]];
        break;
    }
  
    return num.join("");
  }