import Link from "next/link";

export default function Products(){
    return(
        <div className="text-7xl flex flex-col gap-2 font-bold text-gray-900">
            Products

            <Link className="text-2xl font-normal text-blue-500" href="/products/1">
                Product 1
            </Link>

            <Link className="text-2xl font-normal text-blue-500" href="/products/2">
                Product 2
            </Link>

            <Link className="text-2xl font-normal text-blue-500" href="/products/3">
                Product 3
            </Link>
        </div>
    )
}