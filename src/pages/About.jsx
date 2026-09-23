import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="min-h-screen bg-pink-100 p-10">
            <h1 className="justify-self-center font-extrabold text-3xl m-5">Build a Multi-Page React Application with Routing</h1>
            <p className="text-center font-light text-opacity-10 text-normal">The aim of this app is to create a React application with multiple pages (Home, About, and User) using React Router. The application should demonstrate navigation between pages, parameterized routes, and basic UI elements for a smooth user experience.</p>
                <div className="flex justify-center m-10">
                    <ul className="list-disc">
                        <li>set up routing</li>
                        <li>create pages</li>
                    </ul>
                </div>
            <div className="flex justify-center m-10">
                <button type="button" class="text-white bg-orange-500 box-border border py-2 px-3 rounded m-4">
                    <Link
                        to="/"
                    >
                        Go to Home
                    </Link>    
                </button>
            </div>
            
        </div>
    );
}

export default About;