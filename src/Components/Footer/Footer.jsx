// Package imports
import { Link } from "react-router-dom";

export default function Footer(props) {
  const { footerData } = props;

  return (
    <footer
      style={{
        backgroundColor: "#3a3a3ade",
        borderTopColor: "rgba(255,255,255,0.418)",
      }}
      className="fixed bottom-0 py-8 w-full border-t-4 border-dotted"
    >
      <div
        style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
        className="text-md lg:text-xl text-white text-center flex justify-center items-center"
      >
        {footerData.includeCopyright && (
          <p className="mr-1">
            Copyright <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
            {new Date().getFullYear()} -
          </p>
        )}
        ARR -
        {footerData.linkType === "internal" ? (
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 underline ml-1"
          >
            {footerData.linkText}
          </Link>
        ) : (
          <a
            href={footerData.linkLocation}
            className="text-blue-500 hover:text-blue-600 underline ml-1"
          >
            {footerData.linkText}
          </a>
        )}
      </div>
    </footer>
  );
}
