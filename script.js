let increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
let count = document.getElementById("c");
let value = 0;
increment.addEventListener("click", function () {
  value += 1;
  count.textContent = value;
});
decrement.addEventListener("click", function () {
  if (value === 0) {
    count.textContent = 0;
    alert("Can't reduce number less then 0");
  } else {
    value -= 1;
    count.textContent = value;
  }
});
reset.addEventListener("click", function () {
  value = 0;
  count.textContent = value;
});
