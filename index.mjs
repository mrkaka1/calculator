const resultField = document.getElementById("result");
let expression = "";

document.querySelectorAll(".number, .characters").forEach((button) => {
	button.addEventListener("click", () => {
		const value = button.textContent;

		if (value === "=") {
			try {
				expression = expression.replace(/X/g, "*");
				resultField.value = eval(expression); 
				expression = resultField.value;
			} catch (error) {
				resultField.value = "Erro";
				expression = "";
			}
		} else if (value === "C") {
			expression = "";
			resultField.value = "";
		} else {
			expression += value;
			resultField.value = expression;
		}
	});
});
