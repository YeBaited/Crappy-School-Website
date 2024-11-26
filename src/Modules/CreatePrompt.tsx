interface prop {
    "title" : string,
    "description" : string,
    "Buttons" : string,
}

function CreatePrompt({title, description, Buttons} : prop){
    console.log(Buttons)
    function AddButtons(){
        if (Buttons == "YesNo"){
            return (
                <>
                    <button className="w-[20%] bg-slate-400">Yes 1</button>
                    <button className="w-[20%] bg-slate-400">No 2</button>
                </>
            )
        }


        return (
            <h1>NO BUTTON</h1>
        )
    }
    return (
        <div>
            <div className="fixed top-0 bg-blue-950 h-full translate-y-[4.5%] w-full opacity-40">
                <h1>test</h1>
            </div>
            
            <div className="fixed w-2/6 h-2/6 bg-blue-500 translate-x-full translate-y-[20vh] rounded-sm">
                <h1 className="text-center text-xl font-bold text-white">{title}</h1>

                <div className="flex justify-center h-[80%]">
                    <p className="text-justify text-white">{description}</p>
                </div>

                <div className="flex justify-evenly bg-red-500 opacity-50">
                    {AddButtons()}
                </div>

            </div>

        </div>
    )
}

export default CreatePrompt