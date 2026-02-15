import React from "react";
import {
  Phone,
  MessageCircle,
  Youtube,
  Facebook,
  CheckCircle,
  Play,
} from "lucide-react";

const Services = () => {
  // Core Services Data
  const coreServices = [
    {
      id: 1,
      title: "🎧 DJ & Music Booking",
      description:
        "We provide professional DJ services with high-quality sound systems to make your event energetic and unforgettable.",
      features: [
        "Professional DJ for all events",
        "Latest Bollywood, Punjabi, EDM & Retro music",
        "High-power speakers & subwoofers",
        "LED DJ setup & stage lighting",
        "Dedicated sound technician",
      ],
      bestFor: [
        "Birthdays",
        "Weddings",
        "Engagements",
        "Sangeet",
        "Corporate Parties",
      ],
    },
    {
      id: 2,
      title: "⛺ Tent & Shamiyana Services",
      description:
        "Our tent services combine comfort with elegant design, suitable for both small and large gatherings.",
      features: [
        "Wedding tents & shamiyana",
        "Waterproof tents for outdoor events",
        "VIP seating arrangements",
        "Chairs, tables & stage covering",
        "Carpet flooring",
      ],
      bestFor: ["Weddings", "Religious Events", "Functions", "Outdoor Parties"],
    },
    {
      id: 3,
      title: "🎊 Event Decoration (All Occasions)",
      description:
        "We specialize in premium event decorations with creative themes and high-quality materials.",
      subServices: [
        {
          title: "🎂 Birthday Decoration",
          items: [
            "Balloon decoration (basic & premium)",
            "Cartoon & theme-based setups",
            "LED lights & name boards",
            "Cake table decoration",
          ],
        },
        {
          title: "💍 Wedding Decoration",
          items: [
            "Stage & mandap decoration",
            "Floral & artificial flower setups",
            "Entrance gate decoration",
            "Couple seating & backdrop",
          ],
        },
        {
          title: "💛 Haldi / Mehndi Decoration",
          items: [
            "Yellow & floral themes",
            "Traditional props & seating",
            "Flower strings & drapes",
          ],
        },
        {
          title: "❤️ Anniversary & Surprise Decor",
          items: [
            "Romantic candle setups",
            "Rose petals & heart themes",
            "Room & terrace decoration",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "🏡 Farmhouse & Venue Decoration",
      description:
        "We transform farmhouses and open venues into luxury event spaces.",
      features: [
        "Lawn & garden decoration",
        "Lighting for trees & pathways",
        "Stage & seating planning",
        "Entry gate design",
      ],
    },
    {
      id: 5,
      title: "🎤 Stage, Lighting & Sound Setup",
      description:
        "Professional stage and lighting can completely change the look of your event.",
      features: [
        "Stage fabrication & backdrop",
        "LED walls & moving lights",
        "Spotlights & decorative lights",
        "Mic systems & sound control",
      ],
    },
  ];

  // Why Choose Us Points
  const whyChooseUs = [
    "Experienced event professionals",
    "Affordable pricing with premium quality",
    "Custom themes as per your budget",
    "On-time setup & clean finishing",
    "One-stop solution for all event needs",
    "Friendly & cooperative team",
  ];
  // Process Steps
  const processSteps = [
    {
      step: "1",
      title: "Requirement Discussion",
      description: "We understand your event type, budget & expectations",
    },
    {
      step: "2",
      title: "Theme & Planning",
      description: "We suggest themes, designs & service combinations",
    },
    {
      step: "3",
      title: "Setup & Execution",
      description: "Our team sets up everything on time",
    },
    {
      step: "4",
      title: "Enjoy Your Event 🎉",
      description: "You relax while we handle everything",
    },
  ];

  // Service Areas
  const serviceAreas = [
    "Meerut",
    "Modinagar",
    "Mawana",
    "Sardhana",
    "Hapur",
    "Ghaziabad",
  ];

  // FAQ Data
  const faqs = [
    {
      question: "How much in advance should I book your services?",
      answer:
        "We recommend booking at least 2-3 weeks in advance for small events and 1-2 months for weddings and large functions to ensure availability.",
    },
    {
      question: "What's included in your decoration packages?",
      answer:
        "Our packages include theme-based decoration, lighting, props, and setup. Specific inclusions vary based on the package (Basic/Standard/Premium) chosen.",
    },
    {
      question: "Do you provide services outside Meerut?",
      answer:
        "Yes, we service all nearby areas including Modinagar, Mawana, Sardhana, Hapur, and Ghaziabad. Transportation charges may apply for distant locations.",
    },
    {
      question: "Can I customize my own theme?",
      answer:
        "Absolutely! We work closely with clients to bring their vision to life. You can customize themes, colors, and setups as per your preference.",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-purple-900 via-pink-800 to-red-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            🎉 Our Event Services – Making Every Occasion Grand
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200">
            From elegant decorations to high-energy DJ nights, we provide
            complete event solutions for weddings, birthdays, corporate events,
            and private parties across Meerut and nearby areas.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {service.features && (
                  <>
                    <h4 className="font-semibold text-lg mb-3 text-purple-700">
                      What we offer:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle
                            className="text-green-500 mt-1 mr-3 flex-shrink-0"
                            size={20}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {service.bestFor && (
                  <>
                    <h4 className="font-semibold text-lg mb-3 text-purple-700">
                      Best for:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.bestFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {service.subServices && (
                  <div className="space-y-6">
                    {service.subServices.map((sub, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-lg mb-2 text-purple-700">
                          {sub.title}
                        </h4>
                        <ul className="space-y-1">
                          {sub.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-gray-600">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((point, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">
                    {point}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How We Work Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            How We Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center h-full">
                  <div className="text-5xl font-bold text-purple-600 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {step.step !== "4" && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-3xl text-purple-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Service Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {area}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            and all nearby areas!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ✨ Ready to Make Your Event Special?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Contact us today for the best event decoration, DJ booking, and tent
            services in Meerut.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
