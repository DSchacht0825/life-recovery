import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background Image with Opacity - full screen */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation - floating on page */}
        <div className="absolute top-0 left-0 right-0 z-50 px-4 py-4">
          <div className="max-w-5xl mx-auto grid grid-cols-3 items-center gap-8">
            {/* Left side links */}
            <div className="flex space-x-8 justify-end animate-slideInLeft delay-100">
              <button onClick={() => scrollToSection('home')} className="text-black hover:text-blue-500 hover-lift font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-black hover:text-blue-500 hover-lift font-medium">About</button>
              <button onClick={() => scrollToSection('mission')} className="text-black hover:text-blue-500 hover-lift font-medium">Mission</button>
            </div>
            
            {/* Centered logo */}
            <div className="flex justify-center animate-fadeInUp delay-200">
              <img src="/logo2.jpg" alt="Life Recovery Logo" style={{ maxWidth: '120px', maxHeight: '120px', width: 'auto', height: 'auto' }} className="hover-scale" />
            </div>
            
            {/* Right side links */}
            <div className="flex space-x-8 justify-start animate-slideInRight delay-300">
              <button onClick={() => scrollToSection('vision')} className="text-black hover:text-blue-500 hover-lift font-medium">Vision</button>
              <button onClick={() => scrollToSection('contact')} className="text-black hover:text-blue-500 hover-lift font-medium">Contact</button>
              <a href="https://www.paypal.com/ncp/payment/79LF9UUUUV234" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 hover-lift font-medium">Giving</a>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section id="home" className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp delay-300">
              Life Recovery at Casa de Oro Bible Church
            </h1>
            <p className="text-xl text-gray-700 mb-8 animate-fadeInUp delay-400">
              Join us Friday nights for Life Recovery, a 12-step meeting for both adults and youth. 
              Together, we grow through the teachings of the 12 steps and hear powerful testimonies 
              from people with lived experience.
            </p>
            <div className="bg-blue-500 text-white px-8 py-4 rounded-lg inline-block animate-fadeInUp delay-500 hover-glow hover-scale">
              <h3 className="text-2xl font-semibold mb-2">Friday Nights at 6pm</h3>
              <p className="text-lg">Casa de Oro Bible Church</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white bg-opacity-90 hover-lift">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-slideInLeft">About Life Recovery</h2>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-6 animate-slideInRight delay-100">
                Life Recovery is more than a meeting—it's a community outreach committed to helping youth, 
                supporting those facing homelessness, and walking alongside anyone seeking hope and change.
              </p>
              <p className="mb-6 animate-slideInLeft delay-200">
                Our program combines the proven framework of the 12 steps with Christ-centered teachings, 
                creating a supportive environment where individuals can share their struggles and celebrate 
                their victories together.
              </p>
              <p className="animate-slideInRight delay-300">
                Whether you're struggling with addiction, life challenges, or simply seeking community, 
                you'll find a welcoming place at Life Recovery where real transformation happens.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fadeInUp">Our Mission</h2>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg hover-lift animate-fadeInUp delay-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Life Recovery exists to bring hope, healing, and restoration to individuals and families 
                through Christ-centered 12-step teachings, real-life testimonies, and compassionate community 
                outreach. We are committed to walking alongside adults and youth in overcoming addiction, 
                brokenness, and life struggles, while serving our community by helping youth, supporting 
                the homeless, and offering a safe place for change.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-20 px-4 bg-white bg-opacity-90 hover-lift">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-slideInRight">Our Vision</h2>
            <div className="bg-blue-50 p-8 rounded-lg hover-glow animate-slideInLeft delay-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to see lives transformed by God's power—where adults and youth break free 
                from addiction, hopelessness, and brokenness, and discover their true identity in Christ. 
                We strive to build a thriving community of healing that helps the hurting, supports the 
                homeless, and equips the next generation to live with purpose, freedom, and hope.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fadeInUp">Get In Touch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg hover-lift animate-fadeInUp delay-200">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 animate-slideInLeft delay-300">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover-lift"
                    />
                  </div>
                  <div className="mb-6 animate-slideInRight delay-400">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover-lift"
                    />
                  </div>
                  <div className="mb-6 animate-slideInLeft delay-500">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover-lift"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover-glow hover-scale animate-fadeInUp delay-600"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map and Location Info */}
              <div className="animate-slideInRight delay-300">
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover-lift mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Visit Us</h3>
                  <div className="text-gray-700">
                    <p className="mb-2 font-medium">Casa de Oro Bible Church</p>
                    <p className="mb-2">10195 Madrid Way</p>
                    <p className="mb-4">Spring Valley, CA 91977</p>
                    <p className="text-blue-500 font-medium">Friday Nights at 6pm - All Welcome</p>
                  </div>
                </div>
                
                {/* Google Maps Embed */}
                <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden hover-lift">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.7!2d-117.0!3d32.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95b!2s10195+Madrid+Way%2C+Spring+Valley%2C+CA+91977!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Casa de Oro Bible Church Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-500 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold">Life Recovery</h3>
              <p className="text-xl mt-2">Casa de Oro Bible Church</p>
              <p className="text-lg mt-1">Friday Nights at 6pm - All Welcome</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Contact Info */}
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
                <p className="mb-2">
                  <a href="tel:+16194146985" className="text-white hover:text-gray-300 underline">
                    (619) 414-6985
                  </a>
                </p>
                <p>
                  <a href="mailto:liferecoverysv@gmail.com" className="text-white hover:text-gray-300 underline">
                    liferecoverysv@gmail.com
                  </a>
                </p>
              </div>

              {/* Social & Giving Buttons */}
              <div className="text-center space-y-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61556688216356" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 hover-glow hover-scale transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Follow us on Facebook
                </a>
                <a 
                  href="https://www.paypal.com/ncp/payment/79LF9UUUUV234" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 hover-glow hover-scale transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.17c-.2-.04-.413-.06-.64-.06H13.78c-.524 0-.968.383-1.05.901l-.86 5.45c-.082.518.257.99.76.99h1.91c3.24 0 5.77-1.317 6.504-5.12.734-3.803-.257-1.991-.822-1.991z"/>
                  </svg>
                  Support Our Ministry
                </a>
              </div>

              {/* Location */}
              <div className="text-center lg:text-right">
                <h4 className="text-xl font-semibold mb-3">Visit Us</h4>
                <p className="mb-1">10195 Madrid Way</p>
                <p>Spring Valley, CA 91977</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
