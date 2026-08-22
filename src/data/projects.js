// Project content is structured for the dashboard cards first, with the full case study below.
// Keep metrics evidence-based; replace placeholders only with measured project results.

const projects = [
  {
    id: "delinquency-prediction",
    status: "completed",
    category: "Risk Analytics",
    title: "Identifying High-Risk Customers Before Delinquency",
    tagline: "Risk classification optimized to prioritize the detection of potential delinquents.",
    impact: "Built an interpretable risk-scoring workflow focused on finding potential delinquents while explicitly auditing the false negatives the model misses.",
    metrics: [
      ["PRIMARY METRIC", "Recall-first", "Class 1"],
      ["DATA", "Customer risk", "Mixed features"],
    ],
    method: ["Class-imbalance analysis", "Recall optimization", "SHAP explainability"],
    techContext: [
      ["Python", "Modeling"],
      ["Pandas", "Preparation"],
      ["Scikit-learn", "Evaluation"],
      ["SHAP", "Explainability"],
    ],
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
    github: "https://github.com/Sivaan66/Customer-Delinquency-Risk-Analysis",
    demo: null,
  },
  {
    id: "fopid-cruise-control",
    status: "completed",
    category: "Optimization / Control",
    title: "Optimizing Vehicle Speed Under Disturbance",
    tagline: "FOPID control tuned to balance tracking accuracy, overshoot, and settling time.",
    impact: "Designed and optimized a fractional-order PID controller to balance vehicle speed tracking and transient-response performance.",
    metrics: [
      ["PRIMARY METRIC", "Transient response", "Simulation"],
      ["OPTIMIZER", "M-AHA", "Parameter search"],
    ],
    method: ["Vehicle modelling", "FOPID design", "M-AHA optimization"],
    techContext: [
      ["MATLAB", "Simulation"],
      ["Simulink", "System model"],
      ["FOPID", "Controller"],
      ["M-AHA", "Optimization"],
    ],
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
    github: "https://github.com/Sivaan66/FOPID-Cruise-Control_m-AHA",
    demo: null,
  },
  {
    id: "genai-project-placeholder",
    status: "planned",
    category: "Generative AI / LLMs",
    title: "Building an AI-Powered Analytics Workflow",
    tagline: "Research preview: connecting structured analysis, LLM reasoning, and automated action.",
    impact: "Exploring how generative AI can turn analytical outputs into practical, repeatable business workflows.",
    metrics: [
      ["STATUS", "Research", "Preview"],
      ["FOCUS", "LLM + Analytics", "Workflow"],
    ],
    method: ["Structured data analysis", "LLM reasoning", "Workflow automation"],
    techContext: [
      ["Python", "Data / orchestration"],
      ["LLMs", "Reasoning layer"],
      ["Prompting", "Structured analysis"],
      ["APIs", "Integration"],
    ],
    problem:
      "This slot is reserved for an upcoming project applying large language models and generative AI to a practical automation or data-analysis workflow.",
    approach: [
      "Research direction: connect structured data preparation and analytical outputs to an LLM reasoning layer.",
      "Explore reliable prompting and structured outputs rather than treating the LLM as an unbounded chatbot.",
      "Design the workflow toward an actionable automation layer with appropriate validation and human oversight.",
    ],
    tech: ["Generative AI", "LLM Applications", "AI Automation"],
    results: [],
    github: "https://github.com/Sivaan66",
    demo: null,
  },
];

export default projects;
