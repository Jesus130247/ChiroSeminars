import styles from '../Footer/Footer.module.css'

export default function Footer() {
    return (
    <footer>
        <span id={styles.copywrite}><p>&copy; 2024 ChiroOceaniaHub. All Rights Reserved.</p></span>

        <section className={styles.footerReading}>
            <ul>
                <h4>Internal refs</h4>
                <li><a href="/ChiroSeminars/">Home</a></li>
                <li><a href="/ChiroSeminars/Contact">Contact</a></li>
                <li><a href="/ChiroSeminars/AboutUs">FAQ's</a></li>
            </ul>
        </section>

        <section className={styles.footerReading}>
            <ul>
                <h4>External refs</h4>
                <li><a href="https://chirohubseminars.com/">ChiroHub</a></li>
                <li><a href="">Dr. Manteite</a></li>
                <li><a href="">Partner Practice</a></li>
            </ul>
        </section>

        <section className={styles.footerReading}>
            <h4>further reading</h4>
            {/* <a href="">anchor1</a>
            {/* <br /> */}
            {/* <a href="">anchor2</a> */}

            {/* <h5>web notices</h5> */}
            <p>Lorem ipsum dolor sit habitasse malesuada penatibus sem, risus nisi eget fames consequat class a potenti commodo proin dictumst, ultricies non convallis enim rutrum maecenas elementum volutpat euismod.</p>
        </section>

    </footer>
    )
}