import { Metadata } from "next"




export const generateMetadata = ({params}) => {
    return{
        title: `Product | ${params?.productId}`
    }
}

export default function ProductDescription({params}){
    return(
        <div className="text-7xl font-bold text-gray-900">
            This is the description page of the product {params?.productId}
        </div>
    )
}