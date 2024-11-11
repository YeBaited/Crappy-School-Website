function App() {

  return (  
    <>


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

        <div className="flex justify-center p-2">

          <div className="border-2 border-blue-500 w-[20rem] p-5 mx-5 rounded-md">
            <h1 className="text-center font-bold text-blue-500 text-lg">Mobile Legend!</h1>
            <img src="Extracullicular/MobileLegend.jpg" alt="" className="object-cover h-[90%]" />
            <p className="text-blue-500 text-sm">Date: January 1, 6969 - January 69, 6969</p>
          </div>

          <div className="border-2 border-blue-500 w-[20rem] p-5 mx-5 rounded-md">
            <h1 className="text-center font-bold text-blue-500 text-lg">Fieldtrip!</h1>
            <img src="Extracullicular/FieldTrip.jpg" alt="" className="object-cover h-[90%]" />
            <p className="text-blue-500 text-sm">Date: January 1, 6969 - January 69, 6969</p>
          </div>

          <div className="border-2 border-blue-500 w-[20rem] p-5 mx-5 rounded-md">
            <h1 className="text-center font-bold text-blue-500 text-lg">Research Defense!!!</h1>
            <img src="Extracullicular/ResearchDefense.jpg" alt="" className="object-cover h-[90%]" />
            <p className="text-blue-500 text-sm">Date: January 1, 6969 - January 69, 6969</p>
          </div>  
    


          

        </div>
        
        <div className="flex justify-center">

          <div className="mx-1 bg-blue-500 p-1 opacity-50">
            <button className="text-white text-2xl font-bold">&lt;</button>
          </div>

          <div className="mx-1 bg-blue-500 p-1 opacity-100">
            <button className="text-white text-2xl font-bold">&gt;</button>
          </div>

        </div>
      </div>

      <div className="mx-auto w-[70rem] mt-10">
        <h1 className="text-4xl text-center font-bold text-blue-500">Newsletter</h1>

        <div className="flex justify-center p-2">

          <div className="border-2 border-blue-500 w-[30rem] p-5 mx-5 rounded-md">
            <h1 className="text-center font-bold text-blue-500 text-lg">Missing!</h1>
            <img src="NewsLetter/BinLaden.jpg" alt="" className="object-cover h-[90%]" />
            <p className="text-blue-500 text-sm">Date: January 11, 1999</p>
          </div>





        </div>
        
        <div className="flex justify-center">

          <div className="mx-1 bg-blue-500 p-1 opacity-50">
            <button className="text-white text-2xl font-bold">&lt;</button>
          </div>

          <div className="mx-1 bg-blue-500 p-1 opacity-100">
            <button className="text-white text-2xl font-bold">&gt;</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
