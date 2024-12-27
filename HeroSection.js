import React from "react";
import "./HeroSection.css"
import { FaBriefcase, FaBuilding, FaFileAlt } from "react-icons/fa";

const HeroSection=()=>{

return(
    <div className="hero-container">
        <div className="overlay"></div>
        <div className="hero-content">
            <h1 className="welcome">Welcome to Job Portal</h1>
            <p className="portal">Find your dream job on this Portal</p>
            <div className="search-bar">
                <input type="text" placeholder="Job Title" className="input job-title" />
                <input type="text" placeholder="location" className="input location" />
                <select className="input category">
                    <option value="">Select Category</option>
                    <option value="">IT & Software</option>
                    <option value="">Digital Marketing</option>
                    <option value="">Graphic Designing</option>
                    <option value="">SEO</option>
                    <option value="">Business Development Executive</option>
                    <option value="">Content Writer</option>
                    <option value="">UI & UX Designer</option>
                </select>
                <button className="search-btn">Search</button>
            </div>
            
            <div className="info-cards">
                <div className="card">
                <FaBriefcase className="card-icon" />
                    <h2>100+</h2>
                    <p>Jobs Available</p>
                </div>
                <div className="card">
                <FaBuilding className="card-icon" />
                    <h2>Companies</h2>
                    <p>55+ Trusted Companies</p>
                </div>
                <div className="card">
                <FaFileAlt className="card-icon" />
                    <h2>50+</h2>
                    <p>Availabl Resume</p>
                </div>
            </div>
        </div>
    </div>
)
}
export default HeroSection;