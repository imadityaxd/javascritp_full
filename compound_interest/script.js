function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    const compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal;

    document.getElementById('result').innerHTML = `Compound Interest: $${compoundInterest.toFixed(2)}`;
}