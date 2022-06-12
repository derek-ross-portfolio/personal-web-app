import React from 'react'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <body>
            <header id="header" className="fixed-top d-flex justify-content-center align-items-center header-transparent">
              <nav id="navbar" className="navbar">
                <ul>
                  <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                  <li><a className="nav-link scrollto" href="#about">About</a></li>
                  <li><a className="nav-link scrollto" href="#resume">Resume</a></li>
                  <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </header>
           
            <section id="hero">
              <div className="hero-container">
                <h1>Derek Ross</h1>
                <h2>Father. Climber. Cook. Adventurer. Engineer. Writer. Veteran.</h2>
                <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down"></i></a>
              </div>
            </section>

            <main id="main">
              <section id="about" className="about">
                <div className="container">

                  <div className="section-title">
                    <span>About Me</span>
                    <h2>About Me</h2>
                    <p>I am a father to two wonderful children.  My passions are climbing mountains (ice and rock), cooking, traveling (20+ countries), and veteran advocacy!</p>
                  </div>

                  <div className="row">
                    <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
                    <div className="col-lg-8 d-flex flex-column align-items-stretch">
                      <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                        <div className="row">
                          <div className="col-lg-6">
                            <ul>
                              <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Derek Ross</span></li>
                              <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <a href="http://derek-ross.com"><span>derek-ross.com</span></a></li>
                              <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Salt Lake City, UT</span></li>
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <ul>
                              <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>35</span></li>
                              <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor - Business Admin, MIS - Xavier University</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="skills-content ps-lg-4">
                        <div className="progress">
                          <span className="skill">Web Application Development (HTML,CSS,JS) <i className="val">80%</i></span>
                          <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="progress">
                          <span className="skill">CI Tools (Git, Jenkins, Artifactory, Nexus, SonarQube, Twistlock, Anchore, etc.) <i className="val">100%</i></span>
                          <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="progress">
                          <span className="skill">CD Tools (AWS, Azure, Heroku, Octopus, Argo) <i className="val">80%</i></span>
                          <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="progress">
                          <span className="skill">Web App Test Automation (JS, Java, Python) <i className="val">100%</i></span>
                          <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>

                        <div className="progress">
                          <span className="skill">MERN Stack <i className="val">70%</i></span>
                          <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </section>

              <section id="resume" className="resume">
                <div className="container">

                  <div className="section-title">
                    <span>My Resume</span>
                    <h2>My Resume</h2>
                    <p>I am a seasoned technical professional currently working as a Global Lead Solutions Engineer.  I have been a technical leader in sales, software development, consulting, and release engineering organizations using my unique experiences and skill sets to excel at all positions.  I am a veteran of the US Army Special Forces, having earned the Green Beret.  My diverse experiences have groomed me to be a better leader, technologist, and teammate.</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="resume-title">Current</h3>
                      <div className="resume-item pb-0">
                        <h4>Opsera - Global Lead Solutions Engineer</h4>
                        <p>
                          <p>
                            Working at Opsera, I get to help customers manage their delivery processes for SaaS applications, traditional software, and infrastructure as code.  I lead the Customer Engineering efforts that encompass all technical work in the pre and post sales customer lifecycle. I create training for the Sales and Customer Success orgs on customer interactions and experiences.  I build on 10+ years of IT management and software delivery expertise to help customers in three main areas. 
                          </p>
                          <p><em>
                            Tool Chain Management
                          </em></p>
                          <p>
                            Every enterprise has to deploy and internally host tools to support the application, infrastructure, and SaaS needs. I help them create architectures and processes that utilize Opsera’s excellent toolchain management features to increase their delivery and management efficiency.
                          </p>
                          <p><em>
                            Pipeline Orchestration
                          </em></p>
                          <p>
                            Provide customer guidance on their journeys to create modern CICD pipelines that facilitate all the necessary build steps, code quality scans, test automation, deployment automation, and manual review steps that are required to deliver quickly and confidently.
                          </p>
                          <p><em>
                            DevOps Reporting
                          </em></p>
                          <p>
                            Helping customers to understand where to look for and how to assemble data that helps you measure the maturity of your delivery practices and points leadership in the direction of faster, safer delivery practices.
                          </p>
                          <ul>
                            <li>San Jose, CA</li>
                            <li>derek-ross@opsera.io</li>
                          </ul>
                        </p>
                      </div>

                      <h3 className="resume-title">Education</h3>
                      <div className="resume-item">
                        <h4>Bachelor of Business Administration -- Management of Information Systems</h4>
                        <h5>2013 - 2016</h5>
                        <p><em>Xavier University, Cincinnati, OH</em></p>
                        <p>Software development, project management, statistcal analysis.  Two internships at GE Aviation working on Business Analytics and System Administration projects. </p>
                      </div>
                      <div className="resume-item">
                        <h4>John F Kennedy Special Warfare Center and School -- Special Forces Qualification Course</h4>
                        <h5>2013 - 2016</h5>
                        <p><em>Fort Bragg, NC</em></p>
                        <p>Trained to be able to perform the duties of a Special Forces Medical Sergeant. Worked in environments requiring me to create training and pre-deployment workups for units of 350+ personnel in a foreign language.  Conducted combat operations with partner nations requiring maturity and focus no other job can compare to.  The unique experiences and learnings from my time in speical forces make me a unique addition to any team providing valuable insights that are directly applicable to modern software delivery and organizational challenges.</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="resume-title">Professional Experience</h3>
                      <div className="resume-item">
                        <h4>Lead Solutions Engineer (N. America)</h4>
                        <h5>2020-2021</h5>
                        <p><em> Browserstack San Francisco, CA </em></p>
                        <p>
                        <ul>
                          <li>Met with Browserstack's most strategic clients virtually and in-person to develop, prototype, and deliver solutions that provided best-in-className test automation strategies.</li>
                          <li>Responsible for delivering and maintaining standards within all technical code examples, technical content, and customer facing product demos.</li>
                          <li>Technical evangelist delivering presentations at global conferences, local meetups, and customer events.</li>
                          <li>Respsonsible for professional consulting services for redesign of enterprise release engineering processes from ideation to production using DevOps methodology and tooling.</li>
                        </ul>
                        </p>
                      </div>
                      <div className="resume-item">
                        <h4>Senior Solutions Engineer (DevOps Consultant)</h4>
                        <h5>2018-2020</h5>
                        <p><em> Sauce Labs San Francisco, CA </em></p>
                        <p>
                        <ul>
                          <li>Responsible for delivering and maintaining standards within all technical code examples, technical content, and value based delivery across all product offerings.</li>
                          <li>Technical evangelist delivering presentations at global conferences, local meetups, and Sauce Labs customer events. </li>
                          <li>Provided SME support to all Sales Engineers globally supporting them through deep technical issues, test automation troubleshooting, 3rd party integrations, and enterprise architectural design.</li>
                          <li>Provided professional consulting services to customers to assist in redesign of release engineering processes from ideation to production.</li>
                        </ul>
                        </p>
                      </div>
                      <div className="resume-item">
                        <h4>Technical Product Manager</h4>
                        <h5>2017-2018</h5>
                        <p><em>T-Mobile Bellevue, WA</em></p>
                        <p>
                        <ul>
                          <li>Responsible for the delivery of strategy, vision, and prioritization for all tools and development enabling transition to a DevOps software delivery model.</li>
                          <li>Heavily focused on transforming the entire software development lifecycle including source control management, build management, artifact management, and deployment standardization.</li>
                          <li>The toolsets I standardized included Bitbucket, Jenkins, Artifactory, Selenium/Appium, Docker, HA Proxy, Kubernetes, AWS, and Cloud Foundry.</li>
                          <li>Employee of the quarter for achievments in digital transformation initiatves.</li>
                        </ul>
                        </p>
                      </div>
                      <div className="resume-item">
                        <h4>DevOps Engineer</h4>
                        <h5>2015-2017</h5>
                        <p><em>GE Aviation</em></p>
                        <p>
                        <ul>
                          <li>Responsible for integrating 3rd party solutions to serve as the core for the GE Aviation Digital Thread initiative.</li>
                          <li>Provided development teams the tools, processes, and technology necessary to move legacy engine design and certification tools to AWS, AWS Gov Cloud, and GE Predix.</li>
                          <li>I led technical initiatives to move monolithic apps to a modern delivery model utilizing Jenkins, Docker, Artifactory, GitHub, and Linux systems.</li>
                          <li>Provided technical architectures for a microservices approach using NGINX to serve up all endpoints.</li>
                        </ul>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <section id="testimonials" className="testimonials">
                <div className="container position-relative">

                  <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">

                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <img src="assets/img/testimonials/omer_ansari.jpeg" className="testimonial-img" alt="" />
                          <h3>Omer Ansari</h3>
                          <h4>Director, Software Engineering, Salesforce</h4>
                          <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Derek is one of those dynamo, self-starter, type of folks who generate their own energy and drive. In fact, they are programmed for constant forward progress. My Irish English teacher taught us in Cambridge, "ne ardua terreant" (nothing is impossible). Derek embodies this slogan. I've had the privilege of working with Derek in our transformation team. He literally changed the dynamics of the team around when he joined, infusing the group with energy, thoughtful architecture and design, and not shying away from hands-on whenever needed to for our customers. He masterfully protected his team's bandwidth (even from me!) and markely improved the timeliness and quality of our product delivery function. He has a vast arsenal of knowledge around modern DevOps, SDLC practices, and is able to deliver a solution to any type of problem you could throw at him. I hope our paths converge again in the future. It was such a pleasure.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <img src="assets/img/testimonials/jayachandra_chavali.jpeg" className="testimonial-img" alt="" />
                          <h3>Jayachandra Chavali</h3>
                          <h4>Full Stack Develoepr, T-Mobile</h4>
                          <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Derek Ross worked as DevOps Lead and Product owner at T-Mobile. He's en extremely hardworking professional. His knowledge on DevOps (Jenkins, GIT, CI CD pipeline and web technologies) is outstanding, if you are looking for a qualified candidate with respect of others and professionalism that does not play the office politics game, he is the perfect.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <img src="assets/img/testimonials/steve_tovornik.jpeg" className="testimonial-img" alt="" />
                          <h3>Steven Tovornik</h3>
                          <h4>Sr. Director, Operations and Security, GE Aviation</h4>
                          <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Derek came to GE after serving his country proudly, by way of the GE Digital Leadership program (DTLP). I hired Derek to take on a new space for our team, executing a CI/CD strategy for Aviation's largest internal Predix application. Derek continuously went above and beyond. He had to learn several new technologies and processes, as well as how to fail fast with these technologies and pivot to a better solution. Derek - we miss you! Your passion and energy are so contagious. Best of luck in your new adventure. I highly recommend Derek to anyone looking to bring strong expertise and energy into an organization.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>

                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </section>

              <section id="contact" className="contact">
                <div className="container">

                  <div className="section-title">
                    <span>Contact Me</span>
                    <h2>Contact Me</h2>
                    <p>Reach out to me to talk about jobs, climbing, and travel opportunities.</p>
                  </div>

                  <div className="row">

                    <div className="col-lg-12">

                      <div className="row">
                        <div className="col-md-12">
                          <div className="info-box">
                            <i className="bx bx-share-alt"></i>
                            <h3>Social Profiles</h3>
                            <div className="social-links">
                              <a href="https://twitter.com/iamderekross" className="twitter"><i className="bi bi-twitter"></i></a>
                              <a href="https://www.instagram.com/soul.of.a.soldier" className="instagram"><i className="bi bi-instagram"></i></a>
                              <a href="https://www.linkedin.com/in/devopsderekross/" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="info-box mt-4">
                            <i className="bx bx-envelope"></i>
                            <h3>Email Me</h3>
                            <p>derek@soulofasoldier.com</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="info-box mt-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>Call Me</h3>
                            <p>+1 262 744 0280</p>
                          </div>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
              </section>
            </main>

            <footer id="footer">
              <div className="container">
                <h3>Derek Ross</h3>
                <div className="social-links">
                  <a href="https://twitter.com/iamderekross" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="https://www.instagram.com/soul.of.a.soldier" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/devopsderekross/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </body>
      </div>
    );
  }
}

export default App;
