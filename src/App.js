import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';

function App() {
  const portfolioLinks = [
    {
      title: 'Corona Dashboard - India',
      caption: 'Go Corona..Corona Go - Flaten the Curve, so Stay Home, Stay Safe',
      site:'https://www.covid19india.org/',
      image: 'img/coronadash.jpg',
      alt: 'coronadash'
    },
    {
      title: 'Team-BHP',
      caption: 'The most trusted, detailed and unbiased Car Reviews & News in India.',
      site: 'https://www.team-bhp.com/',
      image: 'img/teambhp.jpg',
      alt: 'teambhp'
    },
    {
      title: 'GitHub',
      caption: 'The Place Where I Fork :p',
      site: 'https://github.com/amirtaraj',
      image: 'img/github.jpg',
      alt: 'github'
    },
    {
      title: '9to5Mac',
      caption: 'News and reviews on iPhone, iPad, and all things Mac!',
      site: 'https://9to5mac.com/',
      image: 'img/9to5mac.jpg',
      alt: '9to5mac'
    },
    {
      title: 'GSM Arena',
      caption: 'The ultimate resource for GSM handset information',
      site: 'https://www.gsmarena.com/',
      image: 'img/gsmarena.jpg',
      alt: 'gsmarena'
    },
    {
      title: 'My First Site :P',
      caption: 'No, this is not News :p',
      site: 'http://amirtaraj.page.tl/',
      image: 'img/mysite1.jpg',
      alt: 'mysite1'
    },
    
  ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#top">Amirtaraj R</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">My Channel</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To My Page!</div>
        <div className="intro-heading text-uppercase">NICE TO SEE YOU AGAIN</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">My Channel</h2>
          <h3 className="section-subheading text-muted">Click <a href="https://www.youtube.com/user/amirtaraj?sub_confirmation=1" class="btn btn-primary">SUBSCRIBE</a> for more content like this</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
            <iframe title="iFrame1" width="350" height="197" src="https://www.youtube.com/embed/W0GtTNxcJ7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="yes"></iframe>
          <h4 className="service-heading">RetroTech - iPhone 4S</h4>
          <p className="text-muted">How is it using iPhone 4S in 2020 on iOS6 vs iOS9? Lets get some Nostalgia and pure skeuomorphism [in 8K ProRes]</p>
        </div>
        <div className="col-md-4">
            <iframe title="iFrame2" width="350" height="197" src="https://www.youtube.com/embed/xXcVtj8wG3A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="yes"></iframe>
          <h4 className="service-heading">Review - Apple Watch Series 4</h4>
          <p className="text-muted">Apple Watch Series 4 review in 2019 with WatchOS 6 compared to Series 5, is it worth it? and Series 3, is it better than it?</p>
        </div>
        <div className="col-md-4">
        <iframe title="iFrame3" width="350" height="197" src="https://www.youtube.com/embed/OE3ibgXKo4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="yes"></iframe>
          <h4 className="service-heading">Lamborghini GIRO - 2018</h4>
          <p className="text-muted">16 Bulls participated- Huracan x10, Huracan Spyder, Aventador Roadster, Aventador SV Roadster and Gallardo x3</p>
        </div>
      </div>
    </div>
  </section>

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About Me</h2>
          <h3 className="section-subheading text-muted">My Professional Journey</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
              <h4>Infosys</h4>
                <img className="rounded-circle img-fluid" src="img/1.jpg" alt="infylogo"/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014 - May 2019</h4>
                  <h4 className="subheading">Software Test Analyst</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Performance Testing, API Testing, UI Automation Testing - Selenium, Cross Browser/ device Testing, Web Application maintenance</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
              <h4>ABB</h4>
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>May 2019 - Nov 2019</h4>
                  <h4 className="subheading">Sales Support Speacialist</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Application Maintenence and Setting up of UI Automation Framework using Selenium-TestNG</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
              <h4>TekSystems</h4>
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Nov 2019 - Present</h4>
                  <h4 className="subheading">Senior Software Engineer</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">UI Automation Testing with Protractor - Cucumber BDD and Typescript language, API Testing, Performance Testing</p>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </section>

  


  

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h4 className="section-subheading text-muted">You are welcome to post comments, area of improvements and any content that I need to add to the site</h4>
          <h3 className="section-subheading text-muted">Site Under Construction, So for now use the social links below in footer to contact me</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Amirtaraj R 2020</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://twitter.com/amirtaraj">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.facebook.com/amirtaraj.r">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/amirtaraj/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/amirtaraj/">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
