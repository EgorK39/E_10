// const schalter = document.querySelector(".checkCH");
// console.log(schalter.value)
// schalter.addEventListener('click', function (event) {
//     console.log(event)
// });

function changeTheme(isChecked) {
    if (isChecked) {
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark');

    }

}

const coll = document.getElementsByClassName("content");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.lastElementChild;
        console.log(coll.length, coll[i])
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

