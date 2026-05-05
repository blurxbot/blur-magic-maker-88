import { useEffect, useRef, useState } from "react";
import { Eye } from "lucide-react";
import { RobloxIcon } from "@/components/biolink/RobloxIcon";
import avatar from "@/assets/avatar.gif";
import bg from "@/assets/bg.gif";
import { EnterOverlay } from "@/components/biolink/EnterOverlay";

const socials = [
  {
    icon: RobloxIcon,
    href: "https://www.roblox.com/users/9760922658/profile",
    label: "Roblox",
  },
];

const Index = () => {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (entered && audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {});
    }
  }, [entered]);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      {/* Animated background */}
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(0 0% 0% / 0.35) 0%, hsl(0 0% 0% / 0.75) 80%)",
        }}
      />

      {!entered && <EnterOverlay onEnter={() => setEntered(true)} />}

      {entered && (
        <section className="relative z-10 flex h-full w-full items-center justify-center px-4">
          <audio ref={audioRef} src="/audio/song.mp3" loop autoPlay />
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

              <h1 className="text-shine mt-5 text-4xl font-bold tracking-tight">
                Blurski
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
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Index;
