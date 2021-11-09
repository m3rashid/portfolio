import React from 'react'

function About() {
    return (
        <main id="about">
            <div className="flex">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + '/images/man.png'} alt="" />
                </div>
                <div className="right">
                    <h1>Hey 👋 Rashid Here</h1>
                    <div className="description">A passionate web developer and Technology enthusiast</div>
                    <div className="details">
                        <div className="det">
                            <span className="entry">Full Name: &nbsp;</span>
                            <span className="value">MD Rashid Hussain</span>
                        </div>
                        <div className="det">
                            <span className="entry">From: &nbsp;</span>
                            <span className="value">Bhagalpur, Bihar, India</span>
                        </div>
                        <div className="det">
                            <span className="entry">University: &nbsp;</span>
                            <span className="value">Jamia Millia Islamia 🇮🇳</span>
                        </div>
                        <div className="det">
                            <span className="entry">Interests: &nbsp;</span>
                            <span className="value">Web Development, Web Security, Programming</span>
                        </div>            
                        <div className="det">
                            <span className="entry">Soft Skills: &nbsp;</span>
                            <span className="value">Problem Solving, Leadership, Management</span>
                        </div>
                        <div className="det">
                            <span className="entry">Hobbies: &nbsp;</span>
                            <span className="value">Football, Creative Writing, Reading, Singing</span>
                        </div>            
                        <div className="det">
                            <span className="entry">Email: &nbsp;</span>
                            <span className="email">md2000399@st.jmi.ac.in</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
