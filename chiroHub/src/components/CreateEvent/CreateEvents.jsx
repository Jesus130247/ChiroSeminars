import styles from './CreateEvents.module.css'
import Nav from '../Nav/Nav.jsx'
import Footer from '../Footer/Footer.jsx';
import FeatureBtn from '../FeatureBtn/FeatureBtn.jsx';
// import { saveSeminar } from '../../models/seminar_router.js'

export default function Create() {

    async function handleSubmit (e) {
        e.preventDefault()   
        
        const formData = new FormData(e.target);
        try {
            const response = await fetch('/api/seminar', {
                method: 'POST',
                body: formData,
            })
            if (response.ok) {
                e.target.reset()
                console.log('formData SENT');
            }
        } catch (error) {
            console.log('formData could NOT send, error: ', error);
            
        }
    }

    return (
        <>
        <Nav />

        <div className={styles.createEvent}>
        
            <h3>Create Seminar</h3>

            <form className={styles.createForm} onSubmit={handleSubmit}>

            <section className={styles.sections-parent}>
                <label>Seminar Title</label>
                <input type="text" name="title"
                required />
            </section>
            <section>
                <label>Organizer Name</label>
                <input type="text" name="organizer"
                required />
            </section>
            <section>
                <label>Date and Time</label>
                <input type="datetime-local" name="date"
                required />
            </section>
            <section>
                <label>Location</label>
                <input type="text" name="location" placeholder='Address or URL'
                required />
            </section>
            <section>
            <label>Price ($AUD)</label>
                <input type="number" name="price"
                required />
            </section>
            <section>
                <label>Contact</label>
                <input type="email" name="contact" placeholder="Phone or Email"
                required />
            </section>
            <section>
                <label>Description</label>
                <textarea name="description"/>
            </section>
            <section>
                <label>Image</label>
                <input type="file" accept="image/*" name="image" />
            </section>
            <FeatureBtn />
            <section>
                <button type='submit'>Submit</button>
            </section>
            </form>

        </div>

        <Footer />
    </>
    )
}