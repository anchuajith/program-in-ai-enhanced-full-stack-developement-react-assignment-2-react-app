import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function UserDetails() {

    const params = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {

    const fetchUser = async () => {
        const response = await fetch(
            "https://dummyjson.com/users/" + params.id
        );

        const data = await response.json();

        setUser(data);
        };

            fetchUser();

        }, [params.id]);

    return (
        <div className="min-h-screen bg-pink-100 p-10">
            <div className='flex justify-end'>
                <Link
                    to="/"
                    className="text-orange-500 border border-orange-500
                            py-2 px-4 rounded mt-5 hover:bg-orange-50"
                >
                    Go Back
                </Link>
            </div>
            
            {/* Header */}
            <div className="text-center mb-10">

                <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                />

                <h1 className="font-extrabold text-3xl">
                    {user.firstName} {user.lastName}
                </h1>

                <p className="text-gray-600">
                    @{user.username}
                </p>

            </div>


            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">

                <h2 className="text-xl font-bold mb-4">
                    Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <p>
                        <strong>ID:</strong> {user.id}
                    </p>

                    <p>
                        <strong>First Name:</strong> {user.firstName}
                    </p>

                    <p>
                        <strong>Last Name:</strong> {user.lastName}
                    </p>

                    <p>
                        <strong>Maiden Name:</strong> {user.maidenName}
                    </p>

                    <p>
                        <strong>Age:</strong> {user.age}
                    </p>

                    <p>
                        <strong>Gender:</strong> {user.gender}
                    </p>

                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {user.phone}
                    </p>

                    <p>
                        <strong>Birth Date:</strong> {user.birthDate}
                    </p>

                    <p>
                        <strong>Blood Group:</strong> {user.bloodGroup}
                    </p>

                    <p>
                        <strong>Role:</strong> {user.role}
                    </p>

                    <p>
                        <strong>University:</strong> {user.university}
                    </p>

                </div>

            </div>


            {/* Physical Information */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">

                <h2 className="text-xl font-bold mb-4">
                    Physical Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <p>
                        <strong>Height:</strong> {user.height} cm
                    </p>

                    <p>
                        <strong>Weight:</strong> {user.weight} kg
                    </p>

                    <p>
                        <strong>Eye Color:</strong> {user.eyeColor}
                    </p>

                    <p>
                        <strong>Hair Color:</strong> {user.hair?.color}
                    </p>

                    <p>
                        <strong>Hair Type:</strong> {user.hair?.type}
                    </p>

                </div>

            </div>


            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">

                <h2 className="text-xl font-bold mb-4">
                    Contact Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {user.phone}
                    </p>

                    <p>
                        <strong>IP Address:</strong> {user.ip}
                    </p>

                    <p>
                        <strong>MAC Address:</strong> {user.macAddress}
                    </p>

                </div>

            </div>


            {/* Address */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">

                <h2 className="text-xl font-bold mb-4">
                    Address
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <p>
                        <strong>Address:</strong> {user.address?.address}
                    </p>

                    <p>
                        <strong>City:</strong> {user.address?.city}
                    </p>

                    <p>
                        <strong>State:</strong> {user.address?.state}
                    </p>

                    <p>
                        <strong>State Code:</strong> {user.address?.stateCode}
                    </p>

                    <p>
                        <strong>Postal Code:</strong> {user.address?.postalCode}
                    </p>

                    <p>
                        <strong>Country:</strong> {user.address?.country}
                    </p>

                    <p>
                        <strong>Latitude:</strong> {user.address?.coordinates?.lat}
                    </p>

                    <p>
                        <strong>Longitude:</strong> {user.address?.coordinates?.lng}
                    </p>

                </div>

            </div>


            {/* Company */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">

                <h2 className="text-xl font-bold mb-4">
                    Company
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <p>
                        <strong>Company Name:</strong> {user.company?.name}
                    </p>

                    <p>
                        <strong>Department:</strong> {user.company?.department}
                    </p>

                    <p>
                        <strong>Job Title:</strong> {user.company?.title}
                    </p>

                    <p>
                        <strong>EIN:</strong> {user.ein}
                    </p>

                </div>

            </div>


            {/* Company Address */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">

                <h2 className="text-xl font-bold mb-4">
                    Company Address
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <p>
                        <strong>Address:</strong> {user.company?.address?.address}
                    </p>

                    <p>
                        <strong>City:</strong> {user.company?.address?.city}
                    </p>

                    <p>
                        <strong>State:</strong> {user.company?.address?.state}
                    </p>

                    <p>
                        <strong>State Code:</strong> {user.company?.address?.stateCode}
                    </p>

                    <p>
                        <strong>Postal Code:</strong> {user.company?.address?.postalCode}
                    </p>

                    <p>
                        <strong>Country:</strong> {user.company?.address?.country}
                    </p>

                </div>

            </div>


            {/* Crypto */}
            <div className="bg-white rounded-xl shadow-md p-6">

                <h2 className="text-xl font-bold mb-4">
                    Crypto Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <p>
                        <strong>Coin:</strong> {user.crypto?.coin}
                    </p>

                    <p>
                        <strong>Network:</strong> {user.crypto?.network}
                    </p>

                    <p className="break-all">
                        <strong>Wallet:</strong> {user.crypto?.wallet}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default UserDetails;