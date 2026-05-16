export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

export const skillSet = [
  { name: "C++", level: 90 },
  { name: "Python", level: 92 },
  { name: "ROS / ROS2", level: 88 },
  { name: "Embedded Systems", level: 91 },
  { name: "PLC", level: 80 },
  { name: "Robotics", level: 93 },
  { name: "Computer Vision", level: 86 },
  { name: "Linux", level: 89 },
  { name: "Docker", level: 82 },
  { name: "Git / GitHub", level: 90 },
  { name: "CAD Design", level: 84 },
  { name: "Electronics", level: 87 }
];

export const projects = [
  {
    title: "Autonomous Robot",
    image: "/assets/bg.png",
    description:
      "Developed a ROS2-based autonomous mobile robot with SLAM, sensor fusion, and adaptive obstacle avoidance for indoor navigation.",
    tech: ["ROS2", "C++", "LiDAR", "OpenCV"],
    github: "https://github.com/your-username/autonomous-robot",
    demo: "https://example.com/autonomous-robot"
  },
  {
    title: "Smart Factory Monitoring System",
    image: "/assets/bg.png",
    description:
      "Built a real-time industrial dashboard for predictive maintenance with PLC integration and edge analytics.",
    tech: ["Python", "PLC", "MQTT", "InfluxDB"],
    github: "https://github.com/your-username/factory-monitoring",
    demo: "https://example.com/factory-monitoring"
  },
  {
    title: "AI Vision Inspection System",
    image: "/assets/bg.png",
    description:
      "Engineered a defect detection pipeline using deep learning and high-speed camera calibration for manufacturing QA.",
    tech: ["PyTorch", "Computer Vision", "CUDA", "MLOps"],
    github: "https://github.com/your-username/ai-inspection",
    demo: "https://example.com/ai-inspection"
  },
  {
    title: "IoT Automation Platform",
    image: "/assets/bg.png",
    description:
      "Created a cloud-connected IoT control layer for automation cells with secure device orchestration and alerting.",
    tech: ["ESP32", "Docker", "Node-RED", "AWS IoT"],
    github: "https://github.com/your-username/iot-automation",
    demo: "https://example.com/iot-automation"
  },
  {
    title: "Drone Navigation Controller",
    image: "/assets/bg.png",
    description:
      "Implemented robust flight control and path planning for UAV waypoint tracking under dynamic wind disturbances.",
    tech: ["PX4", "MAVLink", "Control Systems", "C++"],
    github: "https://github.com/your-username/drone-navigation",
    demo: "https://example.com/drone-navigation"
  }
];

export const timelineItems = [
  {
    year: "2025 - Present",
    title: "Mechatronics Engineer",
    subtitle: "Advanced Robotics Lab",
    type: "Work",
    details: "Leading autonomous systems prototyping and robotic cell optimization for industrial deployment."
  },
  {
    year: "2023 - 2025",
    title: "Automation & Embedded Intern",
    subtitle: "Smart Manufacturing Company",
    type: "Work",
    details: "Built PLC-controlled test rigs, edge monitoring pipelines, and improved machine uptime by 18%."
  },
  {
    year: "2020 - 2024",
    title: "B.Eng. Mechatronics Engineering",
    subtitle: "University of Engineering",
    type: "Education",
    details: "Focused on robotics, controls, embedded AI, and electromechanical system design."
  },
  {
    year: "2024",
    title: "Certified ROS2 Developer",
    subtitle: "Open Robotics Track",
    type: "Certification",
    details: "Validated advanced robot middleware integration, navigation stack, and simulation workflows."
  }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  { label: "Email", href: "mailto:you@example.com" }
];
