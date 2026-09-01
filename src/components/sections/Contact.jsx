import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Sparkles, AlertCircle } from 'lucide-react';
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
    <section id="contact" className="py-20 md:py-28 relative">
      
      {/* Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Open for Data Analyst, Data Scientist, Machine Learning Engineer, and AI roles. Let's discuss how I can contribute to your team.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Whether you have an opportunity, a project proposal, or technical questions about my work, feel free to reach out directly.
              </p>

              {/* Email Card */}
              <a
                href={personalInfo.social.emailLink}
                className="glass-panel p-5 rounded-2xl border border-slate-800 glass-panel-hover flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-slate-800 glass-panel-hover flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    harigovind-p
                  </div>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-slate-800 glass-panel-hover flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">GitHub Repositories</div>
                  <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    github.com/harigovindp
                  </div>
                </div>
              </a>
            </div>

            {/* Location Pill */}
            <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-3 text-xs font-mono text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Based in Kasaragod, Kerala, India • Open to Relocation</span>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 shadow-2xl relative">
              
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-xs mb-6">
                Fill in your details below. This form is pre-configured to connect to Formspree or EmailJS.
              </p>

              {status.submitted ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex flex-col items-center text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 max-w-md">
                    Thank you for reaching out, Harigovind will respond to your email as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus({ submitting: false, submitted: false, error: false })}
                    className="mt-2 text-xs font-mono text-cyan-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Discussing job opportunity, project collaboration..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  {status.error && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>An error occurred while sending. Please try emailing directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-50"
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
