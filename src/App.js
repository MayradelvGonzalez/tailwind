import React from 'react';
import './App.css';
import portadaPortfolio from './assets/portadaPortfolio.webp';
import 'animate.css';
import LogoNsf from './assets/LogoNsf.png';

const links = [
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/mayra-gonz%C3%A1lez-v/'},
  { name: 'Github', href: 'https://github.com/MayradelvGonzalez'},
  { name: 'Email', href: "mailto:mayradelvallegonzalez@gmail.com"},

]
const stats = [
  { name: 'Disfruto aprender, resolver los problemas y crear cosas nuevas', value: 'About Me'},
  { name: 'Soy docente de música, egresada un bootcamp de desarrollo FullStack MERN, tutora en un curso de programacion backend y autodidacta', value: 'Experiencia'},
  { name: 'Me interesa adquirir nuevas habilidades tanto tecnicas como blandas. Entre mis intereses estan la accesibilidad web, algo que he aplicado este en este portfolio. Creo que como programadores debemos crear herramientas que lleguen al alcance de la mayor cantidad de personas mas alla de sus habilidades.', value: 'Intereses'},

]

export default function App() {

  return (
    <div className="fondo relative isolate overflow-hidden bg-gray-900 py-24 sm:py-52">
              <div className='logo'><img src={LogoNsf} alt="Logo de página"  aria-label='logo de pagina' /></div>
      <img src={portadaPortfolio}
        // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt="imagen de fondo de pagina"
        aria-label='fondo de pagina'
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        style={{ opacity: '0.3' }}
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >

        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <div className="tituloLogo">
          <h2 className=" textos tit text-4xl font tracking-tight text-white sm:text-6xl" id='nombre'>
            Mayra del Valle González</h2>
           </div>
          <p className="textos mt-20 text-4xl leading-9 text-gray-100" id='subtitulo'>
            Full-Stack developer</p>
        </div>
        <div className="mx-auto mt-20 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href} target='_BLANK' rel="noopener noreferrer" tabIndex={0} className='name link'>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="info mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4" id='cuadro'>
            {stats.map((stat, index) => (
              <div key={stat.name} className={`flex flex-col-reverse stat${index + 1}`}>
                <dt className="textos text-base leading-8 text-gray-100" id='info'>{stat.name}</dt>
                <dd className="textos infor text-3xl leading-9 tracking-tight text-white" id='titInfo'>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
