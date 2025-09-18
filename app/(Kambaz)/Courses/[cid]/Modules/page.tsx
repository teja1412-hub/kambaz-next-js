export default function Modules() {
  return (
    <div>
      <button id="wd-collapse-all">Collapse All</button>
      <button id="wd-view-progress">View Progress</button>
      <select id="wd-publish-options">
        <option value="publish all">Publish All</option>
        <option value="only current">Only Current</option>
      </select>
      <button id="wd-add-module">+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-reading">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-reading-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-reading-item">Full Stack Developer - Chapter 2 - Creating User Interface</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-slides">
                  <li className="wd-slides-item">Introduction to Web Development</li>
                  <li className="wd-slides-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-slides-item">Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2, Lecture 2 - Formatting User Interface with HTML
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interface with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>
              <li className="wd-reading">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-reading-item">Full Stack Developer - Chapter 2 - Building User Interface using React HTML</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-slides">
                  <li className="wd-slides-item">Implementing Kambaz Account Screens</li>
                  <li className="wd-slides-item">Implementing Kambaz Dashboard Screens</li>
                  <li className="wd-slides-item">Implementing Kambaz Modules Screens</li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3, Lecture 3 - Styling web pages with CSS
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Intoduction to CSS</li>
                  <li className="wd-content-item">The box model - styling margins, borders and padding</li>
                </ul>
              </li>
              <li className="wd-reading">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-reading-item">Full Stack Developer - Chapter 3 - Styling web pages with CSS</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-slides">
                  <li className="wd-slides-item">Introduction to CSS</li>
                  <li className="wd-slides-item">The box model</li>
                  <li className="wd-slides-item">Rotating content and gradient background</li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
);}
