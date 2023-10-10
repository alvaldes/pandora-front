import { LuSearch } from "react-icons/lu";

export const Search = ({ search, id }) => {
  return (
    <div className="flex justify-end mb-2 mt-2 mx-2">
      <div className="relative w-full md:w-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <LuSearch className="w-5 h-5 text-base-content" />
        </div>
        <input
          type="text"
          name="search"
          className="pl-10 rounded-lg w-full input input-bordered input-md md:w-64 lg:w-96"
          placeholder="Buscar..."
          onChange={(e) => search(id, e)}
        ></input>
      </div>
    </div>
  );
};
