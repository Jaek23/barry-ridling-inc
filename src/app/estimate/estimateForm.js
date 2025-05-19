import styles from './estimateStyle/estimateForm.module.css';

export default function EstimateForm () {
    const baseUrl = process.env.NODE_ENV === 'production' 
        ? process.env.NEXT_PUBLIC_SITE_URL 
        : 'http://localhost:3000';

    return (
        <div className={styles.wrapper}>
            <form 
                action="https://formsubmit.co/barryridling@aol.com" 
                method="POST"
                className={styles.form}
            >
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value={`${baseUrl}/thank-you`} />
                <input type="hidden" name="_template" value="table"/>

                <h2 className={styles.heading}>Request a Free Estimate!</h2>

                <div className={styles.group}>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>

                <div className={styles.group}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>

                <div className={styles.group}>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required/>
                </div>

                <div className={styles.group}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>

                <button type="submit" className={styles.submit}>Submit</button>
            </form>
        </div>
    );
}