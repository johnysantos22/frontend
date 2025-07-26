import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle, Eye, Star, Users, Award } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Logo Component
export const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
      <Eye className="w-6 h-6 text-amber-700" />
    </div>
    <div className="text-left">
      <div className="text-lg font-bold text-amber-800">Dra. Juliana Carrion Bercht</div>
    </div>
  </div>
);

// Header Component
export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Procedimentos', path: '/procedimentos' },
    { name: 'Cirurgia de Blefaroplastia', path: '/cirurgia-blefaroplastia' },
    { name: 'Resultados', path: '/resultados' },
    { name: 'Notícias e artigos', path: '/noticias' },
    { name: 'Contato', path: '/contato' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-stone-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center text-sm text-stone-600 space-x-4">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>(55) 9 9600-5353</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>drajulianacarrion@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Instagram className="w-4 h-4" />
            <span>@jucarrionbercht</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-stone-700 hover:text-amber-700 transition-colors duration-200 font-medium ${
                  location.pathname === item.path ? 'text-amber-700 border-b-2 border-amber-700' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-stone-600"></div>
              <div className="w-6 h-0.5 bg-stone-600"></div>
              <div className="w-6 h-0.5 bg-stone-600"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-stone-200"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-stone-700 hover:text-amber-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

// Hero Section
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-800 to-stone-900 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7585311/pexels-photo-7585311.jpeg')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Rejuvenescimento palpebral<br />
              <span className="font-semibold">Blefaroplastias</span>
            </h1>
            
            <div className="space-y-4 text-lg text-stone-300 mb-8">
              <p>
                O desconforto com a aparência das pálpebras é comum entre homens e mulheres. 
                Excesso de pele, bolsas de gordura e flacidez ao redor dos olhos provocam uma 
                aparência cansada, diminuem a autoestima e podem até prejudicar a visão.
              </p>
              <p>
                A blefaroplastia é uma opção segura e eficaz para melhorar a aparência das 
                pálpebras, rejuvenescer o rosto e proporcionar mais confiança, satisfação e 
                qualidade de vida para quem se submete ao procedimento.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors duration-200"
            >
              AGENDE SUA CONSULTA
            </motion.button>
          </motion.div>

          {/* Doctor's Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-96 h-96 rounded-2xl overflow-hidden bg-stone-700">
              <img
                src="https://images.unsplash.com/photo-1582895361887-24daa40c8667"
                alt="Dra. Juliana Carrion"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// About Section
export const AboutSection = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor's Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1612943733919-f9661f1331f5"
                alt="Dra. Juliana Carrion"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-amber-700 text-sm font-semibold tracking-wide uppercase">SOBRE</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-6">
              Dra. Juliana Carrion
            </h2>
            
            <div className="text-stone-600 mb-4">
              <p className="font-semibold">CRM: 36145 RS | RQE: 31154</p>
              <p className="mt-2">Oftalmologista e Plástica ocular.</p>
            </div>

            <div className="mb-4">
              <p className="text-stone-600">Membra da Sociedade Brasileira de Cirurgia Plástica Ocular</p>
            </div>

            <div className="space-y-4 text-stone-700 mb-8">
              <p>
                Especialista em rejuvenescimento palpebral, Dra. Juliana Carrion possui 
                uma vasta experiência e formação acadêmica e profissional nesta área.
              </p>
              <p className="italic">
                "Os pacientes precisam saber que estou ali para ajudá-los em todas as 
                etapas do procedimentos, auxiliando para que o processo seja tranquilo, 
                bem conduzido e com o resultado maravilhoso que buscam".
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-md font-medium transition-all duration-200"
            >
              SAIBA MAIS
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Blepharoplasty Section
export const BlepharoplastySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/7585313/pexels-photo-7585313.jpeg"
              alt="Procedimento de Blefaroplastia"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="flex items-center justify-end mb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-amber-700" />
                </div>
              </div>
              <span className="text-amber-700 text-sm font-semibold tracking-wide uppercase">BLEFAROPLASTIA</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-6">
              O que é blefaroplastia?
            </h2>
            
            <div className="space-y-4 text-stone-700 mb-8">
              <p>
                A blefaroplastia é um procedimento cirúrgico cujo objetivo principal é 
                retirar o excesso de pele e de bolsas de gordura nas pálpebras superiores 
                e inferiores.
              </p>
              <p>
                Ela é muito procurada por homens e mulheres que buscam melhorar a aparência 
                ao redor dos olhos, adquirir mais autoestima e, em determinados casos, 
                resolver problemas de visão causados pelo excesso de tecidos.
              </p>
              <p>
                Também chamada de "cirurgia de pálpebra", ela é minimamente invasiva, 
                tem uma recuperação rápida e ajuda a rejuvenescer o rosto do paciente.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-md font-medium transition-all duration-200"
            >
              SAIBA MAIS
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
export const StatsSection = () => {
  const stats = [
    { number: '2,447', label: 'Cirurgias realizadas', prefix: '+ de' },
    { number: '1,204', label: 'Pálpebras operadas', prefix: '+ de' },
    { number: '1ª', label: 'Em avaliações no Google', prefix: '' }
  ];

  return (
    <section className="py-20 bg-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-sm text-stone-600 mb-2">{stat.prefix}</div>
              <div className="text-5xl lg:text-6xl font-light text-stone-800 mb-2">
                {stat.number}
              </div>
              <div className="text-stone-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Procedures Page
export const ProceduresPage = () => {
  const procedures = [
    'Ardência nos olhos: o que pode causar e como aliviar esse incômodo',
    'Olheiras profundas? Entenda como a cirurgia pode restaurar seu olhar e sua autoestima',
    'Laser de CO2: antes e depois do procedimento',
    'Cantopexia',
    'Lifting de supercílios', 
    'Laser de CO2 fracionado',
    'Tumores palpebrais',
    'Ectrópio',
    'Entrópio',
    'Ptose palpebral'
  ];

  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-stone-200 to-stone-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-light text-stone-800 mb-8">
            Procedimentos
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedures.map((procedure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-stone-100 border border-stone-300 rounded-lg p-6 h-32 flex items-center justify-center text-center cursor-pointer hover:bg-stone-50 transition-all duration-200"
            >
              <h3 className="text-stone-700 font-medium">{procedure}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Social Buttons
export const SocialButtons = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
      <motion.a
        href="https://instagram.com/jucarrionbercht"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
      >
        <Instagram className="w-6 h-6" />
      </motion.a>
      
      <motion.a
        href="https://wa.me/5555996005353"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

// Footer
export const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Eye className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <div className="text-lg font-bold text-amber-400">Dra. Juliana Carrion Bercht</div>
              </div>
            </div>
            <p className="text-stone-400 mb-4">
              Oftalmologista especialista em plástica ocular e rejuvenescimento palpebral.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(55) 9 9600-5353</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>drajulianacarrion@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/jucarrionbercht" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-stone-400 hover:text-white transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
          <p>&copy; 2025 Dra. Juliana Carrion Bercht. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};