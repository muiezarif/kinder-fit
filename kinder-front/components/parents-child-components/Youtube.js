import React, {Component} from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Contact from "../Contact";

class Youtube extends Component {
    render() {
        return (
            <div>
                <Navbar translation ={this.props.translation}/>
                <section id="hero" className="d-flex align-items-center">

                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>{this.props.translation("parents_y_layout_first_section_heading")}
                                </h1>
                                {/*<h2>the kids-sport-concept for kids*/}
                                {/*    between 3 and 12 years*/}
                                {/*</h2>*/}
                                <div>
                                    <a href="#contact" className="btn-get-started scrollto">{this.props.translation("parents_y_layout_first_section_text")}</a>
                                </div>
                                <div>
                                    <p className="mt-3">{this.props.translation("parents_y_layout_first_section_text2")}</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img">
                                <img src="/images/pic84.jpg" className="img-fluid animated rounded-3" alt=""/>
                            </div>
                        </div>
                    </div>

                </section>
                <section id="services" className="services bg-blue">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>{this.props.translation("parents_y_layout_second_section_heading")}</h2>
                            {/*<p>Check out the great services we offer</p>*/}
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="100">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bxl-dribbble"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("parents_y_layout_second_section_heading_small1")}</a></h4>
                                    <p className="description">{this.props.translation("parents_y_layout_second_section_heading_small1_text")}</p>

                                </div>

                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="200">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bx-file"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("parents_y_layout_second_section_heading_small2")}</a></h4>
                                    <p className="description">{this.props.translation("parents_y_layout_second_section_heading_small2_text")}</p>

                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="300">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bx-tachometer"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("parents_y_layout_second_section_heading_small3")}</a></h4>
                                    <p className="description">{this.props.translation("parents_y_layout_second_section_heading_small3_text")}</p>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="services" className="services bg-blue">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>{this.props.translation("parents_y_layout_third_section_heading")}</h2>
                            {/*<p>Check out the great services we offer</p>*/}
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="100">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bxl-dribbble"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("parents_y_layout_third_section_heading_small1")}</a></h4>
                                    <p className="description">{this.props.translation("parents_y_layout_third_section_heading_small1_text")}</p>

                                </div>

                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="200">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bx-file"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("parents_y_layout_third_section_heading_small2")}</a></h4>
                                    <p className="description">{this.props.translation("parents_y_layout_third_section_heading_small2_text")}</p>

                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="300">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bx bx-tachometer"></i></div>*/}
                                    <h4 className="title"><a href="">{this.props.translation("parents_y_layout_third_section_heading_small3")}</a></h4>
                                    <p className="description">{this.props.translation("parents_y_layout_third_section_heading_small3_text")}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="portfolio" className="portfolio section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>{this.props.translation("parents_y_layout_fourth_section_heading")}</h2>
                        </div>

                        <div className="row portfolio-container justify-content-center" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-3 col-md-3 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-1.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        {/*<a href="/img/portfolio/portfolio-1.jpg"*/}
                                        {/*   data-gallery="portfolioGallery" className="portfolio-lightbox"*/}
                                        {/*   title="App 1"><i className="bi bi-plus"></i></a>*/}
                                        <a href="portfolio-details.html" title="More Details"><i
                                            className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>{this.props.translation("parents_y_layout_fourth_section_heading_product_name")}</h4>
                                        <p>{this.props.translation("parents_y_layout_fourth_section_heading_product_description")}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-2.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-2.jpg"
                                           data-gallery="portfolioGallery" className="portfolio-lightbox"
                                           title="Web 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                            className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>{this.props.translation("parents_y_layout_fifth_section_heading_product_name")}</h4>
                                        <p>{this.props.translation("parents_y_layout_fifth_section_heading_product_description")}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-3.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-3.jpg"
                                           data-gallery="portfolioGallery" className="portfolio-lightbox"
                                           title="App 2"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                            className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-4.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        <a
                                            data-gallery="portfolioGallery" className="portfolio-lightbox"
                                            title="Card 2"><i className="bi bi-plus"/></a>
                                        <a title="More Details"><i
                                            className="bi bi-link"/></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="portfolio" className="portfolio section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>{this.props.translation("parents_y_layout_fifth_section_heading")}</h2>
                        </div>

                        <div className="row portfolio-container justify-content-center" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-3 col-md-3 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-1.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        {/*<a href="/img/portfolio/portfolio-1.jpg"*/}
                                        {/*   data-gallery="portfolioGallery" className="portfolio-lightbox"*/}
                                        {/*   title="App 1"><i className="bi bi-plus"></i></a>*/}
                                        <a href="portfolio-details.html" title="More Details"><i
                                            className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>{this.props.translation("parents_y_layout_fifth_section_heading_product_name")}</h4>
                                        <p>{this.props.translation("parents_y_layout_fifth_section_heading_product_description")}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-2.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-2.jpg"
                                           data-gallery="portfolioGallery" className="portfolio-lightbox"
                                           title="Web 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                            className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-3.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-3.jpg"
                                           data-gallery="portfolioGallery" className="portfolio-lightbox"
                                           title="App 2"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                            className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-4.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        <a
                                            data-gallery="portfolioGallery" className="portfolio-lightbox"
                                            title="Card 2"><i className="bi bi-plus"/></a>
                                        <a title="More Details"><i
                                            className="bi bi-link"/></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="portfolio" className="portfolio section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>{this.props.translation("parents_y_layout_sixth_section_heading")}</h2>
                        </div>

                        <div className="row portfolio-container justify-content-center" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-3 col-md-3 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-1.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        {/*<a href="/img/portfolio/portfolio-1.jpg"*/}
                                        {/*   data-gallery="portfolioGallery" className="portfolio-lightbox"*/}
                                        {/*   title="App 1"><i className="bi bi-plus"></i></a>*/}
                                        <a href="portfolio-details.html" title="More Details"><i
                                            className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-2.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-2.jpg"
                                           data-gallery="portfolioGallery" className="portfolio-lightbox"
                                           title="Web 3"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                            className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-3.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        <a href="/img/portfolio/portfolio-3.jpg"
                                           data-gallery="portfolioGallery" className="portfolio-lightbox"
                                           title="App 2"><i className="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i
                                            className="bi bi-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="/img/portfolio/portfolio-4.jpg" className="img-fluid"
                                         alt=""/>
                                    <div className="portfolio-links">
                                        <a
                                            data-gallery="portfolioGallery" className="portfolio-lightbox"
                                            title="Card 2"><i className="bi bi-plus"/></a>
                                        <a title="More Details"><i
                                            className="bi bi-link"/></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                    </div>
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

export default Youtube;