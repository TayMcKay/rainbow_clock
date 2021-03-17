let colors = [
    "#F8F497",
    "#FADA8F",
    "#FFCA95",
    "#F9AE9A",
    "#F7A097",
    "#F8AFB6",
    "#FB9CBC",
    "#E0AACC",
    "#CEA5CD",
    "#B2A6CD",
    "#93AACE",
    "#81BCDC",
    "#90D6F0",
    "#ACE0E8",
    "#9BD9D8",
    "#95D2BB",
    "#A1D3A0",
    "#C3DFA4",
    "#E4E996"
]

let index = 0

function changeBackgroundColor() {
    document.querySelector("body").style.backgroundColor = colors[index % colors.length]
    index++
}

function setCurrentTime() {
    let date = new Date();
    let hours = ("0" + date.getHours()).substr(-2)
    let minutes = ("0" + date.getMinutes()).substr(-2)
    let seconds = ("0" + date.getSeconds()).substr(-2)
    document.getElementById("clock").innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

setCurrentTime()

setInterval(() => {
    setCurrentTime()
    changeBackgroundColor()
}, 1000)