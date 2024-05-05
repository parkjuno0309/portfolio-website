// Images
import KinetikLogo from '/images/kinetik_logo.png';
import SparkLabsLogo from '/images/sparklabs_logo.png';
import ClarinsLogo from '/images/clarins_logo.png';

const EXPERIENCES = [
  {
    company: 'Kinetik',
    website: 'https://kinetik.care',
    title: 'Software Engineer Intern',
    startDate: 'June 2023',
    endDate: 'August 2023',
    location: 'New York, NY',
    skills: [
      'JavaScript',
      'Web Development',
      'React.js',
      'Node.js',
      'MongoDB',
      'Redux',
      'AWS',
      'Git',
      'Agile',
      'Jira',
      'REST API',
      'Bitbucket',
    ],
    // description: 'This was a cool job.',
    bullets: [
      'Developed a Node.js backend API service shared internally to make efficient geographic location data requests',
      'Programmed the new UI for the company’s trip scheduling product by writing front-end code utilizing React-Redux',
      'Refactored front-end code to implement RDK Query, replacing redux-saga to enhance code maintainability and efficiency',
      'Coded a docx to pdf file converter that generates denial letters by dynamically replacing variable tags from templates',
    ],
    logo: KinetikLogo,
  },
  {
    company: 'SparkLabs',
    website: 'https://sparklabs.co.kr/kr/',
    title: 'Software Engineer Intern',
    startDate: 'June 2022',
    endDate: 'August 2022',
    location: 'Seoul, KR',
    skills: [
      'Python',
      'Scripting',
      'Data Science',
      'Regression Analysis',
      'Pandas',
      'Seaborn',
      'AI',
    ],
    // description: 'This was a cool job.',
    bullets: [
      'Built a venture capital AI using Python that analyzed startup growth and predicted fund outputs for investments',
      'Coded program that scraped web data from venture capital analysis websites such as DIVA and DART',
      'Conducted market research to prepare companies for SparkLabs Demo Day, the world’s largest startup demo day',
    ],
    logo: SparkLabsLogo,
  },
  {
    company: 'Clarins Cosmetics',
    website: 'https://www.clarinsusa.com/',
    title: 'Search Engine Optimization Intern',
    startDate: 'June 2021',
    endDate: 'August 2021',
    location: 'Seoul, KR',
    skills: ['SEO', 'Microsoft Office'],
    // description: 'This was a cool job.',
    bullets: [
      'Inputted meta descriptions and keywords into search engine databases and analyzed outputs to optimize online presence',
      'Consolidated daily sales reports in Excel by updating retailer-specific details and outlining key financial metrics',
      'Managed 800 shipping orders from 11 online retailers and 39 physical stores to a point-of-sales system each day',
    ],
    logo: ClarinsLogo,
  },
];

export default EXPERIENCES;
