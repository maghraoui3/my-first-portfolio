import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './App.css'


function App() {
  return (
    <div className='big-container'>
      <section className='one'><Header /></section>
      <section className='two'><Nav /></section>
      <section className='three'><About /></section>
      <section className='four'><Experience /></section>
      <section className='five'><Services /></section>
      <section className='six'><Portfolio /></section>
      <section className='seven'><Testimonials /></section>
      <section className='eight'><Contact /></section>
      <section className='nine'><Footer /></section>
    </div>
  )
}

export default App