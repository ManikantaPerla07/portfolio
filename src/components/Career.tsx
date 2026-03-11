import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Training
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Advanced Python for ML & AI</h4>
                <h5>CSE Pathshala</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed 35+ hours of intensive training in Python, machine learning fundamentals, and data preprocessing.
              Built practical models using Pandas, scikit-learn, and Matplotlib while applying model evaluation and feature engineering techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (CSE)</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Pursuing a Bachelor’s degree in Computer Science and Engineering with a focus on AI and Machine Learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (PCM)</h4>
                <h5>Sri Chaitanya Junior College</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed Intermediate education with 95.3% in the PCM stream (Physics, Chemistry, Mathematics).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
