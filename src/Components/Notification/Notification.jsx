// Package imports
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function Notification(props) {
  const { notificationData } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mx-auto w-full my-2">
      <div className="flex justify-center">
        <button
          className="rounded-md flex justify-center align-middle items-center bg-black bg-opacity-60 text-white w-48 px-48 lg:w-96 lg:px-96 py-1"
          onClick={() => setClicked(!clicked)}
        >
          <p className="mx-2 whitespace-nowrap">{notificationData.text}</p>
          {notificationData.includeIcon && <FontAwesomeIcon icon={faBell} />}
        </button>
      </div>
      {clicked && (
        <div className="flex justify-center mt-2">
          <div className="relative bg-black bg-opacity-60 text-white w-48 px-48 lg:w-96 lg:px-96 py-1">
            {notificationData.image && (
              <img
                src={notificationData.image}
                alt={notificationData.imageAltText}
                className="h-16 w-16 absolute left-4 md:left-12 top-4 md:top-2"
              />
            )}
            <div className="flex flex-col text-right my-2 w-48 lg:w-96 pr-4">
              <p className="mx-2 whitespace-normal md:whitespace-nowrap text-2xl">
                {notificationData.title}
              </p>
              {notificationData.subtitle.linkType === "external" ? (
                <a
                  href={notificationData.subtitle.link}
                  className="mx-2 whitespace-normal md:whitespace-nowrap underline text-blue-500 hover:text-blue-600"
                >
                  {notificationData.subtitle.text}
                </a>
              ) : (
                <Link
                  to={notificationData.subtitle.link}
                  className="mx-2 whitespace-normal md:whitespace-nowrap underline text-blue-500 hover:text-blue-600"
                >
                  {notificationData.subtitle.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
