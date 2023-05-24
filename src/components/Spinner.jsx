import { FaSpinner } from "react-icons/fa";
import "./Spinner.css";

export const Spinner = () => {
    return (

        <div className="spinner-background">
            <div className="spinner">
                <FaSpinner className="spinning" />
                <span className="spinner-text">Loading...</span>
            </div>
        </div >
    )
};