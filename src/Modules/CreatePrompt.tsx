function CreatePrompt(){

    return (
        <div>
            <div className="fixed top-0 bg-blue-950 h-full translate-y-[4.5%] w-full opacity-40">
                <h1>test</h1>
            </div>
            
            <div className="fixed w-2/6 h-2/6 bg-blue-500 translate-x-full translate-y-[20vh] rounded-sm">
                <h1 className="text-center text-xl font-bold text-white">PROMPT NAME</h1>

                <div className="flex justify-center h-[80%]">
                    <p className="text-justify text-white">TEXT HERE TEXT HERE TEXT HERE</p>
                </div>

                <div className="flex justify-evenly bg-red-500 opacity-50">
                    <button className="w-[20%] bg-slate-400">OPTION 1</button>
                    <button className="w-[20%] bg-slate-400">OPTION 2</button>
                </div>

            </div>

        </div>
    )
}

export default CreatePrompt