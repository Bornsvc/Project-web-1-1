const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn-2');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    console.log('menuBtn');
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
    console.log('closeBtn');
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    console.log('DarkMode');
})














const Orders = [
    {
        productName: 'JavaScript Tutorial',
        productNumber: '85743',
        paymentStatus: 'Due',
        status:'Pending'
    },
    {
        productName: 'CSS full Course',
        productNumber: '56789',
        paymentStatus: 'Refunded',
        status:'Declined'
    },
    {
        productName: 'Flex-Box Tutorial',
        productNumber: '62435',
        paymentStatus: 'Paid',
        status:'PenActiveing'
    }
]


