import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// We can only change the names of files only in the case of default exports

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App/>{/** Jo v output dikhegi wo is App naam ke component se dikhegi **/}
    {/** Humne yaha App naam ka component import karke yaha Render kar liya , matlab jo v content dikhegi wo is App naamak component se dikhegi **/}
  </React.StrictMode>
);

// Note: Agar hum default export kar rahe hain to hum usse kisi v naam se export kar skte hain
// Matlab Pura ka pura content is App naam ke component ke aandaar hoga

// The App component will be the PARENT of all the other Components in The entire Application