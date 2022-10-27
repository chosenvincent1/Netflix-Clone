import React from "react";
import Navbar from "../Component/Navbar";
import HomeLine from "../Component/HomeLine";
import Subsciption from "../Component/Subscrition";

const Home = ()=> {
    console.log(window.innerWidth)
    return (
        <div className="home">
            <section className="first-home-section">
                <Navbar />
                <div className="text-input-container">
                    <p className="first-text">
                        Unlimited movies, TV shows, and more.
                    </p>
                    <p className="second-text">
                        Watch anywhere. Cancel anytime.
                    </p>
                    <p className="third-text">
                        Ready to watch? Enter your email to create or 
                        restart your membership
                    </p>
                    <div className="input-btn-container">
                        <input
                            type="text" 
                            placeholder="Enter Email" 
                            className="first-home-section-input" 
                        />
                        <button className="first-home-section-btn">Get Started</button>
                    </div>             
                </div>
            </section>
            <HomeLine />

            <section className="second-home-section">
                <div className="text">
                    <p className="first-text first-section-text">
                        Enjoy on your TV.
                    </p>
                    <p className="second-text second-section-text">
                        Watch on Smart TVs,
                        Playstation, Xbox, Chromecast, Apple TV, Blu-ray players,
                        and more.
                    </p>
                </div>
                <img src="./images/tv.png" alt="tv" className="second-section-img" />
            </section>
            <HomeLine />

            <section className="third-home-section">
                <div className="third-section-text-container">
                    <p className="first-text first-section-text">
                        Download your shows to watch offline.
                    </p>
                    <p className="second-text second-section-text">
                        Save your favorites easily and always have something to watch.
                    </p>
                </div>
                <img src="./images/mobile.jpg" alt="mobile" className="second-section-img" />
            </section>
            <HomeLine />

            <section className="fourth-home-section">
                <p className="first-text first-section-text">
                    Watch everywhere.
                </p>
                <p className="second-text second-section-text">
                    Stream unlimited movies and TV shows on your phone, 
                    tablet, laptop, and TV.
                </p>
            </section>
            <HomeLine />

            <section className="fifth-home-section">
                <div className="fifth-section-text-container">
                    <p className="first-text first-section-text">
                        Create profiles for kids.
                    </p>
                    <p className="second-text second-section-text">
                        Send kids on adventures with their favorite characters
                        in a space made just for them—free with your membership.
                    </p>
                </div>
                <img src="./images/kids.png" alt="kids" className="second-section-img" />
            </section>
            <HomeLine />

            <section className="sixth-home-section">
                <p className="first-text first-section-text">
                    Frequently Asked Questions.
                </p>
                <div className="frequent-question-container">
                    <div className="each-question-container">
                        <div className="each-question">
                            <p className="question">What is Netflix</p>
                            <p className="icon">+</p>
                        </div>
                        <div className="answer">
                            <p>
                                Netflix is a streaming service that offers a wide 
                                variety of award-winning TV shows, movies, anime, 
                                documentaries, and more on thousands of internet-connected devices.
                                <br />
                                You can watch as much as you want, 
                                whenever you want without a single commercial – 
                                all for one low monthly price. There's always 
                                something new to discover and new TV shows and movies 
                                are added every week!
                            </p>
                        </div>
                    </div>

                    <div className="each-question-container">
                        <div className="each-question">
                            <p className="question">What is Netflix</p>
                            <p className="icon">+</p>
                        </div>
                        <div className="answer">
                            <p>
                                Netflix is a streaming service that offers a wide 
                                variety of award-winning TV shows, movies, anime, 
                                documentaries, and more on thousands of internet-connected devices.
                                <br />
                                You can watch as much as you want, 
                                whenever you want without a single commercial – 
                                all for one low monthly price. There's always 
                                something new to discover and new TV shows and movies 
                                are added every week!
                            </p>
                        </div>
                    </div>
                </div>
                <Subsciption />
            </section>
            <HomeLine />

            <footer className="footer">
                <p>Questions? Contact Us</p>
                <div className="link-container">
                    <ul className="first">
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Media Center</a></li>
                        <li><a href="">Ways to Watch</a></li>
                        <li><a href="">Cookie Preferences</a></li>
                        <li><a href="">Speed Test</a></li>
                    </ul>

                    <ul className="second">
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Investor Relations</a></li>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Coporate Information</a></li>
                        <li><a href="">Legal Notices</a></li>
                    </ul>

                    <ul className="third">
                        <li><a href="">Account</a></li>
                        <li><a href="">Jobs </a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Only on Netflix</a></li>
                    </ul>
                </div>
                <p>Nigeria Netflix</p>
            </footer>
        </div>
        
    )
}

export default Home