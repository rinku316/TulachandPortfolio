import React from 'react'
import './Resume.css'

export default function Resume() {
  const experience = [
    {
      title: 'Java Full Stack Developer Intern',
      company: 'Kodnest',
      period: '2025-july - Present',
      description: 'Leading development of scalable web applications using React and Spring Boot'
    },
    
  ]

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science',
      school: 'Trident Academy of Technology, Bhubaneswar',
      year: '2025'
    },

    {
      degree: 'Intermediate (12th Grade)',
      field: 'Science',
      school: 'Black Diamond Higer Secondary School ,Jharsuguda',
      year: '2021'
    },


    {
      degree: 'Matriculation',
      field: 'State Board',
      school: 'C.P.G.P High School ,Surguda',
      year: '2019'
    }
  ]

  return (
    <section className='resume-section'>
      <div className='resume-container'>
        <div className='resume-header'>
          <h1>Resume</h1>
          <p>My professional journey and qualifications</p>
        </div>

        <div className='resume-content'>
          <div className='resume-section-group'>
            <h2 className='section-title'>Experience</h2>
            <div className='timeline'>
              {experience.map((job, idx) => (
                <div key={idx} className='timeline-item'>
                  <div className='timeline-marker'></div>
                  <div className='timeline-content'>
                    <h3>{job.title}</h3>
                    <p className='company'>{job.company}</p>
                    <p className='period'>{job.period}</p>
                    <p>{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='resume-section-group'>
            <h2 className='section-title'>Education</h2>
            <div className='timeline'>
              {education.map((edu, idx) => (
                <div key={idx} className='timeline-item'>
                  <div className='timeline-marker'></div>
                  <div className='timeline-content'>
                    <h3>{edu.degree}</h3>
                    <p className='school'>{edu.field} - {edu.school}</p>
                    <p className='year'>{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
