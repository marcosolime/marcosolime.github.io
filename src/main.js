// ---- Edit the data below to update the site ----
const NEWS = [
  { date: "2026-06", text: "Started working as an AI Engineer at Ficha, in the ADAS / DMS / OMS sector." },
  { date: "2025-06", text: "Started working as a Research Assistant at the National Institute of Informatics, Tokyo." },
  { date: "2025-03", text: "Graduated with a Master's degree in Artificial Intelligence from the University of Bologna (110/110 cum laude)." },
  { date: "2024-09", text: "Started working as a Computer Vision Intern at the National Institute of Informatics, Tokyo." }
];

const INDIE = [
  { name: "Timelines", status: "in progress", period: "Oct 1, 2026 – ongoing",
    desc: "A mobile app that keeps track of your life: past, present, future events.",
    tech: ["TypeScript", "React", "Expo"],
    links: [{ label: "Watch the demo (YouTube)", url: "" }] }, // paste the YouTube URL here when ready
  { name: "PanEx", status: "in progress", period: "Oct 5, 2026 – ongoing",
    desc: "A marketplace to buy and sell items among friends on a Minecraft server.",
    tech: ["JavaScript", "Node.js", "Firestore"], links: [] },
  { name: "News2PDF", status: "suspended", period: "Oct 2025 – Dec 2025",
    desc: "Generates a personalized newspaper, downloadable as a PDF, from your favorite news sites.",
    tech: [], links: [] },
  { name: "Raytracer", status: "completed", period: "Sep 2026 – Oct 2026",
    desc: "A ray tracer written in C++, based on the well-known book Ray Tracing in One Weekend.",
    tech: ["C++"], links: [{ label: "View repository", url: "https://github.com/marcosolime/renderer" }] }
];

const AI = [
  { name: "knight-vs-king", period: "Jun 29, 2024 – Jul 13, 2024",
    desc: "A black knight aims to check a white king in the least amount of moves.",
    tech: ["Reinforcement Learning", "Deep Q-Networks", "Python", "PyTorch"],
    url: "https://github.com/marcosolime/knight-vs-king" },
  { name: "asr-librispeech", period: "Apr 1, 2024 – Jun 15, 2024",
    desc: "I tackle the task of Automatic Speech Recognition (ASR) testing different neural models.",
    tech: ["Python", "PyTorch", "HuggingFace"],
    url: "https://github.com/marcosolime/asr-librispeech" },
  { name: "satellite-segmentation", period: "Sep 7, 2023 – Sep 14, 2023",
    desc: "I take satellite images and perform multi-class segmentation.",
    tech: ["Python", "TensorFlow"],
    url: "https://github.com/marcosolime/satellite-segmentation" }
];
// ------------------------------------------------

const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt = d => d.length === 7
  ? new Date(d + "-01T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long" })
  : new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

document.getElementById("news-list").innerHTML = [...NEWS]
  .sort((a, b) => b.date.localeCompare(a.date))
  .map(n => `<li><span class="d">${fmt(n.date)}</span>${esc(n.text)}</li>`).join("");

document.getElementById("indie-list").innerHTML = INDIE.map(p => {
  const cls = p.status === "suspended" ? "suspended" : "progress";
  const links = p.links.map(l => l.url
    ? `<a class="more" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`
    : `<span class="soon">${esc(l.label)} — coming soon</span>`).join("");
  return `<article class="card">
    <div class="row"><h3>${esc(p.name)}</h3><span class="date">${esc(p.period)}</span></div>
    <p>${esc(p.desc)}</p>
    <span class="tag status ${cls}">${esc(p.status)}</span>${p.tech.map(t => `<span class="tag">${esc(t)}</span>`).join("")}
    <div>${links}</div></article>`;
}).join("");

document.getElementById("ai-list").innerHTML = AI.map(p => `<article class="card">
  <div class="row"><h3>${esc(p.name)}</h3><span class="date">${esc(p.period)}</span></div>
  <p>${esc(p.desc)}</p>
  <div>${p.tech.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
  <a class="more" href="${esc(p.url)}" target="_blank" rel="noopener">View repository ↗</a></article>`).join("");

document.getElementById("y").textContent = new Date().getFullYear();
