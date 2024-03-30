import styles from "./Greetings.module.css";

// This issue can be resolved using css modules
// Then one won't have the headache of observing class name colisions or 
// imports order

// so we use css modules to handle this headache

// Note: CSS Modules ka ONLY fyda : Ye name collisions nahi hone deti
// Humme pata hain ki ye wahi class apply karegi jo class hum apply karna chahte hain koi dusri nahi

function Greetings() {
  const isDarkMode = false;
  return (
    // <div className={styles[`${isDarkMode ? `bg-dark` : ""}`]}>
    <div className={`${styles.container} ${styles["bg-dark"]}`}>
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
