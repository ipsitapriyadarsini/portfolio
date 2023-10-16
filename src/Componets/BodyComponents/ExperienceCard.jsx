import React from 'react'
import ttdc from "../../assets/images/ttdc.png"
import mathapp from "../../assets/images/mathapp.jpg"
import danone from "../../assets/images/danone.jpg"
import extranet from "../../assets/images/extranet.png"
import { Bounce } from 'react-awesome-reveal'

const experinceDetails = [
    {
        projId: 10,
        projectname: "Cross Tab Tool",
        company: "TheMathCompany",
        image: danone,
        description: "",
        alt: "crosstab"
    },
    {
        projId: 11,
        projectname: "Math App",
        company: "TheMathcompany",
        image: mathapp,
        description: "",
        alt: "mathApp"
    },
    {
        projId: 12,
        projectname: "Extranet V4",
        company: "BookingJini",
        image: extranet,
        description: "",
        alt: "extranet"
    },
    {
        projId: 13,
        projectname: "TTDC",
        company: "BookingJini",
        image: ttdc,
        description: "",
        alt: "ttdc"
    }
]

const ExperienceCard = () => {
    return (
        experinceDetails.map((item) =>
            <div className='d-flex'>
                <h4 key={item.projId} className='exp-title'>{item.projectname}</h4>
                <section className='card-conatainer' key={item.projId}>
                    <div className='img-container' >
                        <img src={item.image} alt={item.alt} />
                    </div>
                </section>
            </div>

        )
    )
}

export default ExperienceCard