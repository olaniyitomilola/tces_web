export default function Login() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center bg-gray-50"> 
            <h2 className="text-2xl font-bold mb-6 text-black">Login</h2>
            <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="mb-4">  
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                    />
                </div>  
                <div className="mb-6">  
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password        
                    </label>    
                    <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>  
                <div className="flex items-center justify-between">
                    <button
                        className="bg-black hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer`"
                        type="button"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}   
