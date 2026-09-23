import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="min-h-screen bg-pink-100 p-6">

            <div className="text-center mb-6">

                <h1 className="font-extrabold text-3xl text-gray-800 mb-2">
                    Welcome To My React App
                </h1>

                <p className="text-gray-600 text-sm">
                    A React application with multiple pages using React Router
                </p>

                <div className="flex justify-center mt-5">

                    <Link
                        to="/users"
                        className="text-white bg-orange-500 border border-orange-500
                                   py-2 px-4 rounded m-2 hover:bg-orange-600"
                    >
                        Go to User List
                    </Link>

                    <Link
                        to="/about"
                        className="text-orange-500 bg-white border border-orange-500
                                   py-2 px-4 rounded m-2 hover:bg-orange-50"
                    >
                        About Us
                    </Link>

                </div>

            </div>


            <div className="max-w-4xl mx-auto">

                <div className="bg-white rounded-xl shadow-md p-5 mb-5">

                    <h2 className="text-xl font-bold mb-2">
                        About React Router
                    </h2>

                    <p className="text-gray-600 text-sm leading-6">
                        React Router helps us create multiple pages in a React
                        application and navigate between them without
                        refreshing the browser.
                    </p>
                    <p className="text-gray-600 text-sm leading-6 py-2">By default, React is designed to build Single-Page Applications (SPAs), which load a single HTML file and dynamically swap content without refreshing the entire web browser. Because React does not come with built-in navigation capabilities, developers use React Router to map different browser URLs to specific React components</p>

                </div>

            </div>

        </div>
    );
}

export default Home;