import logo from "../../asset/image/logo.svg";
import twicon from "../../asset/image/twicon.svg";
import fbicon from "../../asset/image/fbicon.svg";
import igicon from "../../asset/image/igicon.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between items-center py-14 px-24 md:px-[115px] md:pt-[82px] md:pb-[53px]">
      <img className="hidden md:block w-100" src={logo} alt="" />
      <div className="flex flex-row">
        <img className="mr-6" src={twicon} alt="" />
        <img className="mr-6" src={fbicon} alt="" />
        <img src={igicon} alt="" />
      </div>
      <div>
        <p className="mt-5 md:mt-0 text-[#5C5C5C] text-center text-xs font-bold font-rob">
          Copywright 2023 Bella Onojie.com
        </p>
      </div>
    </footer>
  );
};
