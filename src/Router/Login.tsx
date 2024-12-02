function ManageLoginData(data : {isSuccess : boolean}, a1 : string, a2 : string){
    console.log(data)

    if (data["isSuccess"] == false){
        window.alert("LogIn Failed!")
    }

    document.cookie = `username=${a1}`
    document.cookie = `password=${a2}`
    window.location.href = '/Home';
}

function tryCreate(isCreate : boolean){

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
        if (!this.response) return // This ensure that Null cannot be decoded amen
        let jsonDecode = JSON.parse(this.response)
        ManageLoginData(jsonDecode, data.username, data.password)
        
    }

    if (isCreate){
        ajax.open("POST", "http://localhost:82/php/CreateAccount.php")
    } else {
        ajax.open("POST", "http://localhost:82/php/LoginAccount.php")
    }

    ajax.send(JSON.stringify(data))
}



function Login(){
    return (
        <>
            <div className="bg-blue-500 justify-self-center w-[17rem] p-1 mt-5">
                <h1 className="text-center text-xl font-bold text-white">LOGIN</h1>
                <div className="flex flex-col w-5/6 justify-self-center my-1">
                    <input className="my-1 outline-0 text-white border-b border-white bg-transparent" placeholder="Username" id="username" type="text" />
                    <input className="my-1 outline-0 text-white border-b border-white bg-transparent mb-5" placeholder="Password" id="password" type="text" />
                    <button className="bg-blue-400 rounded-xl p-1 text-white outline-0 font-semibold" onClick={() => tryCreate(false)}>Login</button>
                    <button className="bg-blue-400 rounded-xl p-1 text-white outline-0 font-semibold mt-2" onClick={() => tryCreate(true)}>Create</button>
                </div>


            </div>
        
        </>
    )
}

export default Login