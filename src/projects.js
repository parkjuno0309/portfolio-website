import React from "react"; // for JSX

// Images
import PortfolioWebsiteImage from "./images/portfolio_website.png";
import NBASimulatorImage from "./images/nba-simulator.png";
import ScoreStoryImage from "./images/score-story.png";
import SpicyMemesImage from "./images/spicy_memes.png";
import BustubImage from "./images/bustub.png";
import NetMetricsImage from "./images/networking.png";
import NcaaAnalysisImage1 from "./images/ncaa-analysis1.png";
import NcaaAnalysisImage2 from "./images/ncaa-analysis2.png";
import NcaaAnalysisImage3 from "./images/ncaa-analysis3.png";

/* Template for Project Object
{
    id: '',
    title: '',
    year: '',
    github: 'https://github.com/parkjuno0309/',
    link: 'https://example.com/',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    blurbs: [
        <>
            This is a template project.
        </>,
    ],
    images: [
        'https://picsum.photos/200/300',
    ],
    demos: [
        <iframe src='https://www.youtube.com/embed/xcJtL7QggTI' title='YouTube video player' allowFullScreen />,
    ],
    isWebsite: true,
}
*/

const PROJECTS = [
    {
        id: "nba-simulator",
        title: "NBA Simulator",
        year: "2021",
        github: "https://github.com/parkjuno0309/NBA-Simulator",
        link: "https://github.com/parkjuno0309/NBA-Simulator",
        skills: [
            "Python",
            "Pandas",
            "PIL",
            "App Development",
            "API",
            "Data Science",
            "Git",
        ],
        blurbs: [
            <>
                As a passionate basketball enthusiast, I developed the NBA
                Simulator, an egaging project that combines my love for the game
                and my technical expertise. This simulator offers users the
                opportunity to step into the shoes of an NBA coach, strategizing
                and making real-time decisions to lead their team to victory.
                <br></br>
                <br></br>
                The NBA Simulator allows users to select their favorite team,
                featuing real rosters from the 2017-2018 seasons. Each player's
                statistics are integrated into the game through APIs to ensure
                realistic and dynamic gameplay. Users can adjust their team
                strategy during the game, choosing to make substitutions or
                focusing on aspects such as shooting more three-pointers or
                enhancing their passing game, to counter the AI-controlled
                opponent.
                <br></br>
                <br></br>
                This project was created for CS 15-112: Fundamentals of
                Programming at CMU. I worked individually in designing the
                system architecture, developing the application from scratch.
                The project was given a grade of "A".
            </>,
        ],
        images: [NBASimulatorImage],
        demos: [
            <iframe
                src="https://www.youtube.com/embed/N2I9B5RyJNs"
                title="NBA Simulator (Demo)"
                allowFullScreen
            />,
        ],
        isWebsite: true,
    },
    {
        id: "score-story",
        title: "Score Story",
        year: "2023",
        github: "https://github.com/parkjuno0309/ScoreStory",
        link: "https://github.com/parkjuno0309/ScoreStory",
        skills: [
            "Web Development",
            "Python",
            "Flask",
            "CSS",
            "Generative AI",
            "GPT",
            "Agile",
            "Scrum",
        ],
        blurbs: [
            <>
                At Northwestern University, I collaborated on a project named
                ScoreStory, aimed at transforming the way fans experience
                baseball games. Traditional sports statistics can often be
                overwhelming and lack content, making it hard for fans to grasp
                the full narrative of a game. Our solution, ScoreStory,
                addresses this usse by converting complex play-by-play data into
                compelling easy-to-understand stories, enhancing the
                game-watching experience by providing a narrative context to the
                raw numbers.
                <br></br>
                <br></br>
                ScoreStory leverages advanced data parsing and natural language
                processing technologies to synthesize game data into narratives.
                The system architecture begins with user input specifying a
                game's date and team. It then fetches detailed play-by-play data
                through a sports API, which is processed and distilled into key
                statistics. These statistics are used to generate prompts that
                guide our AI, powered by GPT-4, in crafting engaging game
                narratives. This backend processing pipeline was implemented
                using Python and Flask, ensuring robust performance and
                scalability. Our front-end, designed for simplicity and ease of
                use, allows users to interact seamlessly with the system, making
                the platform accessible to users with varying levels of
                tech-savvy.
            </>,
        ],
        images: [ScoreStoryImage],
        demos: [
            <iframe
                src="https://www.youtube.com/embed/VUWirIVU7m0"
                title="Score Story (Demo)"
                allowFullScreen
            />,
        ],
        isWebsite: true,
    },
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        year: "2024",
        github: "https://github.com/parkjuno0309/portfolio-website",
        link: "https://github.com/parkjuno0309/portfolio-website",
        skills: [
            "Web Development",
            "CSS",
            "JavaScript",
            "React",
            "React Router",
            "GitHub Pages",
        ],
        blurbs: [
            <>
                You're lookin' at it! I built this website to showcase my skills
                and experience in a unique and creative way. In fact, the only
                external libraries that are used in this project are the
                JavaScript libraries{" "}
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    React
                </a>{" "}
                and{" "}
                <a
                    href="https://reactrouter.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    React Router
                </a>
                . The React JavaScript library uses{" "}
                <a
                    href="https://reactjs.org/docs/introducing-jsx.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    JavaScript XML (JSX)
                </a>{" "}
                for rendering document elements, so no template engine is
                required. And, yes, although it takes more time and effort, no
                CSS frameworks are in use - only pure custom CSS. The benefits
                of using minimal external libraries/frameworks are greater
                control of design and deeper knowledge of programming concepts.
            </>,
        ],
        images: [PortfolioWebsiteImage],
        demos: [],
        isWebsite: true,
    },
    // TODO: Insert Kinetik project?
    {
        id: "spark-labs-p",
        title: "SparkLabs P",
        year: "2022",
        github: "",
        link: "",
        skills: [
            "Python",
            "Scripting",
            "Web Scraping",
            "Data Science",
            "Regression Analysis",
        ],
        blurbs: [
            <>
                During my internship at SparkLab in Seoul, I spearheaded the
                development of an artificial intelligence system designed to
                enhance venture capital investment strategies. First, I
                collected data on startup companies and investment funds in
                Korea, scraping data from venture capital analysis platforms,
                including DIVA and DART. Then, utilizing Python, I built an
                program that analyzed startup growth patterns and forecasted
                investment returns using regression analysis and artificial
                intelligence, ensuring our predictions were both accurate and
                actionable. Further details on this project can not be
                disclosed.
                <br></br>
                <br></br>
                During this internship, in preparation for SparkLabs' Demo Day—
                the world's most extensive startup demo event—I conducted
                comprehensive market research to assist startups in optimizing
                their presentations and strategies. My efforts were aimed at
                equipping these companies with the insights needed to stand out
                during the event, thereby maximizing their potential to secure
                crucial investments and partnerships. This role project only
                deepened my expertise in market analysis but also underscored
                the importance of precision and foresight in the venture capital
                industry.
            </>,
        ],
        images: [],
        demos: [],
        isWebsite: true,
    },
    {
        id: "spicy-color-memes",
        title: "Spicy Color Memes",
        year: "2021-2022",
        github: "https://github.com/parkjuno0309/Spicy-Colors-Meme-Generator",
        link: "https://github.com/parkjuno0309/Spicy-Colors-Meme-Generator",
        skills: ["App Development", "Python", "PIL", "Web Scraping"],
        blurbs: [
            <>
                During the annual 15-112 hackathon at CMU, my team and I
                developed a project named Spicy Colors Meme Generator, crafted
                to create customized memes based on user inputs. Within the
                intense 24-hour development period, we engineered a meme
                generator that used web scraping and the Python Imaging Library
                (PIL) to dynamically generate memes. Users could enter a
                message, word, or phrase into a text box, and the application
                would produce a meme incorporating the input in a contextually
                relevant way, whether through image or text.
                <br></br>
                <br></br>
                This project was not only a creative endeavor but also a
                significant learning experience. It introduced me to the basics
                of web scraping and Python scripting, foundational skills that I
                later applied in various internships and projects. Our
                commitment to clean and efficient code structure was recognized
                with the "Best Code Structure" award, a testament to our team's
                skill and dedication in a competitive field of about 70 teams.
                This experience was pivotal in enhancing my technical abilities
                and understanding of user-centered application development.
            </>,
        ],
        images: [SpicyMemesImage],
        demos: [],
        isWebsite: true,
    },
    {
        id: "bustub",
        title: "Bustub DBMS",
        year: "2024",
        github: "",
        link: "",
        skills: ["DBMS", "SQL", "C++"],
        blurbs: [
            <>
                In my CS 339 Introduction to Databases class at Carnegie Mellon
                University, I developed a relational database management system
                called BusTub. This project involved creating a robust DBMS from
                scratch, where I implemented several core components including a
                buffer pool manager, an LRU-K replacer, and a lock manager to
                handle concurrency. My contributions extended to optimizing
                various database operations such as joins, index scans, and the
                use of hash tables. This hands-on experience not only deepened
                my understanding of database internals but also honed my skills
                in building efficient, scalable systems.
                <br></br>
                <br></br>
                BusTub supports basic SQL functionalities and includes an
                interactive shell, making it an excellent educational tool for
                students learning about database systems. Despite being
                developed for academic purposes and not intended for production
                use, the project encapsulates critical aspects of a fully
                functional DBMS. The system was a culmination of rigorous coding
                and design, reflecting the high standards of CMU’s computer
                science curriculum. Our project stood out during the course,
                illustrating practical applications of theoretical database
                concepts and contributing significantly to my technical growth
                in software development.
            </>,
        ],
        images: [BustubImage],
        demos: [],
        isWebsite: true,
    },
    {
        id: "NetMetrics",
        title: "NetMetrics",
        year: "2024",
        github: "https://github.com/parkjuno0309/CS340-Project4",
        link: "https://github.com/parkjuno0309/CS340-Project4",
        skills: [
            "Computer Networking",
            "Python",
            "JSON",
            "openssl",
            "nmap",
            "telnet",
            "nslookup",
        ],
        blurbs: [
            <>
                For my CS 340 Introduction to Networking class, I developed a
                comprehensive tool designed for network exploration and security
                auditing. This project involved writing a Python application
                that takes a list of domains as input, probes these domains in
                various ways, and generates a detailed report on each domain's
                network characteristics and security features. The tool utilizes
                command-line utilities such as openssl, nmap, telnet, and
                nslookup to measure network characteristics effectively. The
                final output is a JSON dictionary that details key network
                metrics for each domain, such as IP addresses and HTTP server
                types, enhancing transparency and security insights.
                <br></br>
                <br></br>
                The learning experience from this project was multifaceted,
                emphasizing the practical application of theoretical knowledge
                in real-world scenarios. I gained a high-level understanding of
                web security protocols and features, and acquired hands-on
                experience in designing software to manage complex, interrelated
                tasks. This project not only bolstered my technical skills in
                utilizing Python and various command-line tools but also
                improved my ability to select appropriate libraries and tools
                for specific tasks. The final product was a robust tool that
                contributed significantly to my portfolio, demonstrating my
                ability to integrate and apply diverse technological concepts
                effectively.
            </>,
        ],
        images: [NetMetricsImage],
        demos: [],
        isWebsite: true,
    },
    {
        id: "ncaa-analysis",
        title: "NCAA Basketball Analysis",
        year: "2023",
        github: "https://github.com/parkjuno0309/ncaa-analysis",
        link: "https://github.com/parkjuno0309/ncaa-analysis",
        skills: [
            "Data Science",
            "Python",
            "HTML",
            "Jupyter Notebook",
            "Anaconda",
            "Pandas",
            "Seaborn",
            "ggplot",
        ],
        blurbs: [
            <>
                For my final project in STAT 302 Data Visualization, I delved
                into the intriguing world of NCAA basketball, focusing on the
                statistical performance of college teams. The dataset I chose
                encapsulates a range of team statistics, driven by my
                longstanding interest in basketball and curiosity to explore
                deeper insights through data visualization. The primary
                objective was to examine the relationship between various
                performance metrics across different conferences, using visual
                tools to illustrate patterns and trends that might not be
                immediately evident through raw data alone.
            </>,
            <>
                The analysis presented several compelling findings. One of the
                key visualizations highlighted the interplay between defensive
                and offensive efficiencies among Division I teams. It revealed
                that teams from Power Five conferences generally exhibit higher
                offensive efficiency with correspondingly lower defensive
                efficiency, indicating a strategic focus on strong, aggressive
                play. In contrast, teams outside these top conferences showed
                varied efficiencies, suggesting different strategic priorities
                or resource allocations.
            </>,
            <>
                Another significant graphic explored the concept of Wins Above
                Bubble (WAB), analyzing how teams' performances compared to the
                baseline expectations for tournament qualification. This
                visualization not only underscored the disparities in team
                performance within and across conferences but also provided
                insights into the selection dynamics of the NCAA tournament.
                Overall, these visualizations brought forward nuanced
                understandings of team strategies and performance, affirming the
                powerful role of data visualization in sports analytics.
            </>,
        ],
        images: [NcaaAnalysisImage1, NcaaAnalysisImage2, NcaaAnalysisImage3],
        demos: [],
        isWebsite: true,
    },
    {
        id: "quick-click",
        title: "Quick Click",
        year: "2021",
        github: "https://github.com/parkjuno0309/Clicker-Game",
        link: "https://github.com/parkjuno0309/Clicker-Game",
        skills: [
            "C++",
            "Model View Controller (MVC)",
            "Git",
            "Game Development",
        ],
        blurbs: [
            <>
                In my CS 211: Fundamentals to Programming II course at
                Northwestern University, I developed an interactive computer
                game called Quick-click, designed to challenge users with
                dynamic aiming and shooting tasks. The game features randomly
                moving targets that vary in velocity and size, creating a
                progressively challenging environment for players.
                <br></br>
                <br></br>
                Utilizing C++ and graphic libraries, the game incorporates
                various elements such as different colored targets worth varying
                points, power-ups to enhance gameplay, and a timer to track game
                duration. The gameplay is straightfoward yet engaging: players
                use the mouse to aim and shoot at moving targets, with each hit
                scoring points based on the target's color. This project not
                only tested my abilities in game design and programming but also
                in implementing user interaction through graphical interfaces
                and sound integration.
            </>,
        ],
        images: [],
        demos: [],
        isWebsite: true,
    },
];

export default PROJECTS;
