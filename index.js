const navbutton = document.getElementById('nav-btn')
const navmenu = document.getElementById('nav-menu')
const navclose = document.getElementById('nav-close')

navbutton.addEventListener('change', () => {

    let status = navbutton.checked

    if (status == true) {

        navmenu.style.marginLeft = '0'
        navclose.style.display = 'block'

    } else {

        navmenu.style.marginLeft = '-25rem'
        navclose.style.display = 'none'
    }
})

navclose.addEventListener(`click`, () => {

    navclose.style.display = 'none'
    navmenu.style.marginLeft = `-25rem`
    navbutton.checked = false
})

// Popups

const popup1 = document.getElementById(`popup-0`) // books
const popup2 = document.getElementById(`popup-1`) // sheets
const popup3 = document.getElementById(`popup-2`) // exams

// Cards

const popupbooks = document.getElementById(`popup-books`)
const popupsheets = document.getElementById(`popup-summaries`)
const popupexams = document.getElementById(`popup-exams`)

// Buttons

const popupbooksclose = document.getElementById(`popup-close-0`)
const popupsheetsclose = document.getElementById(`popup-close-1`)
const popupexamsclose = document.getElementById(`popup-close-2`)

const popupbooksbutton = document.getElementById(`btn-books`)
const popupsheetsbutton = document.getElementById(`btn-summaries`)
const popupexamsbutton = document.getElementById(`btn-exams`)

// books

popupbooksbutton.addEventListener(`click`, () => {

    popup1.style.display = `flex`
    setTimeout(() => { popupbooks.style.marginBottom = `0` }, 400)
})

// books close

popup1.addEventListener(`click`, (e) => {

    const id = e.target.id

    if (id == `popup-0`) {

        setTimeout(() => { popup1.style.display = `none` }, 400)
        popupbooks.style.marginBottom = `-400rem`
    }
})

popupbooksclose.addEventListener(`click`, () => {

    setTimeout(() => { popup1.style.display = `none` }, 400)
    popupbooks.style.marginBottom = `-400rem`
})

// sheets

popupsheetsbutton.addEventListener(`click`, () => {

    popup2.style.display = `flex`
    setTimeout(() => { popupsheets.style.marginBottom = `0` }, 400)
})

// sheets close

popup2.addEventListener(`click`, (e) => {

    const id = e.target.id

    if (id == `popup-1`) {

        setTimeout(() => { popup2.style.display = `none` }, 400)
        popupsheets.style.marginBottom = `-400rem`
    }
})

popupsheetsclose.addEventListener(`click`, () => {

    setTimeout(() => { popup2.style.display = `none` }, 400)
    popupsheets.style.marginBottom = `-400rem`
})

// exams

popupexamsbutton.addEventListener(`click`, () => {

    popup3.style.display = `flex`
    setTimeout(() => { popupexams.style.marginBottom = `0` }, 400)
})

// exams close

popup3.addEventListener(`click`, (e) => {

    const id = e.target.id

    if (id == `popup-2`) {

        setTimeout(() => { popup3.style.display = `none` }, 400)
        popupexams.style.marginBottom = `-400rem`
    }
})

popupexamsclose.addEventListener(`click`, () => {

    setTimeout(() => { popup3.style.display = `none` }, 400)
    popupexams.style.marginBottom = `-400rem`
})