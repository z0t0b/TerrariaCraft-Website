import Header from "../../Components/Header/Header";
import Note from "../../Components/Note/Note";
import Footer from "../../Components/Footer/Footer";

export default function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
      }}
      className="w-screen h-screen bg-cover"
    >
      <Header pageName="about" />
      <Note />
      <div className="flex justify-center mt-2">
        <div className="flex justify-center align-middle items-center bg-black bg-opacity-60 text-white w-48 px-48 lg:w-96 lg:px-96 py-1">
          <p className="mx-2 whitespace-nowrap">Page under construction</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
