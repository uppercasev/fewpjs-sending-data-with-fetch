// Add your code here
function submitData(nameString, emailString) {
    let formData = {
        name: nameString,
        email: emailString
    };
    let postObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', postObj)
    .then((response) => response.json())
    .then((object) => {
        document.querySelector('body').innerHTML += `<p>${object.id}</p>`;
    })
    .catch((reason) => {
        document.querySelector('body').innerHTML += `<p>${reason}</p>`;
    });
}