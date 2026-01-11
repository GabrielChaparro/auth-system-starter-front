import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">AuthKick</div>
          <button className="px-4 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-100 transition">
            Contact
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Auth in minutes. Powered by Keycloak.
          </h1>
          <p className="text-neutral-600 max-w-xl mx-auto text-lg mb-10">
            AuthKick simplifies Keycloak integration with a production-ready Java + Docker starter. 
            Secure authentication without the config nightmare.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-neutral-800 transition">
              Get AuthKick
            </button>
            <button className="px-6 py-3 rounded-xl border border-neutral-300 text-sm font-medium hover:bg-neutral-100 transition">
              View Demo
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mt-24">
          {[{
            title: "Instant Setup",
            desc: "Dockerized Keycloak backend with REST-ready Java endpoints. Up and running in minutes.",
          },{
            title: "Battle-Tested Auth",
            desc: "Password, token, refresh, roles, and password reset all ready to go — no more boilerplate.",
          },{
            title: "Own Your Stack",
            desc: "Self-hosted Keycloak, full control, zero third-party vendor lock-in.",
          }].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 text-left">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Available API Methods</h2>
          <p className="text-neutral-600 text-sm mb-6 max-w-2xl">
            AuthKick includes a clean REST API built in Java, backed by Keycloak, to handle every key auth flow.
          </p>

          <div className="space-y-4">
            {[{
              method: "POST",
              path: "/auth/login",
              desc: "Log in and receive tokens",
            },{
              method: "POST",
              path: "/auth/refresh",
              desc: "Refresh access token",
            },{
              method: "POST",
              path: "/auth/revoke",
              desc: "Revoke access/refresh token",
            },{
              method: "POST",
              path: "/auth/logout",
              desc: "Logout user session",
            },{
              method: "POST",
              path: "/auth/reset-password",
              desc: "Admin resets user password",
            },{
              method: "POST",
              path: "/auth/update-password",
              desc: "User updates own password",
            },{
              method: "POST",
              path: "/user/create",
              desc: "Create a new user",
            },{
              method: "POST",
              path: "/user/update",
              desc: "Update user fields",
            },{
              method: "POST",
              path: "/role/assign",
              desc: "Assign a role to a user",
            }].map((api, i) => (
              <div
                key={api.path}
                className="border border-neutral-200 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 text-xs font-medium bg-black text-white rounded">
                    {api.method}
                  </span>
                  <code className="text-sm">{api.path}</code>
                </div>
                <p className="text-xs text-neutral-600 mt-1">{api.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">AuthKick Developer License</h3>
              <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                For devs and indie teams who want to integrate secure auth in minutes.
              </p>
              <p className="text-3xl font-bold mb-6">
                $49 <span className="text-sm font-normal text-neutral-500">one‑time</span>
              </p>
              <ul className="text-sm text-neutral-700 space-y-1 mb-6">
                <li>• Access to the private repo</li>
                <li>• Production‑ready wrapper</li>
                <li>• Example implementation</li>
                <li>• Updates for 3 months</li>
              </ul>
              <button className="w-full px-4 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-neutral-800 transition">
                Buy License
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Custom Support & Integration</h3>
              <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                For teams needing hands-on support or advanced Keycloak configuration.
              </p>
              <p className="text-3xl font-bold mb-6">
                From $19 <span className="text-sm font-normal text-neutral-500">per month / hr</span>
              </p>
              <ul className="text-sm text-neutral-700 space-y-1 mb-6">
                <li>• Email support</li>
                <li>• Integration assistance</li>
                <li>• Advanced Keycloak configuration</li>
                <li>• Security & flow guidance</li>
              </ul>
              <button className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm font-medium hover:bg-neutral-100 transition">
                Contact
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 text-sm text-neutral-500">
        Built by Gabriel Chaparro — AuthKick
      </footer>
    </div>
  );
}
