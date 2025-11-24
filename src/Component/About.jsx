import React from 'react'
import './About.css'

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript'] },
    { category: 'Backend', items: ['Java', 'Spring Boot', 'RESTful APIs', 'Databases'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Eclipse', 'MySQL'] }
  ]

  return (
    <section className='about-section'>
      <div className='about-container'>
        <div className='about-header'>
          <h1>About Me</h1>
          <p>Passionate Full Stack Java Developer with expertise in building modern web applications</p>
        </div>

        <div className='about-content'>
          <div className='about-text'>
            <p>
             Enthusiastic and quick-learning Java Full-Stack Developer with hands-on experience in building 
             end-to-end web applications. Proficient in modern frontend (React.js + Redux)
              and backend (Java,MySQL) technologies. Strong foundation in problem-solving, clean code practices, 
              and agile workflows. Eager to contribute to dynamic teams through dedication and continuous learning.
            </p>
          </div>

          <div className='skills-container'>
            {skills.map((skillSet, idx) => (
              <div key={idx} className='skill-card'>
                <h3>{skillSet.category}</h3>
                <ul>
                  {skillSet.items.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
