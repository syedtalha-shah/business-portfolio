export const statistics = [
  {
    id: 1,
    label: "Projects Completed",
    value: 150,
    prefix: "",
    suffix: "+",
    icon: "briefcase",
    description: "Total projects delivered successfully"
  },
  {
    id: 2,
    label: "Happy Clients",
    value: 120,
    prefix: "",
    suffix: "+",
    icon: "users",
    description: "Satisfied clients worldwide"
  },
  {
    id: 3,
    label: "Years of Experience",
    value: 10,
    prefix: "",
    suffix: "+",
    icon: "calendar",
    description: "Years in business"
  },
  {
    id: 4,
    label: "Team Members",
    value: 25,
    prefix: "",
    suffix: "+",
    icon: "user-group",
    description: "Talented professionals"
  },
  {
    id: 5,
    label: "Countries Served",
    value: 30,
    prefix: "",
    suffix: "+",
    icon: "globe",
    description: "Global reach"
  },
  {
    id: 6,
    label: "Awards Won",
    value: 15,
    prefix: "",
    suffix: "+",
    icon: "award",
    description: "Industry recognition"
  }
]

// Skill statistics
export const skillStats = [
  {
    category: "Frontend",
    percentage: 95,
    technologies: ["React", "Vue", "Angular", "Next.js", "TypeScript"]
  },
  {
    category: "Backend",
    percentage: 90,
    technologies: ["Node.js", "Python", "Java", "Go", "PHP"]
  },
  {
    category: "Mobile",
    percentage: 85,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    category: "Cloud & DevOps",
    percentage: 88,
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    category: "Design",
    percentage: 92,
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
  }
]

// Chart data
export const chartData = {
  revenue: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    data: [100000, 150000, 200000, 280000, 350000],
    type: "line",
    label: "Annual Revenue ($)",
    color: "#3b82f6"
  },
  projects: {
    labels: ["Web", "Mobile", "E-commerce", "Enterprise"],
    data: [45, 30, 20, 15],
    type: "pie",
    label: "Projects by Type (%)",
    colors: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]
  },
  growth: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    data: [120, 150, 180, 200],
    type: "bar",
    label: "Quarterly Growth (Projects)",
    color: "#10b981"
  },
  clients: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    data: [20, 45, 70, 95, 120],
    type: "line",
    label: "Client Growth",
    color: "#8b5cf6"
  }
}
