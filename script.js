<script>
let display = document.getElementById("display");

function add(value) {
    display.value += value;
}

function del() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
</script>
