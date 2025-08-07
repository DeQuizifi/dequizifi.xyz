type HeaderProps = {
    title: string;
    subtitle?: string;
}  

export default function Header({title,subtitle}: HeaderProps) {
    return (
        <div className="bg-sidebar-primary-foreground p-4">
            <header>
                <h1 className="
                text-4xl 
                font-bold 
                text-center 
                bg-gradient-to-r
                from-ring 
                to-popover 
                bg-clip-text 
                text-transparent 
                mb-1
  ">{title}</h1>
                {subtitle && 
                <p className="text-xl text-center text-chart-5 font-sans">{subtitle}</p>}
            </header>
        </div>
    )
}