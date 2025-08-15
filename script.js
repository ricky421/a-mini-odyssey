// Article data
const techArticles = [
    { text: "How to cross the SDE 1 to SDE 2 gap (backend version)", link: "#", date: "24th Jul, 2025" },
    { text: "Optimize Image Handling in your personal website", link: "#", date: "15th Aug, 2025" },
];

const lifeArticles = [
    { text: "The Joy of Trekking", link: "#", date: "12th May, 2025" },
    { text: "A Beginner's Guide to Japanese Light Novels", link: "#", date: "29th Jul, 2025" }, //It's me, I'm the beginner
    { text: "Vietnam Tips, Tricks and Etiquette", link: "#", date: "10th Aug, 2025" },
];

function generateArticleHTML(articles) {
    return articles.map(article => 
        `<li><a href="${article.link}">${article.text}</a><span class="article-date"> - ${article.date}</span></li>`
    ).join('');
}

function showSection(sectionName) {
    const techSection = document.getElementById('tech-section');
    const lifeSection = document.getElementById('life-section');
    
    // Hide all sections first
    techSection.style.display = 'none';
    lifeSection.style.display = 'none';
    
    // Show the selected section and populate with data
    if (sectionName === 'tech') {
        const techList = techSection.querySelector('ul');
        techList.innerHTML = generateArticleHTML(techArticles);
        techSection.style.display = 'block';
    } else if (sectionName === 'life') {
        const lifeList = lifeSection.querySelector('ul');
        lifeList.innerHTML = generateArticleHTML(lifeArticles);
        lifeSection.style.display = 'block';
    }
    
    // Prevent default link behavior that causes page to jump
    return false;
}
