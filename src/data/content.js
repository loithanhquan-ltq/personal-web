const assetBase = `${import.meta.env.BASE_URL}assets`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Visualizations", href: "#visualizations" },
  { label: "Timeline", href: "#timeline" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" }
];

export const heroTypingPhrases = [
  "Mechatronics Engineer | Robotics Research | Embedded AI | Autonomous Systems",
  "Cyber-Physical Design | Real-Time Control | Safety-Critical Integration"
];

export const heroMetrics = [
  { label: "Years Experience", value: "5+", delta: "Engineering" },
  { label: "Projects Built", value: "24+", delta: "Delivered" },
  { label: "GitHub Commits", value: "3.2k+", delta: "& counting" },
  { label: "Test Pass Rate", value: "97.8%", delta: "Validated" }
];

export const profileSummary = {
  name: "Loi Thanh Quan",
  role: "Mechatronics Engineer",
  mission:
    "Architecting robust robotics systems where embedded intelligence, control theory, and mechanical precision converge into deployable autonomous platforms.",
  portrait: `${assetBase}/quan.jpeg`,
  quickStats: [
    { label: "Years Engineering", value: "5+" },
    { label: "Systems Delivered", value: "24" },
    { label: "GitHub Commits", value: "3.2k+" },
    { label: "Reliability Index", value: "99.1%" }
  ],
  technicalDomains: [
    "Embedded software for robotics",
    "Autonomous navigation and SLAM",
    "Model-based control systems",
    "Computer vision for industrial QA",
    "Edge AI for cyber-physical automation"
  ],
  researchInterests: [
    "Adaptive control and online parameter estimation",
    "Multi-sensor fusion in uncertain environments",
    "Digital twin based predictive diagnostics",
    "Safety and redundancy in human-robot collaboration"
  ],
  architecture: ["Perception Layer", "Decision Layer", "Control Layer", "Actuation Layer"]
};

export const skillSet = [
  { name: "Embedded Software", level: 94 },
  { name: "Robotics", level: 95 },
  { name: "AI / ML", level: 88 },
  { name: "Control Systems", level: 92 },
  { name: "Sensor Fusion", level: 90 },
  { name: "Computer Vision", level: 87 },
  { name: "Linux Systems", level: 91 },
  { name: "Industrial Automation", level: 86 },
  { name: "RTOS", level: 84 },
  { name: "C++ / Python", level: 96 },
  { name: "ROS2", level: 93 },
  { name: "FPGA / Microcontrollers", level: 85 }
];

export const radarMetrics = [
  { axis: "Software", value: 94 },
  { axis: "Electronics", value: 89 },
  { axis: "Mechanics", value: 86 },
  { axis: "Control", value: 92 },
  { axis: "Autonomy", value: 90 },
  { axis: "Validation", value: 88 }
];

export const systemHealth = [
  { label: "CPU Simulation", value: 72 },
  { label: "Network Bus", value: 64 },
  { label: "Sensor Confidence", value: 97 },
  { label: "Fault Detector", value: 91 }
];

export const projects = [
  {
    title: "Autonomous Navigation Robot",
    image: `${assetBase}/bg.png`,
    description: "Multi-modal navigation stack with localization resilience in dynamic factory corridors.",
    architecture: ["LiDAR + IMU Fusion", "SLAM", "Model Predictive Controller", "Safety Supervisor"],
    challenges: ["Reflective surfaces", "Dynamic obstacles", "Low-light docking"],
    benchmarks: [
      { label: "Localization Error", value: "2.1 cm" },
      { label: "Average Latency", value: "8.4 ms" },
      { label: "Mission Success", value: "97.8%" }
    ],
    tech: ["ROS2", "C++", "LiDAR", "EKF", "OpenCV"],
    outcome: "Reduced route failures by 41% during continuous 8-hour operation.",
    github: "https://github.com/your-username/autonomous-robot",
    demo: "https://example.com/autonomous-robot"
  },
  {
    title: "SLAM Mapping System",
    image: `${assetBase}/bg.png`,
    description: "Hybrid graph-SLAM platform for large indoor environments with loop closure optimization.",
    architecture: ["Visual Odometry", "Pose Graph", "Loop Closure", "Map Optimizer"],
    challenges: ["Sparse features", "Scale drift", "Memory constraints"],
    benchmarks: [
      { label: "Map Consistency", value: "98.2%" },
      { label: "Drift / 100m", value: "0.63 m" },
      { label: "Optimization Time", value: "18 ms" }
    ],
    tech: ["ROS2", "Python", "Ceres", "Open3D"],
    outcome: "Achieved globally consistent maps across 12,000 m2 test facility.",
    github: "https://github.com/your-username/slam-mapping",
    demo: "https://example.com/slam-mapping"
  },
  {
    title: "AI Vision Inspection Platform",
    image: `${assetBase}/bg.png`,
    description: "Real-time defect analytics for production lines using high-speed optical capture and edge inference.",
    architecture: ["Acquisition Node", "Inference Engine", "Decision Gateway", "PLC Feedback"],
    challenges: ["Class imbalance", "Glare artifacts", "Sub-100ms inference"],
    benchmarks: [
      { label: "Detection F1", value: "0.96" },
      { label: "Inference Latency", value: "42 ms" },
      { label: "False Positive", value: "1.8%" }
    ],
    tech: ["PyTorch", "CUDA", "TensorRT", "OpenCV"],
    outcome: "Cut manual inspection load by 58% with traceable defect reports.",
    github: "https://github.com/your-username/ai-inspection",
    demo: "https://example.com/ai-inspection"
  },
  {
    title: "Real-time Embedded Controller",
    image: `${assetBase}/bg.png`,
    description: "Deterministic RTOS controller for electro-mechanical synchronization and fault-tolerant actuation.",
    architecture: ["RTOS Scheduler", "CAN Bus", "PID Cascade", "Safety Layer"],
    challenges: ["Jitter control", "Thermal variance", "Fail-safe recovery"],
    benchmarks: [
      { label: "Loop Jitter", value: "0.11 ms" },
      { label: "Bus Throughput", value: "95%" },
      { label: "Fault Recovery", value: "120 ms" }
    ],
    tech: ["C++", "FreeRTOS", "STM32", "CAN"],
    outcome: "Improved deterministic timing by 34% versus legacy controller.",
    github: "https://github.com/your-username/embedded-controller",
    demo: "https://example.com/embedded-controller"
  },
  {
    title: "Industrial IoT Monitoring",
    image: `${assetBase}/bg.png`,
    description: "Predictive diagnostics platform that correlates vibration, thermal, and current signatures.",
    architecture: ["Edge Collector", "MQTT Broker", "Time-Series DB", "Anomaly Engine"],
    challenges: ["Noisy sensors", "Bandwidth limits", "Legacy PLC integration"],
    benchmarks: [
      { label: "Alert Precision", value: "93%" },
      { label: "Data Freshness", value: "1.2 s" },
      { label: "Downtime Reduction", value: "22%" }
    ],
    tech: ["Python", "MQTT", "InfluxDB", "Grafana"],
    outcome: "Enabled condition-based maintenance across 6 production cells.",
    github: "https://github.com/your-username/industrial-iot",
    demo: "https://example.com/industrial-iot"
  },
  {
    title: "Robotic Arm Kinematics",
    image: `${assetBase}/bg.png`,
    description: "Inverse kinematics and trajectory optimization for a 6-DoF collaborative manipulator.",
    architecture: ["Kinematic Solver", "Trajectory Planner", "Collision Guard", "Servo Interface"],
    challenges: ["Singularity handling", "Joint limits", "Realtime interpolation"],
    benchmarks: [
      { label: "Path Error", value: "1.9 mm" },
      { label: "Cycle Time", value: "2.8 s" },
      { label: "Repeatability", value: "99.2%" }
    ],
    tech: ["ROS2", "MoveIt", "C++", "Gazebo"],
    outcome: "Raised pick-place repeatability for precision assembly tasks.",
    github: "https://github.com/your-username/robotic-arm-kinematics",
    demo: "https://example.com/robotic-arm"
  },
  {
    title: "Drone Flight Stabilization",
    image: `${assetBase}/bg.png`,
    description: "Adaptive attitude control with disturbance rejection for UAV flight in gusty conditions.",
    architecture: ["State Estimator", "Adaptive Controller", "Flight Stack", "Telemetry"],
    challenges: ["Wind disturbance", "Sensor bias", "Power constraints"],
    benchmarks: [
      { label: "Settling Time", value: "0.8 s" },
      { label: "RMS Attitude Error", value: "1.7 deg" },
      { label: "Stability Margin", value: "+38%" }
    ],
    tech: ["PX4", "MAVLink", "C++", "MATLAB"],
    outcome: "Improved hover stability by 29% under dynamic disturbances.",
    github: "https://github.com/your-username/drone-flight-stabilization",
    demo: "https://example.com/drone-flight"
  }
];

export const timelineItems = [
  {
    year: "2026",
    title: "Lead Robotics Systems Engineer",
    subtitle: "Autonomous Mobility Program",
    type: "Mission Milestone",
    details: "Commissioned multi-robot orchestration stack with closed-loop fleet diagnostics and autonomous dispatch."
  },
  {
    year: "2025",
    title: "Embedded AI Deployment",
    subtitle: "Industrial Vision Program",
    type: "R&D",
    details: "Transferred defect detection models from lab to line with hardware acceleration and confidence calibration."
  },
  {
    year: "2024",
    title: "Robotics Digital Twin Initiative",
    subtitle: "Cyber-Physical Research Group",
    type: "Research",
    details: "Built synchronized simulation and plant telemetry environment for predictive control validation."
  },
  {
    year: "2023",
    title: "B.Eng. Mechatronics Engineering",
    subtitle: "University of Engineering",
    type: "Education",
    details: "Graduated with concentration in robotics, autonomous systems, and embedded control theory."
  }
];

export const publications = [
  {
    title: "Robust Sensor Fusion for Indoor Autonomous Navigation in Dynamic Industrial Environments",
    venue: "International Conference on Intelligent Robotics Systems",
    year: "2026",
    type: "Conference Paper"
  },
  {
    title: "Designing Low-Latency Edge Vision Pipelines for Real-Time Defect Detection",
    venue: "Journal of Industrial AI Applications",
    year: "2025",
    type: "Journal Article"
  },
  {
    title: "Digital Twin Assisted Control Validation for Collaborative Manipulators",
    venue: "IEEE Mechatronics Whitepaper Series",
    year: "2025",
    type: "Whitepaper"
  },
  {
    title: "Patent Placeholder: Fault-Tolerant Actuation for Safety-Critical Robotic Cells",
    venue: "Patent Filing Draft",
    year: "Pending",
    type: "Patent"
  }
];

export const telemetrySeries = [
  26, 42, 37, 58, 54, 63, 48, 70, 67, 74, 61, 69, 75, 72, 83, 78, 86, 81
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  { label: "Google Scholar", href: "https://scholar.google.com" },
  { label: "Email", href: "mailto:you@example.com" }
];

export const contactEndpoints = [
  "Location: Ho Chi Minh City, Vietnam",
  "Availability: Open to full-time / research roles",
  "Response time: typically within 24 hours"
];
