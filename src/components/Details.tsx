import React from "react";

const Details = () => {
  return (
    <div className="det">
      <div className="entry">Full Name</div>
      <div className="value">MD Rashid Hussain</div>

      <div className="entry">From</div>
      <div className="value">Bhagalpur, Bihar, India</div>

      <div className="entry">University</div>
      <div className="value">Jamia Millia Islamia</div>

      <div className="entry">Interests</div>
      <div className="value">Web Development, Web Security, Programming</div>

      <div className="entry">Soft Skills</div>
      <div className="value">Problem Solving, Leadership, Management</div>

      <div className="entry">Hobbies</div>
      <div className="value">Football, Creative Writing, Reading, Singing</div>

      <div className="entry">Email(s)</div>
      <div className="email">md2000399@st.jmi.ac.in</div>

      <div className="entry"></div>
      <div className="email">m3rashid.hussain@gmail.com</div>
    </div>
  );
};

const Education = () => {
  return (
    <>
      <h1 className="edu">Education</h1>
      <div className="school">
        <div className="name">DAV Public School</div>
        <div className="add">
          Deeptinagar, NTPC, Kahalgaon, Bhagalpur, Bihar
        </div>
        <div className="desc">High School, Matriculation</div>
      </div>
      <div className="school">
        <div className="name">Sayyid Hamid Senior Secondary School (Boys)</div>
        <div className="add">
          Aligarh Muslim University, Aligarh, Uttar Pradesh
        </div>
        <div className="desc">Senior Secondary, Intermediate Science (PCM)</div>
      </div>
      <div className="school">
        <div className="name">Faculty of Engineering and Technology</div>
        <div className="add">
          Jamia Millia Islamia, Jamia Nagar, Okhla, New Delhi
        </div>
        <div className="desc">University, Bachelors Course</div>
      </div>
    </>
  );
};

export { Details, Education };
