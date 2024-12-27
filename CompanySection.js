import React, { useState } from "react";
import "./CompanySection.css";

const CompanySection = () => {
  const companies = [
    { name: "Tech Corp", logo: "http://tiny.cc/wtmszz" },
    { name: "Health Inc", logo: "http://tiny.cc/2umszz" },
    { name: "Finance Works", logo: "http://tiny.cc/kvmszz" },
    { name: "Design Hub", logo: "http://tiny.cc/2umszz" },
    { name: "Job Portal", logo: "http://tiny.cc/kvmszz" },
    { name: "Market Minds", logo: "http://tiny.cc/2umszz" },
    { name: "Code With Hamid", logo: "http://tiny.cc/2umszz" },
    { name: "Tech World", logo: "http://tiny.cc/kvmszz" },
    { name: "Think & Grow", logo: "https://tinyurl.com/28ennxfx" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = companies.filter(company =>
      company.name.toLowerCase().includes(term)
    );
    setFilteredCompanies(filtered);
  };

  return (
    <section id="company" className="company-section">
      <div className="filter-container">
        <h3>Search Filters</h3>
        <input
          type="text"
          placeholder="Search Company"
          className="search-input"
          value={searchTerm}
          onChange={handleSearch} 
        />

        <select className="industry-select">
          <option value="">Select Industry</option>
          <option value="IT">IT & Software</option>
          <option value="Health">Health</option>
          <option value="Finance">Finance</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>

        <select className="size-select">
          <option value="">Select Company Size</option>
          <option value="Small">Small (1-50 employees)</option>
          <option value="Medium">Medium (51-200 employees)</option>
          <option value="Large">Large (200+ employees)</option>
        </select>

        <select className="salary-select">
          <option value="">Select Avg Salary</option>
          <option value="Below 50k">Below 50k</option>
          <option value="50k-100k">50k-100k</option>
          <option value="Above 100k">Above 100k</option>
        </select>

        <select className="revenue-select">
          <option value="">Select Revenue</option>
          <option value="Below 1M">Below 1M</option>
          <option value="1M-5M">1M - 5M</option>
          <option value="Above 5M">Above 5M</option>
        </select>

        <button className="filter-btn">Apply Filters</button>
      </div>

      <div className="companies-list">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company, index) => (
            <div key={index} className="company-card">
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="company-logo"
              />
              <h4>{company.name}</h4>
            </div>
          ))
        ) : (
          <p>No Record Found.</p> 
        )}
      </div>
    </section>
  );
};

export default CompanySection;
