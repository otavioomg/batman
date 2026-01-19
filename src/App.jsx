import { useEffect } from 'react';
import CardNav from '/src/component/CardNav.jsx'
import logo from '/src/img/pngimg.com - batman_PNG45.png';
import Lightning from '/src/component/Lightning.jsx';
import ClickSpark from '/src/component/ClickSpark.jsx';
import PixelTransition from '/src/component/PixelTransition.jsx';
import SpotlightCard from '/src/component/SpotlightCard';
import './App.css';

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pt.quizur.com/js/embedder.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  const items = [
    {
      label: "Sobre",
      bgColor: "#242424",
      textColor: "#ffd700",
      links: [
        { label: "Criador do site", href: "https://otavioomgdev.vercel.app/", target: "_blank", ariaLabel: "About Company" },
        { label: "Github do site", href: "https://github.com/otavioomg/batman", target: "_blank", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projetos", 
      bgColor: "#242424",
      textColor: "#ffd700",
      links: [
        { label: "Github", href: "https://github.com/otavioomg", target: "_blank", ariaLabel: "Featured Projects" },
        { label: "Portfolio", href: "https://otavioomgdev.vercel.app/", target: "_blank", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contato",
      bgColor: "#242424", 
      textColor: "#ffd700",
      links: [
        { label: "Email", href: "otavioomgcontato@gmail.com", target: "_blank", ariaLabel: "Email us" },
        { label: "Twitter", href: "https://x.com/otavioomgdev", target: "_blank", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/otavioomgdev/", target: "_blank", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="lightning-background">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#ffd700"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#ffd700"
        ease="power3.out"
      /><br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center ><PixelTransition 
      firstContent={
        <img
          src="./src/img/Gemini_Generated_Image_xtje8kxtje8kxtje.png"
          alt="default pixel transition content, a cat!"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      }
      secondContent={
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            backgroundColor: "#111"
          }}
        >
          <p style={{ fontWeight: 900, fontSize: "1rem", color: "#ffd700" }}>Batman <br></br> Batman é um super-herói fictício da DC Comics, criado em 1939 por Bob Kane e Bill Finger. Bruce Wayne, bilionário órfão após o assassinato dos pais em Gotham City, jurou combater o crime sem superpoderes, usando inteligência, treinamento marcial e tecnologia avançada.</p>
        </div>
      }
      gridSize={16}
      pixelColor='#ffd700'
      once={false}
      animationStepDuration={0.4}
      className="custom-pixel-card"
    /></center><br></br>
    <SpotlightCard className="custom-spotlight-card w-full max-w-9/10 justify-self-center" spotlightColor="rgba(0, 229, 255, 0.2)"><h1 className='text-center font-metal-mania text-4x1 text-white'>Origem</h1><br></br>
    <p className='font-mono text-white'>Bruce Wayne viaja o mundo aprendendo artes marciais, detetive e disfarces, retornando a Gotham inspirado por um morcego para criar a identidade de Batman. Ele constrói a Batcaverna sob sua mansão e usa a fortuna da Wayne Enterprises para equipamentos como o Batmóvel.</p>
    </SpotlightCard><br></br>
    <SpotlightCard className="custom-spotlight-card w-full max-w-9/10 justify-self-center" spotlightColor="rgba(0, 229, 255, 0.2)"><h1 className='text-center font-metal-mania text-4x1 text-white'>Habilidades</h1><br></br>
    <p className='font-mono text-white'>Sem poderes sobre-humanos, Batman destaca-se como o maior detetive do mundo, mestre em combate corpo a corpo e estrategista genial. Seu arsenal inclui gadgets, veículos e armaduras high-tech para enfrentar criminosos.</p>
    </SpotlightCard><br></br>
    <SpotlightCard className="custom-spotlight-card w-full max-w-9/10 justify-self-center" spotlightColor="rgba(0, 229, 255, 0.2)"><h1 className='text-center font-metal-mania text-4x1 text-white'>Aliados</h1><br></br>
    <p className='font-mono text-white'>Alfred Pennyworth, mordomo e confidente; Comissário Jim Gordon, parceiro na polícia; Robins como Dick Grayson (Asa Noturna), Jason Todd e Damian Wayne; Batgirl (Bárbara Gordon).</p>
    </SpotlightCard><br></br>
    <SpotlightCard className="custom-spotlight-card w-full max-w-9/10 justify-self-center" spotlightColor="rgba(0, 229, 255, 0.2)"><h1 className='text-center font-metal-mania text-4x1 text-white'>Inimigos</h1><br></br>
    <p className='font-mono text-white'>Coringa, arqui-inimigo psicopata; Duas-Caras, Pinguim, Charada, Hera Venenosa e Ra's al Ghul lideram a galeria de vilões de Gotham.</p>
    </SpotlightCard><br></br>
    <div className="flex justify-center px-4">
      <div className="w-full max-w-4xl" style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/Q5jAfPKqY68?si=PtPgpgdNShAblsBR"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </div>
    <br></br>
    {/*<div>
      <ins className="quizurembed" data-id="trivia/quiz-sobre-o-batman-1rgM3" data-color="#3d3846" data-font-color="#f9f06b" data-bypass-cover="1"></ins>
      <div style={{ textAlign: 'center', marginTop: '20px'}}>
      </div>
    </div>*/}
    </ClickSpark>
  );
};

export default App;
