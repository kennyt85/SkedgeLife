import React, { Component } from "react";
import "./home.css";

//components:
// import LandingPageCarousel from "../../components/landingPageCarousel/landingPageCarousel";
import {
  Button,
  Icon,
  Carousel,
  Row,
  Col,
  CardPanel,
  Card,
  Parallax
} from "react-materialize";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Row>
          <Carousel
            fixedItem={[
              <button className="btn">MORE</button>,
              <button className="btn">TRY ME</button>,
              <button className="btn">CHECK IT OUT</button>
            ]}
            options={{
              fullWidth: true,
              indicators: true
            }}
            images={[
              "https://www.sas.com/en_us/learn/academic-programs/students/_jcr_content/par/styledcontainer_24bc/image.img.jpg/1517496220627.jpg",
              "https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,q_auto/v1494865224/Blog/college_students.jpg",
              "https://ak3.picdn.net/shutterstock/videos/3684833/thumb/1.jpg"
            ]}
            // children={[<p>Hey you</p>, <p>Hey you two</p>]}
          >
            <div className="parallax-container">
              <h3>First carousel panel</h3>
              <p>you could do all kinds of stuff</p>
              <button className="btn">MORE</button>
            </div>
          </Carousel>
        </Row>
        <Row>
          <Col m={4} s={12}>
            <Card
              className="teal lighten-4 black-text"
              title="Customize your web presence"
              actions={[
                <a href="#">
                  <Icon className="link-icon">devices</Icon>
                  View Templates
                </a>
              ]}
            >
              You could be a fitness instructor or massage therapist, a guitar
              teacher, a handyman… Anyone with a schedule and a service can use
              SkedgeLife to setup sessions both online and in person. Our
              templates allow you to customize your profile page to fit you
              needs.
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              className="teal lighten-4 black-text"
              title="Create your own Schedule"
              actions={[
                <a href="#">
                  <Icon className="link-icon">event_note</Icon>View Scheduling
                  Demo
                </a>
              ]}
            >
              If you have a skill or trade, why work for someone else? Setup
              your own business to take payments in person, online, or even on a
              monthly or subscription basis. You could work from anywhere! Keep
              your clients posted on your latest schedule and availability.{" "}
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              className="teal lighten-4 black-text"
              title="Sign up for Free!"
              actions={[
                <a href="#">
                  <Icon className="link-icon">edit</Icon>
                  Sign Up for Free
                </a>
              ]}
            >
              Anyone can sign up for a free profile page. Whether you want to
              share your bio and schedule, or locate a class or service and sign
              up and pay directly. Students can follow their favorites, get
              notifications on your latest news and schedule updates, and even
              leave reviews!
            </Card>
          </Col>
        </Row>
        <Row>
          <div className="parallax-container">
            <Parallax imageSrc="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/30704042_10156138948371113_5893660926522949632_n.jpg?_nc_cat=0&oh=4d7f81708cba681211b72868653c84c2&oe=5B6EDBD2" />
            <p className="grey-text text-darken-3 lighten-3">
              Parallax is an effect where the background content or image in
              this case, is moved at a different speed than the foreground
              content while scrolling.
            </p>
          </div>
        </Row>
      </div>
    );
  }
}
