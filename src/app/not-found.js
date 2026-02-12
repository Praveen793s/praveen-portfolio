import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
            <div className="text-center max-w-4xl w-full">
                <div className="relative w-full aspect-video max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                    <Image
                        src="/404.jpeg"
                        alt="404 Not Found"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
                <p className="text-lg md:text-xl mb-10 text-gray-400 max-w-2xl mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    )
}
