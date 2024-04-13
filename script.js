
const menu_mobile = document.getElementById('menu-mobile');
const sidebar = document.getElementById('sidebaar');
const menu = document.getElementById('menu');
const sidebar_list = document.querySelectorAll('#menu li');
const btn = document.getElementsByClassName('sidebar-icon');
const content = document.getElementById('content-container');
const side_icon = document.querySelectorAll('.icon');
const menu_text = document.querySelectorAll('.menu-text');
let isExpanded = true;
let isMenu = true;

// 
const thirdChart = document.getElementById('third');
const second = document.getElementById('second');
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Stocks', 'Bonds', 'Funds', 'ETFs', 'Saving', 'Crypto'],
        datasets: [{
            label: 'types of investement',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let seconChart = new Chart(second, {
    type: 'line',
    data: {
        labels: ['Stocks', 'Bonds', 'Funds', 'ETFs', 'Saving', 'Crypto']
        ,
        datasets: [{
            label: 'Principle Balance',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
});

let third = new Chart(thirdChart, {
    type: 'polarArea',
    data: {
        labels: ['Stocks', 'Bonds', 'Funds', 'ETFs', 'Saving', 'Crypto']
        ,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ],
            tension: 0.1
        }]
    }
});






function handleSidebar() {
    if (isExpanded) {
        menu.style.marginLeft = '0px';
        sidebar.style.width = `70px`;
        content.classList.remove('f-width');
        content.classList.add('h-width');

        side_icon.forEach((icon) => {
            icon.classList.remove('sidebar_expand_icon');
            icon.classList.add('sidebar_unexpand_icon');
        })
        menu_text.forEach((text) => {
            text.style.display = 'none';
        })

        sidebar_list.forEach((li) => {
            li.style.textAlign = 'center';
        })

        isExpanded = false;
    }
    else {
        sidebar.style.width = `300px`;
        content.classList.remove('h-width');
        content.classList.add('f-width');

        side_icon.forEach((icon) => {
            icon.classList.add('sidebar_expand_icon');
            icon.classList.remove('sidebar_unexpand_icon');
        })
        menu_text.forEach((text) => {
            text.style.display = 'inline-block';
        })
        sidebar_list.forEach((li) => {
            li.style.textAlign = 'left';
        })
        menu.style.marginLeft = '50px';
        isExpanded = true
    }
}

function handleMenu() {
    if (isMenu) {
        menu_mobile.style.display = 'inline-block';
        isMenu = false;
    }
    else {
        menu_mobile.style.display = 'none';
        isMenu = true;
    }

}