// console.log(process.argv)

array = process.argv;

var index = 2;

var sum = 0;

while(index < array.length) {
sum += parseInt(array[index]);
index += 1

}

console.log(sum)