/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addSearch } from "../../feature/filter/filterSlice";
export default function Search() {
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let timeId;
  useEffect(() => {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      dispatch(addSearch(search));
    }, 1000);
    return () => clearTimeout(timeId);
  }, [search]);
  return (
    <div className="flex absolute right-10 text-xl text-sky-500 ">
      <button
        onClick={() => setShow(!show)}
        className={`${show && "text-yellow-600 duration-300 "}`}
      >
        <AiOutlineSearch />
      </button>

      <input
        type="text"
        value={search}
        placeholder="serach with tags"
        className={`absolute right-7 -top-2 bg-black/40 backdrop-blur-3xl rounded-full text-xs font-thin mt-1 h-[1.7rem] outline-none placeholder-gray-300/20 ${
          show ? "show" : "hide"
        }`}
        style={{ paddingLeft: show && "10px" }}
        onChange={handleSearch}
      />
    </div>
  );
}
