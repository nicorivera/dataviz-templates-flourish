// Template basado en https://www.nytimes.com/interactive/2023/12/14/opinion/my-life-with-long-covid.html
import React from 'react';

const NYTStyleTemplate = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 font-serif bg-[#FAF9F6] text-gray-900">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">The New York Times</h1>
        <div className="text-sm uppercase tracking-wide mb-2">OPINIÓN</div>
        <div className="text-sm uppercase tracking-wide mb-8">ENSAYO INVITADO</div>
      </header>

      {/* Main Title */}
      <h2 className="text-5xl font-bold mb-4">1,374 DÍAS</h2>
      <h3 className="text-3xl font-normal mb-12">MI VIDA CON COVID PROLONGADO</h3>

      {/* Visual Element */}
      <div className="mb-12">
        <div className="h-40 w-full relative">
          {[...Array(30)].map((_, index) => (
            <div 
              key={index}
              className="absolute h-12 w-4 rounded-full"
              style={{
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
                left: `${index * 3}%`,
                top: `${Math.random() * 70}%`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Article Meta */}
      <div className="flex justify-between items-center mb-8 text-sm">
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100">
            Compartir artículo completo
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
        <div>610 comentarios</div>
      </div>

      {/* Author Info */}
      <div className="mb-8">
        <h4 className="font-bold mb-2">Por Nombre del Autor</h4>
        <p className="text-sm mb-2">El Sr./Sra. Autor es un profesional que ha estado experimentando síntomas de COVID prolongado durante más de tres años.</p>
        <p className="text-sm">14 de diciembre, 2023</p>
      </div>

      {/* Article Content */}
      <article className="space-y-6 text-lg leading-relaxed">
        <p>
          Cada mañana, me despierto en mi apartamento en la ciudad, y por dos
          segundos, puedo recordar mi antiguo yo. El yo sin dolor, el yo
          con energía, el yo que podía hacer lo que quisiera.
        </p>
        <p>
          Luego soy devuelto a mi nueva realidad. Mientras recupero la
          consciencia por completo, me siento mareado, débil y con náuseas. El dolor
          pulsa por todo mi cuerpo, y mis extremidades se sienten simultáneamente
          pesadas como el concreto y débiles como gelatina. Es como si una máquina
          estuviera apretando mi cráneo, y un cansancio extremo me invade.
        </p>
        <h3 className="text-2xl font-bold my-8">Viviendo con COVID prolongado</h3>
        <p>
          He llegado a darme cuenta de que "COVID prolongado" es un término engañoso
          para una condición que puede desencadenar una diversa avalancha de síntomas
          debilitantes sin un final a la vista. Lo que he experimentado no es de ninguna
          manera solo una tos persistente o unas semanas de fatiga después de una
          infección aguda de COVID.
        </p>
        {/* Add more paragraphs as needed */}
      </article>

      {/* Visual Data Representation */}
      <div className="my-12">
        <h4 className="text-lg font-bold mb-4">Síntomas a lo largo del tiempo</h4>
        <div className="space-y-2">
          {['Fiebre', 'Niebla mental', 'Síntomas similares a la gripe', 'Taquicardia', 'Otros síntomas', 'Fatiga', 'Sensación de ardor'].map((symptom, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="w-24 text-sm">{symptom}</span>
              <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{
                    width: `${Math.random() * 100}%`,
                    backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NYTStyleTemplate;