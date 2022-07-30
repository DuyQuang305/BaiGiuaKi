const displayName = document.querySelectorAll('h3')[0]
const btnRandom = document.querySelector('.btn')
const nameMember = ['Hùng', 'Hoàng', 'Quang', 'Trà My']
const quantityArray  = nameMember.length
        btnRandom.onclick = () => {
                const numberRandom = Math.floor(Math.random()*quantityArray)
                const randomName = nameMember[numberRandom]
                displayName.innerHTML = `Xin chúc mừng bạn <span>${randomName}</span> `
        }




