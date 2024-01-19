import { notFound } from "next/navigation"

export default function ReviewDetails({params}){

    if(params?.reviewId > 500){
        notFound()
    }
    return(
        <div className="text-7xl font-bold text-gray-900">
            This is review {params?.reviewId} of product {params?.productId}
        </div>
    )
}