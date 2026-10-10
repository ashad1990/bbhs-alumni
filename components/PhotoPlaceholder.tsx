import Image from "next/image";

type Scene = "reunion" | "graduation" | "conversation" | "classroom";

const scenes: Record<string, Scene> = {
  "/images/hero.svg": "reunion",
  "/images/community.svg": "reunion",
  "/images/connections.svg": "conversation",
  "/images/campus.svg": "classroom",
  "illustration:reunion": "reunion",
  "illustration:graduation": "graduation",
  "illustration:conversation": "conversation",
  "illustration:classroom": "classroom",
};

function Person({ x, y, shirt, scale = 1, graduate = false }: { x: number; y: number; shirt: string; scale?: number; graduate?: boolean }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M-32 145-40 235h28l12-77 12 77h28l-8-90Z" fill="#123d51" />
    <path d="M-22 54Q-57 59-61 125l18 7 15-49v76h57V83l16 49 18-7Q57 59 22 54Z" fill={shirt} />
    <path d="M-61 125q-5 24 9 25 12 1 9-18M63 125q5 24-9 25-12 1-9-18" fill="#d99b72" />
    <path d="M-10 38v22q10 11 20 0V38" fill="#d99b72" />
    <ellipse cy="18" rx="24" ry="30" fill="#edbc91" />
    <path d="M-24 19Q-34-22 0-18q34-1 24 40l-8-26Q-3 8-20 1Z" fill="#24383b" />
    <path d="M-7 31q7 6 14 0" fill="none" stroke="#754630" strokeWidth="2" strokeLinecap="round" />
    {graduate && <><path d="m-38-15 38-15 38 15L0 0Z" fill="#0B3C6B" /><path d="M-20-12v16q20 9 40 0v-16M35-15v38" fill="none" stroke="#C9A227" strokeWidth="4" /></>}
  </g>;
}

function Illustration({ scene }: { scene: Scene }) {
  return <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="1000" height="600" fill={scene === "graduation" ? "#cde3df" : "#f4e4c9"} />
    <circle cx="855" cy="105" r="72" fill="#e5bc4c" />
    <path d="M0 415Q250 340 500 408t500-22v214H0Z" fill="#a8c5b6" />
    <path d="M0 490q260-70 500 0t500-15v125H0Z" fill="#23605f" />
    {scene === "reunion" && <>
      <path d="M0 65q500 155 1000 0" fill="none" stroke="#0B3C6B" strokeWidth="3" />
      {[100, 240, 380, 520, 660, 800, 940].map((x, i) => <path key={x} d={`m${x} ${85 + Math.sin(x / 1000 * Math.PI) * 55} 22 44 22-38Z`} fill={i % 2 ? "#C2603F" : "#C9A227"} />)}
      <path d="M80 410V250h170v160M750 410V250h170v160" fill="#e7c797" />
      <Person x={220} y={265} shirt="#C2603F" scale={1.2} />
      <Person x={395} y={250} shirt="#0B3C6B" scale={1.3} />
      <Person x={570} y={280} shirt="#e5bc4c" scale={1.15} />
      <Person x={750} y={255} shirt="#f7f1e5" scale={1.25} />
    </>}
    {scene === "graduation" && <>
      <path d="M80 320V140h840v180" fill="#f4e4c9" />
      <path d="M65 140 500 40l435 100Z" fill="#0B3C6B" />
      {[190, 330, 470, 610, 750, 870].map((x, i) => <Person key={x} x={x} y={285 + (i % 2) * 28} shirt={i % 2 ? "#0B3C6B" : "#23605f"} scale={1.05} graduate />)}
      <path d="m280 105 35-14 35 14-35 14Zm395 60 35-14 35 14-35 14Z" fill="#0B3C6B" />
    </>}
    {scene === "conversation" && <>
      <path d="M110 420V185q0-110 100-110t100 110v235M690 420V185q0-110 100-110t100 110v235" fill="#d4b584" />
      <path d="M135 400V185q0-85 75-85t75 85v215M715 400V185q0-85 75-85t75 85v215" fill="#cde3df" />
      <Person x={380} y={230} shirt="#C2603F" scale={1.4} />
      <Person x={620} y={230} shirt="#0B3C6B" scale={1.4} />
      <ellipse cx="500" cy="432" rx="160" ry="27" fill="#C9A227" />
      <path d="M490 445h20v135h-20" fill="#e7c797" />
      <path d="M461 395h27v30h-27Zm54 0h27v30h-27Z" fill="#fff9ef" />
    </>}
    {scene === "classroom" && <>
      <rect x="280" y="65" width="440" height="230" rx="5" fill="#23605f" stroke="#d4b584" strokeWidth="14" />
      <path d="M330 125h230m-230 40h335m-335 40h175" stroke="#f4e4c9" strokeWidth="5" strokeLinecap="round" />
      <Person x={810} y={225} shirt="#C2603F" scale={1.2} />
      {[190, 420, 650].map((x, i) => <g key={x}><Person x={x} y={320} shirt={i % 2 ? "#e5bc4c" : "#0B3C6B"} /><path d={`M${x - 90} 445h180v25h-180Zm10 25v110m160-110v110`} fill="#d4b584" stroke="#d4b584" strokeWidth="12" /><path d={`M${x - 40} 438h70`} stroke="#fff9ef" strokeWidth="10" /></g>)}
    </>}
    <path d="M0 587h1000" stroke="#C9A227" strokeWidth="26" />
  </svg>;
}

export function PhotoPlaceholder({ image, alt = "", className = "", priority = false }: { image: string; alt?: string; className?: string; priority?: boolean }) {
  const scene = scenes[image];
  return <figure className={`photo-placeholder ${className}`}>
    <div className="photo-frame">
      {scene ? <Illustration scene={scene} /> : <Image src={image} alt={alt} width={1000} height={600} unoptimized priority={priority} />}
    </div>
    {scene && <figcaption>Original illustration · not a photograph</figcaption>}
  </figure>;
}
