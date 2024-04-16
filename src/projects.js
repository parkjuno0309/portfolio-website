import React from 'react'; // for JSX

// Images
import FlopaholicImage from './images/flopaholic.png';
import FlopaholicImage2 from './images/flopaholic2.png';
import PortfolioWebsiteImage from './images/portfolio_website.png';
import PlaylistBridgeImage from './images/playlist_bridge.png';
import ReVUImage from './images/revu.png';
import ReVUImage2 from './images/revu2.png';
import ReVUImage3 from './images/revu3.png';
import ReVUImage4 from './images/revu4.png';

import NBASimulatorImage from './images/nba-simulator.png';
import ScoreStoryImage from './images/score-story.png';

/* Template for Project Object
{
    id: '',
    title: '',
    year: '',
    github: 'https://github.com/ethanratnofsky/',
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
    id: 'nba-simulator',
    title: 'NBA Simulator',
    year: '2021',
    github: 'https://github.com/parkjuno0309/NBA-Simulator',
    link: 'https://github.com/parkjuno0309/NBA-Simulator',
    skills: [
      'Python',
      'Pandas',
      'PIL',
      'App Development',
      'API',
      'Data Science',
      'Git',
    ],
    blurbs: [
      <>
        As a passionate basketball enthusiast, I developed the NBA Simulator, an
        egaging project that combines my love for the game and my technical
        expertise. This simulator offers users the opportunity to step into the
        shoes of an NBA coach, strategizing and making real-time decisions to
        lead their team to victory.
        <br></br>
        <br></br>
        The NBA Simulator allows users to select their favorite team, featuing
        real rosters from the 2017-2018 seasons. Each player's statistics are
        integrated into the game through APIs to ensure realistic and dynamic
        gameplay. Users can adjust their team strategy during the game, choosing
        to make substitutions or focusing on aspects such as shooting more
        three-pointers or enhancing their passing game, to counter the
        AI-controlled opponent.
        <br></br>
        <br></br>
        This project was created for CS 15-112: Fundamentals of Programming at
        CMU. I worked individually in designing the system architecture,
        developing the application from scratch. The project was given a grade
        of "A".
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
    id: 'score-story',
    title: 'Score Story',
    year: '2023',
    github: 'https://github.com/parkjuno0309/ScoreStory',
    link: 'https://github.com/parkjuno0309/ScoreStory',
    skills: [
      'Web Development',
      'Python',
      'Flask',
      'CSS',
      'Generative AI',
      'GPT',
      'Agile',
      'Scrum',
    ],
    blurbs: [
      <>
        At Northwestern University, I collaborated on a project named
        ScoreStory, aimed at transforming the way fans experience baseball
        games. Traditional sports statistics can often be overwhelming and lack
        content, making it hard for fans to grasp the full narrative of a game.
        Our solution, ScoreStory, addresses this usse by converting complex
        play-by-play data into compelling easy-to-understand stories, enhancing
        the game-watching experience by providing a narrative context to the raw
        numbers.
        <br></br>
        <br></br>
        ScoreStory leverages advanced data parsing and natural language
        processing technologies to synthesize game data into narratives. The
        system architecture begins with user input specifying a game's date and
        team. It then fetches detailed play-by-play data through a sports API,
        which is processed and distilled into key statistics. These statistics
        are used to generate prompts that guide our AI, powered by GPT-4, in
        crafting engaging game narratives. This backend processing pipeline was
        implemented using Python and Flask, ensuring robust performance and
        scalability. Our front-end, designed for simplicity and ease of use,
        allows users to interact seamlessly with the system, making the platform
        accessible to users with varying levels of tech-savvy.
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
    id: 'revu',
    title: 'ReVU',
    year: '2022',
    github: 'https://github.com/ethanratnofsky/ReVU',
    link: 'https://apps.apple.com/us/app/revu-by-vsg/id6444248468',
    skills: [
      'Mobile Development',
      'MongoDB',
      'Express.js',
      'React Native',
      'Node.js',
      'REST API',
      'Web Scraping',
      'Mongoose',
      'Heroku',
    ],
    blurbs: [
      <>
        ReVU is a mobile application created for the Vanderbilt Student
        Government to distribute a platform for students to review and rate
        dining halls on campus. The application enables users to post ratings
        and comments related to food quality and customer traffic for individual
        dining halls. Another key feature of this application is the ability for
        users to file complaints that are sent directly to the members of the
        Vanderbilt Student Government.
      </>,
      <>
        This project was created for CS-4278: Principles of Software Engineering
        at Vanderbilt Unviersity. I worked with three other team members in
        communicating with our stakeholders, designing the system architecture,
        developing the application from scratch, and deploying it to the App
        Store.
      </>,
    ],
    images: [ReVUImage, ReVUImage2, ReVUImage3, ReVUImage4],
    demos: [
      <iframe
        src="https://www.youtube.com/embed/2tMv6iRc1cE"
        title="ReVU (Demo)"
        allowFullScreen
      />,
    ],
    isWebsite: false,
  },
  // TODO: Insert Kinetik project?
  {
    id: 'flopaholic',
    title: 'Flopaholic',
    year: '2022',
    github: 'https://github.com/ethanratnofsky/Flopaholic',
    link: 'https://ethanratnofsky.github.io/Flopaholic/',
    skills: [
      'Web Development',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'React Router',
      'GitHub Pages',
    ],
    blurbs: [
      <>
        Flopholic is a React web application that allows users to simulate Texas
        Hold\'em poker hands and test their knowledge of hand rankings. The
        application features a custom, random card generator and a custom
        algorithm for determining the ranking of a given hand. It also includes
        many configurable settings for the user to customize their experience.
      </>,
      <>
        A game version of the application is also in development. The game
        features different game modes and customizable settings. The future
        vision for the game is to implement leaderboards, other game modes, and
        statistics tracking. The game is currently available{' '}
        <a
          href="https://ethanratnofsky.github.io/Flopaholic/#/game"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </>,
    ],
    images: [FlopaholicImage, FlopaholicImage2],
    demos: [],
    isWebsite: true,
  },
  {
    id: 'UFAR',
    title: 'United Front Against Riverblindness',
    year: '2021-2022',
    github: 'https://github.com/ChangePlusPlusVandy/UFAR-frontend',
    link: 'https://www.riverblindness.org/',
    skills: [
      'Mobile App Development',
      'JavaScript',
      'MongoDB',
      'Express.js',
      'React Native',
      'Node.js',
      'REST API',
    ],
    blurbs: [
      <>
        The{' '}
        <a
          href="https://www.riverblindness.org/"
          target="_blank"
          rel="noreferrer"
        >
          United Front Against Riverblindness (UFAR)
        </a>{' '}
        is a non-profit organization that actively fights against deadly
        diseases, such as riverblindness, in the Democratic Republic of the
        Congo. Their medical technicians travel to villages in Africa to
        administer medical treaments and collect data on the health of villages
        and distribution of treaments. The organization has been using paper
        forms to collect this data, which is both inefficient and prone to human
        error. As a member of the Change++ at Vanderbilt University, I
        collaborated with 5 other develoeprs to develop a mobile application for
        UFAR to collect and store data on the health of villages and
        distribution of treaments.
      </>,
      <>
        The primary problem that we were trying to solve was enabling the
        ability for medical technicians to collect and aggregate their data
        digitally. My team and I were faced with several other challenges during
        the development process, such as designing a system architecture that
        would enable the application to be used offline and syncing data between
        devices. Other challenges that we encountered included communicating
        with an international organization, developing the application to be
        used in French, and deploying the application to the Google Play Store.
      </>,
    ],
    images: [],
    demos: [],
    isWebsite: false,
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    year: '2021-2022',
    github: 'https://github.com/ethanratnofsky/Portfolio-Website',
    link: 'https://www.ethanratnofsky.com/',
    skills: [
      'Web Development',
      'CSS',
      'JavaScript',
      'React',
      'React Router',
      'GitHub Pages',
    ],
    blurbs: [
      <>
        You're lookin' at it! I built this website to showcase my skills and
        experience in a unique and creative way. In fact, the only external
        libraries that are used in this project are the JavaScript libraries{' '}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>{' '}
        and{' '}
        <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
          React Router
        </a>
        . The React JavaScript library uses{' '}
        <a
          href="https://reactjs.org/docs/introducing-jsx.html"
          target="_blank"
          rel="noreferrer"
        >
          JavaScript XML (JSX)
        </a>{' '}
        for rendering document elements, so no template engine is required. And,
        yes, although it takes more time and effort, no CSS frameworks are in
        use - only pure custom CSS. The benefits of using minimal external
        libraries/frameworks are greater control of design and deeper knowledge
        of programming concepts.
      </>,
    ],
    images: [PortfolioWebsiteImage],
    demos: [],
    isWebsite: true,
  },
  {
    id: 'plasmid-visualizer',
    title: 'Plasmid Visualizer',
    year: '2021',
    github: '',
    link: '',
    skills: [
      'Web Development',
      'REST API',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'PostgresQL',
    ],
    blurbs: [
      <>
        During my final summer as a Software Engineer Intern{' '}
        <a href="https://www.abbvie.com/" target="_blank" rel="noreferrer">
          <i>AbbVie</i>'s
        </a>{' '}
        Bioresearch Center, I worked with two other student interns to develop
        an entire full stack application from scratch. As a small team, we
        reported to two project managers who simply provided us with a general
        project specification as well as the resources necessary for the
        project's success. The goal of this project was to develop a web
        application with an interactive interface to visualize DNA sequences
        using a privately managed database. While the development of the project
        was primarily collaborative, most of my responsibilities included
        designing and implementing the backend server using a REST API.
        Consequently, I also managed and intitialized the internal custom
        database that was used for the application's functionality. While most
        of my focus for this project was on the backend development, I was able
        to exercise some of my frontend development skills to create temporary
        UIs for testing connection to the backend. My experience with this
        project enabled me to practice my skills and grow as a web developer in
        a professional, collaborative environment.
      </>,
    ],
    images: [],
    demos: [],
    isWebsite: true,
  },
  {
    id: 'mass-spectrometry-toolkit-2',
    title: 'Mass Spectrometry Toolkit 2.0',
    year: '2020-2021',
    github: '',
    link: '',
    skills: [
      'Web Development',
      'REST API',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'Docker',
      'RegEx',
      'PostgresQL',
    ],
    blurbs: [
      <>
        During the prime season of the pandemic, that is the summer and winter
        of 2020 as well as part of the spring of 2021, I was given the
        opportunity to work remotely for{' '}
        <a href="https://www.abbvie.com/" target="_blank" rel="noreferrer">
          <i>AbbVie</i>'s
        </a>{' '}
        Bioresearch Center as a Software Engineer Intern. The many projects I
        was assigned to included a revamp of an existing internal web
        application which was used by scientists to analyze data output from a
        mass spectrometer. The majority of my responsibilities for this project
        consisted of redesigning the frontend UI/UX. For example, I created a
        new color scheme, added an auto-completion feature for a searchable
        dropdown menu, reorganization of UI components, and restoration of
        button functionality. I am grateful for the opportunity that I had to
        take part in this project because it introduced me to the fundamentals
        related to web development including the{' '}
        <a
          href="https://flask.palletsprojects.com/en/2.0.x/"
          target="_blank"
          rel="noreferrer"
        >
          Flask
        </a>{' '}
        web framework and JavaScript library{' '}
        <a href="https://jquery.com/" target="_blank" rel="noreferrer">
          jQuery
        </a>
        . I was also briefly introduced to{' '}
        <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
          Docker
        </a>{' '}
        for isolated container management as well as{' '}
        <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
          PostgreSQL
        </a>{' '}
        for elementary database management of user information. Ultimately, this
        project helped me, significantly, to develop the my preliminary skills
        as a web developer.
      </>,
    ],
    images: [],
    demos: [],
    isWebsite: true,
  },
  {
    id: 'playlist-bridge',
    title: 'Playlist Bridge',
    year: '2020',
    github: 'https://github.com/ethanratnofsky/Playlist-Bridge',
    link: 'https://playlistbridge.herokuapp.com',
    skills: [
      'Web Development',
      'REST API',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    blurbs: [
      <>
        <i>Playlist Bridge</i> is a web application which was built to convert
        music playlists from one streaming service to another. The development
        of the web application was inspired by a request from one of my good
        friends to share my music playlist with him. However, said friend
        streamed music on{' '}
        <a
          href="https://www.apple.com/apple-music/"
          target="_blank"
          rel="noreferrer"
        >
          Apple Music
        </a>{' '}
        and my playlist was created on{' '}
        <a href="https://tidal.com/" target="_blank" rel="noreferrer">
          TIDAL
        </a>
        . Since we did not use the same music streaming service, we were not
        able to easily share music with one another. Also motivated by my then
        recent aquisition of beginner web development skills from my{' '}
        <u>internship in the summer of 2020</u>, I decided to start the
        construction of a web application that would handle bridging the gap
        between music streaming services. Enter <i>Playlist Bridge</i>. This
        project uses a Python backend built on the{' '}
        <a
          href="https://flask.palletsprojects.com/en/2.0.x/"
          target="_blank"
          rel="noreferrer"
        >
          Flask
        </a>{' '}
        web framework. Consequently, the template engine{' '}
        <a
          href="https://jinja.palletsprojects.com/en/3.0.x/"
          target="_blank"
          rel="noreferrer"
        >
          Jinja2
        </a>{' '}
        and JavaScript library{' '}
        <a href="https://jquery.com/" target="_blank" rel="noreferrer">
          jQuery
        </a>{' '}
        are also in use. The{' '}
        <a
          href="https://getbootstrap.com/docs/4.6/getting-started/introduction/"
          target="_blank"
          rel="noreferrer"
        >
          Bootstrap 4
        </a>{' '}
        CSS framework is used as a supplement to custom pure CSS for frontend
        styling.
      </>,
    ],
    images: [PlaylistBridgeImage],
    demos: [],
    isWebsite: true,
  },
];

export default PROJECTS;
