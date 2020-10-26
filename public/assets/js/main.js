const slaides = document.querySelectorAll('.slaider');
let index = 0;
for (let i = 0; i < slaides.length; i++) {

}

document.querySelector(".slick-prev").addEventListener("click", () => {
    const totalSlaides = slaides.length - 1;
    if (index === 0) {
        changeIndex(totalSlaides);
    } else {
        changeIndex(index - 1);
    }

    changeSlaider();
});

document.querySelector(".slick-next").addEventListener("click", () => {
    const totalSlaides = slaides.length - 1;
    if (index === totalSlaides) {
        changeIndex(0);
    } else {
        changeIndex(index + 1);

    }

    changeSlaider();
});

function changeSlaider() {


    for (let i = 0; i < slaides.length; i++) {
        if (i === index) {
            slaides[i].className += ' active';

            console.log(slaides[i]);
        } else {
            slaides[i].className = 'slaider';

        }
    }

}