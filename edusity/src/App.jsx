import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';

const App = () => {

  

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Nosso programa' title='O que nós oferecemos'/>
        <Programs />
        <About/>
        <Title subTitle='Galeria' title='Fotos do Campus'/>
        <Campus />
        <Title subTitle='Relatos' title='O que os estudantes dizem'/>
        <Testimonials />
      </div>
    </div>
  )
}

export default App