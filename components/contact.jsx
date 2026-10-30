import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./section-heading";
import { PROFILE } from "./data";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // رسالة الحالة

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      setLoading(true);
      setStatus("Sending..."); // رسالة مؤقتة
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus(
          "❌ Failed to send message: " + (result.error || "Unknown error")
        );
      }
    } catch (err) {
      setStatus("❌ Error sending message: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Open to full-time roles and freelance projects. Send a message or reach me directly."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:usefashraf.dev@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    usefashraf.dev@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+201143148742"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +20 114 314 8742
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-400">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            {/* Follow me */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Find me online</h3>
              <div className="flex gap-4">
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
                  <Github size={20} />
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Youssef Ashraf"
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Youssef@example.com"
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {/* رسالة الحالة */}
              {status && (
                <div
                  className={`mt-4 p-3 rounded-lg ${
                    status.includes("✅")
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
