export default function Header({ title, description }) {
    return (
        <header className="bg-cover bg-center image">
            <div className="items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                <img className="mx-auto pt-24" src="./Images/logo.png" alt="Restaurant_Logo"/>
                <div className="text-center text-white px-10 pt-14 md:pt-24">
                    <h1 className="max-w-7xl mx-auto text-5xl font-playfair md:text-7xl ">{ title }</h1>
                    <p className="pt-10 px-5 max-w-3xl mx-auto md:text-xl">{ description }</p>
                </div>
            </div>
        </header>
    )
}