import { useState } from "react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    title: "Global Payments",
    services: [
      { id: "payments", name: "Payments", description: "Accept payments online and in-person with ease." },
      { id: "payment-links", name: "Payment Links", description: "Quickly generate and share payment links with customers." },
      { id: "checkout", name: "Checkout", description: "Seamless checkout experience for your customers." },
      { id: "elements", name: "Elements", description: "Customizable UI components for payment forms." },
    ],
  },
  {
    title: "Embedded Payments and Finance",
    services: [
      { id: "connect", name: "Connect", description: "Powerful API for platforms and marketplaces." },
      { id: "treasury", name: "Treasury", description: "Manage and store funds securely with financial accounts." },
      { id: "capital", name: "Capital", description: "Flexible financing options for businesses." },
      { id: "issuing", name: "Issuing", description: "Create and manage physical and virtual payment cards." },
    ],
  },
  {
    title: "Revenue and Finance Automation",
    services: [
      { id: "billing", name: "Billing", description: "Automate recurring payments and subscriptions." },
      { id: "revenue-recognition", name: "Revenue Recognition", description: "Track and report revenue automatically." },
      { id: "tax", name: "Tax", description: "Simplify sales tax and VAT compliance." },
      { id: "invoicing", name: "Invoicing", description: "Generate and send professional invoices." },
      { id: "sigma", name: "Sigma", description: "Advanced analytics and reporting for your business." },
      { id: "data-pipeline", name: "Data Pipeline", description: "Seamless data synchronization across platforms." },
    ],
  },
  {
    title: "More",
    services: [
      { id: "payment-methods", name: "Payment Methods", description: "Support multiple payment options for customers." },
      { id: "link", name: "Link", description: "Faster checkout with saved payment details." },
      { id: "financial-connections", name: "Financial Connections", description: "Securely connect financial data." },
      { id: "identity", name: "Identity", description: "Verify customer identities with ease." },
      { id: "atlas", name: "Atlas", description: "Start and manage your global business." },
      { id: "climate", name: "Climate", description: "Support sustainability efforts through payments." },
    ],
  },
];

const Navbar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showHomePopup, setShowHomePopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 relative flex justify-center">
      <ul className="flex space-x-6">
        <li
          className="relative"
          onMouseEnter={() => setShowHomePopup(true)}
          onMouseLeave={() => setShowHomePopup(false)}
        >
          <Link to="/" className="hover:text-gray-400">Home</Link>
          {showHomePopup && (
            <div className="absolute left-0 mt-2 w-64 bg-white text-black p-4 shadow-lg">
              <p className="text-sm text-gray-600">Welcome to our website! Discover our amazing services.</p>
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          <span className="cursor-pointer hover:text-gray-400">Services</span>
          <div
            className={`absolute left-0 mt-2 w-[700px] bg-white text-black p-6 shadow-lg grid grid-cols-2 gap-6 transition-opacity duration-300 ${showMegaMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            {serviceCategories.map((category) => (
              <div key={category.title}>
                <h3 className="font-bold text-lg mb-3 text-blue-600">{category.title}</h3>
                <ul>
                  {category.services.map((service) => (
                    <li key={service.id} className="mb-3">
                      <Link to={`/service/${service.id}`} className="block text-sm text-gray-800 hover:text-blue-600">
                        <strong>{service.name}</strong>
                        {service.description && <p className="text-xs text-gray-500 mt-1">{service.description}</p>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setShowContactPopup(true)}
          onMouseLeave={() => setShowContactPopup(false)}
        >
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          {showContactPopup && (
            <div className="absolute left-0 mt-2 w-64 bg-white text-black p-4 shadow-lg">
              <p className="text-sm text-gray-600">Have questions? Contact us for more information.</p>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
