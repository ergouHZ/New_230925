function loadPage(pageName) {
    // Hide all content sections
    document.getElementById('HomeContent').style.display = 'none';
    document.getElementById('AboutContent').style.display = 'none';
    document.getElementById('ProductsContent').style.display = 'none';
    document.getElementById('ContactContent').style.display = 'none';
    document.getElementById('CalculatorContent').style.display = 'none';

    // Show the selected content section
    document.getElementById(pageName + 'Content').style.display = 'block';
}