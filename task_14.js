// Задание №14 - Стрелочные функции и углубление в массивы
function myFilter(array, callback) {
  if (!array.length) {
		return [];
	}

  if (!callback) {
    throw new Error("TypeError: missing argument 0 when calling function myFilter");
  }

	const result = [];

	for (let i = 0; i <= array.length; i++) {
		if (callback(array[i])) {
			result.push(array[i]);
		};
	}

	return result;
}

const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, function(num) { // Не стрелочная функция, для примера
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = myFilter(numbers, function(num) { // Не стрелочная функция, для примера
  return num > 3;
});

console.log(greaterThanThree); // [4, 5]
