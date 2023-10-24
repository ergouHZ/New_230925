function loadPage(pageName) {
    // Define the content for each subpage
    var content = {
        home: 'This is the Home page content.',
        about: 'This is the About Us page content.',
        products: 'This is the Our Products page content.',
        contact: 'This is the Contact Us page content.'
    };

    // Load the content into the "content" div
    document.getElementById('content').innerHTML = content[pageName];
}