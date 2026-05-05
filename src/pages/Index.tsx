import { useState } from "react";
import { Github, Twitter, Instagram, MessageCircle, Music, Eye, Volume2, VolumeX } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { Particles } from "@/components/biolink/Particles";
import { GlitchText } from "@/components/biolink/GlitchText";
import { EnterOverlay } from "@/components/biolink/EnterOverlay";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Music, href: "#", label: "Spotify" },
];

const Index = () => {
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      {/* Vignette + radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(0 0% 10% / 0.6) 0%, hsl(0 0% 0%) 75%)",
        }}
      />
      <Particles count={90} />

      {!entered && <EnterOverlay onEnter={() => setEntered(true)} />}

      {entered && (
        <section className="relative z-10 flex h-full w-full items-center justify-center px-4">
          <div className="glass animate-fade-up w-full max-w-md rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500/40 to-cyan-400/40 blur-xl" />
                <img
                  src={avatar}
                  alt="Blurski avatar"
                  className="relative h-28 w-28 rounded-full border border-border object-cover"
                />
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight">
                <GlitchText text="Blurski" />
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">Wsp I'm Blurski</p>

              <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" />
                  1,743,503 views
                </span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span>UID #1</span>
              </div>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/50 transition-all hover:scale-110 hover:border-foreground/40 hover:bg-accent"
                  >
                    <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </a>
                ))}
              </div>

              <div className="mt-7 w-full rounded-xl border border-border bg-card/40 p-3 text-left">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent">
                      <Music className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">Midnight Drive</p>
                      <p className="truncate text-xs text-muted-foreground">lofi nights</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMuted((m) => !m)}
                    aria-label={muted ? "Unmute" : "Mute"}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
                  >
                    {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-1/3 rounded-full bg-foreground/80" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Index;
