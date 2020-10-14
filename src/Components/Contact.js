import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      // var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      // var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <div className="row">
            <div className="columns contact-details">
               <h4>Contact Details</h4>
               <p className="address">
                  <span>{name}</span><br />
                  <span>
                     {/* {street}<br /> */}
                        {city} {state}, {zip}
                  </span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
               </p>
            </div>
            <div className="columns download">
               <p>
                  <a href="resume.pdf" className="button" target="_blank" download="ChristinaBayley-resume.pdf"><i className="fa fa-download"></i>Download Resume</a>
               </p>
            </div>
         </div>
         <div>
            <div className="row">
               <div className="columns contact-details">
                  <p>Whether it's a question or you want to talk about your latest project, feel free to reach out to me!</p>
               </div>
               <div className="columns download">
                  <a href="mailto:christinabayley@comcast.net" className="button"><i className="fa fa-envelope"></i> Email Me!</a>
               </div>
            </div>   
         </div>
      </section>
    );
  }
}

export default Contact;
