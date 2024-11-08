import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import Featured from '../Featured/Featured'
import TopicList from '../TopicList/TopicList'
import styles from './Homepage.module.css'
import Testimonials from '../Testimonials/Testimonials';
import Waves from '../Waves/Waves';
import Welcome from '../Welcome/Welcome';

export default function Homepage({user, favourites}) {
    console.log(user, favourites)
    return (
    <section className={styles.root} >
        <Nav />
        <Waves />
        <Welcome />
        <TopicList />
        <Featured user={user} favourites={favourites}/>
        <Testimonials />
        <Footer />
    </section>
    )
}