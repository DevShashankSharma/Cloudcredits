import { DevicePhoneMobileIcon, CodeBracketIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

function FeatureSection() {
    return (
        <section className="relative py-16 text-white overflow-hidden">
            {/* Background with Gradient and Particles */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-purple-800 to-blue-800">
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-72 h-72 bg-blue-600 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-float1"></div>
                    <div className="absolute w-96 h-96 bg-purple-600 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-float2"></div>
                    <div className="absolute w-48 h-48 bg-pink-600 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-float3"></div>
                </div>
            </div>

            <h2 className="relative text-4xl font-bold text-center mb-12 z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
                Why Choose WebGen?
            </h2>


            <div className="relative z-10 flex flex-wrap justify-center gap-8 px-4">
                <div className="w-full sm:w-1/3 text-center">
                    <div className="p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out hover:bg-opacity-40 focus:bg-opacity-50 focus:shadow-outline">
                        <DevicePhoneMobileIcon className="mx-auto mb-4 w-16 h-16 text-blue-100 animate-spin-slow" />
                        <h3 className="text-2xl font-semibold mb-2">Responsive Design</h3>
                        <p className="text-gray-200">Ensure your site looks great on all devices.</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 text-center">
                    <div className="p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out hover:bg-opacity-40 focus:bg-opacity-50 focus:shadow-outline">
                        <CodeBracketIcon className="mx-auto mb-4 w-16 h-16 text-blue-100 animate-bounce" />
                        <h3 className="text-2xl font-semibold mb-2">User-Friendly</h3>
                        <p className="text-gray-200">Intuitive interface for easy navigation and website creation.</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 text-center">
                    <div className="p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out hover:bg-opacity-40 focus:bg-opacity-50 focus:shadow-outline">
                        <PencilSquareIcon className="mx-auto mb-4 w-16 h-16 text-blue-100 animate-pulse" />
                        <h3 className="text-2xl font-semibold mb-2">Real-Time Editing</h3>
                        <p className="text-gray-200">Edit and preview changes instantly with a seamless experience.</p>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style>
                {`
                    .animate-float1 {
                        animation: float 6s ease-in-out infinite;
                        animation-delay: 0s;
                    }
                    .animate-float2 {
                        animation: float 8s ease-in-out infinite;
                        animation-delay: 2s;
                    }
                    .animate-float3 {
                        animation: float 10s ease-in-out infinite;
                        animation-delay: 4s;
                    }
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                        100% { transform: translateY(0px); }
                    }
                    .animate-spin-slow {
                        animation: spin 12s linear infinite;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </section>
    );
}

export default FeatureSection;
