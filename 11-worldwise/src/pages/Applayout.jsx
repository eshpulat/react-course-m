import AppNav from "../components/AppNav";
import Map from "../components/Map";
import Saidbar from "../components/Saidbar";

import styles from "./Applayout.module.css";

function Applayout() {
    return (
        <div className={styles.app}>
            <Saidbar />
            <Map />
        </div>
    );
}

export default Applayout;
