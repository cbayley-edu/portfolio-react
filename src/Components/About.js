import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      // var bio = this.props.data.bio;
      // var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      // var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Hello World!</h2>
               <p class="about-para">My technical adventure began many years ago when I would plug my Texas Instrument (TI) computer into our console television and write code from my 3-2-1 Contact magazine. When I was finished, I would sit in awe at a balloon, whose color I would type in a prompt, would bounce around the screen until I hit the 'p' key to pop it. I would then "record" my code onto an actual tape player so I could play my balloon game later.</p>
               <p class="about-para">Technology amazes and fascinates me. One of my favorite topics is Artificial Intelligence (AI). I'll never forget my first Azure logic app that used a cognitive service to determine an email's "feelings". Who would have thought 10 years ago that our refrigerators could connect to the Internet and let us know when we need milk? Connected devices are becoming part of our daily lives. How nice is it that your washer or dryer knows when it needs service and can automatically make the appointment for you?</p>
               <p class="about-para">I too have come a long way since my TI days. I've thoroughly enjoyed the adventure and embraced all of the new technologies I've learned along the way. I've had some great and patient mentors that have helped me on my journey and lended to my success. I started my career working on an ERP system. I learned how to write pretty complex reports, which helped me learn databases. Then I ventured into CRM systems. Having a strong database background, learning new systems came easy. I am extremely passionate about CRM and how important they are for companies. I invested a lot of time creating guidelines for best practice for configuring and implementing a successful CRM system. Throughout the later years of my career, I've dabbled with code, mostly JavaScript and C#. Recently, I started a new job working with an ERP system again. In my new position, I get to work on a vast realm of tasks. I love it! I love my job and I love the brilliant minds I get to work with on a daily basis.</p>
               <p class="about-para">My newest adventure is attending a Full Stack Development Bootcamp. It's been very exciting learning new technologies as well as filling in blanks on technologies that I've been using for years, but haven't fully understood. I'm hoping to use my new knowledge to build an amazing customer portal! In the meantime, I'm still in the learning process. Be sure to check out my portfolio for some recent projects and assignments I've completed. Thanks for stopping by!</p>
            {/* <p>{bio}</p> */}
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
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
                     <a href="../resume.pdf" className="button" target="_blank" download="ChristinaBayley-resume.pdf"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
