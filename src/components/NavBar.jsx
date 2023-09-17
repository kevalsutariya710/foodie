
const NavBar = () => {


    return (
        <>
            <div className="'h-[500px] bg-pizza bg-no-repeat bg-cover bg-center py-4 shadow-md "  >
                <div className="flex justify-between p-11 lg:ml-6">
                    <div className="">
                        <h1 className="text-[50px] lg:text-[40px] leading-[1.1] font-normal mb-2">Foodie</h1>
                        <h1 className="font-semibold flex items-center uppercase">
                            {new Date().toUTCString().slice(0, 16)}
                        </h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavBar