import Image from 'next/image';

function Product() {
  return (
    <div className=" bg-orange-400 w-full flex flex-col items-center mt-10 mb-20">
      {/* Top Section */}
      <div className="w-[80%]">
        <div className="mb-5 text-center">
        
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-2xl font-bold">Best Selling Products</h2>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md">
              View All
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {/* Product Card 1 */}
          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/ttttt.jpeg" width={250} height={120} alt="gaming" />
            <div className="mt-2">
              <span className="block font-bold">toy003</span>
              <span className="block font-bold">Rs: 2500</span>
              <button className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/toy0.jpg" width={250} height={120} alt="gaming" />
            <div className="mt-2">
              <span className="block font-bold">toy003</span>
              <span className="block font-bold">Rs: 2500</span>
              <button className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/toy2.jpg" width={250} height={120} alt="gaming" />
            <div className="mt-2">
              <span className="block font-bold">toy003</span>
              <span className="block font-bold">Rs: 2500</span>
              <button className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/toy3.jpg" width={250} height={120} alt="gaming" />
            <div className="mt-2">
              <span className="block font-bold">toy003</span>
              <span className="block font-bold">Rs: 2500</span>
              <button className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Card 5 */}
          <div className="bg-green-300 p-4 rounded-md text-center">
            <Image src="/images/fresh/toy4.jpg" width={250} height={120} alt="Toys" />
            <div className="mt-2">
              <span className="block font-bold">toy003</span>
              <span className="block font-bold">Rs: 2500</span>
              <button className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
