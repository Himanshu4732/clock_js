let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let hrs_hand = document.querySelector(".hour_hand");
let min_hand = document.querySelector(".min_hand");
let sec_hand = document.querySelector(".sec_hand");


function gettingTime(){
  const time = new Date();
  hrs.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours();
  min.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  sec.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();

  let hrs_degree = 30 * (time.getHours() % 12) + 0.5 * time.getMinutes();
  let min_degree = 6 * time.getMinutes() + 0.1 * time.getSeconds();
  let sec_degree = 6 * time.getSeconds();



  hrs_hand.style.transform = `rotate(${hrs_degree}deg)`;
  min_hand.style.transform = `rotate(${min_degree}deg)`;
  sec_hand.style.transform = `rotate(${sec_degree}deg)`;
}

gettingTime();
setInterval(() => {
  gettingTime()
}, 1000);
