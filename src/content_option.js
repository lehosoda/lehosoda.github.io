const logotext = "LOGAN";
const meta = {
    title: "Logan Hosoda",
    description: "I’m a student at the University of Washington, Seattle",
};
const introdata = {
    title: "Logan E. Hosoda",
    your_img_url: require("../src/assets/images/aiart.jpeg"),
};



// About
const dataabout = {
    title: "About Me",
    aboutme: `I'm a 4th year at the University of Washington, Seattle pursuing a dual degree in 
    <b class="highlight">Informatics</b> and <b class="highlight">Mathematics</b> with minors in 
    <b class="highlight">Applied Math</b> and <b class="highlight">Data Science</b>. <br> <br> 
    Being an interdisciplinary academic, my priorities are building relationships with my peers, giving back to the communities that have allowed me to be successful, and embracing new learning opportunities.<br> <br> 
    I'm currently looking for roles in the <b class="highlight">project management</b>, 
    <b class="highlight">data analysis</b>, or <b class="highlight">actuarial sciences</b>, 
    but I'm open to taking on other roles as well! <br> <br> 
    In my free time, you can find me exploring the Seattle/Hawai'i foodie scenes, scrapbooking, brushing up on my Japanese, or taking film photos on my Konica Auto S <br> <br> 
    Also take a look at my <b class="highlight"><a href="https://docs.google.com/document/d/1kD6mWOvxsrmQzGGwGzepLM9isjga_FJ7/edit?usp=drive_link&ouid=104270004013912387034&rtpof=true&sd=true" class="highlight" target="_blank">resume</a></b> <3`,
};
const worktimeline = [{
        jobtitle: "Cyber Risk and Regulatory Consulting Intern",
        where: "PricewaterhouseCoopers",
        date: "2024",
    },
    {
        jobtitle: "Harware Engineering Intern",
        where: "Spirent Communications",
        date: "2023",
    }
];
const leadership = [{
        title: "Webmaster",
        rso: "Hui Hoaloha 'Ulana",
        date: "2023-Present"
    },
    {
        title: "Director of Finance",
        rso: "iQueeries",
        date: "2024-Present"
    },
    {
        title: "Graphic Design Officer",
        rso: "Husky Math Club",
        date: "2024-Present"
    },
    {
        title: "Journalist",
        rso: "Fitted.",
        date: "2024-Present"
    },
    {
        title: "Data Analyst",
        rso: "Hawaii Hunt",
        date: "2024-2024"
    },
    {
        title: "Director of Public Relations",
        rso: "Alpha Theta Delta",
        date: "2023-2024"
    },
    {
        title: "Layout Designer",
        rso: "Voyage",
        date: "2022-2024"
    },
    {
        title: "New Member Educator",
        rso: "Alpha Theta Delta",
        date: "2022-2022"
    }
];
const awards = [{
    title: "GeoAI Prompt Contest 2024, Honorable Mention",
    description: `The contest seeks to provoke reflection on the implications of AI, including the biases inherent in AI models and the societal impacts 
    they may cause. By raising awareness of these potential issues, we encourage participants to consider and critique how to responsibly use AI for social 
    good while exploring their creativity with the technology.  <br> <br>
    <b class="highlight"><a href="https://geography.washington.edu/news/2024/12/12/announcement-winners-2024-geoai-prompt-contest" class="highlight" target="_blank">Link to Article</a></b>`,
},
{
    title: "GeoAI Prompt Contest 2023, 2nd Place",
    description: `By harnessing generative Artificial Intelligence, the contest fosters deep reflection and artistic expression concerning pressing issues 
    such as climate change, food security, social and economic inequality, globalization, and more. <br> <br>
    <b class="highlight"><a href="https://geography.washington.edu/news/2023/11/16/announcement-winners-geoai-prompt-contest" class="highlight" target="_blank">Link to Article</a></b>`,
},
{
    title: "Dean's List",
    description: `The Dean's List Scholarship is awarded to students at the University of Washington who attain a GPA of 3.5 or higher in at least 12 graded credits.  
    <br> <br>Awarded autumn 2021, spring 2023, autumn 2023`,
},
];
const infocoursework = [
    {
        title: "Special Topics in Informatics: Algorithms and Society",
        course: "INFO 498"
    },
    {
        title: "Information, Technology, and Culture in Modern, Sungkyunkwan University, South Korea",
        course: "INFO 497/LIS 519"
    },
    {
        title: "Product and Information Systems Management",
        course: "INFO 380"
    },
    {
        title: "Design Methods",
        course: "INFO 360"
    },
    {
        title: "Information Ethics and Society",
        course: "INFO 350"
    },
    {
        title: "Client Side Development",
        course: "INFO 340"
    },
    {
        title: "Introduction to Information Architecture",
        course: "INFO 331"
    },
    {
        title: "Databases and Data Modeling",
        course: "INFO 330"
    },
    {
        title: "Information Assurance and Cybersecurity",
        course: "INFO 310"
    },
    {
        title: "Research Methods",
        course: "INFO 300"
    },
    {
        title: "Foundational Skills for Data Science",
        course: "INFO 201"
    },
    {
        title: "Intellectual Foundations of Informatics",
        course: "INFO 200"
    },
];
const mathcoursework = [
    {
        title: "Numerical Analysis I",
        course: "MATH 464"
    },
    {
        title: "Probability I",
        course: "MATH 394"
    },
    {
        title: "Discrete Mathematical Modeling",
        course: "MATH 381"
    },
    {
        title: "Introduction to Mathematical Reasoning",
        course: "MATH 300"
    },
    {
        title: "Advanced Multivariable Calculus",
        course: "MATH 224"
    },
    {
        title: "Matrix Algebra with Applications",
        course: "MATH 208"
    },
    {
        title: "Introduction to Differential Equations",
        course: "MATH 207"
    },
    {
        title: "Calculus with Analytic Geometry I/II/III",
        course: "MATH 124/125/126"
    },
    {
        title: "Partial Differential Equations and Waves",
        course: "AMATH 353"
    },
    {
        title: "Applied Linear Algebra and Numerical Analysis",
        course: "AMTH 352"
    },
    {
        title: "Introduction to Differential Equations and Applications",
        course: "AMATH 351"
    },
    {
        title: "Beginning Scientific Computing",
        course: "AMATH 301"
    },
];
const csecoursework = [
    {
        title: "Introduction to Database Systems",
        course: "CSE 414"
    },
    {
        title: "Data Structures and Algorithms",
        course: "CSE 373"
    },
    {
        title: "Computer Programming I/II",
        course: "CSE 142/143"
    },
];
const dscoursework = [
    {
        title: "Introduction to Machine Learning",
        course: "CSE/STAT 416"
    },
    {
        title: "Elements of Statistical Methods",
        course: "STAT 311"
    },
    {
        title: "Statistical Computing",
        course: "STAT 302"
    },
];



// Portfolio
const dataportfolio = [{
        img: require("../src/assets/images/hui.png"),
        description: "Hui Hoaloha 'Ulana Website",
        link: "/portfolio/huiwebsite",
    },
    {
        img: require("../src/assets/images/hui.png"),
        description: "Personal Website",
        link: "/portfolio/personalwebsite",
    },
    {
        img: require("../src/assets/images/dmm.png"),
        description: "Discrete Mathematical Modeling",
        link: "/portfolio/discretemathmodel",
    },
    {
        img: require("../src/assets/images/aiart.jpeg"),
        description: "AI Art Study",
        link: "/portfolio/aiart",
    },
    {
        img: require("../src/assets/images/wildcard.jpg"),
        description: "Wild Card",
        link: "/portfolio/wildcard",
    },
];
const huiweb = [
    { src: require("../src/assets/images/huiweb/newweb.png"), caption: "Updated layout of the homepage (React.js)" },
    { src: require("../src/assets/images/huiweb/newoff.png"), caption: "Hoverable officer bios (React.js)" },
    { src: require("../src/assets/images/huiweb/newev.png"), caption: "Outlook calendar embed for event tracking (React.js)" },
    { src: require("../src/assets/images/huiweb/oldweb.png"), caption: "Original layout of the homepage (HTML/CSS)",  alt: "First slide",},
];
const aiart = [
    { src: require("../src/assets/images/aiart/aa1.png"), caption: "AI generated images 1-4"},
    { src: require("../src/assets/images/aiart/aa2.png"), caption: "AI generated images 5-8"},
    { src: require("../src/assets/images/aiart/aa3.png"), caption: "AI generated images 9-12"},
];
const wildcard = [
    { src: require("../src/assets/images/wildcard/wc1.png"), alt: "Slide 1" },
    { src: require("../src/assets/images/wildcard/wc2.png"), alt: "Slide 2" },
    { src: require("../src/assets/images/wildcard/wc3.png"), alt: "Slide 3" },
    { src: require("../src/assets/images/wildcard/wc4.png"), alt: "Slide 4" },
    { src: require("../src/assets/images/wildcard/wc5.png"), alt: "Slide 5" },
    { src: require("../src/assets/images/wildcard/wc6.png"), alt: "Slide 6" },
    { src: require("../src/assets/images/wildcard/wc7.png"), alt: "Slide 7" },
    { src: require("../src/assets/images/wildcard/wc8.png"), alt: "Slide 8" },
    { src: require("../src/assets/images/wildcard/wc9.png"), alt: "Slide 9" },
    { src: require("../src/assets/images/wildcard/wc10.png"), alt: "Slide 10" },
    { src: require("../src/assets/images/wildcard/wc11.png"), alt: "Slide 11" },
    { src: require("../src/assets/images/wildcard/wc12.png"), alt: "Slide 12" },
    { src: require("../src/assets/images/wildcard/wc13.png"), alt: "Slide 13" },
    { src: require("../src/assets/images/wildcard/wc14.png"), alt: "Slide 14" },
    { src: require("../src/assets/images/wildcard/wc15.png"), alt: "Slide 15" },
    { src: require("../src/assets/images/wildcard/wc16.png"), alt: "Slide 16" },
    { src: require("../src/assets/images/wildcard/wc17.png"), alt: "Slide 17" },
    { src: require("../src/assets/images/wildcard/wc18.png"), alt: "Slide 18" },
    { src: require("../src/assets/images/wildcard/wc19.png"), alt: "Slide 19" },
    { src: require("../src/assets/images/wildcard/wc20.png"), alt: "Slide 20" },
    { src: require("../src/assets/images/wildcard/wc21.png"), alt: "Slide 21" },
    { src: require("../src/assets/images/wildcard/wc22.png"), alt: "Slide 22" },
    { src: require("../src/assets/images/wildcard/wc23.png"), alt: "Slide 23" },
    { src: require("../src/assets/images/wildcard/wc24.png"), alt: "Slide 24" },
    { src: require("../src/assets/images/wildcard/wc25.png"), alt: "Slide 25" },
];



// Photography
const photography = [
    {
      img: require("../src/assets/images/photography/Yamagata3.JPG"),
      description: "Japan | 日本",
      link: "/photography/japan", 
    },
    {
      img: require("../src/assets/images/photography/Gyeongju3.JPG"),
      description: "South Korea | 한국",
      link: "/photography/korea",
    },
];
const yamagata = [
    {
        img: require("../src/assets/images/photography/Yamagata1.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Yamagata2.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Yamagata3.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Yamagata4.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Yamagata5.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Yamagata6.JPG"),
    },
];
const kyoto = [
    {
        img: require("../src/assets/images/photography/Kyoto1.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Kyoto2.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Kyoto3.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Kyoto4.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Kyoto5.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Kyoto6.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Kyoto7.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Kyoto8.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Kyoto9.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Kyoto10.JPG"),
    },
];
const tokyo = [
    {
        img: require("../src/assets/images/photography/Tokyo1.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Tokyo2.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Tokyo3.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Tokyo4.JPG"),
    },
];
const andong = [
    {
        img: require("../src/assets/images/photography/Andong1.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Andong2.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Andong3.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Andong4.JPG"),
    },
];
const busan = [
    {
        img: require("../src/assets/images/photography/Busan1.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Busan2.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Busan3.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Busan4.JPG"),
    },
];
const gyeongju = [
    {
        img: require("../src/assets/images/photography/Gyeongju1.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Gyeongju2.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Gyeongju3.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Gyeongju4.JPG"),
    },
];
const sokcho = [
    {
        img: require("../src/assets/images/photography/Sokcho1.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Sokcho2.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Sokcho3.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Sokcho4.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Sokcho5.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Sokcho6.JPG"),
    },
];
const seoul = [
    {
        img: require("../src/assets/images/photography/Seoul1.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul2.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul3.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul4.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul5.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul6.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul7.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul8.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul9.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul10.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul11.JPG"),
    },
    {
        img: require("../src/assets/images/photography/Seoul12.JPG"),
    },
];



// Socials/Contact
const contactConfig = {
    YOUR_EMAIL: "lehosoda@gmail.com",
    description: "Feel free to send me a message and I'll get back to you as soon as possible! ",
    LINKEDIN: "https://www.linkedin.com/in/loganhosoda/",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};
const socialprofils = {
    linkedin: "https://www.linkedin.com/in/loganhosoda/",
    pinterest: "https://www.pinterest.com/l_e_journals/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    huiweb,
    aiart,
    wildcard,
    photography,
    yamagata,
    kyoto,
    tokyo,
    andong, 
    busan, 
    gyeongju, 
    sokcho, 
    seoul,
    worktimeline,
    awards,
    infocoursework,
    mathcoursework,
    csecoursework,
    dscoursework,
    leadership,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};