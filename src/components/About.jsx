import React from 'react'

// Technologies I work with
import Fahtml5 from '../svg/html5'
import Facss3 from '../svg/css3'
import Fasass from '../svg/sass'
import Fajavascript from '../svg/javascript'
import Fatailwindcss from '../svg/tailwindcss'
import Fabootstrap from '../svg/bootstrap'
import Fanpm from '../svg/npm'
import Fareact from '../svg/react'
import Faredux from '../svg/redux'
import Fafirebase from '../svg/firebase'
import Faexpress from '../svg/express'
import Fanextdotjs from '../svg/nextdotjs'
import Fanodedotjs from '../svg/nodedotjs'
import Faelectron from '../svg/electron'
import Fajquery from '../svg/jquery'
import Fagraphql from '../svg/graphql'
import Famongodb from '../svg/mongodb'
import Fawordpress from '../svg/wordpress'
import Fasqlite from '../svg/sqlite'
import Fapython from '../svg/python'
import Faflask from '../svg/flask'
import Fadjango from '../svg/django'
import Fanumpy from '../svg/numpy'
import Fapandas from '../svg/pandas'
import Fapytorch from '../svg/pytorch'
import Faandroid from '../svg/android'
import Faandroidstudio from '../svg/androidstudio'
import Fac from '../svg/c'
import Facplusplus from '../svg/cplusplus'


// Tools I use
import Favisualstudiocode from '../svg/visualstudiocode'
import Fagit from '../svg/git'
import Fagoogle from '../svg/google'
import Fafigma from '../svg/figma'
import Fagooglefonts from '../svg/googlefonts'

// Platforms I use
import Falinux from '../svg/linux'
import Fawindows from '../svg/windows'
import Fanetlify from '../svg/netlify'
import Faheroku from '../svg/heroku'
import Favercel from '../svg/vercel'
import Faamazonaws from '../svg/amazonaws'
import Fagooglecloud from '../svg/googlecloud'

function About() {
    return (
        <main id="about">
            <div className="flex">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + '/images/man.png'} alt="" />
                </div>
                <div className="middle">
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
                <div className="right">
                    <div className="icons-div">
                        <h1>Technologies I work with</h1>
                        <div>
                            <Fahtml5 />
                            <Facss3 />
                            <Fasass />
                            <Fajavascript />
                            <Fatailwindcss />
                            <Fabootstrap />
                            <Fanpm />
                            <Fareact />
                            <Faredux />
                            <Fafirebase />
                            <Faexpress />
                            <Fanextdotjs />
                            <Fanodedotjs />
                            <Faelectron />
                            <Fajquery />
                            <Fagraphql />
                            <Famongodb />
                            <Fawordpress />
                            <Fasqlite />
                            <Fapython />
                            <Faflask />
                            <Fadjango />
                            <Fanumpy />
                            <Fapandas />
                            <Fapytorch />
                            <Faandroid />
                            <Faandroidstudio />
                            <Fac />
                            <Facplusplus />
                        </div>
                    </div>
                    <div className="icons-div">
                        <h1>Tools I use</h1>
                        <div>
                            <Favisualstudiocode />
                            <Fagit />
                            <Fagoogle />
                            <Fafigma />
                            <Fagooglefonts />
                        </div>
                    </div>
                    <div className="icons-div">
                        <h1>Platforms I use</h1>
                        <div>
                            <Falinux />
                            <Fawindows />
                            <Fanetlify />
                            <Faheroku />
                            <Favercel />
                            <Faamazonaws />
                            <Fagooglecloud />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About

