// ─── Portfolio Content Data ───────────────────────────────────────────────────
// All portfolio content is centralised here. Edit this file to update the site.

export const person = {
  name: 'Shivender Singh',
  role: 'Senior SDET | QA Automation Engineer | AI Quality Engineer',
  tagline: 'I design reliable test automation and validate AI-powered systems from requirement to release.',
  availability: 'Available for SDET, QA Automation, and AI Quality Engineering opportunities',
  email: 'shivender339@gmail.com',
  emailAlt: 'shivendersinghlucky@gmail.com',
  phone: '+91 9545285209',
  location: 'Pune, India',
  // Add your actual URLs when ready
  github: '', // e.g. https://github.com/your-handle
  linkedin: '', // e.g. https://linkedin.com/in/your-handle
  // BASE_URL accounts for GitHub Pages subpath hosting (e.g. /repo-name/)
  resumeFile: `${import.meta.env.BASE_URL}ShivenderSingh.pdf`, // Place resume PDF in /public folder
}

export const focusAreas = [
  {
    id: 'automation-architecture',
    label: 'Test Automation Architecture',
    accentColor: 'cyan' as const,
    description:
      'Designing and building scalable, maintainable automation frameworks from the ground up — not just writing test scripts.',
    tags: [
      'Selenium WebDriver', 'Java', 'Python', 'TestNG', 'Cucumber',
      'Page Object Model', 'BDD', 'Keyword-driven Frameworks',
      'Data-driven Testing', 'Reusable Utilities',
    ],
  },
  {
    id: 'enterprise-quality',
    label: 'Enterprise Quality Delivery',
    accentColor: 'lime' as const,
    description:
      'Leading test strategy from requirement intake to release sign-off across Agile sprints and cross-functional teams.',
    tags: [
      'Test Strategy & Estimation', 'Requirement Analysis', 'Functional Testing',
      'Regression Testing', 'Integration Testing', 'System Testing',
      'Exploratory Testing', 'Sanity & Smoke', 'Defect Lifecycle',
      'Release Readiness', 'Stakeholder Reporting',
    ],
  },
  {
    id: 'data-api-platform',
    label: 'Data, API & Platform Validation',
    accentColor: 'amber' as const,
    description:
      'Validating data integrity, transformation pipelines, REST APIs, and containerised environments end to end.',
    tags: [
      'REST API Testing', 'ETL Validation', 'Informatica', 'SQL Server',
      'DBeaver', 'Data Integrity', 'Docker', 'Selenium Grid',
      'Selenoid', 'Zalenium', 'CI/CD', 'Allure Reporting',
    ],
  },
  {
    id: 'ai-quality',
    label: 'AI & Agentic Systems Quality',
    accentColor: 'cyan' as const,
    description:
      'Testing the reliability, safety, and accuracy of RAG pipelines, autonomous AI agents, and LLM-powered applications.',
    tags: [
      'RAG-based Test Generation', 'Dynamic Test Prioritisation',
      'AI Agent Validation', 'LLM Accuracy Testing', 'Prompt Engineering',
      'Bias & Edge Case Testing', 'MCP Tools', 'Human-AI Interaction Testing',
    ],
  },
]

export const caseStudies = [
  {
    id: 'tsys',
    number: '01',
    title: 'Global Payments Platform Quality Engineering',
    org: 'TSYS',
    role: 'Senior Test Analyst / Test Specialist',
    dates: 'July 2021 – Present',
    industry: 'Banking & Payments',
    context:
      'Owned quality engineering for a global payments platform serving merchants, issuers, and consumers across multiple regions. The platform handles high-stakes payment technology including POS systems and card services at enterprise scale.',
    contributions: [
      'Gathered requirements and contributed to test estimation and sprint-level test strategy across Agile delivery cycles.',
      'Designed functional test cases, traceability matrices, query trackers, and root-cause-analysis artefacts.',
      'Built and maintained modular automation scripts using reusable functions and data-driven techniques.',
      'Automated regression suites using Selenium WebDriver, TestNG, and Cucumber; managed framework utilities for the Test Enablement Team.',
      'Supported integration and end-to-end testing in coordination with distributed test engineering teams across geographies.',
      'Investigated test failures, logged defects, and produced execution and status reports.',
      'Validated REST APIs and ETL data pipelines using SQL and Informatica-related workflows for data integrity and transformation accuracy.',
      'Created Python-based test utilities and data validation scripts to automate repetitive tasks and broaden coverage.',
      'Tested RAG-based models and AI-agent workflows for decision quality, user interaction, response handling, prompt quality, bias, and edge cases.',
      'Utilised MCP-oriented tools to improve testing workflows and coverage planning across complex environments.',
    ],
    outcomes: [
      'Sustained quality delivery across multi-region, multi-currency payment processing systems.',
      'Established reusable automation framework utilities adopted across the Test Enablement Team.',
      'Expanded QA coverage into AI and agentic system validation, establishing test patterns for LLM-powered workflows.',
      'Improved test data preparation through Python automation, reducing manual setup effort across the team.',
    ],
    pipeline: [
      'Requirements', 'Sprint Planning', 'Test Design', 'Automation Build',
      'Regression Suite', 'ETL & API Validation', 'AI Agent Testing', 'Release',
    ],
    tags: [
      'Selenium', 'Java', 'Python', 'SQL', 'TestNG', 'Cucumber',
      'Docker', 'Selenium Grid', 'Jira', 'Git', 'RAG', 'Agentic AI',
    ],
  },
  {
    id: 'capgemini',
    number: '02',
    title: 'Automotive Service Journey Automation',
    org: 'Capgemini',
    role: 'Associate Consultant / SDET',
    dates: 'September 2018 – July 2021',
    industry: 'Automotive Services',
    context:
      'Validated an enterprise automotive service management application used for booking, maintenance, and delivery workflows from dealership appointment scheduling through to vehicle handover.',
    contributions: [
      'Supported automation requirements gathering for a Citrix-hosted automotive service application.',
      'Validated the complete booking-to-delivery customer journey across multiple service workflows.',
      'Executed functional, regression, exploratory, integration, system, browser compatibility, ad-hoc, and sanity testing.',
      'Developed and executed Selenium WebDriver automation using TestNG and Cucumber.',
      'Reviewed execution logs, investigated failures, and reported defects via Jira and Bugzilla.',
      'Produced test summary reports, execution status reports, and sprint closeout documentation.',
    ],
    outcomes: [
      'Delivered sustained regression coverage for a complex multi-workflow automotive service application.',
      'Improved automation script reliability through structured POM-based test architecture.',
      'Reduced manual regression effort by expanding the automated test suite across key customer journeys.',
    ],
    pipeline: [
      'Requirement Intake', 'Test Design', 'Manual Execution',
      'Automation (Selenium + TestNG)', 'Defect Logging', 'Summary Reporting',
    ],
    tags: [
      'Selenium WebDriver', 'Java', 'TestNG', 'Cucumber',
      'Jira', 'Git', 'SVN', 'Docker', 'Selenium Grid', 'Zalenium',
    ],
  },
]

export const stackGroups = [
  {
    label: 'Languages',
    tags: ['Java', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Automation & Frameworks',
    tags: [
      'Selenium WebDriver', 'Playwright', 'TestNG', 'Cucumber',
      'Page Object Model', 'BDD', 'Keyword-driven Frameworks',
    ],
  },
  {
    label: 'Infrastructure & Delivery',
    tags: ['Docker', 'Selenium Grid', 'Selenoid', 'Zalenium', 'Git', 'SVN', 'CI/CD', 'Allure'],
  },
  {
    label: 'Data, APIs & Tools',
    tags: [
      'REST API Testing', 'SQL Server', 'DBeaver', 'Jira', 'Bugzilla',
      'Confluence', 'Apache Tomcat', 'WebSphere', 'Liberty',
    ],
  },
  {
    label: 'AI Quality Engineering',
    tags: ['RAG', 'AI Agents', 'LLM Validation', 'Prompt Engineering', 'MCP'],
  },
]

export const experience = [
  {
    id: 'tsys',
    title: 'Test Specialist',
    company: 'TSYS',
    period: 'July 2021 – Present',
    type: 'Full-time',
    expanded: true,
    highlights: [
      'Senior quality engineering across global banking and payments platform.',
      'Built automation framework utilities for the Test Enablement Team.',
      'Pioneered AI and agentic systems testing across LLM and RAG workflows.',
    ],
  },
  {
    id: 'capgemini',
    title: 'Associate Consultant / SDET',
    company: 'Capgemini',
    period: 'September 2018 – July 2021',
    type: 'Full-time',
    expanded: true,
    highlights: [
      'Automation engineering for automotive service management platform.',
      'Delivered end-to-end test coverage from booking to vehicle delivery.',
    ],
  },
  {
    id: 'bntsoft',
    title: 'QA Engineer',
    company: 'BNT-SOFT',
    period: 'December 2017 – September 2018',
    type: 'Full-time',
    expanded: false,
    highlights: [],
  },
  {
    id: 'mograsys',
    title: 'Test Engineer',
    company: 'Mograsys Pvt. Ltd.',
    period: 'September 2017 – December 2017',
    type: 'Full-time',
    expanded: false,
    highlights: [],
  },
  {
    id: 'agilatest',
    title: 'Software Associate',
    company: 'Agilatest Technologies Pvt. Ltd.',
    period: 'June 2016 – September 2017',
    type: 'Full-time',
    expanded: false,
    highlights: [],
  },
]

export const certifications = [
  {
    title: 'ISTQB Certification',
    issuer: 'International Software Testing Qualifications Board',
    year: '2025',
    highlight: true,
  },
  {
    title: 'Associate Cloud Engineering Certification',
    issuer: 'Cloud Provider',
    year: '2021',
    highlight: false,
  },
  {
    title: 'IBM Certified Java',
    issuer: 'IBM — Career Education Program',
    year: '',
    highlight: false,
  },
  {
    title: 'Manual Testing with Selenium WebDriver',
    issuer: 'Training Programme',
    year: '',
    highlight: false,
  },
  {
    title: 'Indian Testing Board Training',
    issuer: 'ITB',
    year: 'May 2015',
    highlight: false,
  },
]
