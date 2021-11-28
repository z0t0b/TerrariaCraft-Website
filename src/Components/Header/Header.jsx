import { Link } from "react-router-dom";
import { useState } from "react";
import header from "../../images/header.png";

export default function Header(props) {
  const [hoverMain, setHoverMain] = useState(false);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverDownload, setHoverDownload] = useState(false);
  const [hoverIssues, setHoverIssues] = useState(false);

  const { pageName } = props;
  return (
    <header className="w-full bg-black bg-opacity-60">
      <div className="w-full flex justify-center mb-2">
        <Link to="/">
          <img
            className="max-w-full box-border pt-2 ml-3"
            src={header}
            width={365}
            alt="Logo"
          />
        </Link>
      </div>
      <nav
        style={{
          fontFamily: "'Roboto Condensed', sans-serif",
        }}
        className="flex flex-col md:flex-row justify-center m-auto text-center px-4 pt-2 text-2xl text-white"
      >
        <Link
          onMouseEnter={() => setHoverMain(true)}
          onMouseLeave={() => setHoverMain(false)}
          to="/"
          style={{
            borderBottom: pageName === "main" ? "2px solid white" : "",
          }}
          className={`mx-1 px-4 py-3 transition-all duration-300${
            hoverMain
              ? ` border-b-2 border-white border-dashed text-3xl ${
                  pageName === "main"
                    ? "bg-black bg-opacity-30"
                    : "bg-black bg-opacity-20"
                }`
              : `${pageName === "main" ? " bg-black bg-opacity-30" : ""}`
          }`}
        >
          Main
        </Link>
        <Link
          onMouseEnter={() => setHoverAbout(true)}
          onMouseLeave={() => setHoverAbout(false)}
          to="/about"
          style={{
            borderBottom: pageName === "about" ? "2px solid white" : "",
          }}
          className={`mx-1 px-4 py-3 transition-all duration-300${
            hoverAbout
              ? ` border-b-2 border-white border-dashed text-3xl ${
                  pageName === "about"
                    ? "bg-black bg-opacity-30"
                    : "bg-black bg-opacity-20"
                }`
              : `${pageName === "about" ? " bg-black bg-opacity-30" : ""}`
          }`}
        >
          About
        </Link>
        <Link
          onMouseEnter={() => setHoverDownload(true)}
          onMouseLeave={() => setHoverDownload(false)}
          to="/download"
          style={{
            borderBottom: pageName === "download" ? "2px solid white" : "",
          }}
          className={`mx-1 px-4 py-3 transition-all duration-300${
            hoverDownload
              ? ` border-b-2 border-white border-dashed text-3xl ${
                  pageName === "download"
                    ? "bg-black bg-opacity-30"
                    : "bg-black bg-opacity-20"
                }`
              : `${pageName === "download" ? " bg-black bg-opacity-30" : ""}`
          }`}
        >
          &#11015; Download
        </Link>
        <a
          onMouseEnter={() => setHoverIssues(true)}
          onMouseLeave={() => setHoverIssues(false)}
          href="https://github.com/terrariacraft/Issues/issues"
          className={`mx-1 px-4 py-3 transition-all duration-300${
            hoverIssues
              ? " border-b-2 border-white border-dashed text-3xl bg-black bg-opacity-20"
              : ""
          }`}
        >
          ❕ Issue Tracker
        </a>
      </nav>
    </header>
  );
}
