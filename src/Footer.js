import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <a href="#" className="inNav foot">custom order</a>
            <a href="#" className="inNav foot">about us</a>
            <a href="#" className="inNav foot">sizing</a>
            <a href="#" className="inNav foot">f. a. q.</a>
            <a href="#" className="inNav foot">search</a>
            <a href="#" className="inNav foot">contact</a>
            <a href="#" className="inNav foot">terms and conditions</a>
            <a href="#" className="inNav foot">privacy policy</a>
            <div className="socialIcons">
                <div className="rotate"><img src={require("./icons8-facebook-logo-64.png")} alt="facebook logo" /></div>
                <div className="rotate"><img src="https://img.icons8.com/cotton/64/000000/twitter.png" alt="twitter logo" /></div>
                <div className="rotate"><img src="https://img.icons8.com/color/48/000000/pinterest.png" alt="pinterest logo" /></div>
                <div className="rotate"><img src="https://img.icons8.com/dusk/64/000000/instagram-new.png" alt="insty logo" /></div>
                <div className="rotate"><img src="https://img.icons8.com/color/100/000000/youtube-play.png" alt="youtube logo" /></div>
            </div>
        </footer>
    )
}
export default Footer;