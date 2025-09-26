import React from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="bg-blackColor text-whiteColor">
         <Marquee>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
      <div className="container mx-auto">
        <div className="font-poppins relative flex justify-center py-[12px]">
          <h3 className="ladding-[21px] text-center text-sm font-normal">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="£" className="pl-[8px] underline font-semibold">
              Shopnow
            </a>
          </h3>
          <select
            name=""
            id=""
            className="absolute right-0 bg-transparent text-whiteColor outline-none"
          >
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
