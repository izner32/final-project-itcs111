import Image from 'next/image';


function Main() {
  return (
    <>
      <div className="bg-foggy-gray-500 flex flex-col md:flex-row p-16 justify-center">
        <div className="mx-auto md:mx-0 mb-8 md:mb-0">
          <div 
            className="p-16 md:p-32 rounded md:mr-8 w-12"
            style={{  
                backgroundImage: "url(" + "https://i.ibb.co/xXHwyy7/271890336-605375937566735-8112678260475527478-n.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
          ></div>
        </div>
        <div className="w-[40%] text-center my-auto mx-auto md:mx-0">
          <p className="font-base italic text-xs sm:text-base md:text-lg lg:text-xl ">Hello, it's me</p>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 ">Renz Carillo</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam temporibus in nostrum iste non qui?</p>
          <button className="text-xs sm:text-sm md:text-base lg:text-lg transition ease-in-out delay-150 hover:-translate-y-1 bg-ironside-gray-500 hover:bg-ironside-gray-200 p-2 px-4 rounded text-white duration-300">Follow me on IG!</button>
        </div>
      </div>
    </>
  )
}

export default Main;