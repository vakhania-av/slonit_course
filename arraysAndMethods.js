// Задание № 9 - Массивы и методы по работе с ними
//mySlice(arr, [start], [end]);
function mySlice(arr, start = 0, end) {
  if (!arr.length || !Array.isArray(arr) || (start < 0 && isFinite(end))) {
    return [];
  }

  const result = [];
  const arrLength = (end && end <= arr.length) ? end : arr.length;

  start = (start < 0) ? arrLength - Math.abs(start) : start;

  for (let i = start; i < arrLength; i++) {
    result.push(arr[i]);
  }

  return result;
}

// myIndexOf(arr, item, from)
function myIndexOf(arr, item, from = 0) {
  if (!arr.length || !Array.isArray(arr) || Math.abs(from) > arr.length) {
    return -1;
  }

  let offset = from;

  if (from < 0) {
    offset = arr.length - Math.abs(from);
  }

  const index = arr.slice(from).findIndex(el => el === item);

  if (!~index) {
    return - 1;
  }

  return index + offset
}

// myIncludes(arr, item, from)
function myIncludes(arr, item, from) {
  if (!arr.length || !Array.isArray(arr) || Math.abs(from) > arr.length) {
    return false;
  }

  let offset = from;

  if (from < 0) {
    offset = arr.length - Math.abs(from);
  }

  return arr.slice(offset).some(el => el === item);
}

console.log(mySlice(["a", "b", "c", "d", "e", "f"], 2, 4));

console.log(myIndexOf(['Яблоко', 'Апельсин', 'Яблоко', 'Груша', 'Лимон', 'Апельсин'], 'Груша', 2));
console.log(myIndexOf(['Яблоко', 'Апельсин', 'Яблоко', 'Груша', 'Лимон', 'Апельсин'], 'Апельсин', -4));

console.log(myIncludes(['Яблоко', 'Апельсин', 'Яблоко', 'Груша', 'Лимон', 'Апельсин'], "Апельсин", 2));
console.log(myIncludes(['Яблоко', 'Апельсин', 'Яблоко', 'Груша', 'Лимон', 'Апельсин'], "Яблоко", -2));