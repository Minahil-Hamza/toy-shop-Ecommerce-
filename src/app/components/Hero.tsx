import Image from "next/image";

function Hero() {
    return (
        
        <div className='w-full h-[270px] bg-yellow-500 flex justify-center'>
            <div className='bg-red-500 h-full w-[80%] flex justify-between'>
                {/* Left Side */}
                   

                <div className="bg-yellow-400 p-10 rounded-lg shadow-lg max-w-2xl w-full flex flex-col md:flex-row items-center border-4 border-pink-300 relative">
                    {/* Background Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full max-w-[500px] max-h-[400px]">
                            <Image
                                src="/images/fresh/tbacl.jpg"
                                alt="image"
                                width={600}
                                height={400}
                                style={{ objectFit: "cover" }}
                               
                            />
                        </div>
                    </div>
                </div>

                <div className='w-[250px]'>
                    <h1 className='bg-pink-500 text-4xl font-sans font-bold ml-5'><i>Up to 10% off Voucher</i></h1>
                    <button className='hover: underline underline-offset-8 font-bold ml-9 mt-7'><b><i>Shop Now</i></b></button>
                </div>
            </div>

            {/* Right Side */}
            <div>
                <Image 
                    src="/images/fresh/toy1.jpg" 
                    width={400} 
                    height={300} 
                    alt='Heroimage'
                    style={{ marginTop: '20px' }} // Use style here for margins
                />
            </div>
        </div>
    )
}

export default Hero;
