import React from 'react'
import './Project.css'

export default function Project() {
  const projects = [
    {
      title: 'Momentum – Advanced Todo List Application (Live)',
      description: 'Developed a feature-rich task manager with categories, due dates, priority levels, dark mode',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      link: 'https://rinku316.github.io/Momentum/'
    },
    {
      title: 'Personal Portfolio Website (Live)',
      description: 'Real-time social platform with messaging and notification features',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      link: 'https://rinku316.github.io/TulachandPortfolio/'
    },
    {
      title: 'Employee Management System',
      description: 'Employee management application developed using Java and Hibernate ORM with database operations like add, update, delete, and view employee records.',
      tech: ['Java', 'SQL', 'Hibernate ORM'],
      link: '#'
    },


  ]

  return (
    <section className='projects-section'>
      <div className='projects-container'>
        <div className='projects-header'>
          <h1>My Projects</h1>
          <p>Showcasing my latest work and technical expertise</p>
        </div>

        <div className='projects-grid'>
          {projects.map((project, idx) => (
            <div key={idx} className='project-card'>
              <div className='project-header'>
                <h3>{project.title}</h3>
              </div>
              <p className='project-description'>{project.description}</p>
              <div className='project-tech'>
                {project.tech.map((tech, i) => (
                  <span key={i} className='tech-tag'>{tech}</span>
                ))}
              </div>
              <a href={project.link} className='project-link'>View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
