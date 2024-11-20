function tryCreate(){
    const username = document.querySelector("#username") as HTMLInputElement
    const password = document.querySelector("#password") as HTMLInputElement

    var data = {
        "username" : username.value,
        "password" : password.value
    }

    

    if (data.username == ""){
        console.log("no username!")
        return
    }


    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        console.log(this.response)
    }

    ajax.open("POST", "http://localhost:82/php/CreateAccount.php")
    ajax.send(JSON.stringify(data))
}

function Login(){
    return (
        <>
            <h1>Login</h1>
            <input className="border border-black" placeholder="Username" id="username" type="text" />
            <input className="border border-black" placeholder="Password" id="password" type="text" />
            <button onClick={tryCreate}>Create</button>
        
        </>
    )
}

export default Login