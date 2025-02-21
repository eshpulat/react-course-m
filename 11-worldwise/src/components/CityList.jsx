import CityItam from "./CityItam";
import styles from "./Citylist.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, isLoading }) {
    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
            <Message message="Add your first city by cliking on a city on the map" />
        );
    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItam city={city} key={city.id} />
            ))}
        </ul>
    );
}

export default CityList;
