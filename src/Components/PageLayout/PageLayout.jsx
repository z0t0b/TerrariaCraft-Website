// Custom page/component imports
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// Package imports
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function PageLayout(props) {
  const { layoutData, children } = props;

  return layoutData ? (
    layoutData.hasOwnProperty("header") &&
    layoutData.hasOwnProperty("background") &&
    layoutData.hasOwnProperty("footer") ? (
      <div
        style={{
          backgroundImage: `url(${layoutData.background.backgroundImagePath})`,
        }}
        className="w-screen h-screen bg-cover"
      >
        <Header headerData={layoutData.header} />
        {children}
        <Footer footerData={layoutData.footer} />
      </div>
    ) : (
      <Error />
    )
  ) : (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader type="ThreeDots" color="#4b960e" height={120} width={120} />
    </div>
  );
}
