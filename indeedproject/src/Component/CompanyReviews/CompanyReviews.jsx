import { Navbar } from "../Pages/Navbar";
import InputPart from "./InputPart";
import MiniFooter from "./MiniFooter";
import PopularCompanies from "./PopularCompanies";

const CompanyReviews = () => {
  return (
    <>
    <Navbar/>
      <InputPart />
      <PopularCompanies />
      <MiniFooter/>
    </>
  );
};

export default CompanyReviews;
