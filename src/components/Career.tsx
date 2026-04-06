import HoverLinks from "./HoverLinks";
import { TbNotes } from "react-icons/tb";
import "./styles/Career.css";
import { withBase } from "../utils/withBase";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Development Intern</h4>
                <h5>NIELIT – Ropar, Punjab</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Cleaned and preprocessed structured datasets using Python, Pandas,
              and NumPy. Performed exploratory data analysis (EDA) and built a
              diabetes prediction ML model achieving 87% accuracy. Completed a
              6-week internship gaining hands-on experience in data analysis
              workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Trainee</h4>
                <h5>Sonalika Group (International Tractors Ltd)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a full-stack task management web application. Worked with
              structured operational data for analysis and reporting. Performed
              data cleaning, validation, and preprocessing using SQL and
              PostgreSQL. Collaborated with cross-functional teams for data-driven
              decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Sonalika International Tractors Ltd</h5>
              </div>
              <h3>2025–2026</h3>
            </div>
            <p>
              Developed an interactive Sales Data Analytics Dashboard using Power
              BI / Excel / Tableau. Analyzed sales data to identify monthly
              trends, top-performing products, and regional performance. Designed
              KPIs such as Total Revenue, Sales Growth %, and Customer Insights.
              Cleaned and transformed raw data using SQL / Excel (data
              preprocessing). Enabled management to make data-driven decisions
              through visual reports and dashboards. Automated reporting process,
              reducing manual effort.
            </p>
          </div>

          <a
            className="career-resume-btn"
            href={withBase("/Resume_Amarjit_Singh.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverLinks text="VIEW FULL RESUME" />
            <TbNotes />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;
