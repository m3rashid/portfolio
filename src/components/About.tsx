import { FC } from "react";
import Tools from "./Tools";
import previousWorks from "./previousWorks"; // TypesWorksDone, TypePreviousWorks,
import PastExperience from "./PastExperience";

const About: FC = () => {
  return (
    <main id="about">
      <div className="flex">
        <div className="left">
          <img src="/images/author.jpeg" alt="" />
        </div>
        <div className="middle">
          <h1>
            Hey 👋 <span className="h1">Rashid</span> Here
          </h1>

          <div className="description">
            A passionate web developer and Technology enthusiast
          </div>

          <div className="details">
            <div className="det">
              <div className="entry">Full Name</div>
              <div className="value">MD Rashid Hussain</div>

              <div className="entry">From</div>
              <div className="value">Bhagalpur, Bihar, India</div>

              <div className="entry">University</div>
              <div className="value">Jamia Millia Islamia 🇮🇳</div>

              <div className="entry">Interests</div>
              <div className="value">
                Web Development, Web Security, Programming
              </div>

              <div className="entry">Soft Skills</div>
              <div className="value">
                Problem Solving, Leadership, Management
              </div>

              <div className="entry">Hobbies</div>
              <div className="value">
                Football, Creative Writing, Reading, Singing
              </div>

              <div className="entry">Email(s)</div>
              <div className="email">md2000399@st.jmi.ac.in</div>

              <div className="entry"></div>
              <div className="email">mdrashid.hussain.786.01@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="experience">
            <h1>Work Experience</h1>
            {previousWorks.map((prev) => (
              <PastExperience
                key={prev.id}
                name={prev.name}
                type={prev.type}
                role={prev.role}
                worksDone={prev.worksDone}
              />
            ))}
          </div>
          <Tools />
        </div>
      </div>
    </main>
  );
};

export default About;
