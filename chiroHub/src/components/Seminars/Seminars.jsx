import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { getSeminars } from "../../utils/seminar_api";
import { useEffect, useState } from "react";
import ShortDisplaySeminar from "../ShortDisplaySeminar/ShortDisplaySeminar";
import TopicFilter from "../TopicFilter/TopicFilter";
import styles from '../Featured/Featured.module.css'

export default function Seminars() {
    const [seminars, setSeminars] = useState([]);  // Start with an empty array
    const [loading, setLoading] = useState(true);  // Track loading state
    
    useEffect(() => {
        getSeminars()
            .then(res => setSeminars(res))
            .then(() => setLoading(false))
            .catch(err => console.error('Direct fetch error:', err));
    }, []);
    
    if (loading) {
        return (<p>Loading seminars...</p>);
    }
    return (<>
        <Nav />
        <TopicFilter />
        <h2>Seminar List</h2>
        <section className={styles.display}>
        {seminars.length > 0 ? (
            <>
                {seminars.map(seminar => ( <ShortDisplaySeminar seminar={seminar} />))}
            </>
            ) : (
                <p>No Seminars.</p>
                )}
        </section>
        <Footer />;
    </>)
}