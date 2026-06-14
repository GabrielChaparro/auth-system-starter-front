const checkoutHref =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ||
  "https://authkick.gumroad.com/l/rdgqkh";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "gabrielcnhmx@gmail.com";
const contactHref = `mailto:${contactEmail}?subject=AuthKick%20beta%20access`;

const repoHref = "https://github.com/GabrielChaparro/auth-system-starter";

const included = [
  "Keycloak 24 + PostgreSQL in Docker Compose",
  "Clean REST API wrapper built with Spring Boot 3 / Java 21",
  "Login, refresh, revoke, logout, users, and roles",
  "Admin-only authorization for management endpoints",
  "OpenAPI contract, Swagger UI, and Postman collection",
  "Realm templates generated from environment variables",
];

const apiRows = [
  ["POST", "/auth/login", "Public"],
  ["POST", "/auth/refresh", "Public"],
  ["POST", "/auth/logout", "Public"],
  ["POST", "/auth/update-password", "User JWT"],
  ["POST", "/user/create", "Admin"],
  ["POST", "/role/assign", "Admin"],
];

const comparison = [
  ["Realm and client setup", "Manual config", "Env-driven template"],
  ["Token flows", "Wire every call", "REST wrapper included"],
  ["Docs", "Write after building", "OpenAPI + Postman ready"],
  ["Security baseline", "Easy to forget", "Admin rules included"],
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#111827]">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-[#09111f]/88 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            AuthKick
          </a>
          <div className="flex items-center gap-2 text-sm">
            <a
              href="#included"
              className="hidden rounded-md px-3 py-2 font-medium text-[#dbeafe] hover:bg-white/10 sm:inline"
            >
              Included
            </a>
            <a
              href={checkoutHref}
              className="rounded-md bg-[#2dd4bf] px-4 py-2 font-semibold text-[#07111f] hover:bg-[#5eead4]"
            >
              Buy beta
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative min-h-[92vh] overflow-hidden bg-[#09111f] pt-28 text-white">
          <div className="absolute inset-0 opacity-65">
            <div className="absolute left-1/2 top-24 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-[#123b68] blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div className="max-w-4xl pb-8">
              <p className="mb-5 inline-flex rounded-md border border-[#2dd4bf]/35 bg-[#2dd4bf]/10 px-3 py-1 text-sm font-semibold text-[#99f6e4]">
                Self-hosted auth API powered by Keycloak
              </p>
              <h1 className="text-5xl font-bold leading-[1.02] md:text-7xl">
                Ship Keycloak auth without losing a week to setup.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#cbd5e1]">
                AuthKick packages Keycloak, PostgreSQL, Docker, REST endpoints,
                OpenAPI, and Postman into one starter. Consume it from any web,
                mobile, backend, SaaS, or internal tool.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={checkoutHref}
                  className="rounded-md bg-[#2dd4bf] px-6 py-3 text-center font-bold text-[#07111f] hover:bg-[#5eead4]"
                >
                  Buy beta access
                </a>
                <a
                  href={repoHref}
                  className="rounded-md border border-white/20 px-6 py-3 text-center font-semibold text-white hover:bg-white/10"
                >
                  View GitHub
                </a>
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 text-sm text-[#cbd5e1] sm:grid-cols-4">
                {["Docker", "OIDC", "Java 21", "OpenAPI"].map((item) => (
                  <span key={item} className="rounded-md border border-white/12 bg-white/6 px-3 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/12 bg-[#050a13] shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
                <span className="ml-3 text-xs font-medium text-[#94a3b8]">authkick quickstart</span>
              </div>
              <pre className="overflow-x-auto p-5 text-sm leading-7 text-[#dbeafe]">
{`$ make setup
[OK] Realm export generated

$ make start
✔ postgres-keycloak running
✔ keycloak running
✔ auth-api running

Swagger UI
http://localhost:8081/swagger-ui/index.html

POST /auth/login
POST /auth/refresh
POST /user/create   # admin role`}
              </pre>
            </div>
          </div>
        </section>

        <section id="included" className="border-b border-[#d8dee9] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">What the beta includes</h2>
                <p className="mt-4 max-w-md leading-7 text-[#4b5563]">
                  A practical starter, not a tutorial. Clone it, configure the
                  environment, and start integrating the flows your app needs.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[#d8dee9] bg-[#f8fafc] p-4 text-sm font-medium text-[#1f2937]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Small API surface, Keycloak underneath</h2>
              <p className="mt-4 leading-7 text-[#4b5563]">
                Your application talks to a focused REST layer. Keycloak remains
                the identity provider and source of truth for users, clients,
                tokens, and roles.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#d8dee9] bg-white">
              {apiRows.map(([method, path, access]) => (
                <div
                  key={path}
                  className="grid grid-cols-[68px_1fr_82px] items-center gap-3 border-b border-[#eef2f7] px-4 py-3 last:border-b-0"
                >
                  <span className="rounded bg-[#111827] px-2 py-1 text-center text-xs font-bold text-white">
                    {method}
                  </span>
                  <code className="overflow-x-auto whitespace-nowrap text-sm text-[#1f2937]">
                    {path}
                  </code>
                  <span className="text-right text-xs font-semibold text-[#64748b]">
                    {access}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8dee9] bg-[#eef4fb]">
          <div className="mx-auto max-w-7xl px-5 py-16">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight">
              Built for the part of auth that teams keep rebuilding.
            </h2>
            <div className="mt-8 overflow-hidden rounded-lg border border-[#cbd5e1] bg-white">
              <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#111827] px-4 py-3 text-sm font-semibold text-white">
                <span>Workstream</span>
                <span>From scratch</span>
                <span>With AuthKick</span>
              </div>
              {comparison.map(([area, manual, authkick]) => (
                <div
                  key={area}
                  className="grid grid-cols-[1fr_1fr_1fr] gap-4 border-b border-[#eef2f7] px-4 py-4 text-sm last:border-b-0"
                >
                  <span className="font-semibold text-[#1f2937]">{area}</span>
                  <span className="text-[#64748b]">{manual}</span>
                  <span className="font-medium text-[#0f766e]">{authkick}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#0f766e]">
                Early access
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Start with the beta. Harden with the roadmap.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[#4b5563]">
                The beta is priced for builders who want the starter now and are
                comfortable giving feedback while examples and deployment guides
                are expanded.
              </p>
            </div>

            <div className="rounded-lg border border-[#d8dee9] bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Developer License</h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748b]">
                    Downloadable package, 3 months of updates, and direct beta
                    feedback.
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-5xl font-bold">$49</p>
                  <p className="text-sm text-[#64748b]">one-time beta price</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 text-sm text-[#1f2937] sm:grid-cols-2">
                <span>Commercial project use</span>
                <span>OpenAPI and Postman</span>
                <span>Docker local stack</span>
                <span>Security baseline tests</span>
              </div>

              <a
                href={checkoutHref}
                className="mt-6 block rounded-md bg-[#111827] px-5 py-3 text-center font-bold text-white hover:bg-[#253041]"
              >
                Buy on Gumroad
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d8dee9] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-[#64748b] sm:flex-row sm:items-center sm:justify-between">
          <span>AuthKick by Gabriel Chaparro</span>
          <a href={contactHref} className="font-semibold text-[#111827] hover:underline">
            {contactEmail}
          </a>
        </div>
      </footer>
    </div>
  );
}
