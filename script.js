// Article data
const techArticles = [
    { text: "How to Cross The SDE 1 to SDE 2 Gap (backend version)", filename: "cross_sde1_sde2.html", date: "24th Jul, 2025" },
    { text: "Optimize Image Handling in your Personal Website", filename: "optimize_image_handling.html", date: "15th Aug, 2025" },
];

const lifeArticles = [
    { text: "The Joy of Trekking", filename: "joy_of_trekking.html", date: "12th May, 2025" },
    { text: "A Beginner's Guide to Japanese Light Novels", filename: "japanese_light_novels.html", date: "29th Jul, 2025" }, //It's me, I'm the beginner
    { text: "Vietnam Tips, Tricks and Etiquette", filename: "vietnam_guide.html", date: "10th Aug, 2025" },
];

// Header component generator
function generateHeader(options = {}) {
    const {
        showHomeLink = false,
        profilePicPath = "assets/life_profile_pic.jpeg",
        homeLinkPath = "index.html"
    } = options;
    
    const homeNavHTML = showHomeLink ? `
            <nav class="back-nav">
                <a href="${homeLinkPath}">home</a>
            </nav>` : '';
    
    return `
        <header>
            <h1>Satdhruti Paul</h1>
            <img src="${profilePicPath}" alt="Profile Picture" class="profile-pic" id="profile-pic">${homeNavHTML}
        </header>
    `;
}

// Initialize header on page load
function initializeHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;
    
    // Determine if we're in a subdirectory and need home link
    const isSubPage = window.location.pathname.includes('/tech_blogs/') || window.location.pathname.includes('/life_blogs/');
    const profilePath = isSubPage ? "../assets/life_profile_pic.jpeg" : "assets/life_profile_pic.jpeg";
    const homePath = isSubPage ? "../index.html" : "index.html";
    
    headerContainer.innerHTML = generateHeader({
        showHomeLink: isSubPage,
        profilePicPath: profilePath,
        homeLinkPath: homePath
    });
}

function generateArticleHTML(articles, articleType) {
    // Determine the correct path based on current page location
    const isSubPage = window.location.pathname.includes('/tech_blogs/') || window.location.pathname.includes('/life_blogs/');
    const pathPrefix = isSubPage ? '' : `${articleType}_blogs/`;
    
    return articles.map(article => 
        `<li><a href="${pathPrefix}${article.filename}">${article.text}</a><span class="article-date"> - ${article.date}</span></li>`
    ).join('');
}

function showSection(sectionName) {
    const techSection = document.getElementById('tech-section');
    const lifeSection = document.getElementById('life-section');
    
    // Show the selected section and populate with data
    if (sectionName === 'tech') {
        const techList = techSection.querySelector('ul');
        techList.innerHTML = generateArticleHTML(techArticles, 'tech');
    } else if (sectionName === 'life') {
        const lifeList = lifeSection.querySelector('ul');
        lifeList.innerHTML = generateArticleHTML(lifeArticles, 'life');
    }
    
    // Prevent default link behavior that causes page to jump
    return false;
}

// Auto-populate content when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize header component
    initializeHeader();
    
    // Check if we're on a tech page
    const techList = document.getElementById('tech-articles-list');
    if (techList && typeof techArticles !== 'undefined') {
        techList.innerHTML = generateArticleHTML(techArticles, 'tech');
    }
    
    // Check if we're on a life page
    const lifeList = document.getElementById('life-articles-list');
    if (lifeList && typeof lifeArticles !== 'undefined') {
        lifeList.innerHTML = generateArticleHTML(lifeArticles, 'life');
    }
});
