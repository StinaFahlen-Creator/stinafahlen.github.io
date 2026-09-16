const aiData = {
  labels: ["2023", "2024", "2025"],

  datasets: [
    {
      label: "Män 18–84 år - Använt ChatGPT",
      data: [25, 30, 37],
      backgroundColor: "#FFC928",
    },
    {
      label: "Kvinnor 18–84 år - Använt ChatGPT",
      data: [24, 28, 30],
      backgroundColor: "#B56CE2",
    },
  ],
};

new Chart(document.getElementById("aiChart"), {
  type: "bar",
  data: aiData,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Andel svenskar som använt ChatGPT senaste 12 månaderna (%)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
  },
});

const internetData = {
  labels: ["2021", "2022", "2023", "2024", "2025"],

  datasets: [
    {
      label: "Internetanvändare 16+ år",
      data: [94, 94, 96, 95, 97],
      backgroundColor: "#4EA5F5",
    },
    {
      label: "Dagliga användare",
      data: [90, 90, 91, 91, 93],
      backgroundColor: "#58C4B0",
    },
    {
      label: "Sällananvändare",
      data: [4, 4, 4, 5, 4],
      backgroundColor: "#FFD43B",
    },
    {
      label: "Icke-användare",
      data: [6, 6, 4, 5, 3],
      backgroundColor: "#FF4D6D",
    },
  ],
};

new Chart(document.getElementById("internetChart"), {
  type: "bar",
  data: internetData,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Internetanvändning i Sverige 2021–2025 (%)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
  },
});

/* ============================================
   Search vs Social vs AI Chatbot Market Share – Sverige
   Data hämtad från Statcounters CSV-export
   (search_vs_social_vs_ai_chatbot-SE-monthly-202504-202608.csv)
   ============================================ */

const searchSocialData = {
  labels: [
    "Apr 2025", "Maj 2025", "Jun 2025", "Jul 2025", "Aug 2025",
    "Sep 2025", "Okt 2025", "Nov 2025", "Dec 2025", "Jan 2026",
    "Feb 2026", "Mar 2026", "Apr 2026", "Maj 2026", "Jun 2026",
    "Jul 2026", "Aug 2026",
  ],

  datasets: [
    {
      label: "Search",
      data: [79.44, 80.44, 77.44, 79.00, 89.24, 89.48, 89.03, 88.22, 88.34, 87.98, 84.29, 88.88, 89.80, 89.91, 89.67, 88.45, 84.63],
      borderColor: "#3b9b3b",
      backgroundColor: "#3b9b3b",
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#3b9b3b",
      pointBorderWidth: 2,
      borderWidth: 2,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Social",
      data: [20.41, 19.35, 22.37, 20.84, 10.56, 10.25, 10.66, 11.46, 11.39, 11.70, 15.41, 10.80, 9.97, 9.83, 10.12, 11.39, 15.16],
      borderColor: "#3b5bdb",
      backgroundColor: "#3b5bdb",
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#3b5bdb",
      pointBorderWidth: 2,
      borderWidth: 2,
      tension: 0.3,
      fill: false,
    },
    {
      label: "AI Chatbot",
      data: [0.15, 0.21, 0.19, 0.16, 0.20, 0.28, 0.30, 0.32, 0.27, 0.32, 0.30, 0.32, 0.23, 0.26, 0.21, 0.15, 0.21],
      borderColor: "#333333",
      backgroundColor: "#333333",
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#333333",
      pointBorderWidth: 2,
      borderWidth: 2,
      tension: 0.3,
      fill: false,
    },
  ],
};

new Chart(document.getElementById("searchSocialChart"), {
  type: "line",
  data: searchSocialData,
  options: {
    responsive: true,
    interaction: { mode: "index", intersect: false },
    plugins: {
      title: {
        display: true,
        text: "Search vs Social vs AI Chatbot Market Share – Sverige (Apr 2025 – Aug 2026)",
      },
      tooltip: {
        callbacks: {
          label: (context) => context.dataset.label + ": " + context.parsed.y + "%",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
  },
});