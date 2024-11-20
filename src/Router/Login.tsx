function tryCreate(){
    var TestSend = {
        "username" : "Bossing",
        "password" : "Boss"
    }

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){

    }

    ajax.open("POST", "http://localhost:82/php/CreateAccount.php")
    ajax.send(JSON.stringify(TestSend))
}

function Login(){
    return (
        <>
            <h1>Login</h1>
            <input className="border border-black" placeholder="Username" type="text" />
            <input className="border border-black" placeholder="Password" type="text" />
            <button onClick={tryCreate}>Create</button>
        
        </>
    )
}

export default Login