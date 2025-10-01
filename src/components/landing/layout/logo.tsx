type LogoProps = {
    variant?: 'small' | 'big';
};

export const Logo = ({ variant = 'small' }: LogoProps) => {
    const sizeClass = variant === 'big' ? 'text-6xl' : 'text-xl';
    return (
        <span
            className={`${sizeClass} font-extrabold bg-gradient-to-r from-primary to-blue-600 py-1 bg-clip-text text-transparent tracking-tight animate-fade-in font-[cursive]`}
            style={{ fontFamily: '"Pacifico", "Dancing Script", "Great Vibes", cursive' }}
        >
            DeQuiziFi
        </span>
    );
};