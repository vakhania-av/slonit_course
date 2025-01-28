// Мини-игра "Секретное число"
function predictRandomNumber() {
  const HINTS = ["Меньше", "Больше", "Угадал"];

  let min = 0, 
      max = 100;
  
  let attemps = 0, 
      found = false, 
      middle;
  
  // Искомое число
	const searchedValue = Math.floor((Math.random() * 100) + 1);
  
  console.log("Компьютер 1 загадал число: " + searchedValue + ".");
  
  while (!found && min <= max) {
  	attemps += 1;
  	middle = Math.floor((min + max) / 2);
    
    console.log("Компьютер 2: Пробую число " + middle);
    
    // Если значение найдено с первого раза
    if (middle === searchedValue) {
    	found = true;
      console.info("Компьютер 1: " + HINTS[2] + "!\n Искомое число: " + searchedValue + ".\n Количество попыток: " + attemps);
      
      return;
    } 
    
    if (middle > searchedValue) { // Меньше
    	console.log("Компьютер 1: " + HINTS[0]);
      max = middle - 1;
    } else { // Больше
    	console.log("Компьютер 1: " + HINTS[1]);
    	min = middle + 1;
    }
  }
}

predictRandomNumber();