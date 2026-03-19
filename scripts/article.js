function openArticle(articleId) {
    document.getElementById('preview-grid').style.display = 'none';
    document.getElementById('page-header').style.display = 'none';
    
    const articles = document.querySelectorAll('.full-article');
    articles.forEach(art => art.classList.remove('active'));
    
    document.getElementById('reader-view').style.display = 'block';
    document.getElementById(articleId).classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeArticle() {
    document.getElementById('reader-view').style.display = 'none';
    document.getElementById('preview-grid').style.display = 'grid';
    document.getElementById('page-header').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}