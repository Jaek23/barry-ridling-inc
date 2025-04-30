export default function EstimateForm () {
    return (
        <form action="https://formsubmit.co/jaehkim23@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_next" value="http://localhost:3000/thank-you"/>
            <input type="hidden" name="_template" value="table"/>

            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required/>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required/>

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required/>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
        </form>
    );
}