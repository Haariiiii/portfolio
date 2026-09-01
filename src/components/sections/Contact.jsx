import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: false });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus({ submitting: true, submitted: false, error: false });

    try {
      const isPlaceholder = personalInfo.formspreeEndpoint.includes('your_form_id');

      if (!isPlaceholder) {
        const response = await fetch(personalInfo.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus({ submitting: false, submitted: true, error: false });
          setFormData({ name: '', email: '', message: '' });
          confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
        } else {
          throw new Error('Submission failed');
        }
      } else {
        setTimeout(() => {
          setStatus({ submitting: false, submitted: true, error: false });
          setFormData({ name: '', email: '', message: '' });
          confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
        }, 600);
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold mb-3 uppercase tracking-wider shadow-sm">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Contact <span className="text-slate-500">Me</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mt-3">
            Open for Data Analyst, Data Scientist, Machine Learning Engineer, and AI roles. Let's discuss how I can contribute to your team.
          </p>
          <div className="w-12 h-1 bg-slate-900 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Let's Connect</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Whether you have a job opportunity, a project proposal, or technical questions about my ML research, feel free to reach out.
              </p>

              {/* Email Card */}
              <a
                href={personalInfo.social.emailLink}
                className="minimal-card p-5 flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-2xl bg-slate-100 text-slate-900 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 font-bold">Direct Email</div>
                  <div className="text-sm font-bold text-slate-900">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-card p-5 flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-2xl bg-slate-100 text-slate-900 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 font-bold">LinkedIn Profile</div>
                  <div className="text-sm font-bold text-slate-900">
                    harigovind-p
                  </div>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-card p-5 flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-2xl bg-slate-100 text-slate-900 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 font-bold">GitHub Profile</div>
                  <div className="text-sm font-bold text-slate-900">
                    github.com/Haariiiii
                  </div>
                </div>
              </a>
            </div>

            {/* Location Pill */}
            <div className="minimal-card p-4 flex items-center gap-3 text-xs font-mono text-slate-600 font-bold">
              <MapPin className="w-4 h-4 text-slate-900 shrink-0" />
              <span>Based in Kasaragod, Kerala, India • Open to Relocation</span>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="minimal-card p-8 sm:p-10 shadow-md relative bg-white">
              
              <h3 className="text-2xl font-black text-slate-900 mb-2">Send a Message</h3>
              <p className="text-slate-500 text-xs mb-6 font-mono">
                Fill in your details below to send an instant message.
              </p>

              {status.submitted ? (
                <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col items-center text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600" />
                  <h4 className="text-xl font-black text-slate-900">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-600 max-w-md font-mono">
                    Thank you for reaching out, Harigovind will respond to your email as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus({ submitting: false, submitted: false, error: false })}
                    className="mt-2 text-xs font-mono text-slate-900 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-300 text-sm transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-300 text-sm transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Discussing job opportunity, ML project collaboration..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-300 text-sm transition-all resize-none font-medium"
                    ></textarea>
                  </div>

                  {status.error && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>An error occurred while sending. Please try emailing directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {status.submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
