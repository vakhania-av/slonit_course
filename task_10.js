// Повторяем объекты: первое задание
function sumAllObjNumberFields(obj) {
  if (!obj || obj instanceof Object === "false") {
    return;
  }

  let result = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "number") {
        result += obj[key];
      }
    }
  }

  return result;
}

// Повторяем объекты: задание со звёздочкой
function getFieldTitlesOrderedByDesc(obj) {
  if (!obj || obj instanceof Object === "false") {
    return;
  }

  return Object.keys(obj)
    .filter(key => typeof obj[key] === "number").sort()
    .sort((a, b) => obj[a] - obj[b]);
}

// Тестирование
const test = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };

console.log(sumAllObjNumberFields(test));
console.log(getFieldTitlesOrderedByDesc(test));

