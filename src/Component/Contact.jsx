import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const socials = [
    { name: 'LinkedIn', icon: '💼', link: 'https://www.linkedin.com/in/tulachand16/' },
    { name: 'GitHub', icon: '🐙', link: 'https://github.com/rinku316' },
    { name: 'Email', icon: '✉️', link: 'tulachandmeher8260@gmail.com' },
  ]

  return (
    <section className='contact-section'>
      <div className='contact-container'>
        <div className='contact-header'>
          <h1>Get In Touch</h1>
          <p>Let's build something amazing together</p>
        </div>

        <div className='contact-content'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <textarea
                name='message'
                placeholder='Your Message'
                rows='6'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type='submit' className='submit-btn'>Send Message</button>
          </form>

          <div className='socials-section'>
            <h3>Connect With Me</h3>
            <div className='socials-grid'>
              {socials.map((social, idx) => (
                <a key={idx} href={social.link} className='social-btn' title={social.name}>
                  <span className='social-icon'>{social.icon}</span>
                  <span className='social-name'>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
