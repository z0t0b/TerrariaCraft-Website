// Package imports
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const { headerData } = props;
  const location = useLocation();

  return (
    <header className="w-full bg-black bg-opacity-60 relative z-10">
      <div className="w-full flex justify-center mb-2">
        <Link to="/">
          <img
            className="max-w-full box-border pt-2 ml-3"
            src={headerData.headerImagePath}
            width={365}
            alt="Logo"
          />
        </Link>
      </div>
      <nav
        style={{
          fontFamily: "'Roboto Condensed', sans-serif",
        }}
        className="flex flex-col md:flex-row justify-center m-auto text-center px-4 pt-2 text-2xl text-white h-64 md:h-full overflow-y-auto"
      >
        {headerData.tabs.map((tab) => {
          let pageName = "main";
          if (location.pathname.includes("about")) pageName = "about";
          if (location.pathname.includes("download")) pageName = "download";

          if (tab.linkType === "internal")
            return (
              <Link
                key={tab.title}
                to={tab.link}
                className={`mx-1 px-4 py-3 transition-all duration-300 border-white border-b-2 border-opacity-0 hover:border-opacity-100 ${
                  pageName === tab.title.toLowerCase()
                    ? "border-solid border-opacity-100 bg-black bg-opacity-40 hover:bg-opacity-50"
                    : "border-dashed hover:bg-black hover:bg-opacity-20"
                }`}
              >
                {tab.title}
              </Link>
            );
          else if (tab.linkType === "external")
            return (
              <a
                key={tab.title}
                href={tab.link}
                target="__blank"
                className="mx-1 px-4 py-3 transition-all duration-300 border-white border-b-2 border-opacity-0 hover:border-opacity-100 border-dashed hover:bg-black hover:bg-opacity-20"
              >
                {tab.title}
              </a>
            );
          else return <></>;
        })}
      </nav>
    </header>
  );
}
