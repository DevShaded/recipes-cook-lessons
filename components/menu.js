export default function Menu({ menuTitle, title }) {
    return (
        <section className="py-10 bg-gray-200">
            <div className="max-w-7xl mx-auto">
                <h6 className="text-center text-2xl font-light">OUR MENU</h6>
                <h2 className="text-center font-playfair text-5xl pt-5">Delicious From The Chef</h2>
            </div>

            <div
                className="max-w-4xl mx-auto grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-5 mt-12 justify-items-center">
                <div className="mx-5">
                    <h6 className="font-light text-xl text-center">PEAR SALAD / $11</h6>
                    <p className="text-center pt-3">Reid’s Orchard Pears / Bitter Greens / Granola / Big Firefly / Farms
                        Black and Blue / Pine Nut Vinaigrette</p>
                </div>
                <div className="mx-5">
                    <h6 className="font-light text-xl text-center">BRODETTO DI PESCE / $9</h6>
                    <p className="text-center pt-3">Adriatic Seafood Soup / Clams / Prawns / Livornese / Langoustine
                        Scallop / Celery / Olive</p>
                </div>

                <div className="mx-5">
                    <h6 className="font-light text-xl text-center">FARM GREENS / $9</h6>
                    <p className="text-center pt-3">Honey Vinaigrette / House Cheese Crouton / Fine Herbs</p>
                </div>
                <div className="mx-5">
                    <h6 className="font-light text-xl text-center">GRILLED KALE / $9</h6>
                    <p className="text-center pt-3">Bitter Greens / House Cheese Crouton / Kamon Iberico</p>
                </div>

                <div className="mx-5">
                    <h6 className="font-light text-xl text-center">RICOTTA GNUD / $18</h6>
                    <p className="text-center pt-3">Marinated Sardine / Red Currant / Chanterelles / Pine Nuts /
                        Mantecato Vitello / Fennel / Olive / Pepitas</p>
                </div>
                <div className="mx-5">
                    <h6 className="font-light text-xl text-center">CANESTRELLI / $18</h6>
                    <p className="text-center pt-3">Reid Orchatd Pears / Bitter Greens / House Cheese Crouton /
                        Marinated Sardine / Chanterelles / Clams</p>
                </div>
            </div>
        </section>
    )
}