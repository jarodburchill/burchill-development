import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const AboutBio = () => {
  let diff = (new Date().getTime() - new Date("July 5, 1999 00:00:00").getTime()) / 1000;
  diff /= (60 * 60 * 24);
  diff /= 365.25;
  let age = Math.floor(diff);
  return (
    <>
      <Jumbotron>
        <h2>Jarod Burchill</h2>
        <hr className="my-4" />
        <h4>Who Am I?</h4>
        <hr className="my-4" />

        <p className="lead">{age} year-old freelance software developer located in the Kitchener/Waterloo area.</p>
        <p className="lead">Big believer in agile, test-driven, object-oriented software development.</p>
        <p className="lead">Developer that has tremendous hands-on experience with web
            development in HTML5, CSS3, JavaScript, Bootstrap, jQuery, PHP, and ASP.NET via personal
            projects and post secondary education assignments and labs.</p>
        <br />
        <h4>Education</h4>
        <hr className="my-4" />
        <p className="lead">Recently completed my second year of the Computer Programmer/Analyst Program at
            Conestoga College: Institute of Technology and Advanced Learning.</p>
        <p className="lead">89.46% weighted average.</p>
        <p className="lead">Currently on a co-op work term at the Waterloo Regional Police Service as a
            Programmer/Analyst.</p>
        <br />
        <h4>Hobbies and Interests</h4>
        <hr className="my-4" />
        <p className="lead">Solving complex puzzles such as rubik's cubes.</p>
        <p className="lead">Staying active by taking part in sports such as basketball, wrestling and snowboarding.</p>
        <p className="lead">Hanging out with my golden retriever, Gemma:)</p>
      </Jumbotron>
    </>
  );
}

export default AboutBio;