import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";

const intialState = {
    questions: [],

    status: "loading"
};

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return { ...state, questions: action.payload, status: "ready" };
        case "dataFailed":
            return { ...state, status: "error" };

        default:
            throw new Error("Action unknown");
    }
}

export default function App() {
    const [{ questions, status }, dispatch] = useReducer(reducer, intialState);

    const numQuestions = questions.length;

    useEffect(function () {
        fetch("http://localhost:9000/questions")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "dataReceived", payload: data }))
            .catch((err) => dispatch({ type: "dataFailed" }));
    }, []);
    return (
        <div className="app">
            <Header />
            <Main>
                {status === "Loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && (
                    <StartScreen numQuestions={numQuestions} />
                )}
            </Main>
        </div>
    );
}
