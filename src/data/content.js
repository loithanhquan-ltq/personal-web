const assetBase = `${import.meta.env.BASE_URL}assets`;

export const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export const heroTypingPhrases = [
  "Autonomous Systems · Embedded AI · Control Theory",
  "ROS2 · C++ · Sensor Fusion · SLAM",
  "Mechatronics · Robotics · Cyber-Physical Design",
];

export const heroStats = [
  { value: "5+",   label: "Years engineering" },
  { value: "24+",  label: "Systems shipped" },
  { value: "3.2k", label: "GitHub commits" },
];

export const profileSummary = {
  name: "Loi Thanh Quan",
  role: "Mechatronics Engineer",
  bio: "I design autonomous systems where embedded intelligence, precise control, and mechanical engineering converge into real deployed platforms — from factory-floor navigation robots to UAV attitude controllers.",
  portrait: `${assetBase}/quan.jpeg`,
  technicalDomains: [
    "Autonomous navigation & SLAM",
    "Embedded software for robotics",
    "Model-based control systems",
    "Computer vision for industrial QA",
    "Edge AI for cyber-physical automation",
  ],
  researchInterests: [
    "Adaptive control & online parameter estimation",
    "Multi-sensor fusion in uncertain environments",
    "Digital-twin based predictive diagnostics",
    "Safety in human-robot collaboration",
  ],
};

export const skillSet = [
  { name: "C++ / Python",          level: 96, group: "Software" },
  { name: "ROS2",                  level: 93, group: "Robotics" },
  { name: "Robotics",              level: 95, group: "Robotics" },
  { name: "Embedded Software",     level: 94, group: "Embedded" },
  { name: "Control Systems",       level: 92, group: "Control" },
  { name: "Sensor Fusion",         level: 90, group: "Robotics" },
  { name: "AI / ML",               level: 88, group: "Software" },
  { name: "Computer Vision",       level: 87, group: "Software" },
  { name: "Linux Systems",         level: 91, group: "Embedded" },
  { name: "RTOS",                  level: 84, group: "Embedded" },
  { name: "Industrial Automation", level: 86, group: "Control" },
  { name: "FPGA / MCU",            level: 85, group: "Embedded" },
];

export const radarMetrics = [
  { axis: "Software",    value: 94 },
  { axis: "Electronics", value: 89 },
  { axis: "Mechanics",   value: 86 },
  { axis: "Control",     value: 92 },
  { axis: "Autonomy",    value: 90 },
  { axis: "Validation",  value: 88 },
];

export const techStack = [
  { category: "Languages",  items: ["C++", "Python", "MATLAB", "C"] },
  { category: "Robotics",   items: ["ROS2", "MoveIt", "Nav2", "Gazebo", "PX4", "MAVLink"] },
  { category: "AI / Vision", items: ["PyTorch", "TensorRT", "OpenCV", "ONNX"] },
  { category: "Embedded",   items: ["FreeRTOS", "STM32", "CAN Bus", "MQTT"] },
  { category: "Tools",      items: ["Git", "Docker", "Linux", "CMake", "Grafana", "InfluxDB"] },
];

export const projects = [
  {
    title: "Autonomous Navigation Robot",
    description: "Multi-modal navigation stack with localization resilience in dynamic factory corridors. Fuses LiDAR and IMU data through an EKF for robust pose estimation under reflective-surface conditions.",
    architecture: ["LiDAR + IMU Fusion", "EKF Localization", "Model Predictive Control", "Safety Supervisor"],
    challenges: ["Reflective surfaces", "Dynamic obstacles", "Low-light docking"],
    benchmarks: [
      { label: "Localization Error", value: "2.1 cm" },
      { label: "Control Latency",    value: "8.4 ms" },
      { label: "Mission Success",    value: "97.8%" },
    ],
    tech: ["ROS2", "C++", "LiDAR", "EKF", "OpenCV"],
    outcome: "Reduced route failures by 41% across 8-hour continuous operation in production.",
    github: "https://github.com/loithanhquan-ltq",
    demo: null,
    featured: true,
  },
  {
    title: "SLAM Mapping System",
    description: "Hybrid graph-SLAM platform for large indoor environments. Combines visual odometry with pose-graph optimization and a loop-closure detector to maintain globally consistent maps.",
    architecture: ["Visual Odometry", "Pose Graph", "Loop Closure", "Map Optimizer"],
    challenges: ["Sparse features", "Scale drift", "Memory constraints"],
    benchmarks: [
      { label: "Map Consistency", value: "98.2%" },
      { label: "Drift / 100 m",   value: "0.63 m" },
      { label: "Opt. Cycle Time", value: "18 ms" },
    ],
    tech: ["ROS2", "Python", "Ceres", "Open3D"],
    outcome: "Globally consistent maps across a 12,000 m² test facility.",
    github: "https://github.com/loithanhquan-ltq",
    demo: null,
    featured: true,
  },
  {
    title: "AI Vision Inspection Platform",
    description: "Real-time defect analytics for production lines using high-speed optical capture and edge inference.",
    architecture: ["Acquisition Node", "Inference Engine", "Decision Gateway", "PLC Feedback"],
    challenges: ["Class imbalance", "Glare artifacts", "Sub-100 ms inference"],
    benchmarks: [
      { label: "Detection F1",   value: "0.96" },
      { label: "Inference",      value: "42 ms" },
      { label: "False Positive", value: "1.8%" },
    ],
    tech: ["PyTorch", "CUDA", "TensorRT", "OpenCV"],
    outcome: "Cut manual inspection load by 58% with traceable defect reports.",
    github: "https://github.com/loithanhquan-ltq",
    demo: null,
    featured: false,
  },
  {
    title: "Real-time Embedded Controller",
    description: "Deterministic RTOS controller for electro-mechanical synchronization and fault-tolerant actuation.",
    architecture: ["RTOS Scheduler", "CAN Bus", "PID Cascade", "Safety Layer"],
    challenges: ["Jitter control", "Thermal variance", "Fail-safe recovery"],
    benchmarks: [
      { label: "Loop Jitter",    value: "0.11 ms" },
      { label: "Bus Throughput", value: "95%" },
      { label: "Fault Recovery", value: "120 ms" },
    ],
    tech: ["C++", "FreeRTOS", "STM32", "CAN"],
    outcome: "Improved deterministic timing by 34% versus legacy controller.",
    github: "https://github.com/loithanhquan-ltq",
    demo: null,
    featured: false,
  },
  {
    title: "Industrial IoT Monitoring",
    description: "Predictive diagnostics platform correlating vibration, thermal, and current signatures.",
    architecture: ["Edge Collector", "MQTT Broker", "Time-Series DB", "Anomaly Engine"],
    challenges: ["Noisy sensors", "Bandwidth limits", "Legacy PLC integration"],
    benchmarks: [
      { label: "Alert Precision",     value: "93%" },
      { label: "Data Freshness",      value: "1.2 s" },
      { label: "Downtime Reduction",  value: "22%" },
    ],
    tech: ["Python", "MQTT", "InfluxDB", "Grafana"],
    outcome: "Enabled condition-based maintenance across 6 production cells.",
    github: "https://github.com/loithanhquan-ltq",
    demo: null,
    featured: false,
  },
  {
    title: "Robotic Arm Kinematics",
    description: "Inverse kinematics and trajectory optimization for a 6-DoF collaborative manipulator.",
    architecture: ["Kinematic Solver", "Trajectory Planner", "Collision Guard", "Servo Interface"],
    challenges: ["Singularity handling", "Joint limits", "Realtime interpolation"],
    benchmarks: [
      { label: "Path Error",   value: "1.9 mm" },
      { label: "Cycle Time",   value: "2.8 s" },
      { label: "Repeatability", value: "99.2%" },
    ],
    tech: ["ROS2", "MoveIt", "C++", "Gazebo"],
    outcome: "Raised pick-place repeatability for precision assembly tasks.",
    github: "https://github.com/loithanhquan-ltq",
    demo: null,
    featured: false,
  },
  {
    title: "Drone Flight Stabilization",
    description: "Adaptive attitude control with disturbance rejection for UAV flight in gusty conditions.",
    architecture: ["State Estimator", "Adaptive Controller", "Flight Stack", "Telemetry"],
    challenges: ["Wind disturbance", "Sensor bias", "Power constraints"],
    benchmarks: [
      { label: "Settling Time",     value: "0.8 s" },
      { label: "RMS Attitude Err.", value: "1.7°" },
      { label: "Stability Margin",  value: "+38%" },
    ],
    tech: ["PX4", "MAVLink", "C++", "MATLAB"],
    outcome: "Improved hover stability by 29% under dynamic disturbances.",
    github: "https://github.com/loithanhquan-ltq",
    demo: null,
    featured: false,
  },
];

export const timelineItems = [
  {
    year: "2026",
    title: "Lead Robotics Systems Engineer",
    subtitle: "Autonomous Mobility Program",
    type: "Role",
    details: "Commissioned multi-robot orchestration stack with closed-loop fleet diagnostics and autonomous dispatch.",
  },
  {
    year: "2025",
    title: "Embedded AI Deployment",
    subtitle: "Industrial Vision Program",
    type: "R&D",
    details: "Transferred defect detection models from lab to production line with hardware acceleration and confidence calibration.",
  },
  {
    year: "2024",
    title: "Robotics Digital Twin Initiative",
    subtitle: "Cyber-Physical Research Group",
    type: "Research",
    details: "Built synchronized simulation and plant telemetry environment for predictive control validation.",
  },
  {
    year: "2023",
    title: "B.Eng. Mechatronics Engineering",
    subtitle: "University of Engineering",
    type: "Education",
    details: "Graduated with concentration in robotics, autonomous systems, and embedded control theory.",
  },
];

export const publications = [
  {
    title: "Robust Sensor Fusion for Indoor Autonomous Navigation in Dynamic Industrial Environments",
    venue: "International Conference on Intelligent Robotics Systems",
    year: "2026",
    type: "Conference",
  },
  {
    title: "Designing Low-Latency Edge Vision Pipelines for Real-Time Defect Detection",
    venue: "Journal of Industrial AI Applications",
    year: "2025",
    type: "Journal",
  },
  {
    title: "Digital Twin Assisted Control Validation for Collaborative Manipulators",
    venue: "IEEE Mechatronics Whitepaper Series",
    year: "2025",
    type: "Whitepaper",
  },
  {
    title: "Fault-Tolerant Actuation Architecture for Safety-Critical Robotic Cells",
    venue: "Patent Filing",
    year: "Pending",
    type: "Patent",
  },
];

export const socialLinks = [
  { label: "GitHub",         href: "https://github.com/loithanhquan-ltq" },
  { label: "LinkedIn",       href: "https://linkedin.com/in/loithanhquan" },
  { label: "Google Scholar", href: "https://scholar.google.com" },
  { label: "Email",          href: "mailto:loithanhquan@gmail.com" },
];
