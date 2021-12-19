// Custom page/component imports
import Modal from "../Modal/Modal";

// Package imports
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Dropdown(props) {
  const { dropdownData } = props;
  const modalList = {};
  dropdownData.rows
    .filter(
      (row) =>
        row.displayButton.onClick.action === "Modal" ||
        row.displayButton.onClick.action === "CheckboxModal"
    )
    .map((row) => (modalList[row.displayButton.onClick.data.key] = false));
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(modalList);

  const changeModalState = (key, value) => {
    const objCopy = modalOpen;
    setModalOpen({ ...objCopy, [key]: value });
  };

  return (
    <div className="flex flex-col justify-center align-middle items-center my-2 relative z-10">
      <button
        onClick={() => setOpen(!open)}
        className="outline-none flex justify-between items-center bg-black bg-opacity-70 text-white w-11/12 px-4 lg:w-2/3 py-2"
      >
        <p className="whitespace-nowrap">{dropdownData.initialText}</p>
        {open ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
      </button>
      {open && (
        <div className="w-full flex flex-col justify-center align-middle items-center">
          {dropdownData.rows.map((row, i) => {
            try {
              let rowButton = <></>;
              const buttonDetails = row.displayButton;
              switch (buttonDetails.onClick.action) {
                case "Link":
                  switch (buttonDetails.onClick.data.linkType) {
                    case "external":
                      rowButton = (
                        <a
                          className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 border-2 border-blue-600 hover:border-blue-700"
                          href={buttonDetails.onClick.data.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="text-white hover:text-gray-100">
                            {buttonDetails.text}
                          </p>
                        </a>
                      );
                      break;
                    case "internal":
                      rowButton = (
                        <Link
                          className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 border-2 border-blue-600 hover:border-blue-700"
                          to={buttonDetails.onClick.data.link}
                        >
                          <p className="text-white hover:text-gray-100">
                            {buttonDetails.text}
                          </p>
                        </Link>
                      );
                      break;
                    default:
                      rowButton = <></>;
                  }
                  break;
                case "Modal":
                  const modalDetails = buttonDetails.onClick.data;
                  rowButton = (
                    <div>
                      <button
                        onClick={() => {
                          const objCopy = modalOpen;
                          setModalOpen({
                            ...objCopy,
                            [modalDetails.key]: true,
                          });
                        }}
                        className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 border-2 border-blue-600 hover:border-blue-700"
                      >
                        <p className="text-white hover:text-gray-100">
                          {buttonDetails.text}
                        </p>
                      </button>
                      <Modal
                        open={modalOpen[modalDetails.key]}
                        openHandler={changeModalState}
                        modalKey={modalDetails.key}
                        title={modalDetails.title}
                        text={modalDetails.text}
                        leftButtonConfig={modalDetails.leftButton}
                        rightButtonConfig={modalDetails.rightButton}
                      />
                    </div>
                  );
                  break;
                case "CheckboxModal":
                  const checkboxModalDetails = buttonDetails.onClick.data;
                  rowButton = (
                    <div>
                      <button
                        onClick={() => {
                          const objCopy = modalOpen;
                          setModalOpen({
                            ...objCopy,
                            [checkboxModalDetails.key]: true,
                          });
                        }}
                        className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 border-2 border-blue-600 hover:border-blue-700"
                      >
                        <p className="text-white hover:text-gray-100">
                          {buttonDetails.text}
                        </p>
                      </button>
                      <Modal
                        open={modalOpen[checkboxModalDetails.key]}
                        openHandler={changeModalState}
                        modalKey={checkboxModalDetails.key}
                        checkboxes
                        checkboxData={checkboxModalDetails.checkboxes}
                        title={checkboxModalDetails.title}
                        text={checkboxModalDetails.text}
                        leftButtonConfig={checkboxModalDetails.leftButton}
                        rightButtonConfig={checkboxModalDetails.rightButton}
                      />
                    </div>
                  );
                  break;
                default:
                  rowButton = <></>;
              }

              return (
                <div
                  key={buttonDetails.text + "_" + i}
                  className="flex flex-col md:flex-row justify-between items-center bg-black bg-opacity-60 text-white w-11/12 px-8 lg:w-2/3 py-4"
                >
                  <p className="whitespace-normal md:whitespace-nowrap text-center md:text-left my-2 md:my-0">
                    {row.displayName}
                  </p>
                  {rowButton}
                </div>
              );
            } catch (error) {
              return <></>;
            }
          })}
        </div>
      )}
    </div>
  );
}
