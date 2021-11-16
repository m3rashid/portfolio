import React from 'react'

function Card(props) {
    return (
        <div>
            <div className="card">
                <h1 className="project-title">{props.title}</h1>
                <p className="project-description">{props.description}</p>
                <img src={props.imgsrc} alt={props.title + " preview"} />
                <div className="show">
                    {
                        props.github &&
                        <a className="github" href={props.github} target="_blank" rel="noreferrer noopener">View on Github</a>
                    }
                    {
                        props.deploy &&
                        <a className="deploy" href={props.deploy} target="_blank" rel="noreferrer noopener">View Deploy</a>}
                </div>
            </div>
        </div>
    )
}

export default Card
