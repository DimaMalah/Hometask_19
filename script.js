



// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран
// строку ‘a+b, c+d’.
{
	const arr = ["a", "b", "c", "d"];
	const a = `${arr[0]}+${arr[1]} ,${arr[2]}+${arr[3]}`
	// alert(a)
	console.log("-------1--------");
	console.log(a);
}
// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй,
// а третий элемент на четвертый. Результаты сложите, присвойте переменной result.
//  Выведите на экран значение этой переменной
{
	const arr = [2, 5, 3, 9];
	const result = `${arr[0]}` * `${arr[1]}` + `${arr[2]}` * `${arr[3]}`;
	console.log("-------2--------");
	// alert(result)
	console.log(result);
}
// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
{
	const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
	function find(array, x) {
		if (array.includes(x)) return x;
	}
	// alert(arr[1][0])
	console.log("-------3--------");
	console.log(arr[1][0]);
};
// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его 
// помощью слово ‘jQuery’.
{
	const obj = { js: ["jQuery", "Angular"], php: "hello", css: "world" };
	console.log("-------4--------");
	// alert(obj.js[0])
	console.log(obj.js[0]);
}
// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’,
//  в третий ‘xxx’ и так далее.
{
	const arr = [];
	arr[0] = "x";
	arr[1] = "xx";
	arr[2] = "xxx";
	// alert(arr);
	console.log("-------5--------");
	console.log(arr);
}
// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
{
	const arr = [];
	arr[0] = 1;
	arr[1] = 22;
	arr[2] = 333;
	// alert(arr);
	console.log("-------6--------");
	console.log(arr);
}
// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
// Первым параметром функция принимает значение, которым заполнять массив, а вторым — 
// сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив
//  [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
{
	function arrayFill(x, y) {
		const arr = [];
		for (let i = 0; i < y; i++) {
			arr.push(x);
		}
		return arr
	}
	const a = arrayFill("x", 5)
	console.log("-------7--------");
	console.log(a);
}
// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, 
// чтобы в сумме получилось больше 10-ти.
{
	const a = [9, 1, 1, 9, 1, 1, 1, 1, 111];
	function sum(arr) {
		let sum = 0;
		let j = 1;
		for (let i = 0; i < arr.length; i++) {
			(sum += arr[i]) <= 10 ? j++ : j
		}
		return j
	};
	console.log("-------8--------");
	console.log(sum(a));
}
// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном 
// порядке.
{
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log("-------9--------");
	console.log(arr.sort((a, b) => b - a));
}
// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму
//  элементов этого массива. Массив, конечно же, может быть произвольным.
{
	const a = [[1, 2, 3], [4, 5], [6]];
	function checkEl(el) {
		if (Array.isArray(el)) {
			return el.reduce((acc, item) => acc += item)
		} else {
			return el
		}
	};
	const b = a.reduce(function (acc, item) {
		return acc = checkEl(acc) + checkEl(item)
	})
	console.log("-------10--------");
	console.log(b);
}
// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. 
{
	const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
	function checkEl(el) {
		if (Array.isArray(el)) {
			return el.reduce((acc, item) => {
				return acc = checkEl(acc) + checkEl(item)
			})
		} else {
			return el
		}
	}
	const b = arr.reduce(function (acc, item) {
		return acc = checkEl(acc) + checkEl(item)
	})
	console.log("-------11--------");
	console.log(b);
}



