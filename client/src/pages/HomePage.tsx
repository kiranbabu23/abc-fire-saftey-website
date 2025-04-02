import { Link } from "wouter";
import benefitsCardsImg from "../assets/benefits-cards.png";

// Service Overview Card
const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
    <div className="h-48 bg-primary bg-opacity-10 flex items-center justify-center">
      {icon}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-neutral-500">{title}</h3>
      <p className="text-neutral-400 mb-4">{description}</p>
      <Link href="/services">
        <a className="text-primary font-medium hover:text-red-700 transition-all">Learn more →</a>
      </Link>
    </div>
  </div>
);

// Testimonial Card
const TestimonialCard = ({ 
  quote, name, title 
}: { 
  quote: string; 
  name: string; 
  title: string; 
}) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="text-amber-400">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    </div>
    <p className="text-neutral-400 mb-6">{quote}</p>
    <div className="flex items-center">
      <div>
        <p className="font-semibold text-neutral-500">{name}</p>
        <p className="text-sm text-neutral-400">{title}</p>
      </div>
    </div>
  </div>
);

const HomePage = () => {

  // Services data
  const services = [
    {
      title: "Fire Extinguisher Sales",
      description: "We offer a wide range of fire extinguishers suitable for different types of fires and environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      )
    },
    {
      title: "Fire Safety Inspections",
      description: "Regular inspections to ensure your fire safety equipment is functional and compliant with regulations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Risk Assessments",
      description: "Comprehensive evaluations to identify potential fire hazards and develop prevention strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Maintenance Services",
      description: "Regular maintenance to ensure all your fire safety equipment operates correctly when needed.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      )
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "ABC Fire Safety provided exceptional service when installing fire extinguishers throughout our office building. Their team was professional, knowledgeable, and efficient.",
      name: "Ramesh Reddy",
      title: "Office Manager, XYZ Corporation"
    },
    {
      quote: "We've been using ABC Fire Safety for our annual inspections for the past 5 years. Their attention to detail and thorough assessments give us peace of mind knowing we're well-protected.",
      name: "Nandana",
      title: "Restaurant Owner"
    },
    {
      quote: "When we needed a comprehensive fire risk assessment for our warehouse, ABC Fire Security delivered beyond expectations. They identified issues we hadn't noticed and provided practical solutions.",
      name: "Sandeep Agarwal",
      title: "Facilities Manager, Logistics Inc."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Safety Is Our Priority</h1>
            <p className="text-xl max-w-2xl mb-8">Professional fire safety services to protect your business, property, and loved ones.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <a className="bg-white text-primary font-medium py-2 px-6 rounded-md shadow-md hover:bg-neutral-100 transition-all">
                  Our Services
                </a>
              </Link>
              <Link href="/booking">
                <a className="bg-amber-400 text-neutral-500 font-medium py-2 px-6 rounded-md shadow-md hover:bg-yellow-400 transition-all">
                  Book an Inspection
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-500 mb-4">Why Choose ABC Fire Security</h2>
          <p className="max-w-2xl mx-auto text-neutral-400">With over 15 years of experience, we deliver top-quality fire safety services to businesses and homeowners.</p>
        </div>

        <div className="flex justify-center">
          <img 
            src={benefitsCardsImg} 
            alt="Our Benefits: Certified Experts, Fast Response, Comprehensive Service" 
            className="max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-neutral-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-500 mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-neutral-400">We offer a complete range of fire safety services to keep your property protected.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <a className="inline-block bg-primary text-white font-medium py-3 px-8 rounded-md shadow-md hover:bg-red-700 transition-all">
                View All Services
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-500 mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-neutral-400">We're proud to have helped businesses and homeowners with their fire safety needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              quote={testimonial.quote} 
              name={testimonial.name} 
              title={testimonial.title} 
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Fire Safety?</h2>
            <p className="text-xl mb-8">Contact us today to schedule a consultation or book a fire safety inspection.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <a className="bg-white text-primary font-medium py-3 px-8 rounded-md shadow-md hover:bg-neutral-100 transition-all">
                  Contact Us
                </a>
              </Link>
              <Link href="/booking">
                <a className="bg-amber-400 text-neutral-500 font-medium py-3 px-8 rounded-md shadow-md hover:bg-yellow-400 transition-all">
                  Book an Inspection
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
