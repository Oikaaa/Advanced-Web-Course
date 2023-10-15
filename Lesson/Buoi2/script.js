//Bai 1

let i = 0;
while (i <= 10){
    if(i % 2 === 0){
        console.log(i)
    }
    i++;
}

console.log("-------------------------------")

//array

let numbers = [123, 34, 21, 32456 , 2345]
let a = 0;

while (a < numbers.length){
    if(numbers[a] < 100){
        console.log(numbers[a])
        break
    }
    a++
}

console.log("-------------------------------")

let number = [123, 34, 21, 32456 , 2345]

let b = 1

let currentMax = number[0]

while (b<number.length){
    if(number[b]>currentMax){
        currentMax = number[b]
    }else{
        console.log(currentMax)
    }
    b++
}