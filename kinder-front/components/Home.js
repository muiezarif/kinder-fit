import React, {Component} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import Contact from "./Contact";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar translation ={this.props.translation}/>
                <section id="hero" className="d-flex align-items-center">

                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>{this.props.translation("home_layout_first_section_heading")}</h1>
                                <h2>{this.props.translation("home_layout_first_section_paragraph")}
                                </h2>
                                <div>
                                    <a href="#contact" className="btn-get-started scrollto">{this.props.translation("home_layout_first_section_button")}</a>
                                </div>
                                <div>
                                    <p className="mt-3">{this.props.translation("home_layout_first_section_paragraph2")}</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img">
                                <img src="/images/pic1.jpg" className="img-fluid animated rounded-3" alt=""/>
                            </div>
                        </div>
                    </div>

                </section>
                <main id="main">

                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic2.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("home_layout_second_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point1")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point2")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point3")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point4")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point5")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point6")}</p>

                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("home_layout_third_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point1")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point2")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point3")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point4")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point5")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_second_section_point6")}</p>

                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic3.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic4.jpg" className="img-fluid rounded-3" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("home_layout_fourth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point1")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point2")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point3")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point4")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point5")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point6")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_third_section_point7")}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="container">

                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-6 pt-5 pt-lg-0">
                                    <h3 data-aos="fade-up">{this.props.translation("home_layout_fifth_section_heading")}</h3>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point1")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point2")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point3")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point4")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point5")}</p>
                                    <p data-aos="fade-up" data-aos-delay="100">{this.props.translation("home_layout_fourth_section_point6")}</p>
                                </div>
                                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                    <img src="/images/pic5.JPG" className="img-fluid rounded" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about section-bg">
                        <div className="section-title">
                            <h2>{this.props.translation("home_layout_sixth_section_heading")}</h2>
                            {/*<p>Check out the great services we offer</p>*/}
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} dynamicHeight={false} axis="horizontal" showIndicators={false} showStatus={false}>
                                    <div className="primary-color">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 col-xs-4 col-lg-4" align="center">
                                                    <img src="https://media.istockphoto.com/photos/excited-woman-wearing-rainbow-cardigan-picture-id1327495437?b=1&k=20&m=1327495437&s=170667a&w=0&h=Vbl-XLyAnBoTkyGXXi-X1CFzuSHlNcn-dqB-sCosxFo=" className="avatar-img" alt=""/>
                                                </div>
                                                <div  className="col-md-2 col-lg-2 col-xs-2 my-auto" align="center">
                                                    <p>
                                                        <b className="ml-10">{this.props.translation("home_layout_sixth_section_customer_name")}</b>
                                                    </p>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xs-6 my-auto" align="left" >
                                                    <p>
                                                        {this.props.translation("home_layout_sixth_section_customer_review")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="primary-color">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 col-xs-4 col-lg-4" align="center">
                                                    <img src="https://image.shutterstock.com/image-photo/stock-photo-portrait-of-young-beautiful-cute-cheerful-girl-smiling-looking-at-camera-over-white-background-250nw-666258808.jpg" className="avatar-img" alt=""/>
                                                </div>
                                                <div  className="col-md-2 col-lg-2 col-xs-2 my-auto" align="center">
                                                    <p>
                                                        <b className="ml-10">{this.props.translation("home_layout_sixth_section_customer_name")}</b>
                                                    </p>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xs-6 my-auto" align="left" >
                                                    <p>
                                                        {this.props.translation("home_layout_sixth_section_customer_review")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="primary-color">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 col-xs-4 col-lg-4" align="center">
                                                    <img src="https://media.istockphoto.com/photos/very-happy-young-man-man-picture-id1332373959?b=1&k=20&m=1332373959&s=170667a&w=0&h=TKCIoc778sQTiiNFzS3mm_aUMIGcZ6VAN4Cn8mz4UaI=" className="avatar-img" alt=""/>
                                                </div>
                                                <div  className="col-md-2 col-lg-2 col-xs-2 my-auto" align="center">
                                                    <p>
                                                        <b className="ml-10">{this.props.translation("home_layout_sixth_section_customer_name")}</b>
                                                    </p>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xs-6 my-auto" align="left" >
                                                    <p>
                                                        {this.props.translation("home_layout_sixth_section_customer_review")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </section>
                    <Contact translation ={this.props.translation}/>
                    </main>
                    <Footer translation ={this.props.translation}/>

            </div>
        );
    }
}

export default Home;