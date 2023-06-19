// Login Form
const loginForm = document.querySelector('#login');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;


  postData("http://localhost:8080/login", { email, password }).then((data) => {
    alert(data.message); // JSON data parsed by `data.json()` call
    if (data.message === "Success") {
      window.location.href = "dashboard/dashboard.html";
    }
  }).catch((error) => {
    alert(error);
  });



  // firebase.auth().signInWithEmailAndPassword(email, password)
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   //Redirect to dashboard page after successful login
  //   window.location.href = "dashboard/dashboard.html";
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   //Display error message to user
  //   alert(errorMessage);
  // });
});


async function postData(url = "", data = {}) {

  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

