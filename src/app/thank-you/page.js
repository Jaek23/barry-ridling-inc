export default function ThankYouPage () {
    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column' 
        }}>
            <main style={{ flex: 1, padding: '2rem', textAlign: 'center'}}>
                <h1 style={{color:'var(--light-navy)'}}>Thank you for submitting your request!</h1>
                <p>Your estimate request has been successfully sent.</p>
                <p>We'll get back to you as soon as possible.</p>
                <a
                    href="/estimate"
                    style={{
                        display: 'inline-block',
                        marginTop: '1rem',
                        padding: '0.75rem 1.5rem',
                        fontSize: '1rem',
                        backgroundColor: 'var(--light-navy)',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '0.5rem',
                    }}
                >
                    Back to Estimate Page
                </a>
            </main>
        </div>
    );
}