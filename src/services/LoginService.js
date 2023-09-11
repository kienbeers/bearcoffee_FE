const LoginService = (username, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username": username,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/auth/login", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log("res", JSON.parse(result).data.roles)
            if (JSON.parse(result).data.roles[0].role === "ADMIN") {
                window.location.href = '/admin';
            }
        }
        )
        .catch(error => console.log('error', error));
}
export default LoginService;