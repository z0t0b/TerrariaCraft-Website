// Package imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";

export default function Error() {
  return (
    <div className="h-screen w-screen flex flex-col xl:flex-row justify-center items-center bg-gray-400 bg-opacity-70">
      <div className="h-1/3 md:h-1/5 xl:h-1/4 w-11/12 lg:w-2/3 xl:w-1/2 bg-red-600 rounded-xl flex justify-between items-center p-4 lg:p-8">
        <FontAwesomeIcon
          className="text-white h-1/3 md:h-1/2 mx-2 xl:h-full"
          size="6x"
          icon={faBug}
        />
        <div className="mx-4 xl:mx-6">
          <p className="text-white text-base md:text-2xl xl:text-3xl">
            An Error Has Occurred!
          </p>
          <hr className="my-2" />
          <p className="text-white text-xs md:text-sm xl:text-base text-left lg:text-justify">
            Please double-check that the JSON used to build the site has all the
            correct keys. If you are not the owner of this site, please report
            the date/time of the error, the browser you're using, and what you
            were doing when this error occurred on{" "}
            <a
              className="text-blue-600 hover:text-blue-800 underline"
              href="https://discord.terrariacraft.com/"
            >
              discord.terrariacraft.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
