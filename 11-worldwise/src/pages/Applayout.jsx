import Map from "../components/Map";
import Saidbar from "../components/Saidbar";
import User from "../components/User";

import styles from "./Applayout.module.css";

function Applayout() {
    return (
        <div className={styles.app}>
            <Saidbar />
            <Map />
            <User />
        </div>
    );
}

export default Applayout;
