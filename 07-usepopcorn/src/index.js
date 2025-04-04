import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./starRating";

// function Test() {
//     const [movieRating, setMovieRating] = useState(0);
//     return (
//         <div>
//             <StarRating
//                 color="blue"
//                 maxRating={10}
//                 onSetRating={setMovieRating}
//             />
//             <p>This movie was Rated {movieRating} stars</p>
//         </div>
//     );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        {/* <StarRating
            maxRating={"iyiugkj"}
            messages={["Okay", "Zor", "Gozal", "Gap yoq", "Sarvar"]}
        />
        <StarRating maxRating={10} />
        <StarRating maxRating={10} defaultRating={3} /> */}

        {/* <Test /> */}
    </React.StrictMode>
);
