export default function HeroBackground() {
  return (
    <img
      src="/bg.svg"
      alt="Background"
      className="pointer-events-none select-none absolute top-0 left-0 w-screen h-screen min-w-full min-h-screen object-cover z-0 animate-fadeIn"
      aria-hidden="true"
    />
  );
}