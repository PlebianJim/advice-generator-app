async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const adviceNumber = data.slip.id;
  const advice = data.slip.advice;

  document.getElementById("insert-advice-number").innerHTML = adviceNumber;
  document.getElementById("insert-advice").innerHTML = advice;
}

document.querySelector(".dice").addEventListener("click", getAdvice);