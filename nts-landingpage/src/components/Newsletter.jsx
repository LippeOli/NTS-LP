import React from "react";

const Newsletter = () => {
    return(

        <div className="w-full py-20 bg-black text-white px-4">
             <div className="max-w [1240px] max-auto grid lg:grid-cols-3"> 
                <div className='lg:col-span-2 my-4'>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold p-2">Want tips & tricks to optimize your flow?</h1>
                    <p className="mx-3">Lets sign up in our family, be a star with your business</p>
                </div>

                <div className="my-4">
                    <div className="flex flex-col items-center justify-center w-full sm:flex-row">
                        <input
                            className="p-3 w-full rounded-md text-black" 
                            type="email" 
                            placeholder="Enter email" 
                        />
                                
                        <button 
                            className="bg-[#00df9a] w-[200px] h-[35px] rounded-md font-medium my-6 sm:ml-4 sm:my-0 mx-auto px-3 text-black">
                            Notify me
                        </button>

                    </div>
                    
                    <div className="flex flex-col sm:flex-row">
                        <p>We care about the protection of your data. </p> 
                        <span className="text-[#00df9a] mx-1"> Privacy Policy.</span>
                    </div>

                </div>
            </div>
        </div>    

    );

};

export default Newsletter;