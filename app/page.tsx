"use client";

import { useState } from "react";

type Mode = "encode" | "decode";

export default function Home() {
  const [mode, setMode] = useState<Mode>("encode");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    if (!input.trim()) {
      setError("Please enter some text to convert.");
      setResult("");
      return;
    }

    setError("");

    try {
      if (mode === "encode") {
        const encoded = btoa(
          unescape(encodeURIComponent(input))
        );

        setResult(encoded);
      } else {
        const decoded = decodeURIComponent(
          escape(atob(input.trim()))
        );

        setResult(decoded);
      }
    } catch {
      setResult("");
      setError(
        "Invalid Base64 input. Please check your Base64 string and try again."
      );
    }
  };

  const handleCopy = async () => {
    if (!result) return;

    await navigator.clipboard.writeText(result);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
    setError("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-950 via-rose-950/60 via-[35%] to-black text-white">

      {/* ========================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[-280px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-rose-500/25 blur-[170px]" />

      <div className="pointer-events-none absolute left-[-220px] top-[28%] h-[420px] w-[420px] rounded-full bg-rose-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-220px] top-[55%] h-[420px] w-[420px] rounded-full bg-pink-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-[70%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-rose-500/[0.04] blur-[160px]" />

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="relative z-30 mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/35 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-rose-400/20 bg-white/10 shadow-lg shadow-rose-500/10">
              <img
                src="/logo.png"
                alt="KrishAIWorks Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-tight text-white sm:text-base">
                KrishAIWorks
              </h2>

              <p className="text-[9px] font-medium tracking-wide text-zinc-500 sm:text-[10px]">
                AI Solutions That Work
              </p>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">

            <a
              href="#features"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-rose-300"
            >
              Features
            </a>

            <a
              href="#how"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-rose-300"
            >
              How To Use
            </a>

            <a
              href="#faq"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-rose-300"
            >
              FAQ
            </a>

            <a
              href="https://instagram.com/KrishAIWorks"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-xl border border-rose-400/20 bg-rose-500/10 px-5 py-2 text-sm font-semibold text-rose-300 shadow-lg shadow-rose-500/10 transition hover:-translate-y-0.5 hover:bg-rose-500/20 active:scale-95"
            >
              Follow
            </a>

          </div>

          {/* Mobile Follow */}
          <a
            href="https://instagram.com/KrishAIWorks"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-rose-400/20 bg-rose-500/10 px-4 py-2 text-xs font-semibold text-rose-300 transition hover:bg-rose-500/20 md:hidden"
          >
            Follow
          </a>

        </div>
      </nav>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center sm:px-8 sm:pt-24">

        {/* Badge */}
        <div className="rounded-full border border-rose-400/20 bg-rose-500/10 px-4 py-2 text-xs text-rose-200 shadow-lg shadow-rose-950/30 backdrop-blur-xl">
          🔐 Base64 Encoder & Decoder
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Built by{" "}
          <span className="font-semibold text-rose-400">
            KrishAIWorks
          </span>
        </p>

        <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Encode.
          <br />
          <span className="bg-gradient-to-r from-rose-200 via-pink-400 to-rose-500 bg-clip-text text-transparent">
            Decode. Simplify.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          Quickly encode text into Base64 or decode Base64 strings back into
          readable text with a simple, fast and privacy-friendly tool.
        </p>

        {/* Feature pills */}
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            ⚡ Instant Conversion
          </span>

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            🔒 Private
          </span>

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            📱 Mobile Friendly
          </span>

        </div>

        {/* ========================================================= */}
        {/* CONVERTER */}
        {/* ========================================================= */}

        <div
          id="converter"
          className="mt-12 w-full max-w-4xl scroll-mt-8"
        >
          <div className="rounded-[2rem] border border-rose-400/10 bg-black/55 p-5 shadow-2xl shadow-rose-950/30 backdrop-blur-2xl sm:p-7">

            {/* Heading */}
            <div className="mb-6 text-left">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-lg font-semibold text-white sm:text-xl">
                    Base64 Converter
                  </h2>

                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                    Enter your content and convert it instantly.
                  </p>
                </div>

                {/* Mode */}
                <div className="flex w-fit rounded-xl border border-white/10 bg-white/[0.03] p-1">

                  <button
                    onClick={() => {
                      setMode("encode");
                      setResult("");
                      setError("");
                    }}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                      mode === "encode"
                        ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Encode
                  </button>

                  <button
                    onClick={() => {
                      setMode("decode");
                      setResult("");
                      setError("");
                    }}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                      mode === "decode"
                        ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Decode
                  </button>

                </div>

              </div>
            </div>

            {/* Input */}
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                mode === "encode"
                  ? "Enter text to encode..."
                  : "Paste Base64 string to decode..."
              }
              className="min-h-[190px] w-full resize-y rounded-2xl border border-rose-400/20 bg-black/40 p-5 text-sm leading-7 text-white placeholder:text-zinc-600 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20"
            />

            {/* Actions */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={handleConvert}
               className="h-16 min-h-[64px] w-full flex-1 rounded-2xl bg-rose-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-rose-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-rose-400 active:scale-[0.98] sm:h-14 sm:min-h-0 sm:text-sm"
              >
                {mode === "encode"
                  ? "🔐 Encode"
                  : "🔓 Decode"}
              </button>

              <button
                onClick={handleClear}
                className="h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-7 text-sm font-semibold text-zinc-300 transition hover:bg-white/[0.08] hover:text-white active:scale-[0.98]"
              >
                Clear
              </button>

            </div>

            {/* Error */}
            {error && (
              <div className="mt-4 rounded-xl border border-red-400/10 bg-red-500/5 px-4 py-3 text-left text-xs leading-6 text-red-300">
                {error}
              </div>
            )}

            {/* Result */}
            {result && (
              <div className="mt-7 rounded-2xl border border-rose-400/10 bg-black/45 p-5 sm:p-6">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <h3 className="text-sm font-extrabold tracking-wide text-white sm:text-base">
                      ✨ {mode === "encode" ? "Encoded Result" : "Decoded Result"}
                    </h3>

                    <p className="mt-1 text-xs text-zinc-500">
                      Conversion completed successfully.
                    </p>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="w-fit rounded-xl bg-rose-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-400 active:scale-95"
                  >
                    📋 Copy
                  </button>

                </div>

                <div className="mt-5 rounded-xl border border-white/5 bg-black/50 p-4">
                  <p className="max-h-[300px] overflow-auto whitespace-pre-wrap break-words text-sm leading-7 text-zinc-300">
                    {result}
                  </p>
                </div>

              </div>
            )}

            <p className="mt-3 text-left text-xs text-zinc-600">
              Your text is processed directly in your browser.
            </p>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURES */}
      {/* ========================================================= */}

      <section
        id="features"
        className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-10 px-5 py-24 sm:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto inline-flex rounded-full border border-rose-400/10 bg-rose-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
            Why Use It
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, fast and useful.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Everything you need for quick Base64 conversion without unnecessary
            complexity.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <FeatureCard
            icon="⚡"
            number="01"
            title="Instant Conversion"
            description="Encode or decode your content instantly without waiting for a server."
          />

          <FeatureCard
            icon="🔒"
            number="02"
            title="Browser Based"
            description="Your content stays in your browser and does not need to be uploaded anywhere."
          />

          <FeatureCard
            icon="📱"
            number="03"
            title="Mobile Friendly"
            description="Use the converter comfortably on phones, tablets and desktop devices."
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW TO USE */}
      {/* ========================================================= */}

      <section
        id="how"
        className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-10 px-5 py-24 sm:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto inline-flex rounded-full border border-rose-400/10 bg-rose-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
            How To Use
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three simple steps.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Convert your content in seconds.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <StepCard
            number="01"
            title="Enter Content"
            description="Paste the text or Base64 string you want to convert."
          />

          <StepCard
            number="02"
            title="Choose Mode"
            description="Select Encode to create Base64 or Decode to convert Base64 back to readable text."
          />

          <StepCard
            number="03"
            title="Copy Result"
            description="Convert instantly and copy the generated result with one click."
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ */}
      {/* ========================================================= */}

      <section
        id="faq"
        className="relative z-10 mx-auto w-full max-w-3xl scroll-mt-10 px-5 py-24 sm:px-8"
      >

        <div className="text-center">

          <div className="mx-auto inline-flex rounded-full border border-rose-400/10 bg-rose-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
            FAQ
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-10 space-y-4">

          <Faq
            question="What is Base64?"
            answer="Base64 is an encoding method that represents binary or text data using a set of printable characters."
          />

          <Faq
            question="Is my data uploaded?"
            answer="No. The conversion happens directly inside your browser, so the entered content does not need to be sent to a server."
          />

          <Faq
            question="Can I decode any Base64 string?"
            answer="You can decode valid Base64 strings. Invalid or corrupted Base64 input may produce an error."
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">

        <div className="relative overflow-hidden rounded-[2rem] border border-rose-400/10 bg-gradient-to-br from-rose-950/70 via-black/80 to-black px-6 py-14 text-center shadow-2xl shadow-rose-950/30 backdrop-blur-xl sm:px-12">

          <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-rose-500/10 blur-[120px]" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-500/10 text-2xl shadow-lg shadow-rose-500/10">
              🔐
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
              KrishAIWorks
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Encode. Decode. Done.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500">
              A simple Base64 utility designed to get the job done quickly.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("converter")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 inline-flex rounded-xl bg-rose-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-rose-500/20 transition hover:-translate-y-0.5 hover:bg-rose-400 active:scale-95"
            >
              🔐 Try It Now
            </button>

          </div>
        </div>
      </section>

   {/* ========================================================= */}
{/* FOOTER */}
{/* ========================================================= */}

<footer className="relative z-10 border-t border-white/5 px-5 py-10">
  <div className="mx-auto max-w-6xl">

    {/* Related Tools */}
    <div className="mb-10 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
        Explore More
      </p>

      <h3 className="mt-2 text-xl font-bold text-white">
        More Developer Tools
      </h3>

      <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-500">
        Explore more useful developer and productivity tools from
        KrishAIWorks.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* JSON Formatter & Validator */}
      <a
        href="https://jsonformattervalidator.krishaiworks.com/"
        className="group rounded-2xl border border-rose-400/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-rose-400/30 hover:bg-rose-400/[0.05]"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-400/10 text-lg">
          {"{}"}
        </div>

        <h4 className="font-semibold text-white transition-colors group-hover:text-rose-400">
          JSON Formatter & Validator
        </h4>

        <p className="mt-2 text-xs leading-5 text-zinc-500">
          Format, validate, and clean JSON data instantly.
        </p>
      </a>

      {/* Markdown → HTML Converter */}
      <a
        href="https://markdownhtmlconverter.krishaiworks.com/"
        className="group rounded-2xl border border-rose-400/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-rose-400/30 hover:bg-rose-400/[0.05]"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-400/10 text-lg">
          📝
        </div>

        <h4 className="font-semibold text-white transition-colors group-hover:text-rose-400">
          Markdown → HTML Converter
        </h4>

        <p className="mt-2 text-xs leading-5 text-zinc-500">
          Convert Markdown content into clean HTML instantly.
        </p>
      </a>

      {/* Timestamp Converter */}
      <a
        href="https://timestampconverter.krishaiworks.com/"
        className="group rounded-2xl border border-rose-400/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-rose-400/30 hover:bg-rose-400/[0.05]"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-400/10 text-lg">
          🕐
        </div>

        <h4 className="font-semibold text-white transition-colors group-hover:text-rose-400">
          Timestamp Converter
        </h4>

        <p className="mt-2 text-xs leading-5 text-zinc-500">
          Convert Unix timestamps and dates quickly and easily.
        </p>
      </a>

      {/* Unit Converter */}
      <a
        href="https://unitconverter.krishaiworks.com/"
        className="group rounded-2xl border border-rose-400/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-rose-400/30 hover:bg-rose-400/[0.05]"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-400/10 text-lg">
          📐
        </div>

        <h4 className="font-semibold text-white transition-colors group-hover:text-rose-400">
          Unit Converter
        </h4>

        <p className="mt-2 text-xs leading-5 text-zinc-500">
          Convert length, weight, temperature, and more with ease.
        </p>
      </a>

    </div>

    {/* Main Footer */}
    <div className="mt-10 flex flex-col items-center justify-between gap-7 border-t border-white/5 pt-8 sm:flex-row">

      {/* Brand */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="KrishAIWorks Logo"
          className="h-12 w-12 rounded-full border border-rose-400/20 object-cover shadow-lg shadow-rose-500/10"
        />

        <div>
          <p className="font-semibold text-white">
            KrishAIWorks
          </p>

          <p className="mt-1 text-xs text-zinc-600">
            AI Solutions That Work
          </p>
        </div>
      </div>

      {/* Instagram */}
      <a
        href="https://instagram.com/KrishAIWorks"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-zinc-500 transition hover:text-rose-400"
      >
        Instagram · @KrishAIWorks
      </a>

      {/* Copyright */}
      <div className="text-center sm:text-right">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} KrishAIWorks
        </p>

        <p className="mt-1 text-xs text-zinc-700">
          Built with AI.
        </p>
      </div>

    </div>

  </div>
</footer>

    </main>
  );
}

/* ============================================================= */
/* FEATURE CARD */
/* ============================================================= */

function FeatureCard({
  icon,
  number,
  title,
  description,
}: {
  icon: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-black/45 p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-rose-400/20 hover:shadow-rose-950/30">

      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-rose-400 via-pink-500 to-transparent opacity-60" />

      <div className="flex items-center justify-between">

        <div className="text-2xl">
          {icon}
        </div>

        <span className="text-xs font-bold tracking-[0.2em] text-rose-400/60">
          {number}
        </span>

      </div>

      <h3 className="mt-6 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

/* ============================================================= */
/* STEP CARD */
/* ============================================================= */

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/[0.07] bg-black/45 p-6 shadow-xl shadow-black/20 backdrop-blur-xl">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-500/10 text-sm font-bold text-rose-300">
        {number}
      </div>

      <h3 className="mt-6 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

/* ============================================================= */
/* FAQ */
/* ============================================================= */

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-black/45 p-5 backdrop-blur-xl">

      <h3 className="font-semibold text-white">
        {question}
      </h3>

      <p className="mt-2 text-sm leading-7 text-zinc-500">
        {answer}
      </p>

    </div>
  );
}