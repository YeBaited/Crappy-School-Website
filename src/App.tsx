function App() {

  return (  
    <>
      <div className="bg-blue-400 flex h-[3rem]">
        <div className="flex my-auto ml-1">
          <h1 className="ml-1 text-2xl text-white">FEAPITSAT (THIS IS IN FUCKING PROGRESS)</h1>
        </div>


        <div className="ml-auto my-auto flex text-2xl">
          <a className="mx-2 font-light text-white">Login</a>
          <a className="mx-2 font-light text-white">Enroll</a>
          

        </div>
      </div>

      <img src="SchoolCover.jpg" className="justify-self-center object-contain" />

      <div className="justify-self-center mb-10 flex w-[70rem]">


        <div className="mx-auto w-full">
          <h1 className="text-center font-bold text-xl">About Us</h1>
          <h1 className="text-center text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nulla, laoreet sed pharetra ac, porta et mauris. Aenean pulvinar lorem at risus mattis tempor. Cras nec tortor egestas lorem sollicitudin tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nulla, laoreet sed pharetra ac, porta et mauris. Aenean pulvinar lorem at risus mattis tempor. Cras nec tortor egestas lorem sollicitudin tincidunt. </h1>
        </div>
        
        <div className="mx-auto w-full">
          <img src="FeapitsatLogo.jpg" className="justify-self-center object-contain h-[13rem]"/>
          <h1 className="text-center font-light text-lg">"Far East Asia Pacific Institute Of Tourism And Technology"</h1>
        </div>
        
      </div>

      <div className="mx-auto w-[70rem]">
        <h1 className="text-4xl text-center font-bold text-blue-500">Activities</h1>

        <div className="flex justify-center p-5">

          <div className="border-2 border-blue-500 w-[20rem] p-5 mx-5 rounded-md">
            <h1 className="text-center font-bold text-blue-500 text-lg">Mobile Legend!</h1>
            <img src="Extracullicular/MobileLegend.jpg" alt="" className="object-cover h-[90%]" />
          </div>

          <div className="border-2 border-blue-500 w-[20rem] p-5 mx-5 rounded-md">
            <h1 className="text-center font-bold text-blue-500 text-lg">Fieldtrip!</h1>
            <img src="Extracullicular/FieldTrip.jpg" alt="" className="object-cover h-[90%]" />
          </div>

          <div className="border-2 border-blue-500 w-[20rem] p-5 mx-5 rounded-md">
            <h1 className="text-center font-bold text-blue-500 text-lg">Research Defense!!!</h1>
            <img src="Extracullicular/ResearchDefense.jpg" alt="" className="object-cover h-[90%]" />
          </div>  
    


          

        </div>
      </div>
    </>
  )
}

export default App
