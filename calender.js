let loginFormEl = document.getElementById("loginForm");

let loginMailEl = document.getElementById("loginMail");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let loginPasswordEl = document.getElementById("loginPassword");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");


let signUpFormEl = document.getElementById("signUpForm");

let firstNameEl = document.getElementById("firstName");
let lastNameEl = document.getElementById("lastName");

let firstNameErrMsgEl = document.getElementById("firstNameErrMsg");
let lastNameErrMsgEl = document.getElementById("lastNameErrMsg");

let SignupMailEl = document.getElementById("SignupMail");
let SignupMailErrMsgEl = document.getElementById("SignupMailErrMsg");

let signupPasswordEl = document.getElementById("signupPassword");
let signupPasswordErrMsgEl = document.getElementById("signupPasswordErrMsg");

let createAccountEl = document.getElementById("createAccount");
let loginCardEl = document.getElementById("loginCard");

let loginAccountEl = document.getElementById("loginAccount");

let signUpPageEl = document.getElementById("signUpPage");

let loginPopupEl = document.getElementById("loginPopup");
let signedPopupEl = document.getElementById("signedPopup");

let sectionLoginSignupEl = document.getElementById("sectionLoginSignup");
let HomepageEl = document.getElementById("homepage");
let loginSignupPageEl = document.getElementById("loginSignupPage");

let lagoutEl = document.getElementById("lagout");

let wecomeTextEl = document.getElementById("wecomeText");
let eventFormEl = document.getElementById("eventForm");

let eventWithNameEl = document.getElementById("eventWithName");
let eventDescriptionEl = document.getElementById("eventDescription");
let startTimeEl = document.getElementById("startTime");
let endTimeEl = document.getElementById("endTime");
let dayOfTheWeekEl = document.getElementById("dayOfTheWeek");
let yourScheduleEl = document.getElementById("yourSchedule");
let tableCardEl = document.getElementById("tableCard");
let scheduleCardEl = document.getElementById("scheduleCard");
let addEventEl = document.getElementById("addEvent");

let nameErrMsgEl = document.getElementById("nameErrMsg");
let descriptionErrMsgEl = document.getElementById("descriptionErrMsg");
let startTimeErrMsgEl = document.getElementById("startTimeErrMsg");
let endtimeErrMsgEl = document.getElementById("endtimeErrMsg");

let tableDataEl = document.getElementById("tableData");

let eventSuccessMsgEl = document.getElementById("eventSuccessMsg");

let userSignupObject = {
    firstNameInput: "",
    lastNameInput: "",
    emailInput: "",
    passwordInput: "",
};

let eventData = {
    Name: "",
    Description: "",
    startTime: "",
    endTime: "",
    dayOfTheWeek: ""
};
let count = 0;
let userName;
let userId;

loginMailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else if (loginMailEl.value.includes("@") && loginMailEl.value.includes(".com")) {
        emailErrMsgEl.textContent = "";
    } else {
        emailErrMsgEl.textContent = "Enter Valid Email Address";
    }
});

loginPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = "Required*";
    } else {
        passwordErrMsgEl.textContent = "";
    }
});

firstNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        firstNameErrMsgEl.textContent = "Required*";
    } else {
        firstNameErrMsgEl.textContent = "";
    }
});

lastNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        lastNameErrMsgEl.textContent = "Required*";
    } else {
        lastNameErrMsgEl.textContent = "";
    }
});

SignupMailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        SignupMailErrMsgEl.textContent = "Required*";
    } else if (SignupMailEl.value.includes("@") && SignupMailEl.value.includes(".com")) {
        SignupMailErrMsgEl.textContent = "";
    } else {
        SignupMailErrMsgEl.textContent = "Enter Valid Email Address";
    }
});

signupPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        signupPasswordErrMsgEl.textContent = "Required*";
    } else {
        signupPasswordErrMsgEl.textContent = "";
    }
});

loginFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    if (loginMailEl.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else if (loginMailEl.value.includes("@") && loginMailEl.value.includes(".com")) {
        emailErrMsgEl.textContent = "";
    } else {
        emailErrMsgEl.textContent = "Enter Valid Email Address";
    }
    if (loginPasswordEl.value === "") {
        passwordErrMsgEl.textContent = "Required*";
    } else {
        passwordErrMsgEl.textContent = "";
    }
    let i = 1;
    let count = parseInt(localStorage.getItem("count"));
    while (i <= count) {
        let userId = "user" + 1;
        user = localStorage.getItem(`${userId}`);
        let parsedUser = JSON.parse(user);
        if (parsedUser.emailInput != loginMailEl.value) {
            emailErrMsgEl.textContent = "Your Email is Not registerd with us";
        } else if (parsedUser.passwordInput !== loginPasswordEl.value) {
            passwordErrMsgEl.textContent = "Incorrect password";
        } else {
            loginMailEl.value = "";
            loginPasswordEl.value = "";
            userName = parsedUser.firstNameInput;
            userId = parsedUser.personId;
            wecomeTextEl.textContent = "Welcome " + userName;
            loginSignupPageEl.classList.add("d-none");
            HomepageEl.classList.remove("d-none");
        }
        i += 1;
    }

});

signUpFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    count += 1;
    let id = "person" + count
    localStorageKey = "user" + count;

    if (firstNameEl.value === "") {
        firstNameErrMsgEl.textContent = "Required*";
    } else if (firstNameEl.value !== "") {
        firstNameErrMsgEl.textContent = "";
        userSignupObject.firstNameInput = firstNameEl.value;
    }
    if (lastNameEl.value === "") {
        lastNameErrMsgEl.textContent = "Required*";
    } else if (lastNameEl.value !== "") {
        lastNameErrMsgEl.textContent = "";
        userSignupObject.lastNameInput = lastNameEl.value;
    }
    if (SignupMailEl.value === "") {
        SignupMailErrMsgEl.textContent = "Required*";
    } else if (SignupMailEl.value.includes("@") && SignupMailEl.value.includes(".com")) {
        SignupMailErrMsgEl.textContent = "";
        userSignupObject.emailInput = SignupMailEl.value;
        userSignupObject.personId = id;
        let i = 1;
        let count = parseInt(localStorage.getItem("count"));
        while (i <= count) {
            let userId = "user" + 1;
            user = localStorage.getItem(`${userId}`);
            let parsedUser = JSON.parse(user);
            i += 1
        };
    } else if (SignupMailEl.value !== "") {
        SignupMailErrMsgEl.textContent = "Enter Valid Email Address";
    }
    if (signupPasswordEl.value === "") {
        signupPasswordErrMsgEl.textContent = "Required*"
    } else {
        userSignupObject.passwordInput = signupPasswordEl.value;
        signupPasswordErrMsgEl.textContent = "";
        firstNameEl.value = "";
        lastNameEl.value = "";
        SignupMailEl.value = "";
        signupPasswordEl.value = "";

        let stringifieduser = JSON.stringify(userSignupObject);
        localStorage.setItem(`${localStorageKey}`, stringifieduser);
        localStorage.setItem("count", `${count}`);
        signedPopupEl.textContent = "Successfully Signed up"
    }
});

createAccountEl.addEventListener("click", function() {
    loginCardEl.classList.toggle("d-none");
    signUpPageEl.classList.remove("d-none");
});

loginAccountEl.addEventListener("click", function() {
    loginCardEl.classList.toggle("d-none");
    signUpPageEl.classList.toggle("d-none");
});

lagoutEl.addEventListener("click", function() {
    loginSignupPageEl.classList.remove("d-none");
    HomepageEl.classList.add("d-none");
    signedPopupEl.classList.add("d-none")
})

eventWithNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

eventDescriptionEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        descriptionErrMsgEl.textContent = "Required*";
    } else {
        descriptionErrMsgEl.textContent = "";
    }
});

function createTableElement(data) {
    let tableRowEl = document.createElement("tr");
    tableDataEl.appendChild(tableRowEl);

    let tableElement1 = document.createElement("td");
    tableElement1.textContent = data.Name;
    tableRowEl.appendChild(tableElement1);

    let tableElement2 = document.createElement("td");
    tableElement2.textContent = data.Description;
    tableRowEl.appendChild(tableElement2);

    let tableElement3 = document.createElement("td");
    tableElement3.textContent = data.startTime;
    tableRowEl.appendChild(tableElement3);

    let tableElement4 = document.createElement("td");
    tableElement4.textContent = data.endTime;
    tableRowEl.appendChild(tableElement4);

    let tableElement5 = document.createElement("td");
    tableElement5.textContent = data.dayOfTheWeek;
    tableRowEl.appendChild(tableElement5);
}

eventFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (eventWithNameEl.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else if (eventDescriptionEl.value === "") {
        descriptionErrMsgEl.textContent = "Required*";
    } else if (startTimeEl.value === "") {
        startTimeErrMsgEl.textContent = "Required*";
    } else if (endTimeEl.value === "") {
        endtimeErrMsgEl.textContent = "Required*";
    } else {
        eventData.Name = eventWithNameEl.value;
        eventData.Description = eventDescriptionEl.value;
        eventData.startTime = startTimeEl.value;
        eventData.endTime = endTimeEl.value;
        eventData.dayOfTheWeek = dayOfTheWeekEl.value;

        eventWithNameEl.value = "";
        eventDescriptionEl.value = "";
        startTimeEl.value = "";
        endTimeEl.value = "";

        eventSuccessMsgEl.textContent = "Schedule Successfully Saved"

        createTableElement(eventData);
    }

});


yourScheduleEl.addEventListener("click", function() {
    tableCardEl.classList.remove("d-none");
    scheduleCardEl.classList.add("d-none")
});

addEventEl.addEventListener("click", function() {
    tableCardEl.classList.add("d-none");
    scheduleCardEl.classList.remove("d-none")
});