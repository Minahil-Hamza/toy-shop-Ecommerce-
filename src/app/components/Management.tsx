import Image from 'next/image';

function Management() {
  return (
    <div className="bg-yellow-500 w-full flex flex-col items-center mt-10 mb-20">
      {/* Top Section */}
      <div className="w-[80%]">
        <div className="mb-5 text-center">

          <div className="flex justify-between items-center mt-4">
            <h2 className="text-3xl font-bold">Best Selling Toys for Baby Girls</h2>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md">
              View All
            </button>
          </div>
        </div>

        {/* Management Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {/* Management Card 1 */}
          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/g1.jpg" width={250} height={120} alt="Toys" />
            <div className="mt-2">
              <span className="block font-bold">Girls Toy001</span>
              <span className="block font-bold">Rs:5900</span>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/g7.jpg" width={250} height={120} alt="Toys" />
            <div className="mt-2">
              <span className="block font-bold">Girls Toy002</span>
              <span className="block font-bold">Rs: 4700</span>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/g6.jpg" width={250} height={120} alt="Toys" />
            <div className="mt-2">
              <span className="block font-bold">Girls Toy003</span>
              <span className="block font-bold">Rs: 2200</span>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/g8.jpg" width={250} height={120} alt="Toys" />
            <div className="mt-2">
              <span className="block font-bold">Girls Toy004</span>
              <span className="block font-bold">Rs: 1500</span>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/g9.jpg" width={250} height={120} alt="Toys" />
            <div className="mt-2">
              <span className="block font-bold">Girls Toy005</span>
              <span className="block font-bold">Rs: 3500</span>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/g3.jpg" width={250} height={120} alt="Toys" />
            <div className="mt-2">
              <span className="block font-bold">Girls Toy006</span>
              <span className="block font-bold">Rs: 2700</span>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 5 */}
          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/g2.jpg" width={250} height={120} alt="Toys" />
            <div className="mt-2">
              <span className="block font-bold">toy003</span>
              <span className="block font-bold">Rs: 3800</span>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Management;
