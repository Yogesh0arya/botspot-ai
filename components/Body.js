import { CashIcon, HeartIcon, PuzzleIcon, TruckIcon, ShoppingCartIcon, LibraryIcon, LightBulbIcon, FilmIcon } from '@heroicons/react/solid'
import Services from './Services'

function Body() {
    return (
        <div>
            <div className="max-w-6xl mx-5 xl:mx-auto mt-24">
                <p className="font-lg text-gray-500">Botspot AI offers our customer a wealth of technical and business expertise. We create diverse, complex, web and mobile solutions for any business need. Our knowledge and experience translate to add value and peace of mind for our customers.</p>

                <div className="shadow-lg p-5 text-center w-80 border border-gray-200 my-20 mx-auto">
                    <h1 className="text-2xl font-bold">Who We Serve</h1>
                </div>

                <p className="font-lg text-gray-500">Botspot AI serves businesses in all major sectors, providing exceptional software solutions for large corporations, mid-sized and startups. We use industry specific knowledge and custom trailor our products to each customer's unique needs.</p>

                <div className="space-y-10 flex flex-col items-center my-10 pt-10 border-t border-gray-300">
                    <Services name="Finance and Insurance" Icon={CashIcon} bgCol="text-green-600" />
                    <Services name="Healthcare" Icon={HeartIcon} bgCol="text-red-600"/>
                    <Services name="Construction" Icon={PuzzleIcon} bgCol="text-blue-400"/>
                    <Services name="Wholesale and retail" Icon={ShoppingCartIcon} bgCol="text-gray-400"/>
                    <Services name="Education" Icon={LibraryIcon} bgCol="text-amber-700"/>
                    <Services name="Energy and resources" Icon={LightBulbIcon} bgCol="text-yellow-400"/>
                    <Services name="Entertainment" Icon={FilmIcon} bgCol="text-blue-400"/>
                    <Services name="Transport" Icon={TruckIcon} bgCol="text-black"/>
                </div>
                
            </div>
        </div>
        
    )
}

export default Body