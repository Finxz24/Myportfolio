function Badge({ letters }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="currentColor" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize={letters.length > 3 ? 6.5 : letters.length > 2 ? 8 : 10}
        fontFamily="Montserrat, sans-serif"
        fontWeight="700"
        fill="#fff"
      >
        {letters}
      </text>
    </svg>
  );
}

function Mark({ children }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function SkillIcon({ name }) {
  if (name === 'C++') return <Badge letters="C++" />;
  if (name === 'C#') return <Badge letters="C#" />;
  if (name === '.NET') return <Badge letters=".NET" />;
  if (name === 'JavaScript') return <Badge letters="JS" />;
  if (name === 'PHP') return <Badge letters="PHP" />;
  if (name === 'TypeScript') return <Badge letters="TS" />;

  if (name === 'MS SQL Server' || name === 'MySQL/MariaDB' || name === 'MS Access') {
    return (
      <Mark>
        <ellipse cx="12" cy="6" rx="7" ry="2.6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </Mark>
    );
  }

  if (name === 'Dart') {
    return (
      <Mark>
        <path d="M4 12 14 3.5h6.2L12.2 12 20.2 20.5H14L4 12z" fill="currentColor" />
      </Mark>
    );
  }

  if (name === 'Flutter') {
    return (
      <Mark>
        <path d="M13.8 3 4 12.6l3.6 3.6L21 6.2 13.8 3z" fill="currentColor" />
        <path d="M13.4 13.2 9.6 17l3.8 3.8 3.8-3.8-3.8-3.8z" fill="currentColor" />
      </Mark>
    );
  }

  if (name === 'React') {
    return (
      <Mark>
        <circle cx="12" cy="12" r="2.1" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </Mark>
    );
  }

  if (name === 'Next.js') {
    return (
      <Mark>
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path d="M8 16.5V7.5h1.5l5.8 7.6V7.5H17v9h-1.5L9.7 8.9v7.6H8z" fill="#fff" />
      </Mark>
    );
  }

  if (name === 'Node.js') {
    return (
      <Mark>
        <path d="M12 2.2 21 7.4v9.2L12 21.8 3 16.6V7.4L12 2.2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.2 15.2V8.8h1.2l2.6 4.4 2.6-4.4h1.2v6.4h-1.2v-4.2l-2.2 3.6h-.8l-2.2-3.6v4.2H8.2z" fill="currentColor" />
      </Mark>
    );
  }

  if (name === 'Figma') {
    return (
      <Mark>
        <rect x="4" y="2" width="7" height="6.5" rx="3.2" fill="currentColor" />
        <circle cx="16.2" cy="5.2" r="3.2" fill="currentColor" />
        <rect x="4" y="8.7" width="7" height="6.5" rx="1" fill="currentColor" />
        <circle cx="16.2" cy="12" r="3.2" fill="currentColor" />
        <circle cx="7.5" cy="18.6" r="3.2" fill="currentColor" />
      </Mark>
    );
  }

  if (name === 'Arduino') {
    return (
      <Mark>
        <rect x="3" y="7" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7V4.5M12 7V4.5M17 7V4.5M7 17v2.5M12 17v2.5M17 17v2.5" stroke="currentColor" strokeWidth="1.5" />
      </Mark>
    );
  }

  if (name === 'Sensors') {
    return (
      <Mark>
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </Mark>
    );
  }

  if (name === 'Prototyping') {
    return (
      <Mark>
        <rect x="3" y="5" width="8" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="13" width="8" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 8h2a3 3 0 0 1 3 3v2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </Mark>
    );
  }

  if (name === 'Agile Development') {
    return (
      <Mark>
        <path d="M12 4a8 8 0 0 1 7.5 5.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 20a8 8 0 0 1-7.5-5.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.2 7.2 16.5 9.6 19.6 11" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.8 16.8 7.5 14.4 4.4 13" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </Mark>
    );
  }

  if (name === 'Motion Design') {
    return (
      <Mark>
        <path d="M4 16c2.5-6 4-6 6.5 0s4 6 6.5 0 4-6 3-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 6h5M18 3v6" stroke="currentColor" strokeWidth="1.5" />
      </Mark>
    );
  }

  return (
    <Mark>
      <path d="M12 3.5 14.8 9l6 .6-4.6 3.9 1.4 5.8L12 16.2 6.4 19.3l1.4-5.8L3.2 9.6 9.2 9 12 3.5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </Mark>
  );
}
