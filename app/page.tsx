import React from "react";

export default function Landing() {
  const features = [
    {
      title: "Instant Setup",
      desc: "Dockerized Keycloak backend with REST-ready Java endpoints. Up and running in minutes.",
    },
    {
      title: "Battle-Tested Auth",
      desc: "Password, token, refresh, roles, and password reset all ready to go — no more boilerplate.",
    },
    {
      title: "Own Your Stack",
      desc: "Self-hosted Keycloak, full control, zero third-party vendor lock-in.",
    },
  ];

  const apis = [
    { method: "POST", path: "/auth/login", desc: "Log in and receive tokens" },
    { method: "POST", path: "/auth/refresh", desc: "Refresh access token" },
    { method: "POST", path: "/auth/revoke", desc: "Revoke access/refresh token" },
    { method: "POST", path: "/auth/logout", desc: "Logout user session" },
    { method: "POST", path: "/auth/reset-password", desc: "Admin resets user password" },
    { method: "POST", path: "/auth/update-password", desc: "User updates own password" },
    { method: "POST", path: "/user/create", desc: "Create a new user" },
    { method: "POST", path: "/user/update", desc: "Update user fields" },
    { method: "POST", path: "/role/assign", desc: "Assign a role to a user" },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937] font-sans">
      <header className="max-w-7xl mx-auto px-6 py-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Use the PNG for better quality */}
            <img
              src="/logo.png"
              alt="AuthKick logo"
              className="h-20 w-auto"
            />
          </div>
          <a
            href="mailto:gabrielcnhmx@gmail.com"
            className="px-5 py-3 rounded-xl border border-[#E5E7EB] hover:bg-[#F3F4F6] transition shadow-sm text-base"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Auth in minutes. Powered by Keycloak.
            </h1>

            <p className="text-[#4B5563] max-w-2xl mx-auto lg:mx-0 text-xl mb-10">
              AuthKick simplifies Keycloak integration with a production-ready
              Java + Docker starter. Secure authentication without the config
              nightmare.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#pricing"
                className="px-7 py-4 rounded-xl bg-[#1F2937] text-white text-base font-medium hover:bg-[#111827] transition shadow-md"
              >
                Get AuthKick
              </a>
              <button
                disabled
                className="px-7 py-4 rounded-xl border border-[#E5E7EB] text-base font-medium opacity-50 cursor-not-allowed"
              >
                View Demo (soon)
              </button>

            </div>

            {/* Proof points */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              {["Self-hosted", "OIDC / OAuth2", "Docker-ready", "Java REST API"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-white border border-[#E5E7EB] text-[#374151] shadow-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Visual / Code card */}
          <div className="bg-white border border-[#E5E7EB] rounded-3xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold tracking-tight">
                Start in minutes
              </h3>
              <span className="text-xs text-[#6B7280]">docker</span>
            </div>

            <pre className="text-sm leading-relaxed overflow-x-auto rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] p-4 font-mono">
{`# 1) Run Keycloak + AuthKick
docker compose up -d

# 2) Login (example)
curl -X POST http://localhost:8080/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"username":"demo","password":"demo"}'`}
            </pre>

            <p className="text-xs text-[#6B7280] mt-3">
              Production-ready starter: Keycloak + Java REST endpoints + Docker.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="grid md:grid-cols-3 gap-8 mt-24">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl bg-white border border-[#E5E7EB] shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="text-[#4B5563] text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* API */}
        <section className="mt-24 text-left">
          <h2 className="text-4xl font-bold mb-4 tracking-tight leading-tight">
            Available API Methods
          </h2>
          <p className="text-[#4B5563] text-base mb-8 max-w-3xl">
            AuthKick includes a clean REST API built in Java, backed by Keycloak,
            to handle every key auth flow.
          </p>

          <div className="space-y-4">
            {apis.map((api) => (
              <div
                key={api.path}
                className="border border-[#E5E7EB] bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-[#1F2937] text-white rounded">
                    {api.method}
                  </span>
                  <code className="text-base font-mono bg-[#F9FAFB] border border-[#E5E7EB] px-2 py-1 rounded">
                    {api.path}
                  </code>
                </div>
                <p className="text-sm text-[#6B7280] mt-2">{api.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mt-28">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-9 rounded-3xl bg-white border border-[#E5E7EB] shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">
                AuthKick Developer License
              </h3>
              <p className="text-[#4B5563] mb-4 text-base leading-relaxed">
                For devs and indie teams who want to integrate secure auth in minutes.
              </p>

              <p className="text-4xl font-bold mb-6">
                $49 <span className="text-base font-normal text-[#6B7280]">one-time</span>
              </p>

              <ul className="text-base text-[#374151] space-y-2 mb-6">
                <li>• Access to the private repo</li>
                <li>• Production-ready wrapper</li>
                <li>• Example implementation</li>
                <li>• Updates for 3 months</li>
              </ul>


              <button
                disabled
                className="w-full px-5 py-4 rounded-xl bg-[#1F2937] text-white text-base font-medium opacity-50 cursor-not-allowed shadow-md"
              >
                Buy License (soon)
              </button>

            </div>

            <div className="p-9 rounded-3xl bg-white border border-[#E5E7EB] shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">
                Custom Support & Integration
              </h3>
              <p className="text-[#4B5563] mb-4 text-base leading-relaxed">
                For teams needing hands-on support or advanced Keycloak configuration.
              </p>

              {/* Fixed wording: avoid “per month / hr” */}
              <p className="text-4xl font-bold mb-6">
                From $19 <span className="text-base font-normal text-[#6B7280]">/ hour</span>
              </p>

              <ul className="text-base text-[#374151] space-y-2 mb-6">
                <li>• Email support</li>
                <li>• Integration assistance</li>
                <li>• Advanced Keycloak configuration</li>
                <li>• Security & flow guidance</li>
              </ul>

              <a
                href="mailto:gabrielcnhmx@gmail.com"
                className="w-full inline-flex justify-center px-5 py-4 rounded-xl border border-[#E5E7EB] text-base font-medium hover:bg-[#F3F4F6] transition shadow-md"
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 text-sm text-[#6B7280]">
        Built by Gabriel Chaparro — AuthKick
      </footer>
    </div>
  );
}
