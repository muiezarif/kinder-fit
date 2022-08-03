import React, {Component} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Contact from "./Contact";

class FranchiseJobs extends Component {
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
                            <img src="/images/fj_overview.png" className="img-fluid animated rounded-3 m-5"  alt=""/>
                            {/*</div>*/}
                        </div>
                    </div>

                </section>
                <main id="main">

                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic32.png" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("fj_layout_second_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("fj_layout_second_section_text")}</p>

                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">

                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("fj_layout_third_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("fj_layout_second_section_text")}</p>
                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic33.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic34.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("fj_layout_fourth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("fj_layout_fourth_section_text")}</p>

                                </div>
                            </div>

                        </div>
                    </section>

                    {/*<section className="section-bg">*/}
                    {/*    <div className="row my-auto" align="center">*/}
                    {/*        <p>Text Text Text Text Text Text Text</p>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                    <Contact translation ={this.props.translation}/>
                </main>
                <Footer translation ={this.props.translation}/>
            </div>
        );
    }
}

export default FranchiseJobs;