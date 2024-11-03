// Pages/company.jsx
import React from "react";
import HamburgerMenu from "../Componets/HamburgerMenu";
import HeroSection from "../Componets/HeroSection"; 

export default function Company() {
  return (
    <div className="page-container bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 min-h-screen p-6 font-quattrocento">
      {/* Hamburger Menu */}
      <HamburgerMenu />
      
      <HeroSection
        title="About Pat.io"
        description="Discover our journey, values, and dedication to leveraging AI for social good. Learn more about the company making a difference."
        gradientClass="bg-glass"
      />
      {/* Company Content */}
      <div className="max-w-4xl mx-auto mt-8 text-gray-800 font-quattrocento">
        <h1 className="text-4xl font-bold mb-4">About Pat.io</h1>
        
        <p className="text-lg mb-8">
          Pat.io is more than just a platform; it's a mission-driven company dedicated to
          making essential services more accessible to everyone. Our commitment to innovation
          and community impact drives every decision we make. Here’s an inside look into our
          company, our values, and what we stand for.
        </p>

        {/* Section 1: Mission and Vision */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">1. Our Mission and Vision</h2>
          <p className="text-lg mb-4">
            Pat.io was founded on the principle that technology should be a bridge to opportunity
            and support, not a barrier. Our mission is to use artificial intelligence to simplify
            access to Social Security and other essential services. We envision a world where
            everyone, regardless of language or tech-savviness, can get the help they need easily.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Mission:</strong> To democratize access to social support services through
            the power of AI and advanced technology.</li>
            <li><strong>Vision:</strong> A future where navigating social services is intuitive,
            inclusive, and equitable for all.</li>
          </ul>
        </section>

        {/* Section 2: Our Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">2. Our Core Values</h2>
          <p className="text-lg mb-4">
            Our values are the foundation of everything we do. We believe in creating
            technology that not only solves problems but also respects and uplifts the communities
            we serve. Our core values include:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Empathy:</strong> Understanding the struggles of our users and creating
            solutions that truly serve their needs.</li>
            <li><strong>Transparency:</strong> Building trust by being open about our practices,
            data use, and business model.</li>
            <li><strong>Innovation:</strong> Continuously exploring new technologies to enhance
            accessibility and usability.</li>
            <li><strong>Inclusivity:</strong> Ensuring our services are available to everyone,
            regardless of language, background, or ability.</li>
          </ul>
        </section>

        {/* Section 3: Meet Our Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">3. Meet Our Team</h2>
          <p className="text-lg mb-4">
            Pat.io is powered by a team of dedicated professionals who bring together expertise
            from diverse fields, including AI, social work, UX design, and software development.
            Together, we work to build technology that makes a meaningful difference in people’s lives.
          </p>
          <p className="text-lg mb-4">
            Our team is passionate about creating accessible solutions and believes that
            technology should be used to solve real-world challenges. We are proud of the
            diverse skills and backgrounds that make up the Pat.io family.
          </p>
        </section>

        {/* Section 4: Partnerships and Collaborations */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">4. Partnerships and Collaborations</h2>
          <p className="text-lg mb-4">
            We believe that collaboration is key to making a lasting impact. Pat.io partners with
            local and national organizations to bring our services to communities in need.
            Through our partnerships, we are able to reach a broader audience and better
            understand the unique needs of different populations.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Community Organizations:</strong> Collaborating with local nonprofits
            and social service agencies to ensure our tools are meeting real needs.</li>
            <li><strong>Government Agencies:</strong> Working closely with government bodies
            to stay aligned with policies and regulations.</li>
            <li><strong>Technology Partners:</strong> Partnering with tech companies to leverage
            cutting-edge tools and resources.</li>
          </ul>
        </section>

        {/* Section 5: Our Company Culture */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">5. Our Company Culture</h2>
          <p className="text-lg mb-4">
            At Pat.io, we foster a culture of inclusivity, creativity, and continuous learning.
            We encourage our team to take ownership of their projects and to push the boundaries
            of what's possible in AI and social service technology. Key aspects of our culture include:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Learning and Growth:</strong> Offering workshops, conferences, and
            continuous learning opportunities to our team members.</li>
            <li><strong>Work-Life Balance:</strong> Emphasizing flexibility and understanding
            the importance of mental health and personal well-being.</li>
            <li><strong>Community Engagement:</strong> Encouraging employees to volunteer and
            participate in community events.</li>
          </ul>
        </section>

        {/* Section 6: Our Journey and Milestones */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">6. Our Journey and Milestones</h2>
          <p className="text-lg mb-4">
            Pat.io has come a long way since its inception. Here are some key milestones that
            have shaped our journey and guided us to where we are today:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Founding:</strong> Pat.io was founded in [Year] with the goal of making
            social services accessible to all.</li>
            <li><strong>Product Launch:</strong> Our beta platform was launched in [Year], receiving
            positive feedback and support from early users.</li>
            <li><strong>First Partnership:</strong> We secured our first major partnership with
            a nonprofit organization in [Year].</li>
            <li><strong>Expanding Language Support:</strong> In [Year], we expanded our services
            to support over 20 languages, enhancing accessibility for non-English speakers.</li>
            <li><strong>Recognition:</strong> In [Year], we were recognized as a leading innovator
            in social service technology by [Award/Organization].</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

