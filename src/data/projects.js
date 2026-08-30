// Project content is structured for the dashboard cards first, with the full case study below.
const projects = [
  {
    id: "delinquency-prediction",
    status: "completed",
    category: "Risk Analytics",
    title: "Identifying High-Risk Customers Before Delinquency",
    tagline: "Risk classification optimized to prioritize the detection of potential delinquents.",
    impact: "Built an interpretable risk-scoring workflow focused on finding potential delinquents while explicitly auditing the false negatives the model misses.",
    metrics: [["PRIMARY METRIC", "Recall-first", "Class 1"], ["DATA", "Customer risk", "Mixed features"]],
    method: ["Class-imbalance analysis", "Recall optimization", "SHAP explainability"],
    techContext: [["Python", "Modeling"], ["Pandas", "Preparation"], ["Scikit-learn", "Evaluation"], ["SHAP", "Explainability"]],
    problem: "Lenders lose money not just from defaults, but from failing to catch risky customers early enough to intervene. The goal was to build a model that flags high-risk customers with high recall — missing a risky customer is far more costly than a false alarm.",
    approach: [
      "Built a full preprocessing pipeline: missing-value handling, outlier treatment, and encoding for a mixed categorical/numerical dataset.",
      "Engineered features from raw transaction and account-level data to surface behavioral risk signals.",
      "Trained and compared multiple classification models, tuning decision thresholds specifically to optimize recall on the delinquent class rather than raw accuracy.",
      "Applied SHAP to explain individual predictions — surfacing which factors pushed a specific customer into the high-risk bucket, and auditing which true delinquents the model missed.",
      "Framed a business-automation layer on top of the model: how flagged accounts could route into a review queue with human-in-the-loop oversight."
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "SHAP", "Feature Engineering"],
    results: [
      "Held-out test accuracy was 0.85 across 125 test accounts.",
      "Delinquent-class precision was 1.00, but recall was only 0.05 — the model correctly identified 1 of the 20 truly delinquent test accounts.",
      "Delinquent-class F1-score was 0.10, exposing the weakness hidden by the 0.85 overall accuracy.",
      "ROC-AUC was 0.49 on the held-out test set, indicating weak ranking performance in this first-pass model.",
      "The recall-oriented risk threshold (~0.20 rather than 0.50) flagged 79 of 125 test accounts as risk-sensitive for broader review coverage.",
      "The results support keeping human review in the workflow rather than treating the current model as an autonomous collections decision-maker."
    ],
    github: "https://github.com/Sivaan66/Customer-Delinquency-Risk-Analysis",
    demo: null
  },
  {
    id: "paris-flood-etl",
    status: "completed",
    category: "Data Engineering / ETL",
    title: "Keeping Flood Data Analysis-Ready Automatically",
    tagline: "An incremental ETL pipeline that turns live hydrometric observations into a validated, versioned dataset.",
    impact: "Automated the path from Hub'Eau API observations to a cleaned, deduplicated flood-monitoring dataset published on Kaggle.",
    metrics: [["SOURCE", "5 stations", "Paris monitoring"], ["CADENCE", "Daily maxima", "Water levels"]],
    method: ["Incremental extraction", "Data validation", "Idempotent loading"],
    techContext: [["Python", "Pipeline logic"], ["Pandas", "Transformation"], ["Requests", "API extraction"], ["Kaggle CLI", "Dataset publishing"]],
    problem: "Flood-monitoring data is only useful for analysis when new observations can be collected, standardized, validated, and published without repeatedly rebuilding the dataset. This project builds that repeatable data path for five hydrometric stations around Paris.",
    approach: [
      "Extracted daily maximum water-level observations (HIXnJ) from the French government's Hub'Eau Hydrometry API for five configured monitoring stations.",
      "Made extraction incremental: the pipeline checks the latest date already present and only requests data after that point, avoiding unnecessary API calls.",
      "Transformed and standardized raw observations by parsing dates and numeric fields, translating schema/categories, adding flood-alert logic, and ordering the final columns.",
      "Applied defensive data-quality controls including deduplication, malformed-value handling, missing-file handling, and validation status tracking.",
      "Tested pipeline functions against a synthetic mock API before live execution, allowing development and demonstration offline.",
      "Generated dataset metadata and published the resulting versioned CSV dataset to Kaggle through the Kaggle CLI."
    ],
    tech: ["Python", "Pandas", "NumPy", "Requests", "Kaggle API", "Jupyter"],
    results: [
      "Processed daily maximum water-level observations for 5 configured hydrometric stations around Paris.",
      "Produced one standardized monitoring dataset with station, date, water level, flood-alert, validation, quality, production-method, and location fields.",
      "Incremental extraction ensured reruns request only observations after the latest date already present, avoiding unnecessary historical API retrieval.",
      "Idempotent loading deduplicated repeated observations so rerunning the pipeline does not accumulate duplicate rows.",
      "The full pipeline was mock-tested before live API execution, allowing extraction and transformation logic to be validated offline.",
      "The processed dataset was published as a versioned Kaggle dataset, completing the Extract → Transform → Load → Publish workflow."
    ],
    github: "https://github.com/Sivaan66/ETL-Automation-Pipeline",
    demo: null
  },
  {
    id: "online-retail-rfm-cohort",
    status: "completed",
    category: "Customer Analytics / BI",
    title: "Finding Which Customers Actually Drive Revenue",
    tagline: "Cohort retention, RFM segmentation, product-value analysis, and Power BI reporting from transactional retail data.",
    impact: "Identified a High Value segment representing 21.88% of customers but 74.15% of total revenue, turning transaction history into retention and customer-value decisions.",
    metrics: [["CUSTOMERS", "5,942", "Analyzed"], ["NET REVENUE", "£16.29M", "Analysis period"], ["HIGH VALUE", "74.15%", "Revenue share"], ["M1 RETENTION", "~25%", "Average cohort"]],
    method: ["Cohort retention analysis", "RFM segmentation", "Revenue methodology", "Power BI reporting"],
    techContext: [["Python", "Analysis pipeline"], ["Pandas", "Cleaning & metrics"], ["RFM", "Customer segmentation"], ["Power BI", "Reporting layer"]],
    problem: "The business needed to understand which customers and products actually drive revenue, how customer value changes over time, and how returns and cancellations should be reflected in reporting. The analysis was designed around customer value, retention, segmentation, product performance, and revenue quality.",
    approach: [
      "Cleaned and standardized the Online Retail II transaction data, including dates, quantities, prices, customer identifiers, duplicates, and missing values.",
      "Investigated negative-quantity transactions instead of deleting them blindly, separating 19,493 return/cancellation-related records from 3,457 other negative operational adjustments.",
      "Defined traceable revenue metrics using line amount = quantity × price, separating gross sales, return value, and net revenue.",
      "Built cohort retention analysis by first-purchase month to measure how customers behaved after acquisition; average Month-1 retention was approximately 25%.",
      "Calculated customer Recency, Frequency, and Monetary values and segmented 5,942 customers into High Value, Loyal, Potential, and At Risk groups.",
      "Analyzed products purchased by High Value customers to compare revenue, units sold, and customer reach rather than relying on unit volume alone.",
      "Built a two-page Power BI reporting layer covering revenue, returns, customer activity, monthly/weekly trends, and geographic revenue distribution."
    ],
    tech: ["Python", "Pandas", "Power BI", "RFM", "Cohort Analysis", "Data Cleaning"],
    results: [
      "Analyzed 5,942 customers across the transaction history, with total calculated revenue of £16,289,991.29.",
      "The High Value segment contained 1,300 customers (21.88%) but generated £12,078,942.30, equal to 74.15% of total revenue.",
      "Average Month-1 cohort retention was ~25.0%; the December 2009 cohort was strongest at approximately 37.5% Month-1 retention.",
      "The At Risk segment was the largest at 1,801 customers (30.31%) but contributed only 2.43% of total revenue (£395,897.24).",
      "High Value product analysis covered approximately 5,184 product-level records, and the top 100 products represented 28.67% of High Value revenue.",
      "The analysis quantified 22,950 negative-quantity records: 19,493 linked to C-prefixed returns/cancellations and 3,457 other operational negative adjustments.",
      "The revenue analysis showed that volume and value can diverge: WORLD WAR 2 GLIDERS ASSTD DESIGNS sold 66,059 units for £15,736.37, while REGENCY CAKESTAND 3 TIER sold 18,770 units for £213,890.50."
    ],
    github: "https://github.com/Sivaan66/Online_retails_CustomerCohort_And_RFM_Analysis_Python_PowerBI",
    demo: null
  },
  {
    id: "fopid-cruise-control",
    status: "completed",
    category: "Optimization / Control",
    title: "Optimizing Vehicle Speed Under Disturbance",
    tagline: "FOPID control tuned to balance tracking accuracy, overshoot, and settling time.",
    impact: "Designed and optimized a fractional-order PID controller to balance vehicle speed tracking and transient-response performance.",
    metrics: [["PRIMARY METRIC", "Transient response", "Simulation"], ["OPTIMIZER", "M-AHA", "Parameter search"]],
    method: ["Vehicle modelling", "FOPID design", "M-AHA optimization"],
    techContext: [["MATLAB", "Simulation"], ["Simulink", "System model"], ["FOPID", "Controller"], ["M-AHA", "Optimization"]],
    problem: "Classical PID controllers for vehicle cruise control often struggle to balance fast response with stability under changing conditions. The project explored whether a Fractional-Order PID (FOPID) controller, tuned by a metaheuristic optimizer, could improve the transient response.",
    approach: [
      "Modeled the vehicle cruise-control system as a transfer function and defined the optimization objective.",
      "Implemented a Fractional-Order PID controller with two additional tunable orders (λ, μ) for finer control over system response.",
      "Used the Modified Artificial Hummingbird Algorithm (M-AHA) to search the FOPID parameter space and optimize controller gains.",
      "Simulated the full system in MATLAB/Simulink to validate controller performance under different driving conditions."
    ],
    tech: ["MATLAB", "Simulink", "FOPID Control", "Metaheuristic Optimization"],
    results: [
      "Recorded a sample rise time of approximately 0.66 seconds in the reported simulation results.",
      "Recorded a sample settling time of approximately 1.04 seconds in the reported simulation results.",
      "The reported step response shows minimal overshoot while maintaining the target-speed response.",
      "The Bode-plot analysis reports a phase margin of 72°, indicating a stable closed-loop response in the documented test.",
      "The reported gain margin is infinite, indicating no finite gain-crossover instability point in the documented Bode analysis.",
      "The repository includes the step-response plot, Bode plot, Simulink model, and full technical report as direct evidence of the simulated controller results.",
      "The project reports the optimized FOPID/m-AHA approach as outperforming traditional PID and other metaheuristic methods on the cited benchmark comparison."
    ],
    github: "https://github.com/Sivaan66/FOPID-Cruise-Control_m-AHA",
    demo: null
  }
];

export default projects;
