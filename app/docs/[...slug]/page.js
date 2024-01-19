export default function DocDetails({ params }) {

    if (params?.slug?.length == 1) {

        return (

            <h1 className="text-5xl text-gray-700 font-bold">Showing docs for {params?.slug[0]}</h1>

        )
    }
    else if (params?.slug?.length == 2) {
        return (

            <h1 className="text-5xl text-gray-700 font-bold">Showing docs for {params?.slug[0]} and concept {params?.slug[1]}</h1>

        )
    }
    else {

        return (
            <h1 className="text-5xl text-gray-700 font-bold">Docs details</h1>
        )
    }
}