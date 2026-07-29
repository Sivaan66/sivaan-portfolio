// Add a new project by appending a new object to this array.
// No component code needs to change — cards, modals, and the grid
// all render dynamically from this list.
//
// status: "completed" | "in-progress" | "planned"

const projects = [
  {
    id: "delinquency-prediction",
    status: "completed",
    category: "Machine Learning",
    title: "Delinquency Prediction System",
    tagline: "Predicting customer delinquency risk before it happens.",
    problem:
      "Lenders lose money not just from defaults, but from failing to catch risky customers early enough to intervene. The goal was to build a model that flags high-risk customers with high recall — missing a risky customer is far more costly than a false alarm.",
    approach: [
      "Built a full preprocessing pipeline: missing-value handling, outlier treatment, and encoding for a mixed categorical/numerical dataset.",
      "Engineered features from raw transaction and account-level data to surface behavioral risk signals.",
      "Trained and compared multiple classification models, tuning decision thresholds specifically to optimize recall on the delinquent class rather than raw accuracy.",
      "Applied SHAP to explain individual predictions — surfacing which factors pushed a specific customer into the high-risk bucket, and auditing which true delinquents the model missed.",
      "Framed a business-automation layer on top of the model: how flagged accounts could route into a review queue with human-in-the-loop oversight.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "SHAP", "Feature Engineering"],
    results: [
      "Optimized specifically for recall on the risky-customer class to minimize missed delinquencies.",
      "Used SHAP explainability to make every flagged prediction auditable — not a black box.",
      "Designed with a human-oversight and fairness/compliance layer in mind, not just raw model output.",
    ],
    github: "https://github.com/Sivaan66/delinquency-prediction",
    demo: null,
  },
  {
    id: "fopid-cruise-control",
    status: "completed",
    category: "Control Systems / Optimization",
    title: "FOPID-Controlled Cruise Control using Modified Artificial Hummingbird Algorithm",
    tagline: "Bridging control theory and metaheuristic optimization.",
    problem:
      "Classical PID controllers for vehicle cruise control often struggle to balance fast response with stability under changing conditions. The project explored whether a Fractional-Order PID (FOPID) controller, tuned by a metaheuristic optimizer, could outperform conventional tuning.",
    approach: [
      "Modeled the vehicle cruise-control system as a transfer function and defined the optimization objective.",
      "Implemented a Fractional-Order PID controller — extending classical PID with two additional tunable orders (λ, μ) for finer control over system response.",
      "Used the Modified Artificial Hummingbird Algorithm (M-AHA), a metaheuristic optimization technique, to search the FOPID parameter space and find optimal gains.",
      "Simulated the full system in MATLAB/Simulink to validate controller performance under different driving conditions.",
    ],
    tech: ["MATLAB", "Simulink", "FOPID Control", "Metaheuristic Optimization"],
    results: [
      "Delivered as both a minor project and an extended major-project report on the same system.",
      "Demonstrated how optimization algorithms from the ML/AI space can be applied to classical control engineering problems — a direct link between core EE training and optimization-driven AI thinking.",
    ],
    github: "https://github.com/Sivaan66/fopid-cruise-control",
    demo: null,
  },
  {
    id: "genai-project-placeholder",
    status: "planned",
    category: "Generative AI / LLMs",
    title: "GenAI / LLM Application — Coming Soon",
    tagline: "Next up: a Generative AI project applying LLMs to a real workflow.",
    problem:
      "This slot is reserved for an upcoming project applying large language models and generative AI to a practical automation or data-analysis workflow.",
    approach: [
      "Roadmap item — check back soon, or view the GitHub profile for in-progress work.",
    ],
    tech: ["Generative AI", "LLM Applications", "AI Automation"],
    results: [],
    github: "https://github.com/Sivaan66",
    demo: null,
  },
];

export default projects;
