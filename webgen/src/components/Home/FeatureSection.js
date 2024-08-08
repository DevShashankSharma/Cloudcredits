import { DevicePhoneMobileIcon, CodeBracketIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

function FeatureSection() {
    return (
        <section className="py-16 bg-white text-blue-700">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose WebGen?</h2>
            <div className="flex flex-wrap justify-center gap-8 px-4">
                <div className="w-full sm:w-1/3 text-center">
                    <div className="p-8 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition">
                        <DevicePhoneMobileIcon className="mx-auto mb-4 w-16 h-16 text-blue-500" />
                        <h3 className="text-2xl font-semibold mb-2">Responsive Design</h3>
                        <p className="text-gray-600">Ensure your site looks great on all devices.</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 text-center">
                    <div className="p-8 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition">
                        <CodeBracketIcon className="mx-auto mb-4 w-16 h-16 text-blue-500" />
                        <h3 className="text-2xl font-semibold mb-2">User-Friendly</h3>
                        <p className="text-gray-600">Intuitive interface for easy navigation and website creation.</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 text-center">
                    <div className="p-8 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition">
                        <PencilSquareIcon className="mx-auto mb-4 w-16 h-16 text-blue-500" />
                        <h3 className="text-2xl font-semibold mb-2">Real-Time Editing</h3>
                        <p className="text-gray-600">Edit and preview changes instantly with a seamless experience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
