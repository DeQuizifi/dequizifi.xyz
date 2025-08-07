import { HiOutlineBolt, HiOutlineStar } from "react-icons/hi2";

export default function Hero() {
    return(
        <section className="flex flex-col items-center justify-center min-h-screen bg-purple-50">

            <div className="flex items-center gap-1 space-between mb-6 mt-4 px-4 py-1 rounded-full text-xs bg-violet-50 text-violet-600 border border-violet-200 font-semibold shadow">
                <span><HiOutlineStar /></span> Farcaster Native DeFi Education
            </div>

            <h1 className="text-black text-7xl md:text-7xl font-extrabold text-center mb-2">Learn Defi,</h1>

            <h2 className="text-5xl md:text-5xl font-extrabold text-center text-violet-500 mb-4">
                Earn Rewards
            </h2>

            <p className="text-xl text-center text-gray-500 max-w-2xl mb-8 mt-5">
                Master DeFi through engaging quizzes, earn tokens, collect badges, and join the most elegant crypto education platform built for the Farcaster community.
            </p>

            <div className="flex w-full max-w-md gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-400 bg-violet-500 hover:bg-violet-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition">
                    Start Learning →
                </button>
                <button className="bg-white text-black hover:bg-violet-50 border shadow font-semibold px-8 py-3 rounded-lg transition flex items-center gap-2">
                    <span><HiOutlineBolt /></span> Explore Quizzes
                </button>
            </div>

            <div className="flex gap-28 mb-8">
                <div className="text-center">
                    <span className="block text-2xl font-bold text-violet-600">1000+</span>
                    <span className="text-gray-500 text-sm">DeFi Questions</span>
                </div>
                <div className="text-center">
                    <span className="block text-2xl font-bold text-violet-600">50K+</span>
                    <span className="text-gray-500 text-sm">Tokens Earned</span>
                </div>
                <div className="text-center">
                    <span className="block text-2xl font-bold text-violet-600">500+</span>
                    <span className="text-gray-500 text-sm">Active Learners</span>
                </div>
            </div>
        </section>
    )
}