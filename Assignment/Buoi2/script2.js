let fruits = [["Grape", 15],["Apple", 6],["Peer", 9]]

let i = 0
while (i<fruits.length){
    if (i === 1){
        console.log("I have " + fruits[i][i] + " " + fruits[i][i - 1]);
    
    } else if (i === 2) {
        console.log("I have " + fruits[i][i - 1] + " " + fruits[i][i - 2]);
        break
    } else{
    console.log("I have " + fruits[i][i + 1] + " " + fruits[i][i]);
    }
    i++;
}
