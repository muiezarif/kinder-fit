import React, {Component} from 'react';
import Navbar from "./Navbar";
import {addContactUsForm} from "../redux/actions";
import {connect} from "react-redux";
import {NextSeo} from "next-seo";

class Contact extends Component {
    state = {name:"",email:"",date:"",time:"",subject:"",message:""}
    render() {
        const handleChange = (e) => {
            const isCheckbox = e.target.type === "checkbox";
            this.setState({[e.target.name]: isCheckbox ? e.target.checked : e.target.value})
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("in")
            const data = {name:this.state.name,email:this.state.email,date:this.state.date,time:this.state.time,subject:this.state.subject,message:this.state.message}
            this.props.addContactUsForm(data).then((response) => {
                console.log(response)
            }).catch((err) =>{
                console.log(err)
            })
        }
        return (
            <div>
                <Navbar translation ={this.props.translation}/>
                <section id="contact" className="contact section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>{this.props.translation("contact_heading")}</h2>
                            <p>{this.props.translation("contact_book_appointment")}</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>{this.props.translation("contact_location")}:</h4>
                                        <p>Lochhausenerstr. 17
                                            81247 München
                                            Germany
                                        </p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>{this.props.translation("contact_email")}:</h4>
                                        <p>info@kids-fit.org</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>{this.props.translation("contact_call")}:</h4>
                                        <p>0174/6737048</p>
                                    </div>

                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170347.25272008125!2d11.401752172343118!3d48.1550546948443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMunich%2C%20Germany!5e0!3m2!1sen!2s!4v1658930021664!5m2!1sen!2s"
                                        frameBorder="0"
                                        allowFullScreen></iframe>
                                </div>

                            </div>

                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up"
                                 data-aos-delay="200">
                                <form onSubmit={handleSubmit} role="form"
                                      className="php-email-form">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">{this.props.translation("contact_your_name")}</label>
                                            <input type="text" name="name" onChange={handleChange} className="form-control" id="name"
                                                   placeholder={this.props.translation("contact_your_name")} required/>
                                        </div>
                                        <div className="form-group col-md-6 mt-3 mt-md-0">
                                            <label htmlFor="name">{this.props.translation("contact_your_email")}</label>
                                            <input type="email" onChange={handleChange} className="form-control" name="email" id="email"
                                                   placeholder={this.props.translation("contact_your_email")} required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">{this.props.translation("contact_date")}</label>
                                            <input type="date" name="date" onChange={handleChange} className="form-control" id="date"
                                                   placeholder="Pick Date" required/>
                                        </div>
                                        <div className="form-group col-md-6 mt-3 mt-md-0">
                                            <label htmlFor="name">{this.props.translation("contact_time")}</label>
                                            <input type="time" className="form-control" name="time" onChange={handleChange} id="time"
                                                   placeholder="Pick Time" required/>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="name">{this.props.translation("contact_subject")}</label>
                                        <input type="text" className="form-control" name="subject" onChange={handleChange} id="subject"
                                               placeholder={this.props.translation("contact_subject")} required/>
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="name">{this.props.translation("contact_message")}</label>
                                        <textarea className="form-control" name="message" onChange={handleChange} rows="10"
                                                  required/>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">{this.props.translation("contact_loading")}</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">{this.props.translation("contact_success")}</div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">{this.props.translation("contact_submit")}</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        responseData:state.addContactUs.addContactUsData
    };
}
export default connect(mapStateToProps,
    {addContactUsForm})(Contact);