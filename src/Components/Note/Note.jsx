import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/logo.png";

export default function Note() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mx-auto w-full mt-4">
      <div className="flex justify-center">
        <button
          className="flex justify-center align-middle items-center bg-black bg-opacity-60 text-white w-48 px-48 lg:w-96 lg:px-96 py-1"
          onClick={() => setClicked(!clicked)}
        >
          <p className="mx-2 whitespace-nowrap">
            Notification! Click to view!{" "}
          </p>
          <FontAwesomeIcon icon={faBell} />
        </button>
      </div>
      {clicked && (
        <div className="flex justify-center mt-2">
          <div className="relative bg-black bg-opacity-60 text-white w-48 px-48 lg:w-96 lg:px-96 py-1">
            <img
              src={Logo}
              alt="Terraria Craft logo"
              className="h-16 w-16 absolute left-4 md:left-12 top-4 md:top-2"
            />
            <div className="flex flex-col text-right my-2 w-48 lg:w-96 pr-4">
              <p className="mx-2 whitespace-normal md:whitespace-nowrap text-2xl">
                YouTube!
              </p>
              <a
                href="https://www.youtube.com/channel/UCQzWyZeK9vOifuxaQAChASA"
                className="mx-2 whitespace-normal md:whitespace-nowrap underline text-blue-500"
              >
                Check out our YT channel here!
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
