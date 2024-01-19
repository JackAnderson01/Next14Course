export const metadata = {
    title: 'SelfLearn | Login',
    description: 'Generated by create next app',
}



export default function AuthLayout({ children }) {



    return (
        <div className="w-full flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Auth Layout</h1>
            {children}
        </div>
    )
}