const { useEffect, useMemo, useState } = React;

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const skills = [
  {
    title: "Web Development",
    copy: "Responsive React interfaces, fast landing pages, and polished storefront experiences.",
    icon: "monitor"
  },
  {
    title: "Linux (Kali/Debian)",
    copy: "Terminal-first exploring, system tweaking, and Debian-based workflow experiments.",
    icon: "terminal"
  },
  {
    title: "Python Programming",
    copy: "Scripts, automations, small tools, and study-friendly utilities that save time.",
    icon: "code"
  },
  {
    title: "Vibe Coding",
    copy: "Fast prototyping with taste, curiosity, and just enough chaos to make it fun.",
    icon: "spark"
  },
  {
    title: "Claude AI",
    copy: "Prompting, planning, debugging, and using AI as a sharp thinking partner.",
    icon: "hash"
  },
  {
    title: "Gemini AI",
    copy: "Exploring multimodal workflows and AI-assisted research for school and builds.",
    icon: "spark"
  },
  {
    title: "ChatGPT",
    copy: "Turning ideas into clean interfaces, scripts, explanations, and working prototypes.",
    icon: "terminal"
  }
];

const projects = [
  {
    name: "TradeGuru.store",
    type: "E-Commerce / React",
    href: "https://tradeguru.store",
    copy:
      "A digital storefront built for selling trading courses. Fast, responsive, and tuned for smooth checkout flows.",
    marker: "01"
  },
  {
    name: "Lazy Calc",
    type: "Education / Utility",
    href: "https://calc.sunwheels.in",
    copy:
      "A co-owned Class 10 tool suite packed with calculators and helpful shortcuts to save study time.",
    marker: "02"
  },
  {
    name: "Personal Space",
    type: "Portfolio / Motion",
    href: "#home",
    copy:
      "This portfolio itself, shaped around morphing glass blobs, smooth transitions, and a premium agency feel.",
    marker: "03"
  }
];

const contacts = [
  { label: "Location", value: "Haldwani, Uttarakhand", icon: "map" },
  { label: "Email", value: "dakshmungali105@gmail.com", href: "mailto:dakshmungali105@gmail.com", icon: "mail" },
  { label: "Phone", value: "+91 9012924476", href: "tel:+919012924476", icon: "phone" },
  { label: "Discord", value: "notkindbg", icon: "hash" }
];

const floatingTags = ["React", "Python", "Kali", "Debian", "AI", "Class 10", "Linux", "Vibe"];

const motionStats = [
  { value: "03", label: "featured builds" },
  { value: "07", label: "active skills" },
  { value: "24/7", label: "terminal energy" }
];

const marqueeItems = [
  "Web apps",
  "Linux labs",
  "Python scripts",
  "AI workflows",
  "Fast storefronts",
  "Class 10 tools"
];

function Icon({ name, className = "h-5 w-5", stroke = "currentColor" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  const icons = {
    terminal: (
      <svg {...common}>
        <path d="M4 17l5-5-5-5" />
        <path d="M12 19h8" />
        <rect x="3" y="4" width="18" height="16" rx="3" />
      </svg>
    ),
    code: (
      <svg {...common}>
        <path d="M8 9l-4 3 4 3" />
        <path d="M16 9l4 3-4 3" />
        <path d="M14 5l-4 14" />
      </svg>
    ),
    monitor: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
    map: (
      <svg {...common}>
        <path d="M12 21s7-5.1 7-11a7 7 0 10-14 0c0 5.9 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    ),
    github: (
      <svg {...common}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 00-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 00-1.4-3.6 4.8 4.8 0 00-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 00-6.8 0C6.6.3 5.5.6 5.5.6a4.8 4.8 0 00-.1 3.6A5.2 5.2 0 004 7.8c0 5.2 3.1 6.4 6.1 6.7a3.2 3.2 0 00-.9 2.2V22" />
      </svg>
    ),
    linkedin: (
      <svg {...common}>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    hash: (
      <svg {...common}>
        <path d="M4 9h16" />
        <path d="M4 15h16" />
        <path d="M10 3L8 21" />
        <path d="M16 3l-2 18" />
      </svg>
    ),
    phone: (
      <svg {...common}>
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.4 19.4 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006.4 6.4l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    ),
    external: (
      <svg {...common}>
        <path d="M7 17L17 7" />
        <path d="M8 7h9v9" />
        <path d="M19 19H5V5" />
      </svg>
    ),
    menu: (
      <svg {...common}>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    ),
    x: (
      <svg {...common}>
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="M12 2l1.6 6.1L20 10l-6.4 1.9L12 18l-1.6-6.1L4 10l6.4-1.9L12 2z" />
        <path d="M19 15l.7 2.4L22 18l-2.3.6L19 21l-.7-2.4L16 18l2.3-.6L19 15z" />
      </svg>
    )
  };

  return icons[name] || icons.spark;
}

function useMotionSetup() {
  useEffect(() => {
    document.body.classList.add("site-ready");
    const progress = document.querySelector(".scroll-progress");
    const parallaxItems = document.querySelectorAll("[data-parallax]");

    const updateScrollMotion = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      progress?.style.setProperty("--scroll", ratio);

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallax || 0.08);
        item.style.setProperty("--py", `${window.scrollY * speed}px`);
      });
    };

    updateScrollMotion();
    window.addEventListener("scroll", updateScrollMotion, { passive: true });

    return () => {
      document.body.classList.remove("site-ready");
      window.removeEventListener("scroll", updateScrollMotion);
    };
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const updateReveals = () => {
      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
          item.classList.add("revealed");
        }
      });
    };

    updateReveals();
    window.addEventListener("scroll", updateReveals, { passive: true });
    window.addEventListener("resize", updateReveals);

    return () => {
      window.removeEventListener("scroll", updateReveals);
      window.removeEventListener("resize", updateReveals);
    };
  }, []);

  useEffect(() => {
    const core = document.querySelector(".cursor-core");
    const glow = document.querySelector(".cursor-glow");
    if (!core || !glow) return;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let glowX = pointerX;
    let glowY = pointerY;
    let rafId;

    const move = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      core.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
    };

    const loop = () => {
      glowX += (pointerX - glowX) * 0.16;
      glowY += (pointerY - glowY) * 0.16;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    };

    const hotTargets = "a, button, [role='button'], .card-hover, .magnetic";
    const setHot = (event) => {
      document.body.classList.toggle("cursor-hot", Boolean(event.target.closest(hotTargets)));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointermove", setHot);
    loop();

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointermove", setHot);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".magnetic");

    const cleanups = Array.from(items).map((item) => {
      const move = (event) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        item.style.setProperty("--mx", `${Math.max(-9, Math.min(9, x * 0.08))}px`);
        item.style.setProperty("--my", `${Math.max(-9, Math.min(9, y * 0.08))}px`);
      };
      const leave = () => {
        item.style.setProperty("--mx", "0px");
        item.style.setProperty("--my", "0px");
      };

      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", leave);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", leave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".spotlight");

    const cleanups = Array.from(items).map((item) => {
      const move = (event) => {
        const rect = item.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        item.style.setProperty("--sx", `${x}%`);
        item.style.setProperty("--sy", `${y}%`);
        item.style.setProperty("--rx", `${(y - 50) * -0.05}deg`);
        item.style.setProperty("--ry", `${(x - 50) * 0.05}deg`);
      };

      const leave = () => {
        item.style.setProperty("--sx", "50%");
        item.style.setProperty("--sy", "50%");
        item.style.setProperty("--rx", "0deg");
        item.style.setProperty("--ry", "0deg");
      };

      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", leave);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", leave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}

function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />;
}

function Marquee({ dark = false }) {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className={`marquee-shell ${dark ? "marquee-dark" : ""}`} aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <span className="mx-4 text-cyanPulse">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Logo() {
  const [logoOk, setLogoOk] = useState(true);

  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="NotkindBG home">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-black/10 bg-black text-sm font-black text-white shadow-lg shadow-cyan-500/20 transition group-hover:scale-105">
        {logoOk ? (
          <img
            src="./logo.png"
            alt="NotkindBG logo"
            className="h-full w-full object-cover"
            onError={() => setLogoOk(false)}
          />
        ) : (
          <span>NB</span>
        )}
      </span>
      <span className="text-lg font-black leading-none">
        NotkindBG<span className="text-cyanPulse">.</span>
      </span>
    </a>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="motion-nav mx-auto max-w-7xl rounded-[24px] border border-white/45 bg-white/70 px-4 py-3 shadow-2xl shadow-black/5 backdrop-blur-2xl md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-black/70 transition hover:bg-black hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="magnetic hidden items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-black text-white shadow-xl shadow-cyan-500/20 transition hover:bg-cyanPulse md:flex"
          >
            Let&apos;s talk
            <Icon name="arrow" className="h-4 w-4" />
          </a>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-white text-black md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>

        {open && (
          <div className="mt-4 grid gap-2 rounded-3xl border border-black/10 bg-white p-3 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-base font-black text-black transition hover:bg-black hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="dot-grid relative isolate min-h-screen overflow-hidden px-4 pb-20 pt-36 md:px-8 md:pt-44">
      <div className="orb orb-cyan scroll-float left-[-120px] top-24 h-72 w-72 md:h-[520px] md:w-[520px]" data-parallax="0.05" />
      <div className="orb orb-gray orb-delay scroll-float right-[-120px] top-28 h-80 w-80 md:h-[560px] md:w-[560px]" data-parallax="-0.035" />
      <div className="orb orb-cyan orb-delay scroll-float bottom-4 left-[46%] h-56 w-56 opacity-30 md:h-80 md:w-80" data-parallax="0.025" />
      <div className="kinetic-field" aria-hidden="true">
        {floatingTags.map((tag, index) => (
          <span key={tag} className={`float-tag float-tag-${index + 1}`}>
            {tag}
          </span>
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal hero-copy">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-xl shadow-black/5 backdrop-blur-xl">
            <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-cyanPulse shadow-lg shadow-cyan-500/70" />
            <span className="text-xs font-black uppercase text-black/70">Class 10 // dev</span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3.6rem,10vw,10.6rem)] font-black leading-[0.82]">
            Hi, I&apos;m <span className="shimmer block">NotkindBG</span>
          </h1>
          <p className="mt-5 text-[clamp(1.8rem,5vw,4.8rem)] font-black leading-none text-black/85">
            Daksh Mungali
          </p>
          <p className="comic mt-7 max-w-2xl text-xl leading-8 text-black/70 md:text-2xl md:leading-9">
            Building things for the web, breaking things in Linux. Currently exploring Python and Debian systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="magnetic inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-base font-black text-white shadow-2xl shadow-cyan-500/20 transition hover:bg-cyanPulse"
            >
              Contact Me
              <Icon name="mail" className="h-5 w-5" />
            </a>
            <a
              href="#projects"
              className="magnetic inline-flex items-center justify-center gap-3 rounded-2xl border border-black/15 bg-white/70 px-7 py-4 text-base font-black text-black shadow-2xl shadow-black/5 backdrop-blur-xl transition hover:border-cyanPulse hover:text-cyanPulse"
            >
              View My Work
              <Icon name="arrow" className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 max-w-2xl">
            <Marquee />
          </div>
        </div>

        <div className="reveal relative">
          <div className="glass card-hover spotlight terminal-card terminal-scan relative overflow-hidden rounded-[34px] p-4 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-cyanPulse" />
              </div>
              <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-black text-black/50">
                system status
              </span>
            </div>

            <div className="terminal-screen rounded-[26px] bg-black p-5 font-mono text-sm leading-8 text-white shadow-2xl shadow-black/20 md:p-7 md:text-base">
              <p className="terminal-line">
                <span className="text-cyanPulse">daksh@kali</span>:<span className="text-white/70">~</span>$ whoami
              </p>
              <p className="terminal-line text-white/80">Daksh Mungali</p>
              <p className="terminal-line mt-4">
                <span className="text-cyanPulse">daksh@kali</span>:<span className="text-white/70">~</span>$ grade --status
              </p>
              <p className="terminal-line text-white/80">Class 10 Student &amp; Vibe Coder</p>
              <p className="terminal-line mt-4 flex items-center gap-2 text-cyanPulse">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyanPulse" />
                compiling premium-web.exe
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {motionStats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass stat-chip reveal rounded-3xl px-4 py-4 text-center"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <p className="text-2xl font-black text-black">{stat.value}</p>
                <p className="mt-1 text-[11px] font-black uppercase text-black/45">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="glass absolute -bottom-7 -left-2 hidden rounded-3xl px-5 py-4 shadow-cyan md:block">
            <p className="text-xs font-black uppercase text-black/45">Current mode</p>
            <p className="comic text-2xl text-black">vibe coding</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-black px-4 py-24 text-white md:px-8 md:py-32">
      <div className="dark-grid absolute inset-0 opacity-70" />
      <div className="orb orb-cyan scroll-float right-[-180px] top-16 h-80 w-80 opacity-25 md:h-[520px] md:w-[520px]" data-parallax="-0.025" />
      <Marquee dark />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal">
          <p className="mb-4 text-sm font-black uppercase text-cyanPulse">About</p>
          <h2 className="text-[clamp(3rem,7vw,7.5rem)] font-black leading-[0.9]">
            Screen time with purpose.
          </h2>
        </div>

        <div className="reveal">
          <div className="dark-glass card-hover spotlight relative rounded-[34px] p-7 md:p-10">
            <span className="comic absolute -right-3 -top-5 rotate-6 rounded-2xl bg-cyanPulse px-5 py-3 text-xl font-black text-black shadow-cyan">
              Class 10! {"\u{1F680}"}
            </span>
            <blockquote className="text-3xl font-black leading-tight md:text-5xl">
              &quot;Hey, I like to vibe code and I am obsessed with computers and the internet.&quot;
            </blockquote>
            <p className="mt-8 text-lg leading-8 text-white/72 md:text-xl md:leading-9">
              Balancing 10th grade with my screen time. When I&apos;m not studying, I build web apps, write Python
              scripts to automate stuff, and mess around with Kali Linux and TradeGuru.store.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="tech" className="dot-grid relative overflow-hidden px-4 py-24 md:px-8 md:py-32">
      <div className="orb orb-gray scroll-float left-[-170px] top-24 h-96 w-96 opacity-35" data-parallax="0.03" />
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase text-cyanPulse">Tech Stack</p>
            <h2 className="max-w-4xl text-[clamp(3rem,7vw,7.2rem)] font-black leading-[0.88]">
              Tools I use to build fast.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-black/62">
            A compact stack with web craft, Linux curiosity, Python automation, and AI-powered momentum.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="reveal glass card-hover spotlight stack-card rounded-[28px] p-6"
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-black text-cyanPulse shadow-xl shadow-cyan-500/20">
                <Icon name={skill.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black">{skill.title}</h3>
              <p className="mt-4 leading-7 text-black/62">{skill.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-black px-4 py-24 text-white md:px-8 md:py-32">
      <div className="dark-grid absolute inset-0 opacity-65" />
      <div className="orb orb-cyan scroll-float bottom-10 left-[-170px] h-[440px] w-[440px] opacity-25" data-parallax="0.025" />

      <div className="relative mx-auto max-w-7xl">
        <div className="reveal mb-14">
          <p className="mb-4 text-sm font-black uppercase text-cyanPulse">Featured Projects</p>
          <h2 className="max-w-5xl text-[clamp(3rem,7vw,7.2rem)] font-black leading-[0.88]">
            Built in the open, polished for the screen.
          </h2>
        </div>

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              className="reveal dark-glass card-hover spotlight project-card group grid gap-8 rounded-[34px] p-6 md:grid-cols-[0.22fr_0.78fr] md:p-8"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="flex items-start justify-between md:block">
                <span className="text-6xl font-black text-white/12 md:text-8xl">{project.marker}</span>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-cyanPulse transition group-hover:rotate-45 group-hover:bg-cyanPulse group-hover:text-black md:mt-10">
                  <Icon name="external" className="h-5 w-5" />
                </span>
              </div>
              <div>
                <p className="mb-4 text-sm font-black uppercase text-cyanPulse">{project.type}</p>
                <h3 className="text-4xl font-black md:text-6xl">{project.name}</h3>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68 md:text-xl md:leading-9">{project.copy}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="dot-grid relative overflow-hidden px-4 py-24 md:px-8 md:py-32">
      <div className="orb orb-cyan scroll-float right-[-170px] top-8 h-96 w-96 opacity-34" data-parallax="-0.02" />
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal mb-12">
          <p className="mb-4 text-sm font-black uppercase text-cyanPulse">Contact</p>
          <h2 className="text-[clamp(3.2rem,8vw,8rem)] font-black leading-[0.86]">Let&apos;s Connect</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {contacts.map((contact, index) => {
            const content = (
              <>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-black text-cyanPulse">
                  <Icon name={contact.icon} className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase text-black/45">{contact.label}</p>
                  <p className="mt-2 break-words text-2xl font-black text-black md:text-3xl">{contact.value}</p>
                </div>
              </>
            );

            const classes =
              "reveal glass card-hover spotlight flex items-center gap-5 rounded-[30px] p-6 md:p-8";

            return contact.href ? (
              <a key={contact.label} href={contact.href} className={classes} style={{ transitionDelay: `${index * 60}ms` }}>
                {content}
              </a>
            ) : (
              <article key={contact.label} className={classes} style={{ transitionDelay: `${index * 60}ms` }}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = useMemo(
    () => [
      { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
      { label: "GitHub", href: "https://github.com/dakshmungali2011-rgb", icon: "github" },
      { label: "Discord", href: "#contact", icon: "hash" }
    ],
    []
  );

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-white/52">Copyright 2026 Daksh Mungali (NotkindBG).</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              className="magnetic inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-black text-white transition hover:border-cyanPulse hover:text-cyanPulse"
            >
              <Icon name={social.icon} className="h-5 w-5" />
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="easter-bar bg-black" tabIndex="0" aria-label="Secret easter egg">
        <div className="flex h-[52px] items-center justify-center bg-black px-4 text-center text-sm font-black text-red-500 md:text-base">
          Sunwheels idea and it&apos;s founder both are stupid and dumb
        </div>
      </div>
    </footer>
  );
}

function App() {
  useMotionSetup();

  return (
    <>
      <ScrollProgress />
      <div className="cursor-glow" />
      <div className="cursor-core" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
