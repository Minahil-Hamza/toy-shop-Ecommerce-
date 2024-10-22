import Image from 'next/image';

function Sale() {
  return (
    
    <div className=" bg-purple-400 w-full flex justify-center items-center mt-10">
      <div className="w-[80%]">
        {/* Top Section */}
        <div className="mb-5 text-center">
          
          <h2 className="text-4xl font-bold mt-2">Flash Sales</h2>
          <button className="py-2 px-4 mt-2 bg-red-500 text-white rounded-md">
            View All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {/* Product Card 1 */}
          <div className="bg-green-300 p-4 rounded-md">
            <Image
              src="/images/fresh/toy4.jpg"
              width={250}
              height={120}
              alt="Toys"
            />
            <div className="mt-2 text-center">
              <span className="block font-bold">toy001</span>
              <span className="block font-bold">Rs: 3200</span>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-green-300 p-4 rounded-md">
            <Image
              src="/images/fresh/toy6.jpg"
              width={200}
              height={120}
              alt="Toys"
            />
            <div className="mt-2 text-center">
              <span className="block font-bold">toy002</span>
              <span className="block font-bold">Rs: 2500</span>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-green-300 p-4 rounded-md">
            <Image
              src="/images/fresh/toy8.jpg"
              width={200}
              height={100}
              alt="Toys"
            />
            <div className="mt-2 text-center">
              <span className="block font-bold">toy003</span>
              <span className="block font-bold">Rs: 2500</span>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-green-300 p-4 rounded-md">
            <Image
              src="/images/fresh/toy9.jpg"
              width={200}
              height={100}
              alt="Toys"
            />
            <div className="mt-2 text-center">
              <span className="block font-bold">toy004</span>
              <span className="block font-bold">Rs: 5000</span>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 5 */}
          <div className="bg-green-300 p-4 rounded-md">
            <Image
              src="/images/fresh/toy88.jpg"
              width={200}
              height={100}
              alt="Toys"
            />
            <div className="mt-2 text-center">
              <span className="block font-bold">toy005</span>
              <span className="block font-bold">Rs: 4000</span>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
