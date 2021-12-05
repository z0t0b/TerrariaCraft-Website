// Custom page/component imports
import Dropdown from "../../Components/Dropdown/Dropdown";
import Notification from "../../Components/Notification/Notification";
import PageLayout from "../../Components/PageLayout/PageLayout";
import Panel from "../../Components/Panel/Panel";

export default function Home(props) {
  const { layoutData, mainPageData } = props;

  return (
    <PageLayout layoutData={layoutData}>
      {mainPageData.map((component, i) => {
        switch (component.component) {
          case "notification":
            return (
              <Notification
                key={"notification_" + i}
                notificationData={component.notification}
              />
            );
          case "dropdown":
            return <Dropdown key={"dropdown_" + i} dropdownData={component} />;
          case "panel":
            return <Panel key={"panel_" + i} panelData={component} />;
          default:
            return <></>;
        }
      })}
    </PageLayout>
  );
}
