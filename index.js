const navbutton = document.getElementById('nav-btn')
const navmneu = document.getElementById('nav-menu')
const navclose = document.getElementById('nav-close')

navbutton.addEventListener('change', () => {

    let status = navbutton.checked

    if (status == true) {

        navmneu.style.marginLeft = '0'
        navclose.style.display = 'block'

    } else {
        
        navmneu.style.marginLeft = '-25rem'
        navclose.style.display = 'none'
    }

})