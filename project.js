
let countEL = document.getElementById("count-el")
let countEL2 = document.getElementById("count-el2")
let count1 = 0
let count2 = 0


// console.log(saveEL)

function increase() {
    count1 +=1
    countEL.textContent = count1
}
function increase2() {
    count1 +=2
    countEL.textContent = count1
}
function increase3() {
    count1 +=3
    countEL.textContent = count1
}
function increasesideA() {
    count2 +=1
    countEL2.textContent = count2

}
function increase5() {
    count2 +=2
    countEL2.textContent = count2
}
function increase6() {
    count2 +=3
    countEL2.textContent = count2
}
function reset1() {
    countEL.textContent = 0
    count1 = 0
}
function reset2() {
    countEL2.textContent = 0
    count2 = 0
}

