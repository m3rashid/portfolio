import React from 'react'
import Card from './Card'

const medium = [
    {
        id: "1",
        title: "ZUNI",
        description: "Zillion Utility purpose Neural authentication Interface: ZUNI (Hackathon project)",
        imgsrc: "/images/zuni.jpeg",
        github: "https://github.com/sheikhazhanmohammed/ZUNI",
        deploy: "https://zuni.netlify.app/"
    },
    {
        id: "2",
        title: "Taxtds",
        description: "Taxtds: Local business directory website for all your finance and tax needs",
        imgsrc: "/images/taxtds.jpeg",
        deploy: "https://taxtds.herokuapp.com/",
    },
    {
        id: "3",
        title: "CovidMe",
        description: "Resources to people in need from people trying to help (Hackathon project)",
        imgsrc: "/images/covid.jpeg",
        github: "https://github.com/m3rashid/covid_project",
        deploy: "https://cov1dme.herokuapp.com/"
    },
    {
        id: "4",
        title: "HackJMI ML",
        description: "Making a more robust face recognition security system (Hackathon project)",
        imgsrc: "/images/hack.jpeg",
        github: "https://github.com/hashes-jmi/HackJMI2-CheemsGamg",
    },
]

const mini = [
    {
        id: "1",
        title: "Mini Projects",
        description: "This is a list of some of the mini websites I created",
        imgsrc: "/images/mini.jpeg",
        github: "https://github.com/m3rashid/mini_projects",
        deploy: "https://m3rashid.github.io/mini_projects/"
    },
    // {
    //     id: "",
    //     title: "",
    //     description: "",
    //     imgsrc: "",
    //     github: "",
    //     deploy: ""
    // },
]

function Works() {
    return (
        <main id="works">
            <div className="flex">
                <h1>Medium Projects</h1>
                <div className="medium">
                    {medium.map(entry => {
                        return <Card key={entry.id} title={entry.title} description={entry.description} imgsrc={entry.imgsrc} github={entry.github ? entry.github : ""} deploy={entry.deploy ? entry.deploy : ""} />
                    })}
                </div>
                <h1>Mini Projects</h1>
                <div className="mini">
                    {mini.map(entry => {
                        return <Card key={entry.id} title={entry.title} description={entry.description} imgsrc={entry.imgsrc} github={entry.github ? entry.github : ""} deploy={entry.deploy ? entry.deploy : ""} />
                    })}
                </div>
            </div>
        </main>
    )
}

export default Works
