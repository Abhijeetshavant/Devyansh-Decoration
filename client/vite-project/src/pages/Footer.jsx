import React, { useState } from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  MessageCircle,
  ThumbsUp,
  Clock,
  User,
  Calendar,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      event: "Wedding Decoration",
      comment:
        "Excellent service! The wedding decoration was beyond our expectations. Team was very professional.",
      time: "2 days ago",
      likes: 24,
      avatar: "RS",
      verified: true,
    },
    {
      id: 2,
      name: "Priya Patel",
      event: "Birthday Party",
      comment:
        "DJ night was amazing! Sound quality and lighting setup made our party unforgettable.",
      time: "1 week ago",
      likes: 18,
      avatar: "PP",
      verified: true,
    },
    {
      id: 3,
      name: "Amit Kumar",
      event: "Corporate Event",
      comment:
        "Complete tent setup for 500 guests. Very organized and punctual delivery. Highly recommended!",
      time: "3 days ago",
      likes: 32,
      avatar: "AK",
      verified: false,
    },
  ]);

  const [newComment, setNewComment] = useState({
    name: "",
    eventType: "",
    comment: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [likedComments, setLikedComments] = useState(new Set());

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.comment) return;

    const comment = {
      id: comments.length + 1,
      name: newComment.name,
      event: newComment.eventType || "General Feedback",
      comment: newComment.comment,
      time: "Just now",
      likes: 0,
      avatar: newComment.name.substring(0, 2).toUpperCase(),
      verified: false,
    };

    setComments([comment, ...comments]);
    setNewComment({ name: "", eventType: "", comment: "" });
  };

  const handleLikeComment = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const isLiked = likedComments.has(commentId);
        return {
          ...comment,
          likes: isLiked ? comment.likes - 1 : comment.likes + 1,
        };
      }
      return comment;
    });

    const updatedLikes = new Set(likedComments);
    if (likedComments.has(commentId)) {
      updatedLikes.delete(commentId);
    } else {
      updatedLikes.add(commentId);
    }

    setLikedComments(updatedLikes);
    setComments(updatedComments);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`Thank you for subscribing with: ${newsletterEmail}`);
      setNewsletterEmail("");
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: " https://www.instagram.com/divyansh_decoration_house_2/",
      color: "bg-gradient-to-r from-pink-500 to-purple-600",
      followers: "5.2K",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/shivammeerutjatav.jatav",
      color: "bg-blue-600",
      followers: "8.7K",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/@shivamjatavfufa4165",
      color: "bg-red-600",
      followers: "3.1K",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#",
      color: "bg-sky-500",
      followers: "2.4K",
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Gallery", url: "/gallery" },
    { name: "Packages", url: "/packages" },
    { name: "About Us", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  const servicesList = [
    "DJ & Music Booking",
    "Tent & Shamiyana",
    "Wedding Decoration",
    "Birthday Decoration",
    "Stage & Lighting",
    "Farmhouse Decoration",
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 6396028950", subtext: "24/7 Available" },
    { icon: Mail, text: "info@eventspecial.com", subtext: "Quick Response" },
    {
      icon: MapPin,
      text: "123 Event Street, Meerut",
      subtext: "Uttar Pradesh",
    },
  ];

  const eventTypes = [
    "Wedding",
    "Birthday",
    "Corporate",
    "Engagement",
    "Anniversary",
    "Haldi/Mehndi",
    "Sangeet",
    "Other",
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 py-12">
        {/* Top Section - Social Media & Newsletter */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Social Media Stats */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
              <MessageCircle className="text-pink-400" size={28} />
              Join Our Social Community
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className={`${social.color} p-3 sm:p-4 rounded-xl hover:scale-105 transition-transform group min-w-0`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <social.icon size={20} className="flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base truncate">
                        {social.name}
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    />
                  </div>
                  <div className="mt-2 sm:mt-3 text-xs sm:text-sm opacity-90">
                    {social.followers} Followers
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3">
              <Mail className="text-yellow-400" size={28} />
              Subscribe to Updates
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Get latest event ideas, offers, and special discounts directly in
              your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 focus:outline-none text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 text-sm sm:text-base"
              >
                <Send size={20} />
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Active Comments Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <MessageCircle className="text-blue-400" size={28} />
              Recent Feedback & Comments
              <span className="bg-blue-600 text-xs sm:text-sm px-3 py-1 rounded-full">
                {comments.length} Active
              </span>
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Clock size={16} />
              Live Updates
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Comments List */}
            <div className="lg:col-span-2 space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-gray-800 rounded-xl p-4 sm:p-6 hover:bg-gray-750 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">
                        {comment.avatar}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-bold text-sm sm:text-base">
                            {comment.name}
                          </span>
                          {comment.verified && (
                            <span className="bg-blue-500 text-xs px-2 py-1 rounded-full flex-shrink-0">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {comment.event}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {comment.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleLikeComment(comment.id)}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full ${
                        likedComments.has(comment.id)
                          ? "bg-pink-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      } self-start`}
                    >
                      <ThumbsUp size={16} />
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                  </div>
                  <p className="text-gray-200 text-sm sm:text-base">
                    {comment.comment}
                  </p>
                </div>
              ))}
            </div>

            {/* Add Comment Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-700">
              <h4 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-3">
                <User className="text-green-400" size={24} />
                Share Your Experience
              </h4>
              <form onSubmit={handleSubmitComment} className="space-y-4">
                <input
                  type="text"
                  value={newComment.name}
                  onChange={(e) =>
                    setNewComment({ ...newComment, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-green-500 focus:outline-none text-sm sm:text-base"
                  required
                />

                <select
                  value={newComment.eventType}
                  onChange={(e) =>
                    setNewComment({ ...newComment, eventType: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-green-500 focus:outline-none text-sm sm:text-base"
                >
                  <option value="">Select Event Type</option>
                  {eventTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <textarea
                  value={newComment.comment}
                  onChange={(e) =>
                    setNewComment({ ...newComment, comment: e.target.value })
                  }
                  placeholder="Share your experience with our services..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-green-500 focus:outline-none resize-none text-sm sm:text-base"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 text-sm sm:text-base"
                >
                  <Send size={20} />
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Links & Contact Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {/* Company Info */}
          <div className="min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Event Special
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Making every occasion grand with premium event services in Meerut
              and nearby areas.
            </p>
            <div className="space-y-3">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0">
                    <info.icon size={18} className="text-pink-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm sm:text-base truncate">
                      {info.text}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {info.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm sm:text-base"
                  >
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    />
                    <span className="truncate">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm sm:text-base"
                  >
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    />
                    <span className="truncate">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl">
            <h4 className="text-lg sm:text-xl font-bold mb-6">
              Business Hours
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-400 text-sm sm:text-base">
                  Monday - Friday
                </span>
                <span className="font-semibold text-sm sm:text-base">
                  9:00 AM - 10:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-700">
                <span className="text-gray-400 text-sm sm:text-base">
                  Saturday
                </span>
                <span className="font-semibold text-sm sm:text-base">
                  8:00 AM - 11:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm sm:text-base">
                  Sunday
                </span>
                <span className="font-semibold text-sm sm:text-base">
                  24/7 Emergency
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left text-sm sm:text-base">
              <p>
                © {new Date().getFullYear()} Event Special. All rights reserved.
              </p>
              <p className="text-xs sm:text-sm mt-1">
                Made with <Heart size={14} className="inline text-pink-500" />{" "}
                in Meerut
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
