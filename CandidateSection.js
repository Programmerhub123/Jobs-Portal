import React from "react";
import "./CandidateSection.css";

const CandidateSection = () => {
  const candidates = [
    {
      name: "Hamid Jabbar",
      role: "Frontend Developer",
      image: "hamid.jpg",
    
    },
    {
      name: "Rosie",
      role: "Backend Developer",
      image: "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Ramson",
      role: "SEO Executive",
      image: "https://images.pexels.com/photos/4064817/pexels-photo-4064817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Amelia",
      role: "Graphic Designer",
      image: "https://images.pexels.com/photos/6204233/pexels-photo-6204233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Michael Brown",
      role: "Full Stack Developer",
      image: "full stack.jpg",
    },
  ];

  return (
    <section id="candidate" className="candidate-section">
      <h2>Our Top Candidates</h2>
      <div className="candidates-container">
        {candidates.map((candidate, index) => (
          <div key={index} className="candidate-card">
            <div className="candidate-image">
              <img src={candidate.image} alt={`${candidate.name}'s Profile`} />
            </div>
            <h3>{candidate.name}</h3>
            <p>{candidate.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CandidateSection;
