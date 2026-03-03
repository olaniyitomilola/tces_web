import React, { useState } from "react";
import contactBg from "../assets/contact.png";
import ContactMap from "../components/ContactMap";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
        agreedToPrivacy: false
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.agreedToPrivacy) {
            alert("Please agree to the privacy notice before submitting.");
            return;
        }
        
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <div className="w-full">
            {/* Hero Section with Background Image */}
            <section className="relative max-w-[1500px] mx-auto h-[20vh]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${contactBg})` }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center px-6 md:px-8">
                    <div className="py-8 md:py-10 max-w-3xl text-center shadow-2xl">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FF8C42] text-left">
                            Contact TCES
                        </h1>
                        <p className="text-sm font-semibold text-white tracking-wider text-left py-2 md:py-5">
                            Get in touch with our experts to discover how we can help you realise your vision. Please fill the form below and we will get back to you shortly
                        </p>
                    </div>
                </div>
            </section>

            {/* Enquiry Form Section */}
            <section className="w-full px-6 md:px-8 py-12 md:py-20">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF8C42] text-center mb-12">
                        Enquiry Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold text-[#FF8C42] uppercase tracking-wider mb-2">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-[#FF8C42] uppercase tracking-wider mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-semibold text-[#FF8C42] uppercase tracking-wider mb-2">
                                Phone *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-semibold text-[#FF8C42] uppercase tracking-wider mb-2">
                                Enquiry Subject
                            </label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent"
                            >
                                <option value="Other">Other</option>
                                <option value="Rail">Rail Infrastructure</option>
                                <option value="Energy">Energy Projects</option>
                                <option value="Road">Road Infrastructure</option>
                                <option value="Civil">Civil Engineering</option>
                                <option value="Consultancy">Consultancy Services</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold text-[#FF8C42] uppercase tracking-wider mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent resize-none"
                            ></textarea>
                        </div>

                        {/* Privacy Notice Checkbox */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="agreedToPrivacy"
                                name="agreedToPrivacy"
                                checked={formData.agreedToPrivacy}
                                onChange={handleChange}
                                required
                                className="mt-1 w-5 h-5 text-[#FF8C42] bg-white border-gray-300 rounded focus:ring-2 focus:ring-[#FF8C42] cursor-pointer"
                            />
                            <label htmlFor="agreedToPrivacy" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                                I agree that TCES, Track Civil Engineering Solutions can store my details for the purposes of contacting me. *
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!formData.agreedToPrivacy}
                            className="w-full md:w-auto bg-[#FF8C42] hover:bg-[#ff7a28] text-white font-bold text-lg px-12 py-4 rounded-md transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Send Enquiry
                        </button>
                    </form>
                </div>
                <ContactMap/>
            </section>
        </div>
    );
}