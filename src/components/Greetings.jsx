import "./Greetings.css";

function Greetings() {
  const isDarkMode = false;
  return (
    <div className={`container ${isDarkMode ? "bg-dark" : ""}`}>
      <h1>Hello, dibya</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        expedita?
      </p>
    </div>
  );
}

// # Note: JSX ke andaar agar aapko JavaScript ki duniya main aana hain to aapko {} "curly braces lagane h parengge !!!"

export default Greetings;
