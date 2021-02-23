/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function SectionGoal() {
  return (
    <>
      <div className="section text-center"
        >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Our goal</h2>
              <h3 className="description">
                We wish to provide amatures and expert on teas alike the possibility 
                of finding recepies and other related things that they might enjoy.
                With this provide a user-friendly platform and give as much of an
                enjoyable experience as possible.
              </h3>
            </Col>
          </Row>

          <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">The Brewery</h4>
                    <p className="description">
                      Share with the world new recepies of teas. Here you can 
                      add new recepies to our libraries.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Recepies</h4>
                    <p>
                      Discover new tea recepies or twists to ones you knew.
                      Here we present a library of teas and recepies of all types.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Tea Survey</h4>
                    <p>
                      Don't know much about tea or what to try? Take this 
                      survey and discover possible teas you might enjoy.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">LFTV Forum</h4>
                    <p>
                      Communicate, meet, share recepies and much more 
                      with other LFTV users at our Forum.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionGoal;
