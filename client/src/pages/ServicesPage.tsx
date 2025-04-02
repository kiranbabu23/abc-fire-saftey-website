import { Link } from "wouter";

const ServicesPage = () => {
  return (
    <main className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-500 mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-neutral-400">Comprehensive fire safety solutions for businesses and homeowners.</p>
        </div>

        {/* Service Category: Fire Extinguisher Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-500 mb-6 border-b border-neutral-200 pb-2">Fire Extinguisher Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-primary bg-opacity-10 md:w-48 flex items-center justify-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-500">Fire Extinguisher Sales</h3>
                  <p className="text-neutral-400 mb-4">We offer a comprehensive range of fire extinguishers suitable for different types of fires:</p>
                  <ul className="list-disc pl-5 text-neutral-400 mb-4">
                    <li>Class A: For ordinary combustibles</li>
                    <li>Class B: For flammable liquids</li>
                    <li>Class C: For electrical equipment</li>
                    <li>Class D: For flammable metals</li>
                    <li>Class K: For cooking oils and fats</li>
                    <li>Multi-purpose extinguishers</li>
                  </ul>
                  <p className="text-neutral-400">Our experts will help you choose the right type and size for your specific needs.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-primary bg-opacity-10 md:w-48 flex items-center justify-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-500">Extinguisher Servicing & Maintenance</h3>
                  <p className="text-neutral-400 mb-4">Regular servicing is essential to ensure your fire extinguishers work properly when needed:</p>
                  <ul className="list-disc pl-5 text-neutral-400 mb-4">
                    <li>Annual inspections</li>
                    <li>Pressure testing</li>
                    <li>Refilling services</li>
                    <li>Parts replacement</li>
                    <li>Certification and documentation</li>
                  </ul>
                  <p className="text-neutral-400">Our maintenance programs keep your equipment in compliance with safety regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Category: Fire Safety Inspections */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-500 mb-6 border-b border-neutral-200 pb-2">Fire Safety Inspections & Risk Assessments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-primary bg-opacity-10 md:w-48 flex items-center justify-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-500">Fire Risk Assessments</h3>
                  <p className="text-neutral-400 mb-4">Our comprehensive fire risk assessments identify potential hazards and provide solutions:</p>
                  <ul className="list-disc pl-5 text-neutral-400 mb-4">
                    <li>Identification of fire hazards</li>
                    <li>Evaluation of people at risk</li>
                    <li>Assessment of existing safety measures</li>
                    <li>Recommendations for improvements</li>
                    <li>Documentation and certification</li>
                  </ul>
                  <p className="text-neutral-400">Our assessments help you comply with fire safety regulations and protect your property.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-primary bg-opacity-10 md:w-48 flex items-center justify-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-500">Fire Safety Equipment Inspections</h3>
                  <p className="text-neutral-400 mb-4">Regular inspections of all fire safety equipment ensure everything works when needed:</p>
                  <ul className="list-disc pl-5 text-neutral-400 mb-4">
                    <li>Fire extinguisher inspections</li>
                    <li>Fire alarm system testing</li>
                    <li>Emergency lighting checks</li>
                    <li>Fire door inspections</li>
                    <li>Sprinkler system inspections</li>
                  </ul>
                  <p className="text-neutral-400">We provide detailed reports and certification for all inspections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Category: Training & Consulting */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-500 mb-6 border-b border-neutral-200 pb-2">Training & Consulting Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-primary bg-opacity-10 md:w-48 flex items-center justify-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-500">Fire Safety Training</h3>
                  <p className="text-neutral-400 mb-4">We provide comprehensive training programs for employees and safety officers:</p>
                  <ul className="list-disc pl-5 text-neutral-400 mb-4">
                    <li>Fire extinguisher operation</li>
                    <li>Fire warden training</li>
                    <li>Emergency evacuation procedures</li>
                    <li>Fire prevention practices</li>
                    <li>Custom training programs</li>
                  </ul>
                  <p className="text-neutral-400">Our training programs can be customized to meet your specific needs and requirements.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-primary bg-opacity-10 md:w-48 flex items-center justify-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-500">Fire Safety Planning & Consulting</h3>
                  <p className="text-neutral-400 mb-4">Our consulting services help you develop and implement effective fire safety plans:</p>
                  <ul className="list-disc pl-5 text-neutral-400 mb-4">
                    <li>Emergency evacuation planning</li>
                    <li>Fire safety policy development</li>
                    <li>Regulatory compliance assistance</li>
                    <li>Fire protection system design</li>
                    <li>Business continuity planning</li>
                  </ul>
                  <p className="text-neutral-400">We work with businesses of all sizes to create customized fire safety solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Pricing */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-neutral-500 mb-6">Service Pricing</h2>
            <p className="text-neutral-400 mb-6">We offer competitive pricing for all our fire safety services. Contact us for a customized quote based on your specific needs.</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-neutral-100 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-3 bg-neutral-100 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Starting From</th>
                    <th className="px-6 py-3 bg-neutral-100 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Fire Extinguisher (Standard 5lb ABC)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">$49.99</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Includes mounting bracket</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Annual Fire Extinguisher Inspection</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">$15 per unit</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Volume discounts available</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Fire Risk Assessment</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">$250</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Price varies by property size</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Fire Safety Training Session</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">$199</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Up to 20 participants</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Maintenance Service Call</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">$75</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Plus parts if needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/contact">
                <a className="inline-block bg-primary text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-red-700 transition-all">
                  Request a Quote
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-neutral-500 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="text-lg font-semibold text-neutral-500 mb-2">How often should fire extinguishers be inspected?</h3>
                <p className="text-neutral-400">Fire extinguishers should be visually inspected monthly and undergo a professional inspection annually. They should be pressure tested (hydrostatic testing) every 5-12 years, depending on the type of extinguisher.</p>
              </div>
              
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="text-lg font-semibold text-neutral-500 mb-2">What types of fire extinguishers do I need for my business?</h3>
                <p className="text-neutral-400">The types of fire extinguishers you need depend on the potential fire hazards in your business. Most businesses need ABC multi-purpose extinguishers, while commercial kitchens require Class K extinguishers, and facilities with sensitive electronics might need Class C. Our experts can assess your needs and recommend the appropriate types.</p>
              </div>
              
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="text-lg font-semibold text-neutral-500 mb-2">Is fire safety training mandatory for businesses?</h3>
                <p className="text-neutral-400">In many jurisdictions, businesses are required to provide fire safety training to employees. Regulations vary, but most workplace safety regulations require that employees know evacuation procedures and how to use fire extinguishers. Our training programs help ensure your business is compliant with these regulations.</p>
              </div>
              
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="text-lg font-semibold text-neutral-500 mb-2">How often should a fire risk assessment be updated?</h3>
                <p className="text-neutral-400">Fire risk assessments should be reviewed and updated annually, or whenever there are significant changes to your building, operations, or staffing. Changes that warrant a reassessment include renovations, changes in building use, new equipment, or alterations to exit routes.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-500 mb-2">Can you help with fire safety compliance for my business?</h3>
                <p className="text-neutral-400">Yes, we provide comprehensive services to help businesses comply with local, state, and federal fire safety regulations. Our team stays up-to-date with the latest codes and standards to ensure your business meets all requirements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-neutral-400 mb-6">Ready to improve your fire safety? Contact us or book an inspection today.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <a className="bg-primary text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-red-700 transition-all">
                Contact Us
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
    </main>
  );
};

export default ServicesPage;
