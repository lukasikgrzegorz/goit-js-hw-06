const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const {
        elements: { email, password }
    } = e.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Uzupełnij wszystkie pola!");
    }

    const outputArray = [
        [email.name, email.value],
        [password.name, password.value]
    ];

    const outputObject = Object.fromEntries(outputArray);

    e.currentTarget.reset();

    return console.log(outputObject);

})
