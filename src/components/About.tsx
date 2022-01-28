import { FC } from "react";
import Tools from "./Tools";
import previousWorks from "./previousWorks"; // TypesWorksDone, // TypePreviousWorks,
import PastExperience from "./PastExperience";

const About: FC = () => {
  return (
    <main id="about">
      <div className="flex">
        <div className="left">
          <img src="/images/man.png" alt="" />
        </div>
        <div className="middle">
          <h1>
            Hey 👋 <span className="h1">Rashid</span> Here
          </h1>

          <div className="description">
            A passionate web developer and Technology enthusiast
          </div>

          <div className="details">
            <table className="det">
              <tr>
                <td className="entry">Full Name :</td>
                <td className="value">MD Rashid Hussain</td>
              </tr>

              <tr>
                <td className="entry">From :</td>
                <td className="value">Bhagalpur, Bihar, India</td>
              </tr>

              <tr>
                <td className="entry">University :</td>
                <td className="value">Jamia Millia Islamia 🇮🇳</td>
              </tr>

              <tr>
                <td className="entry">Interests :</td>
                <td className="value">
                  Web Development, Web Security, Programming
                </td>
              </tr>

              <tr>
                <td className="entry">Soft Skills :</td>
                <td className="value">
                  Problem Solving, Leadership, Management
                </td>
              </tr>

              <tr>
                <td className="entry">Hobbies :</td>
                <td className="value">
                  Football, Creative Writing, Reading, Singing
                </td>
              </tr>

              <tr>
                <td className="entry">Email(s) :</td>
                <td className="email">md2000399@st.jmi.ac.in</td>
              </tr>

              <tr>
                <td className="entry">Email(s) :</td>
                <td className="email">mdrashid.hussain.786.01@gmail.com</td>
              </tr>
            </table>
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
