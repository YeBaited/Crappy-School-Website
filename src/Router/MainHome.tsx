function getcookie(thename : string){
    const value = document.cookie
    const split = value.split('; ')

    for (let i = 0; i < split.length; i++){
        const split1 = split[i].split("=")
        if (split1[0] == thename){
            console.log(split1[1])
        }
    }   
}


function MainHome(){
    getcookie("username")
    return (
        <>
            <h1>THIS IS THE MAIN HOME AFTER LOGIN</h1>
        </>
    )
}

export default MainHome