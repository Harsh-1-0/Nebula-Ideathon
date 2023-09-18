const ctx = document.getElementById("myChart");
const ct2 = document.getElementById("D2");
const ct3 = document.getElementById("D3");
const ct4 = document.getElementById("D4");

const myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["9", "10", "11", "12", "1"],
    datasets: [
      {
        label: "Team 1",
        data: [0, 0, 1000, 1200, 950],
        borderWidth: 6,
      },
      {
        label: "Team 2",
        data: [0, 0, 1000, 1700, 1450],
        borderWidth: 6,
      },
      {
        label: "Team 3",
        data: [0, 0, 1000, 1500, 1250],
        borderWidth: 6,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const myLineChart2 = new Chart(ct2, {
  type: "line",
  data: {
    labels: ["Round 1", "Round 2", "Round 3"],
    datasets: [
      {
        label: "Team 1",
        data: [1000, 12, 1],
        borderWidth: 6,
      },
      {
        label: "Team 2",
        data: [1000, 20, 22],
        borderWidth: 6,
      },
      {
        label: "Team 3",
        data: [1000, 12, 32],
        borderWidth: 6,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
const myLineChart3 = new Chart(ct3, {
  type: "line",
  data: {
    labels: ["Round 1", "Round 2", "Round 3"],
    datasets: [
      {
        label: "Team 1",
        data: [1000, 12, 19],
        borderWidth: 6,
      },
      {
        label: "Team 2",
        data: [1000, 20, 22],
        borderWidth: 6,
      },
      {
        label: "Team 3",
        data: [1000, 12, 32],
        borderWidth: 6,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
const myLineChart4 = new Chart(ct4, {
  type: "line",
  data: {
    labels: ["Round 1", "Round 2", "Round 3"],
    datasets: [
      {
        label: "Team 1",
        data: [1000, 12, 19],
        borderWidth: 6,
      },
      {
        label: "Team 2",
        data: [1000, 20, 22],
        borderWidth: 6,
      },
      {
        label: "Team 3",
        data: [1000, 12, 32],
        borderWidth: 6,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
