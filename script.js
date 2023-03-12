function navBarHandler() {
    let navIcon = document.getElementById('nav-icon')
    let dropdownMenu = document.querySelector('.dropdown-content')
    let dropdownMenuLinks = document.querySelectorAll('.dropdown-content a')
    let navBar = document.querySelectorAll('.navbar-links li a')

    navBar.forEach(link => {
        link.addEventListener('click', function (e) {
            navBar.forEach(link => {
                link.classList.remove('active')

                e.currentTarget.classList.add('active')
            })
        })
    })

    const navIconOnClickHandler = function () {
        dropdownMenu.classList.toggle('hidden')
    }

    const dropdownMenuLinksHandler = function (e) {
        dropdownMenuLinks.forEach(link => {
            link.classList.remove('active')

            e.currentTarget.classList.add('active')
            navIconOnClickHandler()
        })
    }


    dropdownMenuLinks.forEach(link => {
        link.addEventListener('click', dropdownMenuLinksHandler)
    })

    navIcon.addEventListener('click', navIconOnClickHandler)
}