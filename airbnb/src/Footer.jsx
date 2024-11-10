import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <h2>Inspiration for future getaways</h2>
            <div className='upper-part'>
                <div className='columns'>
                    <h4>Support</h4>
                    <a>Help Center</a>
                    <a>FakeCover</a>
                    <a>Anit-discrimination</a>
                    <a>Disability support</a>
                    <a>Cencellation options</a>
                    <a>Report neighborhood concern</a>
                </div>
                <div className='columns'>
                    <h4>Hosting</h4>
                    <a>Airbnb your home</a>
                    <a>AirCover for Hosts</a>
                    <a>Hosting resources</a>
                    <a>Community forum</a>
                    <a>Hosting responsibly</a>
                    <a>Airbnb-friendly apartments</a>
                    <a>Join a free Hosting class</a>
                    <a>Find a co-host</a>
                </div>
                <div className='columns'>
                    <h4>Fakebnb</h4>
                    <a>Newroom</a>
                    <a>New features</a>
                    <a>Careers</a>
                    <a>Investors</a>
                    <a>Gift Cards</a>
                    <a>Fakebnb.org emergency stays</a>
                </div>
            </div>
            <div className='lower-part'>
                <p>© 2024 Fakebnb, Inc.</p>
                <span>·</span>
                <p>No Privacy</p>
                <span>·</span>
                <p>No Policy</p>
                <span>·</span>
                <p>No Terms & Conditions</p>
                <div className='socials'>
                    <h4 style={{margin:'0 20px'}}>English (US)</h4>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-x-twitter"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}