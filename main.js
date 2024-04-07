//! 1.
// Создать функцию, которая будет принимать 3 числа в качестве аргументов, функция должна возвращать сумму первых двух чисел разделённую на третье число(использовать function declaration, а также реализовать проверку на то, что третье число не является нулем, если это ноль, то просто возвратить результат сложения первого и второго числа)
function task1(num1, num2, num3) {
  let sum = 0;
  if (num3 === 0) {
    sum = num1 + num2;
  } else {
    sum = (num1 + num2) / num3;
  }
  return sum;
}
console.log(task1(10, 10, 2));
//! 2.
// Создать функцию, которая принимает в качестве аргумента массив со строками и в каком регистре нужно вернуть данные, строки могут быть записаны в любом регистре, задача: на основе выбора регистра, возвращать либо массив со строками в верхнем регистре, либо в нижнем регистре
function task2(arr, arr1) {
  let newarr = [];
  for (let elem of arr) {
    if (arr1) {
      newarr.push(elem.toUpperCase());
    } else {
      newarr.push(elem.toLowerCase());
    }
  }
  return newarr;
}
console.log(task2(["Hello", "World"]));
//! 3.
// Создать калькулятор используя функции, должны быть доступны операции(+, -, /, *), также должна быть функция-менеджер, которая будет принимать 2 числа и операцию, а затем вызывать нужную функцию и возвращать результат
function task3(num1, num2, res) {
  let sum = 0;
  if (res == "+") {
    return (sum = num1 + num2);
  } else if (res == "-") {
    return (sum = num1 - num2);
  } else if (res == "*") {
    return (sum = num1 * num2);
  } else if (res == "/") {
    return (sum = num1 / num2);
  }
}
console.log(task3(15, 5, "/"));
//! 4.
// Дан массив с объектами
// задача, создать функцию, которая будет рассылать сообщения пользователям, сообщая о акции в магазине компьютерной техники, отправлять сообщения нужно только тем людям, которые тем или иным образом относятся к IT-сфере
let users = [
  { name: "Jack", age: 35, work: "IT-backend developer" },
  { name: "Helen", age: 35, work: "Nurse" },
  { name: "Bob", age: 35, work: "Driver" },
  { name: "Jessica", age: 35, work: "IT-frontend developer" },
  { name: "Hel'ga", age: 35, work: "IT-HR" },
];
function task4(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].work.includes("IT")) {
      console.log(
        `Уважаемый ${users[i].name}, приглашаем вас на акцию в магазине компьютерной техники!`
      );
    }
  }
}
task4(users);

//! 5.
// Создать функцию, которая будет рассчитывать расход топлива автомобиля, будет принимать 2 аргумента 1-й сколько всего километров проехали, второй сколько понадобилось топлива на это, затем функция должна рассчитать сколько ушло топлива на 100 км и вернуть результат вида: 'На 100км было расходовано 10л горючего'
function task5(km, toplivo) {
  let sum = (100 / km) * toplivo;
  return `На 100км было расходовано ${sum}л горючего`;
}
console.log(task5(100, 10));
//! 6.
// Расчет премии сотрудникам, дан массив с объектами
// salary- это заработная плата в месяц, overTime- количество часов, которое сотрудник взял сверхурочно, задача: создать функцию, которая будет добавлять к основной зарплате сверхурочное время(1час=200$), функция должна принимать массив с объектами и возвращать также массив, но уже с измененными данными пример: [{name: 'Jack', salary: 10000, overTime: 4}] -> [{name: 'Jack', salary: 10800}]
let employees = [
  { name: "Jack", salary: 10000, overTime: 4 },
  { name: "Tom", salary: 15000, overTime: 3 },
  { name: "Jessica", salary: 20000, overTime: 9 },
  { name: "Helen", salary: 25000, overTime: 2 },
  { name: "Peter", salary: 30000, overTime: 7 },
];
function task6(employees) {
  let hour = 200;
  let sum = employees.map((res) => {
    let overtime = res.overTime * hour;
    let totalSalary = res.salary + overtime;
    return { name: res.name, salary: totalSalary };
  });
  return sum;
}
let sum = task6(employees);
console.log(sum);

//! 7.
// Создать функцию, которая в качестве аргумента будет принимать массив со строками и числами, задача, отсортировать числа в отдельный массив, а строки в отдельный и распечатать оба массива
function task7(res) {
  let str = [];
  let num = [];
  for (let i of res) {
    if (typeof i == "number") {
      num.push(i);
    } else if (typeof i == "string") {
      str.push(i);
    }
  }
  return [num, str];
}
let res = task7([1, "TiMa", "tima", 2, 3, 4, 5, "TIMA"]);
console.log(res);

//! 8.
// Дан массив
// задача, создать фуункцию, которая будет в качестве аргумента принимать массив такого вида как указан выше, и будет возвращать отсортированный массив(сортировать по убыванию оценок, используйте sort())
let students = [
  { student: "Jack", marks: 43 },
  { student: "Tom", marks: 92 },
  { student: "Helen", marks: 85 },
  { student: "Peter", marks: 58 },
  { student: "Jessica", marks: 78 },
];
function task8(students) {
  let students2 = students.sort((a, b) => b.marks - a.marks);
  return students2;
}
console.log(task8(students));
//! 9. EXTRA
// Дан пустой массив, необходимо использовать его в качестве базы данных для объектов типа {title: 'str', price: num, category: 'str'}, задача реализовать полный CRUD(create(должна быть возможность создавать данные, в нашем случае объекты), read(возможность получения/чтения данных), update(изменение данных(можно использовать индекс)), delete(удаление данных(можно использовать индекс))), за каждое действие должна отвечать отдельная функция
//! ---СЛОЖНО---
