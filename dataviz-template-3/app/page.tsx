'use client';
import React from 'react';
import FlourishViz from './flourishViz'

const DataVizReportTemplate = () => {

  return (
    <div className="bg-[#f5f0e1] min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 bg-black rounded-full mb-12"></div>
            <h1 className="text-6xl font-black leading-none mb-4 text-black">
              REPORTE<br />
              TENDENCIAS<br />
              DATAVIZ
            </h1>
            <h2 className="text-4xl font-black mb-8 text-black">
              @DATAVIZ
            </h2>
          </div>
          <div className="text-sm">
            Instituto de Visualización de Datos / Global
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-blue-500 relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('boca.jpg')"}}></div>
          <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-between p-8">
            <h2 className="text-white text-9xl font-black">2024</h2>
            <div className="text-white">
              Fecha de Publicación: Enero 2025
            </div>
          </div>
        </div>
      </section>

      {/* Key Trends Section */}
      <section className="py-20 px-8 md:px-20 bg-white text-black">
        <h2 className="text-4xl font-bold mb-8">Tendencias Clave en Visualización de Datos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-6xl font-bold mb-2">62%</p>
            <p className="text-xl">Aumento en uso de IA para DataViz</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold mb-2">3D</p>
            <p className="text-xl">Visualizaciones Inmersivas en Auge</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold mb-2">85%</p>
            <p className="text-xl">Prefieren Dashboards Interactivos</p>
          </div>
        </div>
      </section>

     <FlourishViz />

      {/* Expert Insights Section */}
      <section className="py-20 px-8 md:px-20 text-black">
        <h2 className="text-4xl font-bold mb-12">Perspectivas de Expertos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl italic mb-4">"La fusión de realidad virtual y visualización de datos está abriendo nuevas fronteras en la forma en que interactuamos con información compleja."</p>
            <p className="font-bold">- Dra. Elena Rodríguez, Investigadora en VR DataViz</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl italic mb-4">"El futuro de la visualización de datos está en la personalización: dashboards que se adaptan en tiempo real a las necesidades y preferencias del usuario."</p>
            <p className="font-bold">- Prof. Alex Chen, Especialista en UX para DataViz</p>
          </div>
        </div>
      </section>

      {/* Future Trends Section */}
      <section className="py-20 px-8 md:px-20 bg-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-6 text-center">El Futuro de la Visualización de Datos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Visualización Táctil</h3>
            <p>Interfaces hápticas para 'sentir' los datos</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Sonificación de Datos</h3>
            <p>Representación auditiva de patrones de datos</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Biofeedback DataViz</h3>
            <p>Visualizaciones que responden a señales biométricas</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-8 md:px-20">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">@DATAVIZ</h3>
            <p>Explorando el futuro de la visualización de datos</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Contacto</h4>
            <p>info@datavizreport.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-bold mb-4">Recursos</h4>
            <ul>
              <li>Biblioteca de Visualizaciones</li>
              <li>Foro de la Comunidad</li>
              <li>Newsletter Mensual</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataVizReportTemplate;