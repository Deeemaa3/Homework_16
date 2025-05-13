/* 
    TASK 1

    Напишите функцию, которая принимает строку и делает первый символ каждого слова в строке заглавным

    Example: 
    на вход: 'это предложение из заглавных букв каждого слова'
    на выход: 'Это Предложение Из Заглавных Букв Каждого Слова'

*/


// let initialString = 'это предложение из заглавных букв каждого слова';

// function upperLetter(str) {
//     return str.split(' ').map(function(word) {
//         return word[0].toUpperCase() + word.slice(1);
//     }).join(' ');
// }

// console.log(upperWord(initialString));

/* 
    TASK 2

    Напишите функцию, которая проверяет текст на наличие плохих слов
    и изменяет каждое такое слово на выражение: 'хорошее слово'.
    на вход: 'это плохоеслово1 из заглавных плохоеслово2 каждого плохоеслово3'
    на выход: это хорошее слово из заглавных хорошее слово каждого хорошее слово'

*/


// let initialText = 'это плохоеслово1 из заглавных плохоеслово2 каждого плохоеслово3';

// let badWords = ['плохоеслово1', 'плохоеслово2', 'плохоеслово3'];

// function censure(str) {
//     badWords.forEach(word => {
//         str = str.split(word).join('хорошее слово')
//     });
//     return str;
// }

// console.log(censure(initialText));


/* 
    TASK 3

    Напишите функцию, которая проверяет длину строки, и если она больше 50ти символов,
    то обрежьте её до 50 символов и вместо последних трех, поставьте "..." (троеточие)
    
*/


// let longStr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// let limit = 30;

//  function longCheck(str) {
//     if (str.length > limit) {
//        return str.slice(0, limit - 3) + "..."
//     }
//     return str
//  }

//  console.log(longCheck(longStr));

/* 
    TASK 4

    Есть строка : 'Я так сильно люблю программировать'. 
    Необходимо вывести в консоль длину каждого слова. 
    Сделайте это задание, используя методы перебора массива.
    
*/

// let taskStr = 'Я так сильно люблю программировать';

// function eachWordLength(str) {
//    let lengths = str.split(' ');
//    lengths.forEach(function(word) {
//     console.log(word.length)
//    })
   
// }
// console.log(eachWordLength(taskStr));

// Только почему-то 88 строчка в консоли выдает undefined



/* 
    TASK 5
    У нас есть массив с языками программирования:
    [
        "php", 
        "kotlin",  
        "php", 
        "css", 
        "css",
        "Kotlin", 
        "python",
        "script", 
        "script", 
        "html", 
        "html", 
        "java", 
        "c++", 
        "Html", 
        "Ruby"
    ];
    Напишите функцию, которая возвращает массив, в котором удалены повторяющиеся элементы из массива.
    "kotlin" и "Kotlin" - это одинаковые языки, регистр не имеет значения.
    
*/

// const task =     [
//     "php", 
//     "kotlin",  
//     "php", 
//     "css", 
//     "css",
//     "Kotlin", 
//     "python",
//     "script", 
//     "script", 
//     "html", 
//     "html", 
//     "java", 
//     "c++", 
//     "Html", 
//     "Ruby"
// ];

// function removeDuplicates(arr) {
//     return [...new Set(arr.map(function(item) {
//         return item.toLowerCase();
//     }))].map(function(item) {
//         return arr.find(function(el) {
//             return el.toLowerCase() === item;
//         })
//     })
// }

// console.log(removeDuplicates(task))

// или 

// function removeDuplicates(arr) {
//     const sum = new Map();
//     arr.forEach(function(item) {
//         sum.set(item.toLowerCase(), item)
//     });

//     return Array.from(sum.values());
// }
// console.log(removeDuplicates(task))


/* 

    TASK 6
    Напишите функцию, которая принимает первым аргументов начало диапазона, а вторым - конец диапазона
    и возвращает массив високосных лет в заданном диапазоне.
    Example: getLeapYears(2000, 2018) //[2000,2004,2008,2012,2016] 

*/

// function getLeapYears(start, end) {
//     var sum = [];

//     for (var year = start; year <= end; year++) {
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             sum.push(year);
//         }
//     }

//     return sum;
// }

// console.log(getLeapYears(1000,1020))

/* 
    TASK 7

    Напишите функцию, которая возвращает массив элементов,
    представляющих собой сумму соответствующих элементов заданных массивов.
    То есть, первый элемент первого массива 
    должен складываться с первым элементом второго массива, второй со вторым, и так далее.

    Example:
    [37, 23, 43, 34, 55];
    [40, 533, 601];

    result: [77, 556, 644, 34, 55]

*/

// let firstArr = [37, 23, 43, 34, 55];

// let secondArr = [40, 533, 601];

// function sumArrItems(arr1, arr2) {
//     let result = [];

//     let maxArrLength = Math.max(arr1.length, arr2.length);

//     for (let i = 0; i < maxArrLength; i++) {
//        let sum1 = arr1[i] || 0;
//        let sum2 = arr2[i] || 0;

//        result.push(sum1 + sum2);
//     }
//     return result;
// }

// console.log(sumArrItems(firstArr, secondArr));







/* 
    ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ (ДЕЛАТЬ НЕОБЯЗАТЕЛЬНО)
    TASK 8
    Напишите функцию, которая раскрывает вложенный массив любой глубины. 
    На выходе мы должны получить массив. Используйте метод reduce.

    Example:
    [333, [222,[444,[985]]]] // [333, 222, 444, 985] 
    [298, [855], [22, [[89]]],[10,69]] //  [298, 855, 22, 89, 10, 69]
    
*/

// let array1 = [333, [222,[444,[985]]]]

// function nestedArr(arr) {
//     return arr.reduce(function(sum, item) {
//         if (Array.isArray(item)) {
//             return sum.concat(nestedArr(item));
//         } else {
//             return sum.concat(item);
//         }
//     }) 
// }
// console.log(nestedArr(array1))
// почему-то reduce не работает, сдался)