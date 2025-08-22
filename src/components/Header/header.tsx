type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header
      className="bg-sidebar-primary-foreground p-4"
      aria-label="Page Header"
    >
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-ring to-popover bg-clip-text text-transparent mb-1">
        {title}
      </h1>
      {subtitle && (
        <h2
          className="text-xl text-center text-chart-5"
          aria-label="Page Subtitle"
        >
          {subtitle}
        </h2>
      )}
    </header>
  );
}
