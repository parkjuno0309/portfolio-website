// Images
import KinetikLogo from "./images/kinetik_logo.png";
import SparkLabsLogo from "./images/sparklabs_logo.png";
import ClarinsLogo from "./images/clarins_logo.png";

const EXPERIENCES = [
    {
        company: "Kinetik",
        website: "https://kinetik.care",
        title: "Software Engineer Intern",
        startDate: "June 2023",
        endDate: "August 2023",
        location: "New York, NY",
        skills: [
            "JavaScript",
            "Web Development",
            "React.js",
            "Node.js",
            "MongoDB",
            "Redux",
            "AWS",
            "Git",
            "Agile",
            "Jira",
            "REST API",
            "Bitbucket",
        ],
        // description: 'This was a cool job.',
        bullets: [
            "Developed a full-stack trip-scheduling feature using React and Node.js that pulls trip data from MongoDB",
            "Designed a scalable backend system in JavaScript using AWS Lambda for a new trip broker integration, handling trip state webhook events every 3 seconds for 500+ concurrent trips",
            "Created REST API routes for trip broker revenue and profit/loss data, supporting 10,000+ queries per month",
            "Refactored front-end code of trip-scheduler to implement RTK Query, reducing page load time by 35%",
        ],
        logo: KinetikLogo,
    },
    {
        company: "SparkLabs",
        website: "https://sparklabs.co.kr/kr/",
        title: "Software Engineer Intern",
        startDate: "June 2022",
        endDate: "August 2022",
        location: "Seoul, KR",
        skills: [
            "Python",
            "Scripting",
            "Data Science",
            "Regression Analysis",
            "Pandas",
            "Seaborn",
            "AI",
        ],
        // description: 'This was a cool job.',
        bullets: [
            "Built a Venture Capital AI using Python and Pandas to analyze startup growth and predict fund outputs",
            "Utilized regression analysis and machine learning to develop models that predict startup performance",
            "Programmed a Python script that scrapes data for 600+ startups from VC analysis websites for market research",
        ],
        logo: SparkLabsLogo,
    },
    {
        company: "Clarins Cosmetics",
        website: "https://www.clarinsusa.com/",
        title: "Search Engine Optimization Intern",
        startDate: "June 2021",
        endDate: "August 2021",
        location: "Seoul, KR",
        skills: ["SEO", "Microsoft Office"],
        // description: 'This was a cool job.',
        bullets: [
            "Inputted meta data across 200+ pages into search engine databases, increasing search traffic by 20%",
            "Consolidated daily sales reports in Excel by updating retailer-specific details and outlining financial metrics",
            "Managed 800 shipping orders from 11 online retailers and 39 stores to a point-of-sales system each day",
        ],
        logo: ClarinsLogo,
    },
];

export default EXPERIENCES;
