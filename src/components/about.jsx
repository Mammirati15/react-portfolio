import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "90%", value: "90" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "ReactNativeJS_skill",
          content: "React Native",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Redux_skill",
          content: "Redux",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Bootstrap_skill",
          content: "Bootstrap",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Postman_skill",
          content: "Postman",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "NodeJs_skill",
          content: "NodeJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Express_skill",
          content: "Express",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "AWS_skill",
          content: "AWS",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Mongo_skill",
          content: "MongoDB",
          porcentage: "85%",
          value: "85                                                                                                                                                                                                                                                                                                                                                                                                                                                        "
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Matt Ammirati and I am a Freelance Full Stack Developer and UX Designer.  I am a full stack developer day to day for a media services company."
        },
        {
          id: "second-p-about",
          content:
            "When I realized software was what I wanted to focus on, I began teaching myself with online resources like completing a Full Stack Javascript course, different courses on Pluralsight, watching and following along with different tutorials, then I aquired a personal mentor.  I worked with my teacher at least once a day for 2 years covering everything in full stack javascript including: React, Express, different databases, API's and unit testing."
        },
        {
          id: "third-p-about",
          content:
            "After studying with him over the years, I then decided to complete a full stack bootcamp.  I graduated in August of 2020 and began my career in Freelance Development. Since then I have been working with different clients completing tasks utilizing tools like AWS, Wordpress, Postman and other tools I learned along the way. I currently work with 2 clients one with a focus on Wordpress, the other with React, Redux, and AWS Serverless."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
