// Задание №6 - Мини-игра "Секретное число"
let start = 0, 
    end = 100, 
    middle, 
    isFound = false, 
    attempts = 0;

function printByFirstPc(phrase) {
  console.log(`Компьютер 1: ${phrase}`);
  findNumberBySecondPc(phrase);
}

function printBySecondPc(range) {
  console.log(`Компьютер 2: Попытка № ${attempts}`);
  
  if (!!range) {
  	console.log(`Компьютер 2: Диапазон ${range}`);
  }
  
  console.log(`Компьютер 2: Пробую число ${middle}`);
}

function findNumberBySecondPc(phrase) {
  switch(phrase) {
    case "Меньше":
      end = middle - 1;
      middle = Math.floor((start + end) / 2);
      break;
    case "Больше":
      start = middle + 1;
      middle = Math.floor((start + end) / 2);
      break;
    default:
      middle = Math.floor((start + end) / 2);
  }
  
  const range = Math.abs(end - start);
  
  attempts++;
  printBySecondPc(range);
}

function init() {
  // Случайное число
  const searchedValue = Math.floor((Math.random() * 100) + 1);
 
  console.log(`Компьютер 1 загадал число: ${searchedValue}`);
  findNumberBySecondPc(null);
  
  while (!isFound) {
      if (middle === searchedValue) {
      isFound = true;
      console.log(`Компьютер 1: Угадал!\n Количество попыток: ${attempts}\n Результат: ${searchedValue}`);
        
      return;
    }
    
    if (middle > searchedValue) {
    	printByFirstPc("Меньше");
    } else {
    	printByFirstPc("Больше");
    }
  }
}

init();
