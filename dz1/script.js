
const month = prompt("Введите месяц вашего рождения:");
const day = prompt("Введите день вашего рождения:");


if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
  console.log(" Пожалуйста, введите корректный месяц и день.");
} else {

  const parsedMonth = parseInt(month);
  const parsedDay = parseInt(day);


  let zodiacSign = "";

  if ((parsedMonth === 3 && parsedDay >= 21) || (parsedMonth === 4 && parsedDay <= 19)) {
    zodiacSign = "Овен";
  } else if ((parsedMonth === 4 && parsedDay >= 20) || (parsedMonth === 5 && parsedDay <= 20)) {
    zodiacSign = "Телец";
  } else if ((parsedMonth === 5 && parsedDay >= 21) || (parsedMonth === 6 && parsedDay <= 20)) {
    zodiacSign = "Близнецы";
  } else if ((parsedMonth === 6 && parsedDay >= 21) || (parsedMonth === 7 && parsedDay <= 22)) {
    zodiacSign = "Рак";
  } else if ((parsedMonth === 7 && parsedDay >= 23) || (parsedMonth === 8 && parsedDay <= 22)) {
    zodiacSign = "Лев";
  } else if ((parsedMonth === 8 && parsedDay >= 23) || (parsedMonth === 9 && parsedDay <= 22)) {
    zodiacSign = "Дева";
  } else if ((parsedMonth === 9 && parsedDay >= 23) || (parsedMonth === 10 && parsedDay <= 22)) {
    zodiacSign = "Весы";
  } else if ((parsedMonth === 10 && parsedDay >= 23) || (parsedMonth === 11 && parsedDay <= 21)) {
    zodiacSign = "Скорпион";
  } else if ((parsedMonth === 11 && parsedDay >= 22) || (parsedMonth === 12 && parsedDay <= 21)) {
    zodiacSign = "Стрелец";
  } else if ((parsedMonth === 12 && parsedDay >= 22) || (parsedMonth === 1 && parsedDay <= 19)) {
    zodiacSign = "Козерог";
  } else if ((parsedMonth === 1 && parsedDay >= 20) || (parsedMonth === 2 && parsedDay <= 18)) {
    zodiacSign = "Водолей";
  } else if ((parsedMonth === 2 && parsedDay >= 19) || (parsedMonth === 3 && parsedDay <= 20)) {
    zodiacSign = "Рыбы";
  }


  console.log(`Ваш знак зодиака - ${zodiacSign}.`);
}
