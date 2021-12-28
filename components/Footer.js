import { HeartIcon} from '@heroicons/react/solid'

function Footer(){
    return(
        <div className="bg-black py-5 mt-24 ">
            <div className="max-w-6xl mx-5 xl:mx-auto ">
                <div className="grid gap-4 md:grid-cols-2 justify-items-center">
                    <h1 className="text-white text-lg">Yogesh Arya</h1>
                    <h1 className="text-white">Yogesh084arya@gmail.com</h1>
                    <h1 className="text-white cursor-pointer">https://portfolio-alpha-jet.vercel.app</h1>
                    <h1 className="text-white cursor-pointer">https://www.linkedin.com/in/yogesh08arya/</h1>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 justify-items-center mt-8 border-t border-gray-500 pt-4">
                    <p className="text-sm text-gray-400">© 2021 www.linkedin.com/in/yogesh08arya All rights reserved.</p>
                    <h1 className="text-gray-400 flex ">Made with <HeartIcon className="w-5 text-red-500 mx-1"/> by Yogesh Arya</h1> 
                </div>
                
            </div>
            
        </div>
    )
}

export default Footer