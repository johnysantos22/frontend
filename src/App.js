import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, HeroSection, AboutSection, BlepharoplastySection, StatsSection, ProceduresPage, SocialButtons, Footer } from './components';

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
    <Header />
    <HeroSection />
    <AboutSection />
    <BlepharoplastySection />
    <StatsSection />
    <Footer />
    <SocialButtons />
  </div>
);

const ProceduresPageComponent = () => (
  <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
    <Header />
    <ProceduresPage />
    <Footer />
    <SocialButtons />
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
    <Header />
    <AboutSection />
    <Footer />
    <SocialButtons />
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
    <Header />
    <main className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-semibold mb-6">Contato</h1>
      <p className="mb-4">
        Telefone: (55) 9 9600-5353 <br />
        Email: drajulianacarrion@gmail.com
      </p>
      {/* Aqui pode colocar formulário ou outras infos */}
    </main>
    <Footer />
    <SocialButtons />
  </div>
);

const BlepharoplastyPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
    <Header />
    <BlepharoplastySection />
    <Footer />
    <SocialButtons />
  </div>
);

const ResultsPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
    <Header />
    <main className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-semibold mb-6">Resultados</h1>
      <p>Aqui você pode colocar galerias, depoimentos, antes e depois, etc.</p>
    </main>
    <Footer />
    <SocialButtons />
  </div>
);

const NewsPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
    <Header />
    <main className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-semibold mb-6">Notícias e Artigos</h1>
      <p>Aqui você pode listar posts, artigos ou notícias relacionadas.</p>
    </main>
    <Footer />
    <SocialButtons />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/procedimentos" element={<ProceduresPageComponent />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/cirurgia-blefaroplastia" element={<BlepharoplastyPage />} />
          <Route path="/resultados" element={<ResultsPage />} />
          <Route path="/noticias" element={<NewsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
