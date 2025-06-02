// import "../src/index.css";
export default function Header(props) {

  //object destructuring
  const {name,location}=props
  return (
    <>
      {/* Tpo menu
      <div className="flex justify-between">
        <ul className="flex px-2 py-2 space-x-[10px] list-none">
          <li className=" cursor-pointer text-[#7E7E7E] text-[13px]">
            About Us
          </li>
          <li className=" cursor-pointer text-[#7E7E7E] text-[13px] border-l pl-[6px] border-gray-300">
            My Account
          </li>
          <li className=" cursor-pointer text-[#7E7E7E] text-[13px] border-l pl-[6px] border-gray-300">
            Wishlist
          </li>
          <li className=" cursor-pointer text-[#7E7E7E] text-[13px] border-l pl-[6px] border-gray-300">
            Order Tracking
          </li>
        </ul>

        <div className="text-[14px] text-[#7E7E7E] py-[14px]">
          100% Secure delivery without contacting the courier
        </div>
        <ul className=" list flex px-20 py-2 space-x-[10px]">
          <li className="cursor-pointer text-[#7E7E7E] text-[13px]">
            Need help? Call Us:{" "}
            <span className="text-[#3BB77E]">+1800 900</span>
          </li>
          <li className="cursor-pointer border-l border-gray-300 pl-[6px] text-[#7E7E7E] text-[13px] flex">
            English
            <span className="m-1">
              <img src="/img/downchevron.svg" alt="Down chevron" />
            </span>
          </li>
          <li className="cursor-pointer border-l border-gray-300 pl-[6px] text-[#7E7E7E] text-[13px] flex">
            USD
            <span className="m-1">
              <img src="/img/downchevron.svg" alt="Down chevron" />
            </span>
          </li>
        </ul>
      </div> */}

      <nav className="bg-[#3BB77E] text-white flex justify-between h-[100px]">
        {/* logo */}
        <img
          src="/img/logo.svg"
          className="px-[20px] py-[20px] h-[60px]"
          alt="logo"
        />

        {/* Search bar */}
        <div className="border-2 border-[#BCE3C9] w-[450px] h-[50px] my-[20px]  rounded-md flex justify-between shadow-lg shadow-white-500/50">
          <div className="flex">
            <ul className="list flex space-x-[4px] items-center mb-[20px]">
              <li className="text-[white] text-[20px] font-bold flex items-center">
                All Categories
                <span className="ml-[6px]">
                  <img src="/img/downchevronwhite.svg" alt="Down chevron" />
                </span>
              </li>
              <li className="text-[white] text-[14px] border-l border-white pl-[6px]">
                Search for items..
              </li>
            </ul>
          </div>
          <img
            src="/img/search.svg"
            className="w-[30px] h-[30px] my-[10px] mx-[10px]"
            alt="Search"
          />
        </div>

        {/* location */}
       <div className="border-2 border-[#BCE3C9] w-[240px] h-[40px] my-[28px] mt-7 rounded-md flex items-center ml-7 shadow-lg shadow-white/50 px-4">
  <div className="flex items-center gap-[8px] w-full justify-between">
    <img src="/img/location.svg" className="w-[18px] h-[18px] ml-[20px]" alt="Location Icon" />

    <span className="text-[white] text-[20px] font-semibold text-center">
      Location
    </span>

    <img src="/img/downchevronwhite.svg" className="w-[20px] h-[200px] mr-[20px]" alt="Dropdown Icon" />
  </div>
</div>




        {/* right menu */}
        <ul className=" list px-[24px] py-[20px]  flex space-x-[24px] justify-end">
          <li className="cursor-pointer text-[16px] flex text-[#ffffff]">
            <span>
              <img
                src="/img/compare.svg"
                className="w-6 h-6  mx-1"
                alt="Search"
              />
            </span>
            Compare
          </li>
          <li className="cursor-pointer text-[16px] flex text-[#ffffff]">
            <span>
              <img
                src="/img/wishlist.svg"
                className="w-6 h-6  mx-1"
                alt="Search"
              />
            </span>
            Wishlist
          </li>
          <li className="cursor-pointer text-[16px] flex text-[#ffffff]">
            <span>
              <img src="/img/cart.svg" className="w-6 h-6  mx-1" alt="Search" />
            </span>
            Cart
          </li>
          <li className="cursor-pointer text-[16px] flex text-[#ffffff]">
            <span>
              <img
                src="/img/account.svg"
                className="w-6 h-6  mx-1"
                alt="Search"
              />
            </span>
            {name}
          </li>
        </ul>
      </nav>

      {/* Third menu */}
      <div className="border-b border-gray-300">
        <div className="w-120 h-[50px] my-[10px] mx-[20px] flex">
          <div className="flex py-[2px] bg-[#3BB77E] rounded-[8px] text-white">
            <ul className=" list flex space-x-[4px] mx-[2px] mr-[5px]  pl-[14px]">
              <li>
                <img
                  src="/img/categories.svg"
                  className="w-6 h-6"
                  alt="Search"
                />
              </li>
              <li className="text-[#ffffff] text-[14px]">
                Browse all Categories
              </li>
              <li>
                <img
                  src="/img/downchevronwhite.svg"
                  className="w-10 h-6"
                  alt="Search"
                />
              </li>
            </ul>
          </div>

          <ul className=" list flex space-x-[26px] px-[6px] py-[2px] ">
            <li className="cursor-pointer text-[#253D4E] flex">
              <span>
                <img src="/img/deals.svg" alt="Down chevron" />
              </span>
              Deals
            </li>
            <li className="cursor-pointer text-[#253D4E] flex">
              Home
              <span className="m-[1px] my-[2px]">
                <img src="/img/downchevron.svg" alt="Down chevron" />
              </span>
            </li>
            <li className="cursor-pointer text-[#253D4E] flex">
              About
              <span className="m-[1px] my-[2px]">
                <img src="/img/downchevron.svg" alt="Down chevron" />
              </span>
            </li>
            <li className="cursor-pointer text-[#253D4E] flex">
              Shop
              <span className="m-[1px] my-[2px]">
                <img src="/img/downchevron.svg" alt="Down chevron" />
              </span>
            </li>
            <li className="cursor-pointer text-[#253D4E] flex">
              Vendors
              <span className="m-[1px] my-[2px]">
                <img src="/img/downchevron.svg" alt="Down chevron" />
              </span>
            </li>
            <li className="cursor-pointer text-[#253D4E] flex">
              Mega Menu
              <span className="m-[1px] my-[2px]">
                <img src="/img/downchevron.svg" alt="Down chevron" />
              </span>
            </li>
            <li className="cursor-pointer text-[#253D4E] flex">
              Blog
              <span className="m-[1px] my-[2px]">
                <img src="/img/downchevron.svg" alt="Down chevron" />
              </span>
            </li>
            <li className="cursor-pointer text-[#253D4E] flex">
              Pages
              <span className="m-[1px] my-[2px]">
                <img src="/img/downchevron.svg" alt="Down chevron" />
              </span>
            </li>
            <li className="cursor-pointer text-[#253D4E] flex">
              Contact
              <span className="m-[1px] my-[2px]">
                <img src="/img/downchevron.svg" alt="Down chevron" />
              </span>
            </li>
          </ul>

          {/* <div className="flex pl-24">
          <img src="/img/support.svg" alt="support" />
          <div className="flex-col">
            <p className="text-[26px] text-[#3BB77E] font-bold m-0 p-0">1900 - 888</p>
            <p className="text-[12px] text-[#7E7E7E] m-0 p-0">24/7 Support Center</p>
          </div>
          </div> */}
        </div>
      </div>

      {/* Left section */}

      {/* <div className="flex-col">
        <div className="w-22 h-22 mx-20 my-8 flex justify-center items-center">
      <img src="img/wallpaper.svg" className="rounded-3xl h-22"></img>
      </div>

        <div className=" ml-20 my-8">
          <p className="py-8 px-8 text-[24px] text-[#253D4E] inline-block relative">
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#BCE3C9]">
              Shop by Catego
            </span>
            ries
          </p>

          <ul className="list flex flex-row  ">
            <li className="relative w-[180px] h-[200px] mx-[6px] my-2 border-2 border-[#F2F3F4] rounded-md bg-[#F4F6FA] flex justify-center items-center">
              <img src="img/category-1.svg" className="w-16 h-16 mb-10" />
            </li>
            <li className="relative w-[200px] h-[200px] mx-[6px] my-2 border-2 border-[#F2F3F4] rounded-md bg-[#F4F6FA] flex justify-center items-center">
              <img src="img/category-2.svg" className="w-16 h-16 mb-10"></img>
            </li>
            <li className="relative w-[200px] h-[200px] mx-[6px] my-2 border-2 border-[#F2F3F4] rounded-md bg-[#F4F6FA] flex justify-center items-center">
              <img src="img/category-3.svg" className="w-20 h-20 mb-10"></img>
            </li>
            <li className="relative w-[200px] h-[200px] mx-[6px] my-2 border-2 border-[#F2F3F4] rounded-md bg-[#F4F6FA] flex justify-center items-center">
              <img src="img/category-4.svg" className="w-16 h-16 mb-10"></img>
            </li>
            <li className="relative w-[200px] h-[200px] mx-[6px] my-2 border-2 border-[#F2F3F4] rounded-md bg-[#F4F6FA] flex justify-center items-center">
              <img src="img/category-5.svg" className="w-16 h-16 mb-10"></img>
            </li>
            <li className="relative w-[200px] h-[200px] mx-[6px] my-2 border-2 border-[#F2F3F4] rounded-md bg-[#F4F6FA] flex justify-center items-center">
              <img src="img/category-6.svg" className="w-20 h-20 mb-10"></img>
            </li>
            <li className="relative w-[200px] h-[200px] mx-[6px] my-2 border-2 border-[#F2F3F4] rounded-md bg-[#F4F6FA] flex justify-center items-center">
              <img src="img/category-7.svg" className="w-20 h-20 mb-10"></img>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
}
