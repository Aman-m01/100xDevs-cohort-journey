function calculateResult() {
    const capital = document.getElementById('capital').value;
    console.log(capital)
    const years = document.getElementById('years').value;
    const interest = document.getElementById('interest').value;

    if (capital === "" || years === "" || interest === "") {
        alert("All fields are required");
    } else {
        const Amount = capital * Math.pow((1 + interest / 100), years);
        document.getElementById("TA").innerHTML = `₹ ${Amount.toFixed(2)}`;
        document.getElementById("Interest-data").innerHTML = `₹ ${(Amount - capital).toFixed(2)}`;
    }
}
