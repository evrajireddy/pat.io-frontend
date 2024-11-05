import React from "react";
import HamburgerMenu from "../Componets/HamburgerMenu";
import HeroSection from "../Componets/HeroSection";
import { motion } from "framer-motion";


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Research() {
  return (
    <div className="max-w-full mx-auto px-4 py-12 max-h-screen  bg-gradient-to-r from-blue-100 to-indigo-200 overflow-y-auto">
      {/* Hamburger Menu */}
      <HamburgerMenu />

      {/* Enhanced Hero Section */}
      <HeroSection
        title="Our Research"
        description="Pioneering advancements in AI to make social security assistance more accessible and effective. Discover our innovative research across multiple areas."
        gradientClass="bg-glass"
      />

      <div className="max-w-4xl mx-auto mt-8 text-gray-800 font-quattrocento">

        {/* Research Focus Areas */}
        <motion.section variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Research Focus Areas</h2>
          <p className="text-lg mb-8">
            Our research spans across several critical areas that drive the development of Pat.io. These focus areas ensure we’re constantly pushing the boundaries of AI and improving accessibility for users worldwide.
          </p>
        </motion.section>

        {/* AI and NLP Technology Section */}
        <motion.section variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. AI and NLP Technology</h2>
              <p className="text-lg mb-4">
                Our research in Artificial Intelligence and Natural Language Processing (NLP) drives Pat.io’s core functionalities. We leverage advanced models to understand social security questions with accuracy.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Social Impact and Accessibility Section */}
        <motion.section variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Social Impact and Accessibility</h2>
              <p className="text-lg mb-4">
                We strive to make social security information accessible to all. Our initiatives support diverse communities, including immigrants and low-income individuals.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Data Privacy and Security Section */}
        <motion.section variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
           
            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Data Privacy and Security</h2>
              <p className="text-lg mb-4">
                Data privacy is integral to our platform. We follow strict protocols to protect user data, ensuring confidentiality and security.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Continuous Learning and Adaptation Section */}
        <motion.section variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Continuous Learning and Adaptation</h2>
              <p className="text-lg mb-4">
                Our machine learning research ensures Pat.io adapts to user needs and regulatory changes over time.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Future Goals Section */}
        <motion.section variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Future Goals</h2>
              <p className="text-lg mb-4">
                We envision a future where Pat.io provides comprehensive support for various social services.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}