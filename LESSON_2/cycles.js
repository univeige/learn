'use strict';



// (num == 50) ? console.log("Верно!") : console.log("Неверно!");

switch (num) {
    case 50:
        console.log("Совпало!");
        break;
    case num < 1100:
        console.log("Не попал!");
        break;
    default:
        console.log("Неизвестная ошибка!");
        break;
};

if (num < 1100) {
    console.log("Таки меньше!");
} else {
    console.log("Fuck!!!");
};

var num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++){
    if (i == 6) {
        continue;
    }
    console.log(i);
   
}