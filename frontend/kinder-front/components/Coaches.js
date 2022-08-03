import React, {Component} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

class Coaches extends Component {
    render() {
        return (
            <div>
                <Navbar translation ={this.props.translation}/>
                <section id="hero" className="d-flex align-items-center">

                    <div className="container">
                        <div className="row gy-4 align-items-center justify-content-center p-5">
                            {/*<div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">*/}
                            {/*    <h1>{this.props.translation("sfk_layout_second_section_heading")}</h1>*/}
                            {/*    /!*<h2>the kids-sport-concept for kids*!/*/}
                            {/*    /!*    between 3 and 12 years*!/*/}
                            {/*    /!*</h2>*!/*/}
                            {/*    <div>*/}
                            {/*        <a href="#contact" className="btn-get-started scrollto">{this.props.translation("sfk_ss_layout_first_section_text")}</a>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <p className="mt-3">{this.props.translation("sfk_ss_layout_first_section_text2")}</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="col-lg-12 col-md-12 order-1 order-lg-2 hero-img">*/}
                            <img src="/images/trainer_overview.png" className="img-fluid animated rounded-3 m-5"  alt=""/>
                            {/*</div>*/}
                        </div>
                    </div>

                </section>
                <main id="main">

                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic12.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_second_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_second_section_text")}</p>

                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">

                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_third_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_second_section_text")}</p>
                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic13.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic14.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_fourth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_fourth_section_text")}</p>

                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">

                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_fifth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_fifth_section_text")}</p>
                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic15.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic16.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_sixth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_sixth_section_text")}</p>

                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">

                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_seventh_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_seventh_section_text")}</p>
                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic17.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic18.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("coach_layout_eight_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_layout_eight_section_text")}</p>
                                </div>
                            </div>

                        </div>
                    </section>
                    {/*<section className="section-bg">*/}
                    {/*    <div className="row my-auto" align="center">*/}
                    {/*        <p>Text Text Text Text Text Text Text</p>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                    <section id="" className="contact section-bg">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Contact Us</h2>
                                <p>Book an Appointment</p>
                            </div>

                            <div className="row">

                                <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up"
                                     data-aos-delay="100">
                                    <div className="info">
                                        <div className="address">
                                            <i className="bi bi-geo-alt"></i>
                                            <h4>Location:</h4>
                                            <p>Lochhausenerstr. 17
                                                81247 München
                                                Germany
                                            </p>
                                        </div>

                                        <div className="email">
                                            <i className="bi bi-envelope"></i>
                                            <h4>Email:</h4>
                                            <p>info@kids-fit.org</p>
                                        </div>

                                        <div className="phone">
                                            <i className="bi bi-phone"></i>
                                            <h4>Call:</h4>
                                            <p>0174/6737048</p>
                                        </div>

                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                            frameBorder="0"
                                            allowFullScreen></iframe>
                                    </div>

                                </div>

                                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up"
                                     data-aos-delay="200">
                                    <form role="form"
                                          className="php-email-form">
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="name">Your Name</label>
                                                <input type="text" name="name" className="form-control" id="name"
                                                       placeholder="Your Name" required/>
                                            </div>
                                            <div className="form-group col-md-6 mt-3 mt-md-0">
                                                <label htmlFor="name">Your Email</label>
                                                <input type="email" className="form-control" name="email" id="email"
                                                       placeholder="Your Email" required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="name">Date</label>
                                                <input type="date" name="date" className="form-control" id="date"
                                                       placeholder="Pick Date" required/>
                                            </div>
                                            <div className="form-group col-md-6 mt-3 mt-md-0">
                                                <label htmlFor="name">Time</label>
                                                <input type="time" className="form-control" name="time" id="time"
                                                       placeholder="Pick Time" required/>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="name">Subject</label>
                                            <input type="text" className="form-control" name="subject" id="subject"
                                                   placeholder="Subject" required/>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label htmlFor="name">Message</label>
                                            <textarea className="form-control" name="message" rows="10"
                                                      required/>
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </section>
                </main>
                <Footer translation ={this.props.translation}/>
            </div>
        );
    }
}

export default Coaches;