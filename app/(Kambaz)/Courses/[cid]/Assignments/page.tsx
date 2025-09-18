import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments-quizzes-exams-projects">
      <div id="wd-assignments">
        <input placeholder="Search for Assignments"
              id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 30% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              A1 - ENV + HTML
            </Link> <br /> Multiple Modules | <b>Not available until</b>  May 6 at 12.00am | <b>Due</b> May 13 at 11:59pm | 100 pts</li>
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              A2 - CSS + BOOTSTRAP
            </Link> <br /> Multiple Modules | <b>Not available until</b>  May 13 at 12.00am | <b>Due</b> May 20 at 11:59pm | 100 pts </li>
          <li className="wd-assignment-list-item">
            <Link href="/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              A3 - JAVASCRIPT + REACT
            </Link> <br /> Multiple Modules | <b>Not available until</b>  May 20 at 12.00am | <b>Due</b> May 27 at 11:59pm | 100 pts </li>
        </ul>
      </div>

      <div id="wd-quizzes">
        <input placeholder="Search for Quizzes"
              id="wd-search-quiz" />
        <button id="wd-add-quiz-group">+ Group</button>
        <button id="wd-add-quiz">+ Quiz</button>
        <h3 id="wd-quizs-title">
          QUIZZES 20% of Total <button>+</button> </h3>
        <ul id="wd-quiz-list">
          <li className="wd-quiz-list-item">
            <Link href="/Courses/1234/quizs/123"
              className="wd-quiz-link" >
              Q1 - ENV + HTML
            </Link> <br /> Multiple Modules | <b>Not available until</b>  May 6 at 12.00am | <b>Due</b> May 13 at 11:59pm | 100 pts</li>
          <li className="wd-quiz-list-item">
            <Link href="/Courses/1234/Quizzes/123"
              className="wd-quiz-link" >
              Q2 - CSS + BOOTSTRAP
            </Link> <br /> Multiple Modules | <b>Not available until</b>  May 13 at 12.00am | <b>Due</b> May 20 at 11:59pm | 100 pts </li>
        </ul>
      </div>

      <div id="wd-exams">
        <input placeholder="Search for Exams"
              id="wd-search-exam" />
        <button id="wd-add-exam-group">+ Group</button>
        <button id="wd-add-exam">+ Exam</button>
        <h3 id="wd-exams-title">
          EXAMS 20% of Total <button>+</button> </h3>
        <ul id="wd-exam-list">
          <li className="wd-exam-list-item">
            <Link href="/Courses/1234/Exams/123"
              className="wd-exam-link" >
              E1 - FRONTEND
            </Link> <br /> Multiple Modules | <b>On</b> Oct 13 at 11:59pm | 100 pts</li>
          <li className="wd-exam-list-item">
            <Link href="/Courses/1234/exams/123"
              className="wd-exam-link" >
              E2 - BACKEND
            </Link> <br /> Multiple Modules | <b>On</b> Dec 20 at 11:59pm | 100 pts </li>
        </ul>
      </div>

      <div id="wd-projects">
        <input placeholder="Search for Projects"
              id="wd-search-project" />
        <button id="wd-add-project-group">+ Group</button>
        <button id="wd-add-project">+ Project</button>
        <h3 id="wd-projects-title">
          PROJECT 30% of Total <button>+</button> </h3>
        <ul id="wd-project-list">
          <li className="wd-project-list-item">
            <Link href="/Courses/1234/projects/123"
              className="wd-project-link" >
              PROJECT - CHOOSE YOUR TOPIC
            </Link> <br /> <b>Due</b> Dec 13 at 11:59pm | 100 pts</li>
        </ul>
      </div>
    </div>
);}
