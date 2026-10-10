export function Logo() {
  return (
    <span className="logo">
      {/* Original alumni placeholder mark; replace with an authorized official asset when available. */}
      <svg width="47" height="47" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 39c12-3 15-14 20-22 2 8 6 11 12 11l7-3-3 7 6 4-10 1c-6 12-18 14-24 6l-10 2 6-6Z" fill="currentColor" />
        <path d="M24 37c7-1 12-5 15-8-1 8-6 12-15 8Z" fill="#F7F6F2" />
      </svg>
      <span><strong>BBHSC Alumni</strong><small>Blue Bird · Sylhet</small></span>
    </span>
  );
}
