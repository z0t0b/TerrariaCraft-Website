// Custom page/component imports
import Modal from "../Modal/Modal";

// Package imports
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Dropdown(props) {
  const { dropdownData } = props;
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center align-middle items-center my-2">
      <button
        onClick={() => setOpen(!open)}
        className="outline-none flex justify-between items-center bg-black bg-opacity-70 text-white w-48 px-4 lg:w-2/3 py-2"
      >
        <p className="whitespace-nowrap">{dropdownData.initialText}</p>
        {open ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
      </button>
      {open && (
        <div className="w-full flex justify-center align-middle items-center">
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
                        onClick={() => setModalOpen(true)}
                        className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 border-2 border-blue-600 hover:border-blue-700"
                      >
                        <p className="text-white hover:text-gray-100">
                          {modalDetails.title}
                        </p>
                      </button>
                      <Modal
                        open={modalOpen}
                        openHandler={setModalOpen}
                        title={modalDetails.title}
                        text={modalDetails.text}
                        leftButtonConfig={modalDetails.leftButton}
                        rightButtonConfig={modalDetails.rightButton}
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
                  className="flex justify-between items-center bg-black bg-opacity-60 text-white w-48 px-8 lg:w-2/3 py-4"
                >
                  <p className="whitespace-nowrap">{row.displayName}</p>
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
