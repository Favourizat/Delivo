
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  FiMail,
  FiArrowUpRight,
  FiMessageCircle,
  FiHeadphones,
  FiTruck,
} from "react-icons/fi";

const contactEmail = "yourdelivo@gmail.com";

const socialLinks = [
  {
    name: "Instagram",
    username: "@yourdelivohandle",
    href: "https://instagram.com/yourdelivohandle",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    username: "Delivo",
    href: "https://facebook.com/yourdelivopage",
    icon: FaFacebookF,
  },
  {
    name: "LinkedIn",
    username: "Delivo",
    href: "https://linkedin.com/company/yourdelivopage",
    icon: FaLinkedinIn,
  },
];

export default function ContactForm() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#142D4E]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#142D4E] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/[0.04]" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/[0.04]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm text-blue-100">
            <FiMessageCircle size={16} />
            We’re here to help
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let’s get your
            <span className="block text-[#A9C8F0]">
              delivery moving.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/80 sm:text-lg">
            Have a question about a delivery, need assistance, or want to
            work with us? Reach out through any of our contact channels.
            We’re just a message away.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 text-sm text-blue-100/80">
            <span className="flex items-center gap-2">
              <FiMail size={17} />
              Direct email support
            </span>
            <span className="hidden text-white/30 sm:inline">•</span>
            <span className="flex items-center gap-2">
              <FiTruck size={17} />
              Delivery enquiries
            </span>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#52749A]">
            Get in touch
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            How can we help you?
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Choose the most convenient way to connect with Delivo.
            We’re happy to hear from you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email card */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF1FA] text-[#142D4E]">
              <FiMail size={26} />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Send us an email
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Need help with a shipment, have a question about our
              services, or want to discuss a partnership? Send us an email.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-7 inline-flex max-w-full items-center gap-2 break-all font-semibold text-[#244F82] transition hover:text-[#142D4E]"
            >
              {contactEmail}
              <FiArrowUpRight
                size={18}
                className="shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <div className="mt-7 border-t border-slate-100 pt-5 text-sm text-slate-500">
              For general enquiries and delivery support
            </div>
          </div>

          {/* Social media card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF1FA] text-[#142D4E]">
              <FiMessageCircle size={26} />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Connect with us
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Follow Delivo on social media for company updates,
              delivery news, and more ways to stay connected.
            </p>

            <div className="mt-6 space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-[#B7C9DF] hover:bg-[#F4F7FB]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF1FA] text-[#244F82]">
                        <Icon size={20} />
                      </span>

                      <span className="min-w-0">
                        <span className="block font-semibold">
                          {social.name}
                        </span>
                        <span className="block truncate text-sm text-slate-500">
                          {social.username}
                        </span>
                      </span>
                    </span>

                    <FiArrowUpRight
                      size={18}
                      className="shrink-0 text-slate-400 transition group-hover:text-[#142D4E]"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col justify-between gap-6 rounded-2xl bg-[#E8EEF6] p-7 sm:flex-row sm:items-center sm:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#244F82] shadow-sm">
              <FiHeadphones size={23} />
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Need help with a delivery?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Have your tracking ID ready when contacting our team
                about an existing shipment.
              </p>
            </div>
          </div>

          <Link
            href="/track-delivery"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#142D4E] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1E3A5F]"
          >
            Track a delivery
            <FiArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
