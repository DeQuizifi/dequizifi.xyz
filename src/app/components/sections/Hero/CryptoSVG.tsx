const CryptoSVG = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blockchain network SVG */}
      <svg 
        className="absolute top-10 right-10 w-64 h-64 opacity-15" 
        viewBox="0 0 200 200" 
        fill="none"
      >
        {/* Network nodes */}
        <circle cx="50" cy="50" r="8" fill="var(--brand-purple)" className="text-primary" />
        <circle cx="150" cy="50" r="8" fill="var(--brand-purple)"  className="text-primary" />
        <circle cx="100" cy="100" r="10" fill="var(--brand-purple)"  className="text-primary" />
        <circle cx="50" cy="150" r="8" fill="var(--brand-purple)"  className="text-primary" />
        <circle cx="150" cy="150" r="8" fill="var(--brand-purple)"  className="text-primary" />
        
        {/* Connections */}
        <line x1="50" y1="50" x2="100" y2="100" stroke="var(--brand-purple-light)" strokeWidth="2" className="text-primary/50" />
        <line x1="150" y1="50" x2="100" y2="100" stroke="var(--brand-purple-light)" strokeWidth="2" className="text-primary/50" />
        <line x1="50" y1="150" x2="100" y2="100" stroke="var(--brand-purple-light)" strokeWidth="2" className="text-primary/50" />
        <line x1="150" y1="150" x2="100" y2="100" stroke="var(--brand-purple-light)" strokeWidth="2" className="text-primary/50" />
        <line x1="50" y1="50" x2="150" y2="50" stroke="var(--brand-purple-light)" strokeWidth="2" className="text-primary/30" />
        <line x1="50" y1="150" x2="150" y2="150" stroke="var(--brand-purple-light)" strokeWidth="2" className="text-primary/30" />
      </svg>

      {/* DeFi Protocol Icons */}
      <svg 
        className="absolute bottom-20 left-22 w-48 h-48 opacity-30" 
        viewBox="0 0 150 150" 
        fill="none"
      >
        {/* Liquidity pool representation */}
        <circle cx="40" cy="40" r="25" fill="none" stroke="var(--brand-purple)" strokeWidth="3" className="text-primary/40" />
        <circle cx="110" cy="40" r="25" fill="none" stroke="var(--brand-purple)" strokeWidth="3" className="text-primary/40" />
        <circle cx="75" cy="90" r="30" fill="none" stroke="var(--brand-purple)" strokeWidth="3" className="text-primary/60" />
        
        {/* Flow arrows */}
        {/* Arrow lines and markers are drawn separately and overlaid */}
        {/* Marker paths (below) */}
        <path
          d="M65 40 L85 40"
          stroke="transparent"
          strokeWidth="6"
          opacity="1"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M40 65 L40 85"
          stroke="transparent"
          strokeWidth="6"
          opacity="1"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M110 65 L110 85"
          stroke="transparent"
          strokeWidth="6"
          opacity="1"
          markerEnd="url(#arrowhead)"
        />
        {/* Line paths (above) */}
        <path
          d="M65 40 L85 40"
          stroke="var(--brand-purple-darker)"
          strokeWidth="2"
          opacity="0.8"
        />
        <path
          d="M40 65 L40 85"
          stroke="var(--brand-purple-darker)"
          strokeWidth="2"
          opacity="0.8"
        />
        <path
          d="M110 65 L110 85"
          stroke="var(--brand-purple-darker)"
          strokeWidth="2"
          opacity="0.8"
        />
        {/* Marker: customize markerWidth, markerHeight, polygon fill, opacity here */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="5"
            markerHeight="2.5"
            refX="2.7"
            refY="1.2"
            orient="auto"
          >
            <polygon
              points="0 0, 3.3 1.3, 0 2.2"
              fill="var(--brand-purple)"
              opacity="0.75"
            />
          </marker>
        </defs>
      </svg>

      {/* Crypto coins floating */}
      <svg 
        className="absolute top-1/4 left-1/4 w-32 h-32 opacity-8 animate-pulse" 
        viewBox="0 0 100 100" 
        fill="none"
        style={{ animationDelay: '0.5s' }}
      >
        <circle cx="50" cy="50" r="35" fill="none" stroke="var(--brand-purple-light)" strokeWidth="3" className="text-primary/40" />
        <path d="M35 35 L65 35 L65 45 L55 45 L55 55 L65 55 L65 65 L35 65 L35 55 L45 55 L45 45 L35 45 Z" fill="var(--brand-purple-light)" className="text-primary/30" />
      </svg>

      {/* Quiz/Education elements */}
      <svg 
        className="absolute top-1/2 right-1/5 w-40 h-40 opacity-8 animate-pulse" 
        viewBox="0 0 120 120" 
        fill="none"
        style={{ animationDelay: '1.5s' }}
      >
        {/* Book/Quiz representation */}
        <rect x="30" y="40" width="60" height="40" rx="4" fill="none" stroke="var(--brand-purple-light)" strokeWidth="2" className="text-primary/40" />
        <line x1="40" y1="50" x2="70" y2="50" stroke="var(--brand-purple-light)" strokeWidth="2" className="text-primary/30" />
        <line x1="40" y1="60" x2="80" y2="60" stroke="var(--brand-purple-light)" strokeWidth="2" className="text-primary/30" />
        <line x1="40" y1="70" x2="65" y2="70" stroke="var(--brand-purple-light)" strokeWidth="2" className="text-primary/30" />
        
        {/* Question mark */}
        <circle cx="85" cy="35" r="12" fill="var(--brand-purple-light)" className="text-primary/20" />
        <path d="M81 31 Q85 27 89 31 Q89 35 85 37 L85 39" stroke="var(--brand-purple)" strokeWidth="2" fill="none" className="text-primary/60" />
        <circle cx="85" cy="43" r="1.5" fill="#C484F5" className="text-primary/60" />
      </svg>

      {/* Geometric patterns */}
      <svg 
        className="absolute top-1/2 right-10 w-56 h-56 opacity-15" 
        viewBox="0 0 180 180" 
        fill="none"
      >
        {/* Hexagonal pattern */}
        <path d="M90 20 L110 35 L110 65 L90 80 L70 65 L70 35 Z" fill="none" stroke="var(--brand-purple-dark)" strokeWidth="2" className="text-primary/30" />
        <path d="M90 100 L110 115 L110 145 L90 160 L70 145 L70 115 Z" fill="none" stroke="var(--brand-purple-dark)" strokeWidth="2" className="text-primary/25" />
        <path d="M30 60 L50 75 L50 105 L30 120 L10 105 L10 75 Z" fill="none" stroke="var(--brand-purple-dark)" strokeWidth="2" className="text-primary/25" />
        <path d="M150 60 L170 75 L170 105 L150 120 L130 105 L130 75 Z" fill="none" stroke="var(--brand-purple-dark)" strokeWidth="2" className="text-primary/25" />
      </svg>
    </div>
  );
};

export default CryptoSVG;