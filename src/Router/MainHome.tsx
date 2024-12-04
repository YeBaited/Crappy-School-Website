function getcookie(thename : string){
    const value = document.cookie
    const split = value.split('; ')

    for (let i = 0; i < split.length; i++){
        const split1 = split[i].split("=")
        if (split1[0] == thename){
            return split1[1]
        }
    }   
}


function MainHome(){
    getcookie("username")
    return (
        <div className="px-5 mt-5">
            <div>
                <h1 className="font-bold text-xl">Welcome, {getcookie("username")}</h1>
                

                <div className="flex justify-center">
                    
                    <div className="w-[10rem] border-r border-b border-black text-center">
                        <h1 className="font-bold">SUBJECT</h1>
                        <h1>ENGLISH</h1>
                        <h1>CHINESE</h1>
                        <h1>KUPAL</h1>
                    </div>

                    <div className="flex-col w-[10rem] border-r border-b border-black text-center">
                        <h1 className="font-bold">1st</h1>
                        <h1>76</h1>
                        <h1>98</h1>
                        <h1>42</h1>
                    </div>

                    <div className="flex-col w-[10rem] border-r border-b border-black text-center">
                        <h1 className="font-bold">2nd</h1>
                        <h1>76</h1>
                        <h1>98</h1>
                        <h1>42</h1>
                    </div>

                    <div className="flex-col w-[10rem] border-r border-b border-black text-center">
                        <h1 className="font-bold">3rd</h1>
                        <h1>76</h1>
                        <h1>98</h1>
                        <h1>42</h1>
                    </div>

                    <div className="flex-col w-[10rem] border-r border-b border-black text-center">
                        <h1 className="font-bold">4th</h1>
                        <h1>76</h1>
                        <h1>98</h1>
                        <h1>42</h1>
                    </div>

                    


                </div>
            </div>
        </div>
    )
}

export default MainHome