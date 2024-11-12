
function AdminPanel(){
    return (
        <>  
            <div className="flex justify-center mt-5">
                <div className="h-[30rem] w-[40rem] bg-blue-400 mx-1">
                    <h1 className="text-white text-xl font-bold text-center">Login Database</h1>
                </div>

                <div className="h-[30rem] w-[40rem] bg-blue-500 mx-1">
                <h1 className="text-white text-xl font-bold text-center">Actions</h1>
                </div>

            </div>

            <div className="flex justify-center mt-5">
                <div className="h-[30rem] w-[40rem] bg-blue-400 mx-1">
                    <h1 className="text-white text-xl font-bold text-center">Application Database</h1>
                </div>

                <div className="h-[30rem] w-[40rem] bg-blue-500 mx-1">
                <h1 className="text-white text-xl font-bold text-center">Info</h1>
                </div>

            </div>
        </>
    )
}

export default AdminPanel