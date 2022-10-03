let lightTheme = true;

const ToggleTheme = () => {
    lightTheme = !lightTheme;
    
    let docstyle = document.documentElement.style;
    let navbar = document.getElementById('navbar')
    let card = document.getElementsByClassName('card')
    if (lightTheme) {
        docstyle.setProperty('--navbar-color', '#696969');
        docstyle.setProperty('--dropdown-color', '#aaaaaa');
        docstyle.setProperty('--background-color', '#f2f2f2');
        docstyle.setProperty('--text-color', '#000000');
        docstyle.setProperty('--content-background', '#d7d7d7');
        navbar.className = "navbar navbar-expand-lg navbar-light";
        card.className = "card text-bg-light";
    } else {
        docstyle.setProperty('--navbar-color', '#212121');
        docstyle.setProperty('--dropdown-color', '#2c3035');
        docstyle.setProperty('--background-color', '#2d2d2d');
        docstyle.setProperty('--text-color', '#f8f9fa');
        docstyle.setProperty('--content-background', '#202020');
        navbar.className = "navbar navbar-expand-lg navbar-dark";
        card.className = "card text-bg-dark";
    }

    document.getElementById('mode-name').innerHTML = lightTheme ? "Light Mode" : "Dark Mode";
}