function calculateCompoundInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);
  const result = document.getElementById("result");

  //   adding validations
  if (
    isNaN(principal) ||
    isNaN(rate) ||
    isNaN(time) ||
    principal <= 0 ||
    rate <= 0 ||
    time <= 0
  ) {
    result.style.color = "red";
    result.innerHTML =
      "Please enter valid positive numeric values for principal, rate, and time.";
  } else {
    const compoundInterest =
      principal * Math.pow(1 + rate / 100, time) - principal;
    result.style.color = "#333";
    result.innerHTML = `Compound Interest: $${compoundInterest.toFixed(2)}`;
  }
}

