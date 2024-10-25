function multiply(x, y) {
    return x * y;
  }
  console.log(multiply(5, 10));
  
  //2
  
  function CheckAge(age) {
    if (age >= 18) {
      return "შენ ხარ სრულწლოვანი";
    } else {
      return "შენ ხარ არასრულწლოვანი";
    }
  }
  
  console.log(CheckAge(22));
  
  //3
  
  function IsEvenOrOdd(num) {
    if (num % 2 === 0) {
      return `${num} ლუწია`;
    } else {
      return `${num} კენტია`;
    }
  }
  
  console.log(IsEvenOrOdd(22));
  
  //4
  function GetDayName(dayNumber) {
    switch (dayNumber) {
      case 1:
        return "ორშაბათი";
      case 2:
        return "სამშბათი";
      case 3:
        return "ოთხშაბათი";
      case 4:
        return "ხუთშაბათი";
      case 5:
        return "პარასკევი";
      case 6:
        return "შაბათი";
      case 7:
        return "კვირა";
      default:
        return "არასწორი რიცხვი";
    }
  }
  
  console.log(GetDayName(7));
  
  //4.1
  
  function getDayName(Numb) {
    switch (Numb) {
      case 1:
        console.log("ორშაბათი");
        break;
      case 2:
        console.log("სამშაბათი");
        break;
      case 3:
        console.log("ოთხშაბათი");
        break;
      case 4:
        console.log("ხუთშაბათი");
        break;
      case 5:
        console.log("პარასკევი");
        break;
      case 1:
        console.log("შაბათი");
        break;
      case 1:
        console.log("კვირა");
        break;
  
      default:
        console.log("არასწორი რიცხვი");
        break;
    }
  }
  getDayName(1);
  
  //5
  
  function CompareNumbers(a, b) {
    if (a > b) {
      console.log(`${a} მეტია ${b}ზე`);
    } else if (b > a) {
      console.log(`${a} ნაკლებია ${b}ზე`);
    } else {
      console.log(`${a} და ${b} ტოლებია`);
    }
  }
  
  CompareNumbers(5, 7);
  
  //6
  function Calculator(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
  
      default:
        return "არასწორი ოპერატორი";
    }
  }
  console.log(Calculator(20, 10, "*"));
  
  //7
  function CelsiusToFahrenheit(celsius) {
    console.log(celsius * (9 / 5) + 32);
  }
  CelsiusToFahrenheit(20);
  
  //8
  function FindMax(a, b, c) {
    if (a > b && a > c) {
      console.log(`${a} არის უდიდესი`);
    } else if (b > a && b > c) {
      console.log(`${b} არის უდიდესი`);
    } else {
      console.log(`${c} არის უდიდესი`);
    }
  }
  FindMax(500, 100, 15);
  
  //9
  function CheckSign(num) {
    if (num > 0) {
      console.log(`${num} დადებითია`);
    } else if (num < 0) {
      console.log(`${num} უარყოფითია`);
    } else {
      console.log(`${num}-ის ტოლია`);
    }
  }
  CheckSign(10);
  
  //10
  function GetMonthName(monthNumber) {
    switch (monthNumber) {
      case 1:
        console.log("იანვარი");
        break;
      case 2:
        console.log("თებერვალი");
        break;
      case 3:
        console.log("მარტი");
        break;
      case 4:
        console.log("აპრილი");
        break;
      case 5:
        console.log("მაისი");
        break;
      case 6:
        console.log("ივნისი");
        break;
      case 7:
        console.log("ივლისი");
        break;
      case 8:
        console.log("აგვისტო");
        break;
      case 9:
        console.log("სექტემბერი");
        break;
      case 10:
        console.log("ოქტომბერი");
        break;
      case 11:
        console.log("ნოემბერი");
        break;
      case 12:
        console.log("დეკემბერი");
        break;
  
      default:
        console.log("არასწორი რიცხვი");
        break;
    }
  }
  GetMonthName(12);
  
  //11
  function MultiplyIfGreaterThanFive(num) {
    if (num >= 5) {
      console.log(num * 10);
    } else {
      console.log("რიცხვი მცირეა");
    }
  }
  MultiplyIfGreaterThanFive(10);
  
  //12
  function GetSeason(seasonNumber) {
    switch (seasonNumber) {
      case 1:
        console.log("გაზაფხული");
  
        break;
      case 2:
        console.log("ზაფხული");
  
        break;
      case 3:
        console.log("შემოდგომა");
  
        break;
      case 4:
        console.log("ზამთარი");
  
        break;
  
      default:
        console.log("არასწორი რიცხვია");
  
        break;
    }
  }
  GetSeason(4);
  
  //13
  function CheckPrice(price) {
    if (price >= 100) {
      console.log("ფასი მაღალია");
    } else {
      console.log("ფასი ნორმალურია");
    }
  }
  CheckPrice(100);
  
  //14
  function calculator(a, b, operator) {
    switch (true) {
      case operator === "+":
        console.log(a + b);
        break;
      case operator === "-":
        console.log(a - b);
        break;
      case operator === "*":
        console.log(a * b);
        break;
      case operator === "/":
        console.log(a / b);
        break;
  
      default:
        console.log("არასწორი ოპერატორი");
  
        break;
    }
  }
  calculator(10, 18, "*");
  
  //15
  function PositiveSum(a, b) {
    if (a > 0 && b > 0) {
      console.log(a + b);
    } else {
      console.log("მინიმუმ ერთი რიცხვი უარყოფითია");
    }
  }
  
  PositiveSum(10, 11);