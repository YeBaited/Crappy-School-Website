import { useEffect, useState } from "react"


function EstablishAjax(server : string, payload : string, func : Function ){
  
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function(){
    if (!this.response) return
    func(this.response)
  }
  ajax.open("POST", server)
  ajax.send(payload)
}


function App() {
  let [currentActivity, SetActivity] = useState([])
  
  function RetrieveActivity(){
    EstablishAjax("http://localhost:82/php/getActivities.php", "Plz", function(data : any){
      let decode = JSON.parse(data)
      SetActivity(decode)
    })
  }

  useEffect(() => {
    
    RetrieveActivity()

    
  }, [])


  return (  
    <>


      <img src="SchoolCover.png" className= "h-[30vw] justify-self-center object-contain" />

      <div className="justify-self-center mb-10 flex w-[70rem]">


        <div className="mx-auto w-full">
          <h1 className="text-center font-bold text-xl">About Us</h1>
          <h1 className="text-center text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nulla, laoreet sed pharetra ac, porta et mauris. Aenean pulvinar lorem at risus mattis tempor. Cras nec tortor egestas lorem sollicitudin tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus nulla, laoreet sed pharetra ac, porta et mauris. Aenean pulvinar lorem at risus mattis tempor. Cras nec tortor egestas lorem sollicitudin tincidunt. </h1>
        </div>
        
        <div className="mx-auto w-full">
          <img src="FeapitsatLogo.gif" className="justify-self-center object-contain h-[13rem]"/>
          <h1 className="text-center font-light text-lg">"Some random school"</h1>
        </div>
        
      </div>

      <div className="mx-auto w-[70rem]">
        <h1 className="text-4xl text-center font-bold text-blue-500">Activities</h1>

        <div className="flex justify-center p-2">
          {currentActivity.map((children : any) => 

              <div className="border-2 border-blue-500 w-[20rem] mx-5 rounded-md" key={children["id"]}>
                <h1 className="text-center font-bold text-blue-500 text-lg">{children["title"]}</h1>
                <div className="mx-5">
                  <img src="Extracullicular/default.webp" alt="" className="object-cover h-[90%]" />

                </div>
                <p className="text-blue-500 text-sm text-center">{children["description"]}</p>
                <p className="text-blue-500 text-sm text-center font-bold">{children["date"]}</p>
              </div>
          
            )   
          }
          
    



        </div>
      </div>

      
    </>
  )
}

export default App
