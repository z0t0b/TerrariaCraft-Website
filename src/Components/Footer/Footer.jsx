import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#3a3a3ade",
        borderTopColor: "rgba(255,255,255,0.418)",
      }}
      className="fixed bottom-0 py-8 w-full border-t-4 border-dotted"
    >
      <div
        style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
        className="text-xl text-white text-center"
      >
        Copyright &copy; {new Date().getFullYear()} - ARR -{" "}
        <Link to="/" className="text-blue-500 underline">
          DragonForge
        </Link>
      </div>
    </footer>
  );
}
