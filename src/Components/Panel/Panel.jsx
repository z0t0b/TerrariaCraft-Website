export default function Panel(props) {
  const { panelData } = props;
  return (
    <div className="flex justify-center my-2">
      <div className="rounded-md flex justify-center align-middle items-center bg-black bg-opacity-60 text-white w-48 px-48 lg:w-96 lg:px-96 py-1">
        <p className="mx-2 whitespace-nowrap">{panelData.text}</p>
      </div>
    </div>
  );
}
