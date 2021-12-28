import Header from './Header'
import { PlayIcon, ArrowDownIcon } from '@heroicons/react/outline'

function TopPage() {
    
    return (
        <div>
            <div className="w-screen h-screen m-0 bg-gradient-to-tr from-purple-800 to-blue-300 flex flex-col ">
                <Header />

                <div className="max-w-6xl xl:mx-auto mx-2 flex flex-col items-center flex-grow">
                    <h1 className="text-2xl lg:text-6xl md:text-5xl mt-10 font-semibold text-white">THE SOUL OF THE WORLD</h1>
                    <PlayIcon className="w-8 md:w-12 text-white hover:animate-bounce" />
                    <p className="text-xl md:text-5xl mt-1 text-white">A SIMPLE SOLUTION</p>

                    <div className="w-80 h-24 my-2 bg-white rounded-lg flex justify-center space-x-6 overflow-hidden">
                        {/* animate */}
                        <div className="bg-pink-600 w-12 h-32 filter blur-2xl -rotate-45"></div>
                        <div className="bg-pink-700 animate-pulse w-2 h-32 filter blur-md -rotate-45"></div>
                        <div className="bg-green-500 animate-pulse w-4 h-32 filter blur-lg -rotate-45"></div>
                        <div className="bg-pink-700 animate-pulse w-2 h-32 filter blur-md -rotate-45"></div>
                        <div className="bg-pink-600 w-12 h-32 filter blur-2xl -rotate-45"></div>
                    </div>

                    <p className="text-md text-center font-semibold md:text-xl md:max-w-2xl my-1 text-white">For businesses and organisations - you can build communities and engage audiences with one easy-to-use mobile app platform</p>
                    
                    <div className="w-full flex justify-around md:max-w-2xl mt-5">
                        <button className="btns hover:text-gray-500 border-4 px-5 py-2 rounded-full text-white border-white" >Know More</button>
                        <button className="btns hover:text-gray-500 border-4 py-2 px-5 rounded-full text-white border-white" >Contact Us</button>
                    </div>

                    <div className="w-screen flex flex-col flex-1 mb-2">
                        <div className="flex-grow flex flex-col justify-around bg-white mt-8 mr-24 md:w-[700px] md:text-center p-3 shadow-2xl shadow-gray-800  md:mx-auto" >
                            <h1 className="font-semibold text-lg">Why Choose BOTSPOT AI ?</h1>
                            <h1 className="font-semibold text-lg">We're so glad you asked !</h1>
                            <div className="space-y-2 md:flex md:justify-around">
                                <button className="btns border-4 px-5 py-2 rounded-full text-black border-black flex items-center text-sm" >
                                    GET STARTED TODAY <ArrowDownIcon className="w-4 ml-2" />
                                </button>
                                <button className="btns border-4 py-2 px-5 rounded-full text-black border-black flex items-center text-sm" >
                                    OUR SERVICES <ArrowDownIcon className="w-4 ml-2" />
                                </button>
                            </div>
                            
                        </div> 
                    </div>
                    
                </div>
                
            </div>
        </div>
        
    )
}

export default TopPage