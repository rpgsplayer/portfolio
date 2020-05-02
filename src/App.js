import React from 'react';
import './App.css';
import { Navbar, Container, Row, Col, Image, Card, Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from "react-scroll";
import Scrollspy from 'react-scrollspy'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.scrollspy = this.scrollspy.bind(this);
    this.projects = [
      {name:"smartpremi", website:"http://www.smartpremi.com/bbr", description:"Smartpremi is an e-commerce website which sells various insurance products such as travel and motor vehicle. The products are aimed directly towards corporate businesses including but not limited to Pakubuwono, Sinarmas Mining, Plaza Indonesia, etc. Customers can pay directly using credit card or bank transfer provided by Faspay payment gateway. Once paid, an electronic copy of insurance policy will be emailed to the customer.\nI'm responsible for implementing new insurance products and also to ensure that customers have a smooth experience in buying new insurance."}, 
      {name:"jagain", website:"http://www.jagain.com", description:"Similar to Smartpremi, Jagain is also an e-commerce website. The difference is that the products are directed towards regular customers. The offered products contains more than 10 kinds of insurance, among which are motor vehicle, travel, property, and apartment.\nI participated in implementing payment Faspay payment gateway and later changed it to Doku."}, 
      {name:"bridestory", website:"http://wwww.bridestory.com", description:"Bridestory is an online platform which connects customers with wedding vendors. Costumers can find the right vendor based on his/her preferences, such as dress style, location, and preferred budget. The platform is available both on website and mobile application.\nI along with the team participated in developing Android application."}
    ];
    let projectStates = {}
    for(var i = 1; i <= this.projects.length; i++) {
      projectStates['showP' + i] = false;
    }
    this.state = projectStates;
  }

  handleShow(projectNo) {
    this.setState({['showP' + projectNo]: true});
  }

  handleClose(projectNo) {
    this.setState({['showP' + projectNo]: false});
  }

  scrollspy(e) {
    if(e !== undefined) {
      let section = e.getAttribute('id');
      let navLinks = document.getElementById('navbarResponsive').childNodes[0].childNodes;
      for(let i = 0; i < navLinks.length; i++) {
        if(navLinks[i].childNodes[0].getAttribute('href') === '#' + section) {
          navLinks[i].childNodes[0].className = 'nav-link active';
          for(let j = 0; j < navLinks.length; j++) {
            if(j !== i) {
              navLinks[j].childNodes[0].className = 'nav-link';
            }
          }
          break;
        }
      }
    }
  }

  checkScrollPos() {
    if(window.pageYOffset > 100) {
      document.getElementById('mainNav').className = 'navbar navbar-expand-lg fixed-top py-3 navbar-scrolled';
    } else {
      document.getElementById('mainNav').className = 'navbar navbar-expand-lg fixed-top py-3';
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScrollPos);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPos);
  }

  render() {
    return (
      <div className="App" id="page-top">
        {/* Navigation */}
        <Navbar className="py-3" id="mainNav" expand="lg" fixed="top">
          <Container>
            <Link className="navbar-brand" to="page-top" smooth={true} href="#page-top">Home</Link>
            <Navbar.Toggle aria-controls="navbarResponsive">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarResponsive">
              <Scrollspy className="navbar-nav ml-auto my-2 my-lg-0" items={['skills', 'projects', 'about', 'contact']} onUpdate={this.scrollspy}>
                <li className="nav-item"><Link to="about" smooth={true} className="nav-link" href="#about">About</Link></li>
                <li className="nav-item"><Link to="skills" smooth={true} className="nav-link" href="#skills">Skills</Link></li>
                <li className="nav-item"><Link to="projects" smooth={true} className="nav-link" href="#projects">Projects</Link></li>
                <li className="nav-item"><Link to="contact" smooth={true} className="nav-link" href="#contact">Contacts</Link></li>
              </Scrollspy>
            </Navbar.Collapse>
          </Container>  
        </Navbar>
        {/* Masthead */}
        <header className="masthead">
          <Container className="h-75">
            <Row className="h-100 align-items-center justify-content-center text-center">
              <Col lg={10} className="align-self-end">
                <Image src="assets/img/portfolio/thumbnails/profile-picture.jpg" roundedCircle width="25%" height="25%" />
                <br/>
                <br/>
                <h1 className="text-uppercase text-white font-weight-bold">Adhitya Wicaksono Putro</h1>
                <hr className="divider my-4" />
                <h1 className="text-uppercase text-white">Web Developer</h1>
              </Col>
            </Row>
          </Container>
        </header>
        {/* About section */}
        <section className="page-section bg-dark" id="about">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h2 className="text-white mt-0">Hi there, I'm Adhitya</h2>
                <hr className="divider light my-4" />
                <p className="text-white mb-4">I have experience in developing websites and API services. I'm also able to learn new technologies and do tasks independently. People usally know me for my tenacity and open-mindedness towards solving a problem.</p>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Skills section */}
        <section className="page-section" id="skills">
          <Container>
            <h2 className="text-center mt-0">Skills</h2>
            <hr className="divider my-4" />
            <Row>
              <Col lg={4} md={6} className="text-center">
                <div className="mt-5">
                  <h3 className="h4 mb-2">Programming Languages</h3>
                  <p className="text-muted mb-0">PHP, CodeIgniter, Python, Java, Javascript, jQuery, HTML, Bootstrap, React.js, CSS</p>
                </div>
              </Col>
              <Col lg={4} md={6} className="text-center">
                <div className="mt-5">
                  <h3 className="h4 mb-2">Development Tools</h3>
                  <p className="text-muted mb-0">Sublime Text, Sourcetree, Gitlab CE, Ansible, Docker</p>
                </div>
              </Col>
              <Col lg={4} md={6} className="text-center">
                <div className="mt-5">
                  <h3 className="h4 mb-2">Version Control</h3>
                  <p className="text-muted mb-0">Git, SVN</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Projects section */}
        <section className="page-section" id="projects">
          <Container>
            <h2 className="text-center mt-0">Projects</h2>
            <hr className="divider my-4" />
            <br/>
            <Row>
              <Col lg={4} md={6}>
                <Card className="zoom" onClick={this.handleShow.bind(this, 1)}>
                  <div className="embed-responsive embed-responsive-16by9">
                    <Card.Img className="embed-responsive-item round" src="assets/img/portfolio/fullsize/smartpremi1.png" />
                  </div>
                  <hr/>
                  <Card.Title><h5 className="text-center">Smartpremi</h5></Card.Title>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="zoom" onClick={this.handleShow.bind(this, 2)}>
                  <div className="embed-responsive embed-responsive-16by9">
                    <Card.Img className="embed-responsive-item round" src="assets/img/portfolio/fullsize/jagain1.png" />
                  </div>
                  <hr/>
                  <Card.Title><h5 className="text-center">Jagain</h5></Card.Title>
                </Card>
              </Col>
              <Col lg={4} md={6}>
                <Card className="zoom" onClick={this.handleShow.bind(this, 3)}>
                  <div className="embed-responsive embed-responsive-16by9">
                    <Card.Img className="embed-responsive-item round" src="assets/img/portfolio/fullsize/bridestory1.png" />
                  </div>
                  <hr/>
                  <Card.Title><h5 className="text-center">Bridestory</h5></Card.Title>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* Modals */}
          <ProjectModal
            show={this.state.showP1}
            onHide={this.handleClose.bind(this, 1)}
            project={this.projects[0]}
          />
          <ProjectModal
            show={this.state.showP2}
            onHide={this.handleClose.bind(this, 2)}
            project={this.projects[1]}
          />
          <ProjectModal
            show={this.state.showP3}
            onHide={this.handleClose.bind(this, 3)}
            project={this.projects[2]}
          />
        </section>
        {/* Contact section */}
        <section className="page-section" id="contact">
          <Container>
            <Row className="justify-content-center">
              <div lg={8} className="text-center">
                <h2 className="mt-0">Contact</h2>
                <hr className="divider my-4" />
              </div>
            </Row>
            <Row>
              <Col lg={3} className="ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+6281234014410</div>
              </Col>
              <Col lg={3} className="mr-auto text-center">
                <a href="https://www.linkedin.com/in/adhityawicaksono/">
                  <i className="fab fa-linkedin-in fa-3x mb-3 text-muted"></i>
                </a>
                <div>LinkedIn</div>
              </Col>
              <Col lg={3} className="mr-auto text-center">
                <a href="https://github.com/rpgsplayer">
                  <i className="fab fa-github fa-3x mb-3 text-muted"></i>
                </a>
                <div>Github</div>
              </Col>
              <Col lg={3} className="mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i><a className="d-block" href="mailto:adhitya.wicaksono.putro@gmail.com">adhitya.wicaksono.putro@gmail.com</a>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Links */}
      </div>
    )
  }
}

function ProjectModal(props) {
  let paragraphs = props.project.description.split('\n');
  let text = [];
  for (let i = 0; i < paragraphs.length; i++) {
    text.push(<p key={i}>{paragraphs[i]}</p>);
  }
  return (
    <Modal aria-hidden="true" size="xl" show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center text-uppercase font-weight-bold w-100">{props.project.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          <Carousel.Item>
            <Image src={"assets/img/portfolio/fullsize/" + props.project.name + "1.png"} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={"assets/img/portfolio/fullsize/" + props.project.name + "2.png"} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={"assets/img/portfolio/fullsize/" + props.project.name + "3.png"} fluid />
          </Carousel.Item>
        </Carousel>
        <hr/>
        {text}
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="info" href={props.project.website} target="_blank">Visit Website</Button>
        <Button type="button" variant="primary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
}

export default App;
