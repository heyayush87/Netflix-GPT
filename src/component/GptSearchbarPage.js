import React from "react";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GptSearchbarPage = () => {
  const langKey = useSelector((store) => store.Config.lang);

  return (
    <div className="pt-[10%]  flex justify-center">
      <div className="absolute"></div>
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className=" p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptsearchPlaceholder}
        />
        <button className="col-span-3 m-2 bg-red-600  rounded -lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbarPage;
