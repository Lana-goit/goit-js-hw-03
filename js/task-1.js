// slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL - адрес.

// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
//     Задача 1. Генератор slug
//      Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.

function slugify(title) {
  let newTitle = title.split(" ");
  newTitle = newTitle.join("-");
  return newTitle.toLowerCase();
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
