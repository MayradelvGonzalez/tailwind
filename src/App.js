import React, { useState } from 'react';
import './App.css';
import portadaPortfolio from './assets/portadaPortfolio.webp';
import 'animate.css';
import LogoNsf from './assets/LogoNsf.png';
import { Link } from 'react-router-dom';
import musician from './assets/musician.png';
import landing from './assets/landing.png';
import littlepage from './assets/littlepage.png';
const links = [
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/mayra-gonz%C3%A1lez-v/' },
  { name: 'Github', href: 'https://github.com/MayradelvGonzalez' },
  { name: 'Email', href: "mailto:mayradelvallegonzalez@gmail.com" },
  // { name: 'Contact me!', to: "/contact" },
];

const stats = [
  { name: 'About Me', value: 'I enjoy learning,solving problems and creating new things' },
  { name: 'Experience', value: 'I am an experienced teacher, a graduate of a full-stack MERN bootcamp, and a tutor for a backend programming course, as well as a self-taught developer' },
  { name: 'Interests', value: 'I constantly strive to learn new skills, both technical and soft. One area of particular interest to me is web accessibility, which I have applied in my portfolio. As a developer, I believe it is our responsibility to create tools that are accessible to everyone, regardless of their abilities. I believe that by constantly improving our skills and creating accessible solutions, we can make a difference in the lives of people around the world.' },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedOption((prevSelected) =>
      prevSelected === buttonName ? null : buttonName
    );
  };

  return (
    
    <div className="fondo relative isolate overflow-hidden bg-gray-900 py-24 sm:py-52">

<div className='logo'><img src={LogoNsf} alt="Logo" aria-label='page logo' /></div>
      {/* <img src={portadaPortfolio}
        alt="background"
        aria-label='background'
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        style={{ opacity: '0.3' }}
      /> */}
      
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
        <div className="mx-auto mt-20 max-w-2xl lg:mx-0 lg:max-w-none" id='caja'>
          <div className="links-container">
            {links.map((link) => (
              link.to ? (
                <Link key={link.name} to={link.to} className='name link'>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : (
                <a key={link.name} href={link.href} target='_BLANK' rel="noopener noreferrer" tabIndex={0} className='name link'>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              )
            ))}
          </div>
          <div className='contenedorPaginas'>

<a href="https://juanvalenzuela.vercel.app/" className="group relative block bg-black" target='_BLANK' >
<img
alt="page example"
src={musician}
className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity group-hover:opacity-50"
id='imagenPaginas'
/>

<div className="relative p-4 sm:p-6 lg:p-8">
{/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Musician</p> */}

<p className="text-xl font-bold text-black sm:text-2xl">Musician Page</p>

<div className="mt-32 sm:mt-48 lg:mt-64">
<div
className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
>
<p className="text-sm text-white bg-black" style={{ padding: '10px' }}>
Website built with HTML, CSS, JavaScript, and React
</p>
</div>
</div>
</div>
</a>
<a href="https://my-page-sigma-ten.vercel.app/" className="group relative block bg-black" target='_BLANK' >
<img
alt="page example"
src={littlepage}
className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity group-hover:opacity-50"
id='imagenPaginas'
/>

<div className="relative p-4 sm:p-6 lg:p-8">
{/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Musician</p> */}

<p className="text-xl font-bold text-black sm:text-2xl">Little-Page</p>

<div className="mt-32 sm:mt-48 lg:mt-64">
<div
className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
>
<p className="text-sm text-white bg-black" style={{ padding: '10px' }}>
Website built with HTML, CSS, JavaScript, and React
</p>
</div>
</div>
</div>
</a>
<a href="https://miproyecto-psi.vercel.app/" className="group relative block bg-black" target='_BLANK' >
<img
alt="page example"
src={landing}
className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity group-hover:opacity-50"
id='imagenPaginas'
/>

<div className="relative p-4 sm:p-6 lg:p-8">
{/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Musician</p> */}

<p className="text-xl font-bold text-black sm:text-2xl">Landing</p>

<div className="mt-32 sm:mt-48 lg:mt-64">
<div
className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
>
<p className="text-sm text-white bg-black" style={{ padding: '10px' }}>
Website built with HTML, CSS, JavaScript, and React
</p>
</div>
</div>
</div>
</a>
</div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {stats.map((stat, index) => (
              <div key={stat.name} className={`flex stat${index + 1}`} style={{ position: 'relative' }}>
                <button className="dropdown-trigger" onClick={() => handleButtonClick(`button${index + 1}`)}>
                  <dl>
                    <div>

                      <dt className="textos text-base leading-8 " id='tituloInformacion'>
                        {stat.name}
                      </dt>
                      <dd className="textos text-1xl leading-9 tracking-tight text-white" id='titInfo'
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          display: selectedOption === `button${index + 1}` ? 'block' : 'none',
                        }}
                      >
                        <div className="info-container">{stat.value}</div>
                      </dd>
                    </div>
                  </dl>
                </button>
              </div>
            ))}
          </div>


        </div>


      </div>

    </div>
  );
}
