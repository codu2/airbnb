import Image from "next/image";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(), // url에서 사용하기 위해 변환
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-sm p-4 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-8 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "어디로 여행가세요?"}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline cursor-pointer text-sm font-medium">
          호스트 되기
        </p>
        <GlobeAltIcon className="h-5 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6 text-gray-500" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()} // 과거를 선택할 수 없도록
            rangeColors={["#fd5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4 pb-2">
            <h2 className="text-md flex-grow font-semibold">게스트 추가</h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={(event) => setNumberOfGuests(event.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-md outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              className="text-sm flex-grow text-gray-500"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button onClick={search} className="text-sm flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
