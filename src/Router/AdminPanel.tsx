
function tryReq(){
    console.log("Fetching lol!")
    fetch("localhost:82")
}

function AdminPanel(){
    

    return (
        <>  
            <div className="flex justify-center mt-5">
                <div className="h-[30rem] w-[40rem] bg-blue-400 mx-1">
                    <h1 className="text-white text-xl font-bold text-center">Login Database</h1>
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