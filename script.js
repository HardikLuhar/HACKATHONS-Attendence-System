// Toggle sidebar visibility on mobile
document.getElementById("menuButton").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("-translate-x-full");

    // Toggle the 'hidden' class based on the sidebar visibility
    if (sidebar.classList.contains("-translate-x-full")) {
        sidebar.classList.add("hidden");
    } else {
        sidebar.classList.remove("hidden");
    }
});

// Attendance Flow Chart (Bar Graph)
const attendanceCtx = document.getElementById("attendanceFlowChart").getContext("2d");
new Chart(attendanceCtx, {
    type: "bar",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // Days of the week
        datasets: [
            {
                label: "Students Present",
                data: [45, 42, 48, 39, 44, 46], // Example attendance data, replace dynamically
                backgroundColor: "rgba(20, 184, 166, 0.6)",
                borderColor: "rgba(255, 255, 255, 0.8)",
                borderWidth: 2,
                borderRadius: 10,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true, max: 50, ticks: { color: "#e5e7eb" } }, // Assuming 50 students max
            x: { ticks: { color: "#e5e7eb" } },
        },
        plugins: { legend: { labels: { color: "#e5e7eb" } } },
    },
});

// Attendance Distribution Pie Chart (Present vs. Absent)
const totalStudents = 50; // Example total students in the class
const presentStudents = 45 + 42 + 48 + 39 + 44 + 46; // Sum of present students in the week
const absentStudents = (totalStudents * 6) - presentStudents; // Absent students calculation

const attendanceDistCtx = document.getElementById("attendanceDistributionChart").getContext("2d");
new Chart(attendanceDistCtx, {
    type: "pie",
    data: {
        labels: ["Present", "Absent"],
        datasets: [
            {
                data: [presentStudents, absentStudents],
                backgroundColor: ["#1f2937", "#14b8a6"], // Dark gray for present, teal for absent
            },
        ],
    },
    options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#e5e7eb" } } },
    },
});
