
/* ---------- Mobile menu toggle (responsive navbar) ---------- */
(function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("block");
        menuToggle.setAttribute("aria-expanded", "true");
      } else {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("block");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
})();



const competitors = [
  { name: "Competitor A", accuracy: "95%", dataPoints: "50-75", updates: "Every 5 min", price: "$99/mo" },
  { name: "Competitor B", accuracy: "93%", dataPoints: "40-60", updates: "Every 10 min", price: "$149/mo" },
  { name: "Industry Average", accuracy: "90-95%", dataPoints: "30-100", updates: "Varies", price: "$50-200/mo" }
];

const ourAdvantages = [
  "Real-time referee pattern analysis",
  "Weather micro-impact modeling",
  "Crowd sentiment from social feeds",
  "Player biometric trend analysis",
  "Travel fatigue calculations",
  "Historical referee-team relationships",
  "Stadium-specific performance metrics",
  "Injury report depth analysis"
];

const stats = [
  {
    title: "Data Accuracy",
    value: "99.9%",
    change: "+0.1%",
    trend: "up",
    colorClass: "text-success",
    description: "vs 95% industry standard",
    icon: "🎯"
  },
  {
    title: "Data Points Scraped",
    value: "847+",
    change: "+23",
    trend: "up",
    colorClass: "text-primary",
    description: "micro-factors analyzed",
    icon: "📊"
  },
  {
    title: "Win Rate",
    value: "94.7%",
    change: "+1.2%",
    trend: "up",
    colorClass: "text-accent",
    description: "verified predictions",
    icon: "💵"
  },
  {
    title: "Scraping Frequency",
    value: "30sec",
    change: "Real-time",
    trend: "up",
    colorClass: "text-warning",
    description: "continuous monitoring",
    icon: "⚡"
  }
];

const topPerformers = [
  { sport: "NFL", winRate: 92, games: 156 },
  { sport: "NBA", winRate: 89, games: 203 },
  { sport: "Soccer", winRate: 85, games: 178 },
  { sport: "MLB", winRate: 84, games: 234 }
];

const matches = [
  {
    id: 1,
    sport: "Football",
    homeTeam: "Chiefs",
    awayTeam: "Bills",
    time: "2:30 PM EST",
    confidence: 87,
    prediction: "Chiefs +3.5",
    odds: "+110",
    trend: "up",
    viewers: "2.3M"
  },
  {
    id: 2,
    sport: "Basketball",
    homeTeam: "Lakers",
    awayTeam: "Celtics",
    time: "8:00 PM EST",
    confidence: 92,
    prediction: "Over 225.5",
    odds: "-115",
    trend: "up",
    viewers: "1.8M"
  },
  {
    id: 3,
    sport: "Soccer",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    time: "3:00 PM GMT",
    confidence: 78,
    prediction: "Arsenal Win",
    odds: "+145",
    trend: "down",
    viewers: "950K"
  }
];

/* ---------- Rendering functions ---------- */

function renderCompetitorsTable() {
  const tbody = document.getElementById("competitors-table");
  if (!tbody) return;
  tbody.innerHTML = competitors.map((c) => `
    <tr class="border-b border-border/30">
      <td class="p-4 text-muted-foreground">${c.name}</td>
      <td class="p-4 text-center text-destructive font-semibold">${c.accuracy}</td>
      <td class="p-4 text-center">${c.dataPoints}</td>
      <td class="p-4 text-center">${c.updates}</td>
      <td class="p-4 text-center">${c.price}</td>
    </tr>
  `).join("") + `
    <tr class="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
      <td class="p-4 font-bold text-primary">BetAnalytics Pro</td>
      <td class="p-4 text-center text-success font-bold">99.9%</td>
      <td class="p-4 text-center text-accent font-bold">847+</td>
      <td class="p-4 text-center text-primary font-bold">Every 30 sec</td>
      <td class="p-4 text-center text-success font-bold">Coming Soon</td>
    </tr>
  `;
}

function renderOurAdvantages() {
  const container = document.getElementById("our-advantages");
  if (!container) return;
  container.innerHTML = ourAdvantages.map((a) => `
    <div class="flex items-center space-x-3 bg-secondary-30 rounded-lg p-3">
      <!-- CheckCircle SVG -->
      <svg class="h-5 w-5 text-success flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 13l4 4L19 7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="text-sm font-medium">${a}</span>
    </div>
  `).join("");
}

function renderStatsGrid() {
  const grid = document.getElementById("stats-grid");
  if (!grid) return;
  grid.innerHTML = stats.map((s) => `
    <div class="group card-style p-6 border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div class="flex items-center justify-between mb-4">
        <div class="text-2xl">${s.icon}</div>
        <div class="${s.trend === 'up' ? 'text-success' : 'text-destructive'} text-sm font-semibold">
          ${s.change}
        </div>
      </div>
      <div class="text-3xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">${s.value}</div>
      <div class="text-sm font-medium mb-1">${s.title}</div>
      <div class="text-xs text-muted-foreground">${s.description}</div>
    </div>
  `).join("");
}

function renderTopPerformers() {
  const container = document.getElementById("top-performers");
  if (!container) return;
  container.innerHTML = topPerformers.map((p) => `
    <div class="text-center p-4 rounded-lg bg-secondary-30">
      <div class="text-2xl font-bold text-primary mb-1">${p.winRate}%</div>
      <div class="text-lg font-semibold mb-1">${p.sport}</div>
      <div class="text-sm text-muted-foreground">${p.games} predictions</div>
      <div class="mt-3 bg-primary-10 rounded-full h-2">
        <div class="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style="width: ${p.winRate}%"></div>
      </div>
    </div>
  `).join("");
}

function renderMatches() {
  const grid = document.getElementById("matches-grid");
  if (!grid) return;
  grid.innerHTML = matches.map(m => `
    <div class="p-6 rounded-lg border border-border/50 bg-card-80 hover:border-primary/30 hover:shadow-xl transition">
      <div class="flex items-center justify-between mb-3">
        <span class="px-2 py-1 text-xs rounded bg-secondary text-sm">${m.sport}</span>
        <span class="text-sm text-muted-foreground"><svg class="inline-block h-3 w-3 mr-1" viewBox="0 0 24 24"><path d="M12 6v6l4 2" stroke-width="1.25" stroke="currentColor" fill="none"/></svg> ${m.time}</span>
      </div>

      <h3 class="text-lg font-bold mb-4">${m.homeTeam} vs ${m.awayTeam}</h3>

      <div class="flex items-center justify-between mb-4 text-sm text-muted-foreground">
        <span>👥 ${m.viewers} watching</span>
        <span class="${m.trend === 'up' ? 'text-success' : 'text-destructive'} font-semibold">${m.confidence}%</span>
      </div>

      <div class="bg-secondary-30 rounded-lg p-3 mb-4">
        <div class="flex items-center justify-between mb-2 text-sm">
          <span class="text-muted-foreground">AI Prediction</span>
          <span class="px-2 py-1 rounded text-xs ${m.confidence > 85 ? 'bg-success text-success' : 'bg-warning text-warning'}">${m.confidence > 85 ? 'High Confidence' : 'Medium Confidence'}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="font-semibold">${m.prediction}</span>
          <span class="text-accent font-bold">${m.odds}</span>
        </div>
      </div>

      <button class="w-full px-4 py-2 rounded-lg" style="background:linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent))); color:white">View Analysis</button>
    </div>
  `).join("");
}


document.addEventListener("DOMContentLoaded", function () {
  renderCompetitorsTable();
  renderOurAdvantages();
  renderStatsGrid();
  renderTopPerformers();
  renderMatches();
});
