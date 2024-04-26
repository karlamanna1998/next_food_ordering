export default function MenuItem() {
    return (
        <div className="text-center bg-gray-300 rounded-md p-4  hover:bg-white hover:shadow-md transition-all hover:shadow-black/25">
            <img src="/pizza.png" />
            <h3 className="text-xl font-semibold my-2">Pepperoni Pizza</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum  est quibusdam libero maiores, veritatis facere et dolore!bb</p>
            <button className="px-5 py-2 bg-primary rounded-full mt-4 text-white">Add to cart $12</button>
        </div>
    )
}