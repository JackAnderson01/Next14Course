export default function ProductsLayout({children}){
    return(
        <div className="p-4">
        <h1 className="text-xl font-bold text-gray-900">Featured Products</h1>
        {children}
        </div>
    )
}