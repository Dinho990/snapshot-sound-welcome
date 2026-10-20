import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  access, loginBackground, music, opening, letters, gallery,
  littleThings, hiddenMessages, closing, type Letter,
} from "@/content/romance";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Um cantinho para você" },
      { name: "description", content: "Um pequeno universo feito com carinho." },
      { property: "og:title", content: "Um cantinho para você" },
      { property: "og:description", content: "Um pequeno universo feito com carinho." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

export function checkAccess(name: string, pass: string) {
  return name.toLowerCase() === access.name && pass.toLowerCase() === access.password;
}

function Index() {
  const [stage, setStage] = useState<"login" | "leaving" | "in">("login");
  const audioRef = useRef<HTMLAudioElement>(null);

  const enter = () => {
    // tocar dentro do clique para o navegador permitir
    audioRef.current?.play().catch(() => {});
    setStage("leaving");
    setTimeout(() => setStage("in"), 1100);
  };

  return (
    <>
      {music.url && <audio ref={audioRef} src={music.url} loop preload="auto" />}
      {stage !== "in" && <Login leaving={stage === "leaving"} onEnter={enter} />}
      {stage !== "login" && <Main audioRef={audioRef} />}
    </>
  );
}

function Login({ leaving, onEnter }: { leaving: boolean; onEnter: () => void }) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (checkAccess(name, pass)) onEnter();
    else setErr(true);
  };
  return (
    <div className={`fixed inset-0 z-50 transition-all duration-1000 ${leaving ? "opacity-0 scale-105" : "opacity-100"}`}>
      <div className="absolute inset-0 scale-125 bg-cover bg-center blur-2xl" style={{ backgroundImage: `url(${loginBackground})` }} />
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${loginBackground})` }} />
      <div className="absolute inset-0 bg-veil" />
      <div className="relative flex h-full items-end justify-center px-6 pb-16 sm:items-center sm:pb-0">
        <form onSubmit={submit} className="rise w-full max-w-xs space-y-5 rounded-2xl border border-cream/20 bg-ink/40 p-8 backdrop-blur-md">
          <p className="text-center font-display text-2xl italic text-cream">para você</p>
          <input value={name} onChange={(e) => { setName(e.target.value); setErr(false); }}
            placeholder="seu nome" autoComplete="off" className="field" />
          <input value={pass} onChange={(e) => { setPass(e.target.value); setErr(false); }}
            type="password" placeholder="a senha" className="field" />
          <p className={`h-4 text-center text-xs text-cream/80 transition-opacity ${err ? "opacity-100" : "opacity-0"}`}>
            hmm, não é bem isso… tenta de novo
          </p>
          <button type="submit" className="w-full rounded-full border border-gold/60 py-2.5 font-display text-lg italic text-cream transition hover:bg-gold/20">
            entrar no meu mundo
          </button>
        </form>
      </div>
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("shown")), { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Main({ audioRef }: { audioRef: React.RefObject<HTMLAudioElement | null> }) {
  useReveal();
  const [openLetter, setOpenLetter] = useState<Letter | null>(null);
  const [photo, setPhoto] = useState<number | null>(null);
  return (
    <main className="fade-in paper min-h-screen bg-background text-foreground">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="rise mb-6 text-xs uppercase tracking-[0.4em] text-gold">para miko</p>
        <h1 className="rise max-w-3xl font-display text-5xl leading-tight text-wine md:text-7xl">{opening.title}</h1>
        <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{opening.message}</p>
        <a href="#cartas" className="rise mt-14 font-display text-lg italic text-wine/80 hover:text-wine">{opening.invite} ↓</a>
      </section>

      <section id="cartas" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle kicker="guardadas com carinho" title="Cartas" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {letters.map((l, i) => (
            <button key={l.title} onClick={() => setOpenLetter(l)}
              className="reveal letter text-left" style={{ rotate: `${[-1.5, 1, -0.5, 1.5, -1, 0.5][i % 6]}deg` }}>
              <span className="text-xs tracking-widest text-gold">nº {i + 1}</span>
              <h3 className="mt-3 font-display text-2xl leading-snug text-wine">{l.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l.preview}</p>
              <span className="mt-6 inline-block font-display italic text-wine">abrir carta →</span>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 px-6 py-24">
        <SectionTitle kicker="um álbum só nosso" title="Memórias" />
        <div className="mx-auto columns-2 gap-5 md:columns-3 max-w-5xl">
          {gallery.map((g, i) => (
            <figure key={i} className="reveal mb-5 break-inside-avoid bg-card p-3 pb-4 shadow-paper">
              <button onClick={() => g.src && setPhoto(i)} className="block w-full">
                {g.src ? <img src={g.src} alt={g.caption} className="w-full" loading="lazy" /> : (
                  <div className={`flex w-full items-center justify-center bg-muted text-xs italic text-muted-foreground ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}>
                    foto em breve
                  </div>
                )}
              </button>
              <figcaption className="mt-3 text-center font-display italic text-wine/90">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <SectionTitle kicker="pequenas coisas" title="que fazem você ser você" />
        <div className="grid gap-5 sm:grid-cols-2">
          {littleThings.map((t, i) => (
            <p key={i} className={`reveal rounded-xl border border-border bg-card/70 p-6 font-display text-xl text-foreground/90 transition hover:-translate-y-1 hover:shadow-paper ${i % 2 ? "sm:translate-y-8" : ""}`}>{t}</p>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 px-6 py-24">
        <SectionTitle kicker="clique nos bilhetes" title="Mensagens escondidas" />
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
          {hiddenMessages.map((m, i) => <Note key={i} text={m} i={i} />)}
        </div>
      </section>

      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="reveal max-w-3xl font-display text-3xl leading-snug text-wine md:text-5xl">“{closing.quote}”</p>
        <p className="reveal mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">{closing.message}</p>
        <p className="reveal mt-12 font-display text-xl italic text-gold">{closing.signature}</p>
      </section>

      <Player audioRef={audioRef} />

      {openLetter && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm" onClick={() => setOpenLetter(null)}>
          <article className="open-letter letter max-h-[85vh] w-full max-w-2xl overflow-y-auto !p-8 md:!p-12" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display text-3xl text-wine">{openLetter.title}</h3>
            <div className="mt-6 space-y-4 leading-loose text-foreground/85">
              {openLetter.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <button onClick={() => setOpenLetter(null)} className="mt-8 font-display italic text-wine hover:underline">guardar carta</button>
          </article>
        </div>
      )}
      {photo !== null && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-ink/85 p-4" onClick={() => setPhoto(null)}>
          <img src={gallery[photo]!.src} alt={gallery[photo]!.caption} className="fade-in max-h-[80vh] max-w-full" />
          <p className="mt-4 font-display italic text-cream">{gallery[photo]!.caption}</p>
        </div>
      )}
    </main>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="reveal mb-14 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-gold">{kicker}</p>
      <h2 className="mt-3 font-display text-4xl text-wine md:text-5xl">{title}</h2>
    </div>
  );
}

function Note({ text, i }: { text: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen((o) => !o)}
      className={`reveal flex aspect-square items-center justify-center rounded-md p-4 text-center shadow-paper transition-all duration-500 hover:-translate-y-1 ${open ? "bg-card" : "bg-rose"}`}
      style={{ rotate: `${((i % 3) - 1) * 2}deg` }}>
      {open ? <span className="fade-in font-display text-lg leading-snug text-wine">{text}</span>
        : <span className="font-display text-3xl italic text-cream">✉</span>}
    </button>
  );
}

function Player({ audioRef }: { audioRef: React.RefObject<HTMLAudioElement | null> }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const upd = () => { setPlaying(!a.paused); setProgress(a.duration ? a.currentTime / a.duration : 0); };
    a.volume = volume;
    ["play", "pause", "timeupdate"].forEach((ev) => a.addEventListener(ev, upd));
    upd();
    return () => ["play", "pause", "timeupdate"].forEach((ev) => a.removeEventListener(ev, upd));
  }, [audioRef]);
  if (!music.url) return null;
  const a = audioRef.current;
  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-center gap-3 rounded-full border border-border bg-card/90 px-4 py-2 shadow-paper backdrop-blur">
      <button onClick={() => (a?.paused ? a.play() : a?.pause())} aria-label={playing ? "pausar" : "tocar"}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-wine text-cream">{playing ? "❚❚" : "▶"}</button>
      <div className="hidden sm:block">
        <p className="font-display text-sm italic text-wine">{music.title}</p>
        <div className="mt-1 h-0.5 w-28 bg-muted"><div className="h-full bg-gold" style={{ width: `${progress * 100}%` }} /></div>
      </div>
      <input type="range" min={0} max={1} step={0.05} value={volume} aria-label="volume"
        onChange={(e) => { const v = +e.target.value; setVolume(v); if (a) a.volume = v; }}
        className="w-16 accent-[var(--wine)]" />
    </div>
  );
}
