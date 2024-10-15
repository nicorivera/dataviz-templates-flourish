'use client';

import React, { useEffect, useState } from 'react';

const FlourishViz = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    // Cargar el script de Flourish después de que el componente se haya montado
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Eliminar el script cuando el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Controlar el scroll para detectar qué paso está activo
  useEffect(() => {
    const steps = document.querySelectorAll('.fl-scrolly-step');
    
    const handleScroll = () => {
      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSlide(index + 1);

          // Cambiar el slide en Flourish usando la URL hash
          const flourishEmbed = document.querySelector('.flourish-embed iframe') as HTMLIFrameElement;
          if (flourishEmbed && flourishEmbed.contentWindow) {
            flourishEmbed.contentWindow.location.hash = `#story/2041907/slide-${index + 1}`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="my-wrapper" className="flourish-scrolly-container">
      <div
        className="flourish-embed"
        data-src="story/2041907"
        data-url="https://flo.uri.sh/story/2041907/embed"
        data-height="100vh"
      >
        {/* Flourish iframe will be loaded here */}
      </div>

      <div className="flourish-text-steps">
        <p className={`fl-scrolly-step ${activeSlide === 1 ? 'active' : ''}`}>
          Texto slide 1. Fusce quis augue et tortor interdum bibendum. Nam dolor
          elit
          <a href="#story/2041907/slide-1"></a>
        </p>

        <p className={`fl-scrolly-step ${activeSlide === 2 ? 'active' : ''}`}>
          Texto slide 2. Fusce quis augue et tortor interdum bibendum. Nam dolor
          elit
          <a href="#story/2041907/slide-2"></a>
        </p>

        <p className={`fl-scrolly-step ${activeSlide === 3 ? 'active' : ''}`}>
          Texto slide 3. Fusce quis augue et tortor interdum bibendum. Nam dolor
          elit
          <a href="#story/2041907/slide-3"></a>
        </p>

        <p className={`fl-scrolly-step ${activeSlide === 4 ? 'active' : ''}`}>
          Texto slide 4. Fusce quis augue et tortor interdum bibendum. Nam dolor
          elit
          <a href="#story/2041907/slide-4"></a>
        </p>
      </div>
    </div>
  );
};

export default FlourishViz;
