function Services({name, Icon, bgCol}) {
    return (
        <div className={`rounded-lg p-3 border-4 border-pink-400 w-96 flex flex-col items-center hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-2 transition duration-500 ease-in-out ${bgCol}`}> 
            <Icon className="w-24" />
            <h1 className="text-xl font-bold text-gray-600" >{name}</h1>
        </div>
    )
}

export default Services