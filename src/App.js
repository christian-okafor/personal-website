import React from 'react';
import './App.css';

// I'll rewrite this function to just return what the homepage will be (which should be the About Me page)
function About() {
  return (
    <About_P/>
  );
}
/* Will have multple export class statements here each corresponding to a button on the Nav pane
 * e.g About, Experience, etc (each will have it's own particular content)
 * Import statement in index will read something like 'import App, {About,Experience,Extracurricular,Skills,...etc} from ./App
 */
export class About_P extends React.Component {
  render() {
    return (
      <div>
        <h2> About Me </h2>
        <p className="reg">Hello and welcome to my personal website! My name is Christian Okafor and I'm an alumnus of the <i><b> University of California Berkeley</b></i>, where I 
        earned my <i><b> Bachelor of Arts in Applied Mathematics</b></i> in August of 2016. If you're a fellow Golden Bear, I'm sure the color scheme of this site may have already given this away, 
        <b> Go Bears!</b> </p>
        <p className='reg'>I engaged in this website, as a personal project, to satisfy multiple goals. I wanted this to be a project where I would be applying much of the new skills that I'm learning
        such as HTML, CSS, Javascript, Python, and React.js. I also wanted this site to showcase those aforementioned skills and to convince employers why I'm the right candidate for the job.
        </p>
        <p className='reg'> At the beginning of this project, I thought that I would be using a simple Flask app on the backend to serve up a few static HTML files, but I opted for a more dynamic web page design.
        Instead, I'm running a React.js built <abbr title='Single Page Application'>SPA</abbr> which renders specific information into the main content area. This was supposed to save time, but it ended up taking me down a rabbit hole
        of new skills needed to get this page up and running. I'm very proud of the progress that I've made so far, and I really look forward to being a lifelong learner of these technologies, as I do quite enjoy doing this.
        </p>
        <p className='reg'>
          Make sure to come back occasionally as I push new features/design changes to my website!
        </p>
      </div>);
  }
}
export class Skills extends React.Component {
  render() {
    return (
      <div>
        <h2> Skills </h2>
        <p>
          What I'm already familiar with at the moment:
        </p>
        <ul>
          <li>Python (Main Language, I feel most comfortable working with Data Structures and Algorithms in this language.)</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Javascript (Beginner knowledge)</li>
          <li>React.js (Beginner knowledge)</li>
          <li>Microsoft Office Excel &amp; Word</li>
        </ul>
        <p>
          I'm also interested in picking up the following:
        </p>
        <ul>
          <li>Full Stack Web Development</li>
          <li>User Interface Styling &amp; Design</li>
          <li>Backend Data Pipelines (Spark, Airflow, Beam, etc.)</li>
        </ul>
      </div>
    );
  };
};
export class Experience extends React.Component {
  render () {
    return (
      <div>
        <h2> Experience </h2>
        <div className='ul-header'>
          <p className='ul-title-location'>
            SEGAL CONSULTING || SAN FRANCISCO, CA
          </p>
          <div className='ul-flex'> <span className='ul-job-title'>Actuarial Analyst</span> <span className='dates-worked'> Dec 2018 - Jan 2020 </span></div>
        </div>
        <ul>
          <li>Assessed multiemployer defined benefit plan liabilities and assets for both actuarial valuations and cost forecasts. </li>
          <li>Assisted in maintaining quality assurance by maintaining required supporting documents and communicating with external auditors and fund administrators to ensure data accuracy.</li>
          <li>Worked closely with enrolled actuary and consultants to ensure effective presentation of key results.</li>
        </ul>
        <div className='ul-header'>
          <p className='ul-title-location'>
          KIPP LA ACADEMY OF INNOVATION || LOS ANGELES, CA
          </p>
          <div className='ul-flex'> <span className='ul-job-title'>Assistant Mathematics Teacher</span> <span className='dates-worked'> Mar 2018 - Jul 2018 </span></div>
        </div>
        <ul>
          <li>Planned and implemented engaging and rigorous standard-based lessons and assessments. </li>
          <li>Assisted lead teacher in assessing student progress, managing student behavior, and communicating with parents to ensure an effective educational environment for students.</li>
        </ul>
        <div className='ul-header'>
          <p className='ul-title-location'>
          UT HEALTH || HOUSTON, TX
          </p>
          <div className='ul-flex'> <span className='ul-job-title'>Research Assistant I (Salaried)</span> <span className='dates-worked'> Mar 2017 - Aug 2017 </span></div>
        </div>
        <ul>
          <li>Utilized the SPM 12 MATLAB package to perform analyses on sequential 2D Data Matrices (PET Scans) to investigate and predict signs of microglial activity.</li>
          <li>Set up a (locally hosted) MySQL database of subject/patient survey scores while adhering to HIPAA regulations.</li>
          <li>Initiated a project to automate routine MRI scan processing overnight (done in Bash).</li>
        </ul>
      </div>
    )
  }
}
export class Extra extends React.Component {
  render() {
    return (
      <div>
        <h2> Extracurriculars </h2>
        <div className='ul-header'>
          <p className='ul-title-location'>
          ZETTL CONDENSED MATTER PHYSICS LAB
          </p>
          <div className='ul-flex'> <span className='ul-job-title'>Undergraduate Research Assistant</span> <span className='dates-worked'> Aug 2014 - Aug 2016 </span></div>
        </div>
        <ul>
          <li>Was responsible for the synthetization and mapping of graphene flakes. </li>
          <li>Utilized basic statistical tests in R to test for correlations between design parameters and boundary sizes. </li>
        </ul>
        <div className='ul-header'>
          <p className='ul-title-location'>
          CALIFORNIA GOLDEN BEARS FOOTBALL TEAM
          </p>
          <div className='ul-flex'> <span className='ul-job-title'>Offensive Tackle</span> <span className='dates-worked'> Jan 2012 - Aug 2014 </span></div>
        </div>
        <ul>
          <li>Made a significant contribution in the 2013 season when inserted as the starter at left tackle for QB Jared Goff’s blindside. </li>
          <li>Earned 2nd team Pac-12 Conference Academic Honors as a sophomore. </li>
          <li>Check out my official <a href='https://calbears.com/sports/football/roster/christian-okafor/6439' target='_blank'>Cal Football Bio</a>.</li>
        </ul>
        <div className='ul-header'>
          <p className='ul-title-location'>
          SAGE MENTORSHIP PROJECT
          </p>
          <div className='ul-flex'> <span className='ul-job-title'>Student Mentor</span> <span className='dates-worked'> Jan 2012 - May 2014 </span></div>
        </div>
        <ul>
          <li>As a member of the SAGE Mentorship Program, I mentored and tutored 5th grade elementary students 1 on 1. </li>
        </ul>
      </div>
    );
  }
};
export default About;