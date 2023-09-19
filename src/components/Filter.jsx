

const Filter = () => {
    return (
        <div className="mx-6 md:flex lg:flex justify-between">
            <div>
                <h3 className="mt-5 font-semibold flex items-center"> Category</h3>
                <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden no-scrollbar">
                    <button className="px-3 py-2 bg-gray-200 font-bold rounded-xl hover:bg-green-600 hover:text-white cursor-pointer">
                        All
                    </button>
                    <button className="px-3 py-2 bg-gray-200 font-bold rounded-xl hover:bg-green-600 hover:text-white cursor-pointer">
                        Lunch
                    </button>
                    <button className="px-3 py-2 bg-gray-200 font-bold rounded-xl hover:bg-green-600 hover:text-white cursor-pointer">
                        BreakFast
                    </button>
                    <button className="px-3 py-2 bg-gray-200 font-bold rounded-xl hover:bg-green-600 hover:text-white cursor-pointer">
                        Dinner
                    </button>
                    <button className="px-3 py-2 bg-gray-200 font-bold rounded-xl hover:bg-green-600 hover:text-white cursor-pointer">
                        Dinner
                    </button>
                </div>
            </div>
            <div className="max-w-sm px-6">
                <div className="relative mt-8 lg:mt-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input type="search"
                        name=""
                        placeholder="Search..."
                        id=""
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-green-600"
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter