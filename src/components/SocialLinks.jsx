const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaydip-dumraliya-3a3083350 ",
    className: "linkedin",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M6.94 8.5V20H3.1V8.5h3.84ZM5.02 2.35c1.23 0 2.23 1 2.23 2.23 0 1.22-1 2.22-2.23 2.22A2.22 2.22 0 0 1 2.8 4.58c0-1.23 1-2.23 2.22-2.23ZM21.2 13.4V20h-3.82v-6.07c0-1.45-.52-2.43-1.82-2.43-.99 0-1.58.67-1.84 1.31-.1.23-.12.55-.12.87V20H9.78s.05-10.43 0-11.5h3.82v1.63c.5-.77 1.4-1.86 3.4-1.86 2.48 0 4.2 1.62 4.2 5.12Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Jaydip2999",
    className: "github",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 .5C5.65.5.5 5.68.5 12.06c0 5.12 3.3 9.47 7.88 11 .57.11.78-.25.78-.55v-2.14c-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.22 1.79 1.22 1.05 1.8 2.75 1.28 3.42.98.1-.77.4-1.28.74-1.58-2.55-.3-5.23-1.29-5.23-5.75 0-1.27.45-2.3 1.2-3.12-.13-.3-.53-1.5.1-3.13 0 0 .98-.32 3.2 1.2A10.98 10.98 0 0 1 12 5.8c.98 0 1.96.13 2.88.38 2.2-1.52 3.2-1.2 3.2-1.2.63 1.63.23 2.83.12 3.13.75.82 1.2 1.85 1.2 3.12 0 4.47-2.69 5.45-5.25 5.75.42.36.8 1.06.8 2.14v3.17c0 .3.2.67.79.55 4.57-1.54 7.86-5.89 7.86-11C23.5 5.68 18.36.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jaydip_dumraliya_?igsh=d3czaW5iY3JsOXEx",
    className: "instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M7.25 2h9.5A5.25 5.25 0 0 1 22 7.25v9.5A5.25 5.25 0 0 1 16.75 22h-9.5A5.25 5.25 0 0 1 2 16.75v-9.5A5.25 5.25 0 0 1 7.25 2Zm-.18 1.8A3.27 3.27 0 0 0 3.8 7.07v9.86a3.27 3.27 0 0 0 3.27 3.27h9.86a3.27 3.27 0 0 0 3.27-3.27V7.07a3.27 3.27 0 0 0-3.27-3.27H7.07Zm10.35 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:jaydipdumraliya2052@gmail.com",
    className: "email",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75Zm2 .43v.15l6.64 5.53a.6.6 0 0 0 .76 0L19 6.33v-.15c0-.65-.53-1.18-1.18-1.18H6.18c-.65 0-1.18.53-1.18 1.18Zm14 2.76-5.25 4.37a2.6 2.6 0 0 1-3.5 0L5 8.94v9.38c0 .65.53 1.18 1.18 1.18h11.64c.65 0 1.18-.53 1.18-1.18V8.94Z" />
      </svg>
    ),
  },
];

function SocialLinks({ className = "social-icons" }) {
  return (
    <div className={className} aria-label="Social links">
      {links.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          title={item.label}
          className={item.className}
          style={{ "--delay": `${index * 0.08}s` }}
        >
          <span className="icon-wrap">{item.icon}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
