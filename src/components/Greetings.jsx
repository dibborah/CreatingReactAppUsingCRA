import "./Greetings.css";

function Greetings() {
    const firstName = "Mark";

  //   const firstName = (name) => {
  //       return name.toUpperCase();
  //   }

  // function firstName(name) {
  //   return name.toUpperCase();
  // }

  // This below is a function expression
  // const firstName = function(name) {
  //   return name.toUpperCase();
  // }

//   const firstName = (name) => name.toUpperCase();

  return (
    <div className="bg-dark">
      <h1>Hello, {`${firstName} how is META going on !!!`}</h1>
      <h1>{ 2 + 3}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        expedita?
      </p>
    </div>
  );
}

// # Note: JSX ke andaar agar aapko JavaScript ki duniya main aana hain to aapko {} "curly braces lagane h parengge !!!"

export default Greetings;
