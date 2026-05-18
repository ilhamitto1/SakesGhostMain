export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-1/4 top-0 h-[280px] w-[280px] rounded-full bg-blue-600/12 blur-[60px] md:h-[480px] md:w-[480px] md:bg-blue-600/18 md:blur-[90px]" />
      <div className="absolute -right-1/4 top-1/4 h-[240px] w-[240px] rounded-full bg-purple-600/10 blur-[50px] md:h-[400px] md:w-[400px] md:bg-purple-600/14 md:blur-[80px]" />
      <div className="absolute bottom-0 left-1/2 h-[200px] w-[min(100%,600px)] -translate-x-1/2 rounded-full bg-indigo-600/8 blur-[60px] md:h-[320px] md:blur-[80px]" />
      <div
        className="absolute inset-0 hidden opacity-[0.06] md:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
