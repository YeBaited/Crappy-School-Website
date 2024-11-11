function App() {

  return (  
    <>
      <div className="bg-blue-400 flex h-[3rem]">
        <div className="flex my-auto ml-1">
          <h1 className="ml-1 text-2xl text-white">FEAPITSAT</h1>
        </div>


        <div className="ml-auto my-auto flex text-2xl">
          <h1 className="mx-2 font-light text-white">Login</h1>
          <h1 className="mx-2 font-light text-white">Enroll</h1>
          <h1 className="mx-2 font-light text-white">Research</h1>
          

        </div>
      </div>

      <img src="SchoolCover.jpg" className="justify-self-center object-contain" />

      <div className="justify-self-center mb-5 flex">
        <div className="mx-auto bg-red-300">
          <h1>test</h1>
        </div>
        <div className="mx-auto">
          <h1>test</h1>
        </div>
        
      </div>

      <div className="border border-black mx-auto w-[70rem]">
        <h1 className="text-4xl text-center font-bold text-blue-500">Activities</h1>

        <div className="flex justify-center p-5">

          <div className="border border-black w-[20rem] p-5 mx-5">
            <h1 className="text-center font-bold text-blue-500 text-lg">Mobile Legend!</h1>
            <img src="Extracullicular/MobileLegend.jpg" alt="" />
          </div>

          <div className="border border-black w-[20rem] p-5 mx-5">
            <h1 className="text-center font-bold text-blue-500 text-lg">Mobile Legend!</h1>
            <img src="Extracullicular/MobileLegend.jpg" alt="" />
          </div>

          <div className="border border-black w-[20rem] p-5 mx-5">
            <h1 className="text-center font-bold text-blue-500 text-lg">Mobile Legend!</h1>
            <img src="Extracullicular/MobileLegend.jpg" alt="" />
          </div>

          

        </div>
      </div>
    </>
  )
}

export default App
