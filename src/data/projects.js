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
      "Optimized specifically for recall on the risky-customer class to minimize missed delinquencies.",
      "Used SHAP explainability to make flagged predictions auditable rather than treating the model as a black box.",
      "Designed with human oversight and fairness/compliance considerations around model-driven decisions."
    ],
    github: "https://github.com/Sivaan66/Customer-Delinquency-Risk-Analysis",
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
      "Delivered as both a minor project and an extended major-project report on the same system.",
      "Demonstrated how optimization techniques can be applied to classical control-engineering problems."
    ],
    github: "https://github.com/Sivaan66/FOPID-Cruise-Control_m-AHA",
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
      "Created a repeatable Extract → Transform → Load workflow rather than a one-off data-cleaning notebook.",
      "Made reruns idempotent so duplicate observations are removed instead of accumulating.",
      "Added a mock-first testing layer so pipeline functions can be validated without depending on the live API.",
      "Produced a published Paris flood-monitoring dataset with station, date, water-level, alert, quality, and validation fields."
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
      "High Value customers were 21.88% of the customer base but generated 74.15% of total revenue.",
      "Average Month-1 cohort retention was approximately 25%, highlighting a major early-lifecycle drop-off after first purchase.",
      "The At Risk segment was the largest by customer count at 30.31% but represented only 2.43% of total revenue, supporting selective rather than blanket retention spending.",
      "High Value revenue was distributed across a broad product portfolio; the top 100 products accounted for 28.67% of High Value revenue.",
      "The analysis showed that unit volume does not necessarily equal financial value: lower-volume, higher-price products can materially outperform high-volume items on revenue."
    ],
    github: "https://github.com/Sivaan66/Online_retails_CustomerCohort_And_RFM_Analysis_Python_PowerBI",
    demo: null
  }
];

export default projects;
