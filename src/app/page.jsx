"use client";
import { categories } from "./database/categories";
import { doctors } from "./database/doctors";
import { clinics } from "./database/clinics";
import { patients } from "./database/patients";
import { lorems } from "./database/lorem";
import { useState } from "react";
import TopNavbar from "./components/TopNavbar";
import LogoAndInput from "./components/LogoAndInput";
import MiddleInput from "./components/MiddleInput";
import SelectCategorySection from "./components/SelectCategorySection";
import BottomSection from "./components/BottomSection";

export default function Home() {
  const [pageChange, setPageChange] = useState(2);

  const handleChangePage = (id) => {
    setPageChange(id);
  };

  return (
    <div>
      <TopNavbar />
      <LogoAndInput />
      <MiddleInput />
      <SelectCategorySection
        handleChangePage={handleChangePage}
        categories={categories}
      />
      {pageChange === 1 && <BottomSection values={clinics} />}
      {pageChange === 2 && <BottomSection values={doctors} />}
      {pageChange === 3 && <BottomSection values={patients} />}
      {pageChange === 4 && <BottomSection values={lorems} />}
    </div>
  );
}
