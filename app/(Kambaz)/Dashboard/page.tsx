import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/3002" className="wd-dashboard-course-link">
            <Image src="/images/COA.jpg" alt="CS3L002 Computer Organization and Architecture" width={200} height={150} />
            <div>
              <h5>CS3L002 Computer Organization and Architecture</h5>
              <p className="wd-dashboard-course-title">
                CS3L002_Fall 2025 Semester
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3005" className="wd-dashboard-course-link">
            <Image src="/images/OS.jpg" alt="CS3L005 Operating Systems" width={200} height={150} />
            <div>
              <h5>CS3L005 Operating Systems</h5>
              <p className="wd-dashboard-course-title">
                CS3L005_Fall 2025 Semester
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/6001" className="wd-dashboard-course-link">
            <Image src="/images/ASP.jpg" alt="PH6L001 Atomistic Simulations in Physics" width={200} height={150} />
            <div>
              <h5>PH6L001 Atomistic Simulations in Physics</h5>
              <p className="wd-dashboard-course-title">
                PH6L001_Fall 2025 Semester
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3001" className="wd-dashboard-course-link">
            <Image src="/images/FLAT.jpg" alt="CS3L001 Formal languages and Automata Theory" width={200} height={150} />
            <div>
              <h5>CS3L001 Formal languages and Automata Theory</h5>
              <p className="wd-dashboard-course-title">
                CS3L001_Fall 2025 Semester
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3501" className="wd-dashboard-course-link">
            <Image src="/images/AT.jpg" alt="ME3L501 Applied Thermodynamics" width={200} height={150} />
            <div>
              <h5>ME3L501 Applied Thermodynamics</h5>
              <p className="wd-dashboard-course-title">
                ME3L501_Fall 2025 Semester
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2001" className="wd-dashboard-course-link">
            <Image src="/images/DS.jpg" alt="CS2L001 Discrete Structures" width={200} height={150} />
            <div>
              <h5>CS2L001 Discrete Structures</h5>
              <p className="wd-dashboard-course-title">
                CS2L001_Fall 2025 Semester
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1001" className="wd-dashboard-course-link">
            <Image src="/images/Chemistry.jpg" alt="CY1L001 Chemistry" width={200} height={150} />
            <div>
              <h5>CY1L001 Chemistry</h5>
              <p className="wd-dashboard-course-title">
                CY1L001_Fall 2025 Semester
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
