// Custom page/component imports
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Notification from "../../Components/Notification/Notification";
import Panel from "../../Components/Panel/Panel";

// Package imports
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function PageLayout(props) {
  const { layoutData, pageData } = props;

  return layoutData ? (
    layoutData.hasOwnProperty("header") &&
    layoutData.hasOwnProperty("background") &&
    layoutData.hasOwnProperty("footer") ? (
      <div className="w-screen h-screen">
        <img
          className="w-full h-full pointer-events-none object-cover absolute z-0"
          src={layoutData.background.backgroundImagePath}
        />
        <div className="w-full h-full">
          <Header headerData={layoutData.header} />
          <div className="relative h-1/2 md:h-2/3 py-2 w-full overflow-y-auto">
            {pageData.map((component, i) => {
              switch (component.component) {
                case "notification":
                  return (
                    <Notification
                      key={"notification_" + i}
                      notificationData={component.notification}
                    />
                  );
                case "dropdown":
                  return (
                    <Dropdown key={"dropdown_" + i} dropdownData={component} />
                  );
                case "panel":
                  return <Panel key={"panel_" + i} panelData={component} />;
                default:
                  return <></>;
              }
            })}
          </div>
          <Footer footerData={layoutData.footer} />
        </div>
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
