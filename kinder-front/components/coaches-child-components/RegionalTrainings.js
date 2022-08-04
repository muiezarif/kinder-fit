import React, {Component} from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Contact from "../Contact";

class RegionalTrainings extends Component {
    render() {
        return (
            <div>
                <Navbar translation ={this.props.translation}/>
                <section id="hero" className="d-flex align-items-center">

                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>{this.props.translation("coach_rt_layout_first_section_heading")}
                                </h1>
                                {/*<h2>the kids-sport-concept for kids*/}
                                {/*    between 3 and 12 years*/}
                                {/*</h2>*/}
                                <div>
                                    <a href="#contact" className="btn-get-started scrollto">{this.props.translation("coach_rt_layout_first_section_text")}</a>
                                </div>
                                <div>
                                    <p className="mt-3">{this.props.translation("coach_rt_layout_first_section_text2")}</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img">
                                <img src="/images/pic61.jpg" className="img-fluid animated rounded-3" alt=""/>
                            </div>
                        </div>
                    </div>

                </section>
                <section id="services" className="services bg-blue">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>{this.props.translation("coach_rt_layout_second_section_heading")}</h2>
                            {/*<p>Check out the great services we offer</p>*/}
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="100">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bxl-dribbble"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("coach_rt_layout_second_section_heading_small1")}</a></h4>
                                    <p className="description">{this.props.translation("coach_rt_layout_second_section_heading_small1_text")}</p>
                                    {/*<div>*/}
                                    {/*    <a className="btn-get-started scrollto cursor-pointer">Try Now For Free</a>*/}
                                    {/*</div>*/}
                                </div>

                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="200">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bx-file"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("coach_rt_layout_second_section_heading_small2")}</a></h4>
                                    <p className="description">{this.props.translation("coach_rt_layout_second_section_heading_small2_text")}</p>
                                    {/*<div>*/}
                                    {/*    <a className="btn-get-started scrollto cursor-pointer">Try Now For Free</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="300">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bx-tachometer"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("coach_rt_layout_second_section_heading_small3")}</a></h4>
                                    <p className="description">{this.props.translation("coach_rt_layout_second_section_heading_small3_text")}</p>
                                    {/*<div>*/}
                                    {/*    <a className="btn-get-started scrollto cursor-pointer">Try Now For Free</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="services" className="services bg-blue">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>{this.props.translation("coach_rt_layout_third_section_heading")}</h2>
                            {/*<p>Check out the great services we offer</p>*/}
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="100">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bxl-dribbble"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("coach_rt_layout_third_section_heading_small1")}</a></h4>
                                    <p className="description">{this.props.translation("coach_rt_layout_third_section_heading_small1_text")}</p>

                                </div>

                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="200">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bx-file"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("coach_rt_layout_third_section_heading_small2")}</a></h4>
                                    <p className="description">{this.props.translation("coach_rt_layout_third_section_heading_small2_text")}</p>

                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="300">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bx-tachometer"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("coach_rt_layout_third_section_heading_small3")}</a></h4>
                                    <p className="description">{this.props.translation("coach_rt_layout_third_section_heading_small3_text")}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="about" className="about section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h3>{this.props.translation("coach_rt_layout_fourth_section_heading")}</h3>
                            {/*<p>Check out the great services we offer</p>*/}
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xs-6">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-6 pt-5 pt-lg-0">
                                        <h3 data-aos="fade-up">{this.props.translation("coach_rt_layout_fourth_section_small_heading1")}</h3>
                                        <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_rt_layout_fourth_section_small_heading1_text")}</p>


                                    </div>
                                    <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                        <img src="/images/pic36.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                    </div>
                                    {/*<div>*/}
                                    {/*    <a className="btn-get-started scrollto cursor-pointer">Details</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xs-6">
                                {/*<div className=></div>*/}
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-6 pt-5 pt-lg-0">
                                        <h3 data-aos="fade-up">{this.props.translation("coach_rt_layout_fourth_section_small_heading2")}</h3>
                                        <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_rt_layout_fourth_section_small_heading2_text")}</p>

                                    </div>
                                    <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                        <img src="/images/pic62.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                    </div>
                                    {/*<div>*/}
                                    {/*    <a className="btn-get-started scrollto cursor-pointer">Details</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="about" className="about section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h3>{this.props.translation("coach_rt_layout_fifth_section_heading")}</h3>
                            {/*<p>Check out the great services we offer</p>*/}
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xs-6">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-6 pt-5 pt-lg-0">
                                        <h3 data-aos="fade-up">{this.props.translation("coach_rt_layout_fifth_section_small_heading1")}</h3>
                                        <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_rt_layout_fifth_section_small_heading1_text")}</p>

                                    </div>
                                    <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                        <img src="/images/pic63.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                    </div>
                                    {/*<div>*/}
                                    {/*    <a className="btn-get-started scrollto cursor-pointer">Details</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xs-6">
                                {/*<div className=></div>*/}
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-6 pt-5 pt-lg-0">
                                        <h3 data-aos="fade-up">{this.props.translation("coach_rt_layout_fifth_section_small_heading2")}</h3>
                                        <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_rt_layout_fifth_section_small_heading2_text")}</p>

                                    </div>
                                    <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                        <img src="/images/pic64.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                    </div>
                                    {/*<div>*/}
                                    {/*    <a className="btn-get-started scrollto cursor-pointer">Details</a>*/}
                                    {/*</div>*/}

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="about" className="about section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h3>{this.props.translation("coach_rt_layout_sixth_section_heading")}</h3>
                            {/*<p>Check out the great services we offer</p>*/}
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xs-6">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-6 pt-5 pt-lg-0">
                                        <h3 data-aos="fade-up">{this.props.translation("coach_rt_layout_sixth_section_small_heading1")}</h3>
                                        <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_rt_layout_sixth_section_small_heading1_text")}</p>

                                    </div>
                                    <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                        <img src="/images/pic65.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                    </div>
                                    {/*<div>*/}
                                    {/*    <a className="btn-get-started scrollto cursor-pointer">Details</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xs-6">
                                {/*<div className=></div>*/}
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-lg-6 pt-5 pt-lg-0">
                                        <h3 data-aos="fade-up">{this.props.translation("coach_rt_layout_sixth_section_small_heading2")}</h3>
                                        <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("coach_rt_layout_sixth_section_small_heading2_text")}</p>

                                    </div>
                                    <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                        <img src="/images/pic67.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                    </div>
                                    {/*<div>*/}
                                    {/*    <a className="btn-get-started scrollto cursor-pointer">Details</a>*/}
                                    {/*</div>*/}

                                </div>
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
                <Footer translation ={this.props.translation}/>
            </div>
        );
    }
}

export default RegionalTrainings;