import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Shivam from "../assets/Shivam.png";
import Meenu from "../assets/Meenu.png";
import Abhijeet from "../assets/Abhijeet.png";

import {
  Users,
  Award,
  Calendar,
  Heart,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Target,
  Sparkles,
  Trophy,
  Smile,
  Shield,
  Clock,
  TrendingUp,
  Coffee,
  PartyPopper,
} from "lucide-react";

const About = () => {
  const handleCall = () => {
    window.location.href = "tel:+916396028950";
  };
  const emailHandler = () => {
    const email = "info@eventspecial.com";
    const subject = "Event Booking Enquiry";
    const body =
      "Hello, I want to enquire about your event decoration and booking services.";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  // Team Members Data
  const teamMembers = [
    {
      id: 1,
      name: "Shivam ",
      role: "Founder & Creative Director",
      experience: "12+ years",
      specialty: "Wedding Decor & Theme Planning",
      imageColor: "from-purple-500 to-pink-500",
      image: Shivam,
      quote:
        "Every event tells a story - we just help you write the perfect chapter.",
    },
    {
      id: 2,
      name: "Meenu",
      role: "Event Operations Head",
      experience: "8+ years",
      specialty: "Backend  work",
      imageColor: "from-blue-500 to-cyan-400",
      image: Meenu,
      quote: "Smooth execution is the secret ingredient to memorable events.",
    },
    {
      id: 3,
      name: "Abhijeet",
      role: "Technical Director",
      experience: "2+ years",
      specialty: "Ai and 3D decoration  ",
      imageColor: "from-orange-500 to-red-500",
      image: Abhijeet,
      quote: "Handel website and using Ai Planing for decoration.",
    },
  ];

  // Company Values
  const companyValues = [
    {
      icon: Heart,
      title: "Passion for Perfection",
      description:
        "We pour our heart into every event, ensuring every detail is perfect.",
      color: "text-red-500 bg-red-50",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "When we commit, we deliver - rain or shine, day or night.",
      color: "text-blue-500 bg-blue-50",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description: "Unique themes and innovative designs for each client.",
      color: "text-purple-500 bg-purple-50",
    },
    {
      icon: Target,
      title: "Attention to Detail",
      description:
        "From flower arrangements to sound levels, nothing escapes our eye.",
      color: "text-green-500 bg-green-50",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Our skilled team works in perfect harmony for flawless execution.",
      color: "text-orange-500 bg-orange-50",
    },
    {
      icon: Clock,
      title: "Punctuality",
      description: "Early setup, timely execution, and prompt cleanup.",
      color: "text-cyan-500 bg-cyan-50",
    },
  ];

  // Achievements & Stats
  const achievements = [
    {
      icon: Calendar,
      value: "850+",
      label: "Events Organized",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Happy Clients",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Trophy,
      value: "45+",
      label: "Awards Won",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: MapPin,
      value: "15+",
      label: "Cities Served",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Star,
      value: "98%",
      label: "Satisfaction Rate",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      value: "12",
      label: "Years Experience",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  // Milestones Timeline
  const milestones = [
    {
      year: "2012",
      event: "Started as a small decoration service in Meerut",
      icon: "🎯",
    },
    {
      year: "2014",
      event: "Expanded to full event management services",
      icon: "🚀",
    },
    {
      year: "2016",
      event: "Launched DJ & Music services division",
      icon: "🎧",
    },
    {
      year: "2018",
      event: "Opened dedicated warehouse for equipment",
      icon: "🏢",
    },
    { year: "2020", event: "Received 'Best Event Company' award", icon: "🏆" },
    { year: "2023", event: "Served 1000+ events milestone", icon: "🎉" },
    {
      year: "2024",
      event: "Launched website  and online shopping ",
      icon: "💒",
    },
  ];

  // Client Testimonials
  const testimonials = [
    {
      name: "Mr. & Mrs. Sharma",
      event: "Wedding Anniversary",
      quote:
        "The team transformed our backyard into a dream venue. Attention to detail was phenomenal!",
      rating: 5,
      date: "Jan 2024",
    },
    {
      name: "TechCorp India",
      event: "Corporate Annual Meet",
      quote:
        "Professional from start to finish. Perfect sound, lighting, and execution for 500+ guests.",
      rating: 5,
      date: "Dec 2025",
    },
    {
      name: "Rohan's 1st Birthday",
      event: "Birthday Party",
      quote:
        "Cartoon theme execution was flawless. Kids loved it, parents were relaxed. Perfect!",
      rating: 5,
      date: "Nov 2025",
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
    "Noida",
    "Delhi NCR",
    "Muzaffarnagar",
    "Bijnor",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-purple-900 via-pink-800 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Creating Memories{" "}
              <span className="text-yellow-300">Since 2012</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              We're not just event planners - we're memory makers, dream
              weavers, and celebration architects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Call Button */}
              <button
                onClick={handleCall}
                aria-label="Call"
                className="
    hidden md:flex group relative items-center gap-4
    px-7 py-5
    rounded-full
    border-4 border-yellow-600
    text-white
    hover:bg-green-900
    transition-all duration-300
    hover:shadow-xl hover:scale-105
  "
              >
                <FaPhoneAlt size={18} />
                <span className="hidden md:inline text-2xl font-bold">
                  Call Now
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our <span className="text-purple-600">Achievements</span> in Numbers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center group">
                <div
                  className={`bg-gradient-to-br ${achievement.color} p-1 rounded-2xl mb-4 inline-block group-hover:scale-110 transition-transform`}
                >
                  <div className="bg-white p-4 rounded-xl">
                    <achievement.icon
                      className="text-gray-800 mx-auto"
                      size={32}
                    />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Meet Our <span className="text-purple-600">Dream Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to making your event
              extraordinary
            </p>
          </div>

          {/* Team Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group h-full">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  {/* TOP IMAGE AREA - Increased */}
                  <div
                    className={`h-80 relative overflow-hidden bg-gradient-to-br ${member.imageColor} flex-shrink-0`}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>

                    {/* Main Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="
                    w-full
                    h-full
                    object-contain
                    object-center
                    group-hover:scale-105
                    transition-all duration-500
                  "
                      />
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute bottom-4 left-4 right-4 text-center z-20">
                      <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="font-bold text-gray-800">
                          {member.experience} Experience
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT - Now fills remaining space */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-purple-600 font-semibold mb-3">
                      {member.role}
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      Specialty: {member.specialty}
                    </div>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <p className="text-gray-600 italic">"{member.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Milestones Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our <span className="text-purple-600">Journey</span> Timeline
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`relative ${idx % 2 === 0 ? "lg:pr-1/2 lg:pl-4 lg:text-right" : "lg:pl-1/2 lg:pr-4 lg:text-left"}`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{milestone.icon}</div>
                      <div
                        className={`text-2xl font-bold ${idx % 2 === 0 ? "text-purple-600" : "text-pink-600"}`}
                      >
                        {milestone.year}
                      </div>
                    </div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            What Our <span className="text-purple-600">Clients</span> Say
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Real stories from people who trusted us with their special moments
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic text-lg mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.event}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Areas We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span className="font-semibold">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300">
            And expanding to more locations every year!
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-100">
            <Coffee className="text-purple-600 mx-auto mb-6" size={64} />
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Let's Create Something{" "}
              <span className="text-purple-600">Amazing</span> Together
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Have an event in mind? Let's discuss your vision over a virtual
              coffee!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleCall}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-3"
              >
                <Phone size={24} />
                Schedule a Consultation
              </button>
              <button
                onClick={emailHandler}
                className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 flex items-center gap-3"
              >
                <Mail size={24} />
                Send Us Your Ideas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
