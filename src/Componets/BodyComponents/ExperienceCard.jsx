import React from 'react'
import ttdc from "../../assets/images/ttdc.jpg"
import { Bounce } from 'react-awesome-reveal'

const experinceDetails = [
    {
        projId: "10A",
        projectname: "Cross Tab Tool",
        company: "TheMathCompany",
        image: "",
        description: ""
    },
    {
        projId: "10A",
        projectname: "Math App",
        company: "TheMathcompany",
        image: "",
        description: ""
    },
    {
        projId: "10A",
        projectname: "Extranet V4",
        company: "BookingJini",
        image: "",
        description: ""
    },
    {
        projId: "10A",
        projectname: "TTDC",
        company: "BookingJini",
        image: "",
        description: ""
    }
]

const ExperienceCard = () => {
    return (

        <section className='card-conatainer'>
            <div className='img-container'><img src={ttdc} alt="TTDC" /></div>
        </section>

    )
}

export default ExperienceCard