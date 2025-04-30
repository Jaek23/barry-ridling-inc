export default function ThankYouPage () {
    return (
        <div style={{padding: '2rem', textAlign:'center'}}>
            <h1>Thank you for submitting your request!</h1>
            <p>Your estimate request has been successfully sent.</p>
            <p>We'll get back to you as soon as possible.</p>
            <a
                href="/estimate"
                style={{
                    display: 'inline-block',
                    marginTop: '1rem',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    backgroundColor: '#1a202c',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '0.5rem',
                }}
            >
                Back to Estimate Page
            </a>
        </div>
    );
}