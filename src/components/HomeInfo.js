import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const HomeInfo = () => {
  return (
    <>
      <Jumbotron>
        <h2>Burchill Software Development</h2>
        <hr className="my-4" />
        <h4>What Can I Provide?</h4>
        <hr className="my-4" />
        <p className="lead">As a current computer programming student I by no means know everything there is to know
          about web/software delopment. With that being said, this field is my passion and I always welcome new and
          challenging projects. I am constantly striving to improve as a programmer.</p>
        <p className="lead">Some examples of my past work can be found under the portfolio section of this site. These
          examples are by no means my limitations, rather could be used as a template for a project if any of them are
          of interest.</p>
        <p className="lead">This website was designed and programmed by myself and is a good example of how I would
          go about creating a React Bootstrap personal website for a potential client.</p>
        <p className="lead">No matter what kind of project you are interested in having made, please send me an email
          detailing your needs. I love testing my skills and look forward to learning new ones in the process.</p>
        <h4>Why Choose Me?</h4>
        <hr className="my-4" />
        <p className="lead">As a new developer, a quality learning experience is way more valuable to me than getting
          a quick buck. I am very flexable when it comes to pricing and will not expect any payout if you are
          unsatisfied with the final product I provide. All inquiries are welcome, please reach out today!</p>
      </Jumbotron>
    </>
  );
}

export default HomeInfo;
