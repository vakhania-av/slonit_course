// Задание №11 - Работа со строками

// Часть 1
function correctUserInput(str) {
  if (!str || typeof str !== "string") {
    return;
  }

  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

// Часть 2
function truncate(str, maxlength = 40) {
  if (!str || typeof str !== "string") {
    return;
  }

  const markers = " ,.!?:;";

  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1);

    for (let i = 0; i < markers.length; i++) {
      const index = str.lastIndexOf(markers[i]);

      if (!!index) {
        str = str.slice(0, index);

        if (index + 1 < maxlength) {
          str = str.slice(0, index) + "…";
          break;
        }
      }
    }
  }

  return str;
}

// Часть 3
function checkForSubstring(str1, str2) {
  if ((!str1 || !str2) || (typeof str1 !== "string" || typeof str2 !== "string")) {
    return false;
  }

  if (str1.includes(str2) || str2.includes(str1)) {
    return true;
  }

  return false;
}

console.log(correctUserInput("привет из Москвы!"));
console.log(truncate("Усложняем задание тем, что строка не должна обрезаться посредине слова."));
console.log(checkForSubstring("Проверка настоящего удостоверения", "верка"));
console.log(checkForSubstring("вере", "удостоверения"));
console.log(checkForSubstring("вера", "удостоверения"));
console.log(checkForSubstring("Проверка настоящего удостоверения", "стоящего"));