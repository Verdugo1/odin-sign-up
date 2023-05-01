const password = document.querySelector("#password")
const repeat = document.querySelector("#repeat-password")


const checkEqual = () => {
    if (password.value !== repeat.value) {
        password.classList.add("not-equal");
        repeat.classList.add("not-equal");
    }
    else {
        password.classList.remove("not-equal");
        repeat.classList.remove("not-equal");
    }
}
repeat.addEventListener("blur", checkEqual);
