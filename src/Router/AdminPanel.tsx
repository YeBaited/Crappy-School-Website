import { useState } from "react"
import CreatePrompt from "../Modules/CreatePrompt"

function tryReq(){
    console.log("Fetching lol!")
    fetch("http://localhost:82/php/CreateEvent.php")
}


function AdminPanel(){
    const [allLogins, setLogin] = useState(["Null1", "Null2"])
    const [isShowPopup, setShowPopup] = useState(false)
    
    async function fetchAllLogin(){
    
        var ajax = new XMLHttpRequest()
        ajax.onreadystatechange = function(){
            if (!this.response) return
    
            setLogin(JSON.parse(this.response))
        }
        ajax.open("POST", "http://localhost:82/php/getAllAccounts.php")
        ajax.send()
    }



    return (
        <>  
            {isShowPopup ? <CreatePrompt /> : null}
            <div className="flex justify-center mt-5">
                <div className="h-[30rem] w-[40rem] bg-blue-400 mx-1 overflow-scroll-x">
                    
                    
                    
                    <h1 className="text-white text-xl font-bold text-center">Login Database</h1>

                    <div className="grid grid-cols-3 gap-5 ">
                            <h1 className="text-center font-semibold text-white">ID</h1>
                            <h1 className="text-center font-semibold text-white">USERNAME</h1>
                            <h1 className="text-center font-semibold text-white">PASSWORD</h1>
                    </div>
                    {
                        allLogins.map((Children : any) => 
                            <div className="grid grid-cols-3 gap-5 border-b border-white">
                                <h1 className="text-center">{Children["id"]}</h1>
                                <h1 className="text-center">{Children["username"]}</h1>
                                <h1 className="text-center">{Children["password"]}</h1>
                            </div>
                        )
                    }

                </div>

                <div className="h-[30rem] w-[40rem] bg-blue-500 mx-1">
                    <h1 className="text-white text-xl font-bold text-center">Actions</h1>
                    <div className="flex mt-1 p-2">
                        <h1 className="font-bold text-white p-2">SELECTED: None</h1>
                    </div>
                    
                    <div className="flex mt-1 p-2">
                        <button className="bg-blue-700 p-2 text-white font-bold mx-2">Delete Account</button>
                        <button className="bg-blue-700 p-2 text-white font-bold mx-2">Reset Password</button>
                        <button className="bg-blue-700 p-2 text-white font-bold mx-2">Rest Username</button>
                    </div>

                    <div className="flex mt-1 p-2">
                        <h1 className="font-bold text-white p-2">Server Wide</h1>
                    </div>
                    
                    <div className="flex mt-1 p-2">
                        <button className="bg-blue-700 p-2 text-white font-bold mx-2">Purge All</button>
                        <button className="bg-blue-700 p-2 text-white font-bold mx-2">Purge Password</button>
                        <button className="bg-blue-700 p-2 text-white font-bold mx-2">Purge Username</button>
                    </div>

                    <div className="flex mt-1 p-2">
                        <h1 className="font-bold text-white p-2">System</h1>
                    </div>
                    
                    <div className="flex mt-1 p-2">
                        <button className="bg-blue-700 p-2 text-white font-bold mx-2" onClick={fetchAllLogin}>Fetch all</button>
                    </div>
                </div>



            </div>

            <div className="flex justify-center mt-5">
                <div className="h-[30rem] w-[40rem] bg-blue-400 mx-1">
                    <h1 className="text-white text-xl font-bold text-center">Application Database</h1>
                </div>

                <div className="h-[30rem] w-[40rem] bg-blue-500 mx-1">
                    <h1 className="text-white text-xl font-bold text-center">Info</h1>
                    <div className="flex-row justify-center">


                        <div className="flex justify-center">
                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-right text-xl font-bold">Name:</h1>
                            </div>  

                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-left text-xl">Unk U. Unk</h1>
                            </div>  

                        </div>

                        <div className="flex justify-center">
                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-right text-xl font-bold">Age:</h1>
                            </div>  

                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-left text-xl">0</h1>
                            </div>  

                        </div>

                        <div className="flex justify-center">
                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-right text-xl font-bold">LRN:</h1>
                            </div>  

                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-left text-xl">0123456789</h1>
                            </div>  

                        </div>

                        <div className="flex justify-center">
                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-right text-xl font-bold">Previous School:</h1>
                            </div>  

                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-left text-xl">Unk High School</h1>
                            </div>  

                        </div>

                        <div className="flex justify-center">
                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-right text-xl font-bold">School Type:</h1>
                            </div>  

                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-left text-xl">Private Or Public</h1>
                            </div>  

                        </div>

                        <div className="flex justify-center">
                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-right text-xl font-bold">Course:</h1>
                            </div>  

                            <div className="p-1">
                                <h1 className="w-[10rem] text-white text-left text-xl">ICT</h1>
                            </div>  

                        </div>

                        <div className="flex justify-center mt-5">
                              
                            <button className="bg-green-500 mx-2 text-xl font-bold px-5 text-red-500">Approve</button>
                            <button className="bg-red-500 mx-2 text-xl font-bold px-5 text-green-500">Decline</button>
                        </div>




                         
                        <h1 className="text-xl text-white mt-2 ml-1">Status: Not yet responded!</h1>

                    </div>
                </div>

            </div>

            <div className="flex justify-center mt-5">
                <div className="h-[30rem] w-[40rem] bg-blue-400 mx-1">
                    <h1 className="text-white text-xl font-bold text-center">Activity Database</h1>
                </div>

                <div className="h-[30rem] w-[40rem] bg-blue-500 mx-1">
                    <h1 className="text-white text-xl font-bold text-center">Activity Info</h1>
                    <div className="flex-row justify-center">

                        <div className="flex justify-center mt-5">
                              
                            <button className="bg-green-500 mx-2 text-xl font-bold px-5 text-red-500" onClick={tryReq}>Send Req</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminPanel