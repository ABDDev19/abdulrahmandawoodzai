import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const email = "abdulrahmandawoodzai28@gmail.com";
  const whatsapp = "93767643667";

  return (
    <section
      id="contact"
      className="w-full min-h-screen px-5 py-20 md:px-10 lg:px-20"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}>
      <div className="max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-[4px] text-sm mb-3"
            style={{
              color: "color-mix(in srgb, var(--text-color) 55%, transparent)",
            }}>
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--purple), var(--pink))",
              }}>
              Work Together
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto mt-5 leading-relaxed"
            style={{
              color: "color-mix(in srgb, var(--text-color) 65%, transparent)",
            }}>
            Have a project, idea, or opportunity? Feel free to reach out. I'm
            always open to discussing new projects and creative ideas.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ================= LEFT SIDE ================= */}
          <div
            className="p-7 md:p-9 rounded-3xl border"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--text-color) 3%, transparent)",
              borderColor:
                "color-mix(in srgb, var(--text-color) 10%, transparent)",
            }}>
            <h3 className="text-2xl font-bold mb-3">Let's Talk</h3>

            <p
              className="leading-relaxed mb-8"
              style={{
                color: "color-mix(in srgb, var(--text-color) 65%, transparent)",
              }}>
              Whether you have a question, want to work together, or simply want
              to say hello, you can contact me through email or WhatsApp.
            </p>

            {/* ================= EMAIL ================= */}
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--text-color) 4%, transparent)",
                borderColor:
                  "color-mix(in srgb, var(--text-color) 10%, transparent)",
              }}>
              <div
                className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--purple) 12%, transparent)",
                  color: "var(--purple)",
                }}>
                <Mail size={22} />
              </div>

              <div className="min-w-0">
                <p
                  className="text-sm"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-color) 55%, transparent)",
                  }}>
                  Email
                </p>

                <p className="font-medium break-all">{email}</p>
              </div>
            </a>

            {/* ================= WHATSAPP ================= */}
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 mt-4 rounded-2xl border transition-all duration-300"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--text-color) 4%, transparent)",
                borderColor:
                  "color-mix(in srgb, var(--text-color) 10%, transparent)",
              }}>
              <div
                className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--blue) 12%, transparent)",
                  color: "var(--blue)",
                }}>
                <MessageCircle size={22} />
              </div>

              <div>
                <p
                  className="text-sm"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-color) 55%, transparent)",
                  }}>
                  WhatsApp
                </p>

                <p className="font-medium">Chat with me</p>
              </div>
            </a>

            {/* ================= LOCATION ================= */}
            <div
              className="flex items-center gap-4 p-4 mt-4 rounded-2xl border"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--text-color) 4%, transparent)",
                borderColor:
                  "color-mix(in srgb, var(--text-color) 10%, transparent)",
              }}>
              <div
                className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--blue) 12%, transparent)",
                  color: "var(--blue)",
                }}>
                <MapPin size={22} />
              </div>

              <div>
                <p
                  className="text-sm"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-color) 55%, transparent)",
                  }}>
                  Location
                </p>

                <p className="font-medium">Afghanistan</p>
              </div>
            </div>

            {/* ================= SOCIAL LINKS ================= */}
            <div className="flex items-center gap-3 mt-8">
              {/* GitHub */}
              <a
                href="https://github.com/ABDDev19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--text-color) 8%, transparent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--purple)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--text-color) 8%, transparent)";
                  e.currentTarget.style.color = "var(--text-color)";
                }}>
                <FaGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abdulrahman-dawoodzai-2b4448403"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--text-color) 8%, transparent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--blue)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--text-color) 8%, transparent)";
                  e.currentTarget.style.color = "var(--text-color)";
                }}>
                <FaLinkedinIn size={20} />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--text-color) 8%, transparent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--pink)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--text-color) 8%, transparent)";
                  e.currentTarget.style.color = "var(--text-color)";
                }}>
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div
            className="p-7 md:p-9 rounded-3xl border"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--text-color) 3%, transparent)",
              borderColor:
                "color-mix(in srgb, var(--text-color) 10%, transparent)",
            }}>
            <h3 className="text-2xl font-bold mb-2">Send Me a Message</h3>

            <p
              className="mb-8"
              style={{
                color: "color-mix(in srgb, var(--text-color) 65%, transparent)",
              }}>
              Fill out the form and I'll get back to you as soon as possible.
            </p>

            <form
              action={`https://formsubmit.co/${email}`}
              method="POST"
              className="space-y-5">
              {/* FORMSUBMIT SETTINGS */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <input type="hidden" name="_captcha" value="false" />

              <input type="hidden" name="_template" value="table" />

              {/* NAME */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl outline-none border transition-all duration-300"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--text-color) 4%, transparent)",
                    borderColor:
                      "color-mix(in srgb, var(--text-color) 10%, transparent)",
                    color: "var(--text-color)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--purple)";
                  }}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-xl outline-none border transition-all duration-300"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--text-color) 4%, transparent)",
                    borderColor:
                      "color-mix(in srgb, var(--text-color) 10%, transparent)",
                    color: "var(--text-color)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--purple)";
                  }}
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project discussion"
                  className="w-full px-4 py-3 rounded-xl outline-none border transition-all duration-300"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--text-color) 4%, transparent)",
                    borderColor:
                      "color-mix(in srgb, var(--text-color) 10%, transparent)",
                    color: "var(--text-color)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--purple)";
                  }}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl outline-none resize-none border transition-all duration-300"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--text-color) 4%, transparent)",
                    borderColor:
                      "color-mix(in srgb, var(--text-color) 10%, transparent)",
                    color: "var(--text-color)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--purple)";
                  }}
                />
              </div>

              {/* SEND BUTTON */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--purple), var(--pink))",
                }}>
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
