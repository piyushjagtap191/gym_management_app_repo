import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Bell, 
  Calculator,
  Timer,
  Star,
  Shield,
  Zap,
  Crown,
  Instagram
} from "lucide-react";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gymName: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const whatsappNumber = "917218580478";
  const phoneNumber = "7218580478";

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f')`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold">
              <Crown className="w-5 h-5" />
              <span>Premium Custom-Branded Apps</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transform Your Gym with a
              <span className="text-yellow-400 block">Custom-Branded App</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get your own gym management app with your branding, logo, and name. 
              Streamline operations and delight members for just <span className="text-yellow-400 font-bold">₹13,000</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in getting a custom gym management app for my gym.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 hover:bg-yellow-300 transition-all shadow-2xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp Now</span>
              </motion.a>
              
              <motion.a
                href={`tel:${phoneNumber}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 hover:bg-yellow-400 hover:text-black transition-all"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now</span>
              </motion.a>
            </div>
            
            <div className="pt-8 text-gray-400">
              <p>🇮🇳 Made for Indian Gyms | ⚡ Quick Setup | 💎 Premium Quality</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for <span className="text-yellow-400">Both Sides</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything gym owners and members need in one beautiful, branded app
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gym Owners Features */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
            >
              <div className="flex items-center mb-8">
                <div className="bg-yellow-400 p-3 rounded-xl mr-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">For Gym Owners</h3>
                  <p className="text-gray-400">Complete management control</p>
                </div>
              </div>
              
              <div 
                className="mb-8 rounded-xl overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1619037961380-5ab533fc7129')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px'
                }}
              />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                  <span>Organized Member Database</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                  <span>Monthly Revenue Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bell className="w-6 h-6 text-yellow-400" />
                  <span>Instant Member Notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <span>Membership Status Management</span>
                </div>
              </div>
            </motion.div>

            {/* Members Features */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
            >
              <div className="flex items-center mb-8">
                <div className="bg-yellow-400 p-3 rounded-xl mr-4">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">For Members</h3>
                  <p className="text-gray-400">Enhanced gym experience</p>
                </div>
              </div>
              
              <div 
                className="mb-8 rounded-xl overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px'
                }}
              />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                  <span>Real-time Membership Status</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calculator className="w-6 h-6 text-yellow-400" />
                  <span>BMI & Calorie Calculator</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Timer className="w-6 h-6 text-yellow-400" />
                  <span>Workout Stopwatch & Timer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bell className="w-6 h-6 text-yellow-400" />
                  <span>Gym Updates & Notices</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Simple, <span className="text-yellow-400">Transparent Pricing</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300">
              No hidden costs, no monthly fees. Pay once, own forever.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Package */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-gray-700 relative"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Custom App</h3>
                <div className="text-5xl font-bold text-yellow-400 mb-2">₹13,000</div>
                <p className="text-gray-400">One-time payment</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>Custom branding with your logo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>Complete gym management system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>Member app with all features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>Instant setup & support</span>
                </div>
              </div>
              
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ₹13,000 custom gym app package.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-center block hover:bg-yellow-300 transition-all"
              >
                Get Started
              </motion.a>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-2xl p-8 border-2 border-yellow-400 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-black text-yellow-400 px-6 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">App + Play Store</h3>
                <div className="text-5xl font-bold mb-2">₹15,500</div>
                <p className="text-gray-700">One-time payment</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span>Everything in Custom App</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span>Play Store hosting & setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span>Professional app store listing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span>App store optimization</span>
                </div>
              </div>
              
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ₹15,500 premium package with Play Store hosting.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="w-full bg-black text-yellow-400 py-4 rounded-xl font-bold text-center block hover:bg-gray-900 transition-all"
              >
                Get Premium
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-yellow-400">Our Service?</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Unique Branding</h3>
              <p className="text-gray-300">
                Your gym's name, logo, and colors throughout the entire app. Stand out from competitors.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quick Setup</h3>
              <p className="text-gray-300">
                Get your fully functional app ready in no time. No lengthy development cycles.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Made for India</h3>
              <p className="text-gray-300">
                Designed specifically for Indian gyms with local requirements and affordable pricing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-yellow-400">Transform</span> Your Gym?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact us today and get your custom-branded gym management app
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div 
                className="rounded-2xl overflow-hidden mb-8"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1550259979-ed79b48d2a30')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                  <p className="text-gray-300">Multiple ways to reach us</p>
                </div>
              </div>

              <div className="space-y-6">
                <motion.a
                  href={`https://wa.me/${whatsappNumber}?text=Hi! I want to know more about the gym management app.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-600 to-green-500 rounded-xl hover:from-green-500 hover:to-green-400 transition-all"
                >
                  <MessageCircle className="w-8 h-8" />
                  <div>
                    <div className="font-bold">WhatsApp</div>
                    <div className="text-sm opacity-90">Instant response guaranteed</div>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${phoneNumber}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all"
                >
                  <Phone className="w-8 h-8" />
                  <div>
                    <div className="font-bold">+91 {phoneNumber}</div>
                    <div className="text-sm opacity-90">Call for direct consultation</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://instagram.com/gym_management_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl hover:from-purple-500 hover:to-pink-400 transition-all"
                >
                  <Instagram className="w-8 h-8" />
                  <div>
                    <div className="font-bold">@gym_management_app</div>
                    <div className="text-sm opacity-90">Follow for updates & examples</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
                
                <input
                  type="text"
                  name="gymName"
                  placeholder="Gym Name"
                  value={formData.gymName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
                
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                ></textarea>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all flex items-center justify-center space-x-2"
                >
                  <Mail className="w-6 h-6" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Gym Management App</h3>
              <p className="text-gray-400 mb-4">
                Premium custom-branded gym management solutions for modern fitness businesses.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Made in India 🇮🇳</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>Contact</div>
                <div>Support</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>📱 +91 {phoneNumber}</div>
                <div>📧 Available on WhatsApp</div>
                <div>📍 Serving gyms across India</div>
                <div>🕒 Quick response guaranteed</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gym Management App. All rights reserved. | Transforming gyms across India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;