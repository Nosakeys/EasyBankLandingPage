const data = "29-03-2023T12:25:25:54"
let date = document.getElementById("mydate");
let time = document.getElementById("time");

const myDate = data.split('T')[0]
const myTime = data.split('T')[1]

date.innerHTML = myDate.replaceAll("-", "/")
time.innerHTML =myTime

