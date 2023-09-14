const ctx = document.getElementById("myChart");
const ct2 = document.getElementById("D2");
const ct3 = document.getElementById("D3");
const ct4 = document.getElementById("D4");
const ct5 = document.getElementById("D5");

const myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Round 1", "Round 2", "Round 3"],
    datasets: [
      {
        label: "Team 1",
        data: [0, 12, 19],
        borderWidth: 1,
      },
      {
        label: "Team 2",
        data: [0, 20, 22],
        borderWidth: 1,
      },
      {
        label: "Team 3",
        data: [0, 12, 32],
        borderWidth: 1,
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
        data: [0, 12, 1],
        borderWidth: 1,
      },
      {
        label: "Team 2",
        data: [0, 20, 22],
        borderWidth: 1,
      },
      {
        label: "Team 3",
        data: [0, 12, 32],
        borderWidth: 1,
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
        data: [0, 12, 19],
        borderWidth: 1,
      },
      {
        label: "Team 2",
        data: [0, 20, 22],
        borderWidth: 1,
      },
      {
        label: "Team 3",
        data: [0, 12, 32],
        borderWidth: 1,
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
        data: [0, 12, 19],
        borderWidth: 1,
      },
      {
        label: "Team 2",
        data: [0, 20, 22],
        borderWidth: 1,
      },
      {
        label: "Team 3",
        data: [0, 12, 32],
        borderWidth: 1,
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
const myLineChart5 = new Chart(ct5, {
  type: "line",
  data: {
    labels: ["Round 1", "Round 2", "Round 3"],
    datasets: [
      {
        label: "Team 1",
        data: [0, 12, 19],
        borderWidth: 1,
      },
      {
        label: "Team 2",
        data: [0, 20, 22],
        borderWidth: 1,
      },
      {
        label: "Team 3",
        data: [0, 12, 32],
        borderWidth: 1,
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
