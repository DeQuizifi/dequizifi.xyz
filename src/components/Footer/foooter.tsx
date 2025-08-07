
type FooterProps = {
    title: string;  
    subtitle?: string;
    IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;}

export default function Footer({title, subtitle, IconComponent}: FooterProps) {
    return(
        <footer className="flex flex-col items-center justify-center gap-2 text-center py-6">
            <div>
                <IconComponent className="w-6 h-6 text-foreground" />
            </div>
            <h1 className="font-bold font-serif text-lg text-sidebar-primary">{title}</h1>
            <p className="text-sm text-muted-foreground text-center">{subtitle}</p>
        </footer>
    )
}