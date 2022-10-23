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
                <p className="first-text">
                    Enjoy on your TV.
                </p>
                <p className="second-text">
                    Watch on Smart TVs,
                    Playstation, Xbox, Chromecast, Apple TV, Blu-ray players,
                    and more.
                </p>
            </section>
            <HomeLine />

            <section className="third-home-section">
                <p className="first-text">
                    Download your shows to watch offline.
                </p>
                <p className="second-text">
                    Save your favorites easily and always have something to watch.
                </p>
            </section>
            <HomeLine />

            <section className="fourth-home-section">
                <p className="first-text">
                    Watch everywhere.
                </p>
                <p className="second-text">
                    Stream unlimited movies and TV shows on your phone, 
                    tablet, laptop, and TV.
                </p>
            </section>
            <HomeLine />

            <section className="fifth-home-section">
                <p className="first-text">
                    Create profiles for kids.
                </p>
                <p className="second-text">
                    Send kids on adventures with their favorite characters
                    in a space made just for them—free with your membership.
                </p>
            </section>
            <HomeLine />

            <section className="sixth-home-section">
                <p className="first-text">
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
                </div>
                <Subsciption />
            </section>
        </div>
    )
}

export default Home