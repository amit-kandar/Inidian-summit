import React from 'react';
import './About.css';  

const About = () => {
  return (
    <section className=" bg-color more-info-section">
    <div className="container">
        <div className="row">
            <h2 className="text-capitalize fw-bolder" style={{color: "#fe491e", textAlign: "center", fontSize: "35px"}}> The
                Indian Summit
            </h2>
            <p className="mt-3 mb-5 para-width text-white text-center"> The Indian Summit is an organization dedicated
                to public speaking and raising awareness on national,
                local, and international issues. We provide platforms and opportunities for individuals to engage in
                meaningful dialogue and develop their public speaking skills by organizing events of unique nature.
                Our organization also promotes green initiatives and advocates for a zero-plastic lifestyle, aiming
                to create a more sustainable and environmentally conscious community.</p>

            <div className="text-center w-100 text-md-start"
                style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <a href="src/Pages/Introduction.html">
                          <button className="text-capitalize btn btn-primary px-5 py-2"
                        data-bs-toggle="tooltip" data-bs-title="Contact Now">About us
                          </button>
                      </a>
            </div>


        </div>
        <h2 className="text-capitalize fw-bolder" style={{ color: "#fe491e", paddingTop: "20px", fontSize: "30px"}}> About THE
            CONFERENCE
        </h2>
        <p className="mt-3 mb-5 para-width text-white">
            THE INDIAN SUMMIT is not just a conference designed to bring together delegates from
            around the country to engage in debates on ongoing and emerging issues, this conference uniquely aims
            to celebrate and revive INDIAN CULTURE in an era where globalization, epitomized by the
            "McDonaldization" phenomenon, has led to the diminishing of our rich cultural heritage. <br/>
            Latterly, there's an urgent need to reconnect with our roots and promote our cultural. The Indian Summit
            addresses this need by fostering a platform where the essence of Indian culture is at the forefront. The
            theme for this year, "THE CULTURE SAYS EVERYTHING?", encapsulates our vision to enrich and
            promote cultural awareness through various engaging activities. <br/>
            With a mission in confluence with the GREEN INITIATIVE, the Indian Summit shall be a completely
            ZERO PLASTIC event, promoting green initiatives and showcasing eco-friendly practices. Our
            dedication to the environment underscores our belief that cultural preservation and environmental
            stewardship go hand in hand. <br/>
            The summit will feature a diverse range of activities designed to inspire confidence in emerging minds
            and encourage public speaking ranging from the evergreen heated debates to lightening activities. This
            initiative not only aims to contribute to nation-building through cultural preservation and enhancement
            but also ensuring that emerging carries forward the legacy of Indian culture with renewed vigor.
            <br/><br/>
            Join us at the Indian Summit, where we celebrate the past, present, and future of Indian culture and
            prove that “YES, THE CULTURE SAYS EVERYTHING”….
        </p>

    </div>

</section>
  );
}

export default About;
