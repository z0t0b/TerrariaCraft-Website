export default function Panel(props) {
  const { panelData } = props;
  return (
    <div className="flex justify-center my-2 relative z-10">
      <div className="rounded-md flex justify-center align-middle items-center bg-black bg-opacity-60 text-white w-11/12 px-8 lg:w-2/3 py-1">
        {panelData.textType === "html" ? (
          <p
            dangerouslySetInnerHTML={{ __html: panelData.text }}
            className="mx-2 text-center"
          />
        ) : (
          <p className="mx-2 text-center">{panelData.text}</p>
        )}
      </div>
    </div>
  );
}
