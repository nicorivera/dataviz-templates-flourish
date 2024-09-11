import React from 'react';

const SobrioTemplate = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-serif">
      {/* Navigation */}
      <nav className="py-6 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Visualización De Datos</div>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="hover:underline">Lugar 1</a>
              <a href="#" className="hover:underline">Lugar 2</a>
              <a href="#" className="hover:underline">Lugar 3</a>
              <a href="#" className="hover:underline">Lugar 4</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-8">
          Esta es una gran visualización<br />
          de datos
        </h1>

        {/* Image Placeholder */}
        <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden mb-12">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            [Imagen Destacada]
          </div>
        </div>

        {/* Text and DataViz Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-light mb-4">Nuestro Enfoque</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
            <p>Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Crecimiento Anual</h3>
            <div className="h-64 bg-gray-200 rounded flex items-center justify-center text-gray-400">
              [Gráfico de Crecimiento]
            </div>
          </div>
        </div>

        {/* Multiple Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">Estrategia</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Innovación</h3>
            <p>Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Resultados</h3>
            <p>Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>
          </div>
        </div>

        {/* Case Study Section */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-light mb-6">Caso de Estudio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
              <p>Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <div className="h-64 bg-gray-200 rounded flex items-center justify-center text-gray-400 mb-4">
                [Visualización de Datos del Caso]
              </div>
              <p className="text-sm text-gray-500">Fig. 1: Análisis de impacto en el crecimiento del cliente</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-light mb-4">Accedé a nuestro dataset</h2>
          <p className="mb-6">Entendé nuestras conclusiones, a partir de datos.</p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition duration-300">Contáctanos</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500">
          <p>&copy; 2024 Visualización De Datos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default SobrioTemplate;