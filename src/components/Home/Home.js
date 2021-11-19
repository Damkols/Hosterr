import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <div className="content1">
                
                    <h3>Host your website in less than 5 minutes.</h3>
                    <p>With Hosterr, get your website up and running in no less than 5minutes with the most competitive pricing packages available online.</p>
                    <div className="input">
                        <input type="email" name="email" placeholder="Enter e-mail address" />
                        <button>Join waitlist</button>
                    </div>
                    <div className="check">
                        <img src={require('../../assets/Checkmark.svg').default} alt='Checkmark' className="checkmark" />
                        <span>No spam, ever. Unsubscribe anytime.</span>
                    </div>
                </div>

                <div className="image">
                    <img src={require('../../assets/Blue Shape.svg').default} alt='Blue Shape' className="blue" />
                    <img src={require('../../assets/Pink Shape.svg').default} alt='Pink Shape' className="pink" />
                    <img src={require('../../assets/Purple Shape.svg').default} alt='Purple Shape' className="purple" />
                    <img src={require('../../assets/img.png').default} alt='Image' className="image" />
                </div>
            </div>

            <footer>
                <div className="smLinks">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                </div>

                <div className="help">
                    <div className="helpImage">
                        <img src={require('../../assets/Help Avatar.svg').default} alt='Help Avatar' className="avatar" />
                    </div>
                    <div className="helpText">
                        <p>Have any questions?</p>
                        <h4>Talk to a specialist</h4>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
