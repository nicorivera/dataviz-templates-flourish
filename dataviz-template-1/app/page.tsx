import React from 'react';

const DataVizTemplate = () => {
  return (
    <div className="bg-emerald-300 min-h-screen">
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
          <span className="text-gray-800 font-semibold">Mi Scrolly de Visualización</span>
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
          Saltar a...
        </button>
      </header>
      
      <main className="p-6 space-y-20">
        <section className="flex flex-col justify-center items-center text-center min-h-screen text-black">
          <h1 className="text-6xl font-bold mb-4">
            Visualización
            <br />
            <span className="relative">
              de
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-r-full"></span>
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-l-full"></span>
            </span>
            <br />
            Datos
            <br />
            Interactiva
          </h1>
          <p className="text-sm mb-4">
            Un informe anual sobre cómo<br />
            visualizamos datos interactivamente
          </p>
          <p className="text-sm max-w-md">
            Explora diferentes técnicas y herramientas para crear visualizaciones de datos impactantes y significativas.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-black">Gráfico de Barras Simple</h2>
          <div className="h-80 bg-gray-200 flex items-end justify-around p-4">
            {[40, 60, 25, 80, 35, 55].map((height, index) => (
              <div 
                key={index} 
                className="bg-blue-500 w-1/12"
                style={{height: `${height}%`}}
              ></div>
            ))}
          </div>
          <div className="flex justify-around mt-2">
            {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'].map((month, index) => (
              <div key={index} className="text-sm">{month}</div>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg h-full text-black">
              <h3 className="text-2xl font-bold mb-4 ">Sección de Texto</h3>
              <p>Aquí puedes agregar más información sobre tus datos o explicar las técnicas de visualización utilizadas. Este espacio es ideal para proporcionar contexto o insights adicionales sobre tus visualizaciones.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8 text-black">
            <div className="bg-gray-100 p-6 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-4">Placeholder para Mapa</h3>
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                [Mapa Interactivo]
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Sección de Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-4 rounded">
              <h4 className="text-xl font-bold mb-2">Dato 1</h4>
              <p>Información relevante aquí</p>
              <div className="mt-4 h-32 bg-gray-600 rounded flex items-center justify-center">
                [Gráfico 1]
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h4 className="text-xl font-bold mb-2">Dato 2</h4>
              <p>Más datos interesantes</p>
              <div className="mt-4 h-32 bg-gray-600 rounded flex items-center justify-center">
                [Gráfico 2]
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h4 className="text-xl font-bold mb-2">Dato 3</h4>
              <p>Conclusiones importantes</p>
              <div className="mt-4 h-32 bg-gray-600 rounded flex items-center justify-center">
                [Gráfico 3]
              </div>
            </div>
          </div>
        </section>
      </main>
    
    </div>
  );
};

export default DataVizTemplate;