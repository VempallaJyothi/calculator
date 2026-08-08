let display = document.querySelector("input");

function btn(value) {

    if (value === "C") {
        display.value = "";
    }

    else if (value === "=") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    else {
        display.value += value;
    }

}