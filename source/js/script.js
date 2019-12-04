// var input = document.querySelector('#options-gap-input')

// var glide = new Glide('.glide', {
//   gap: input.value,
//   perView: 4
// })

// input.addEventListener('input', function (event) {
//   glide.update({
//     gap: event.target.value
//   })
// })

// glide.mount()



var acc = document.getElementsByClassName("accordeon");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

window.onload = function () {
    initInputs();
};

function initInputs() {
    var customInputs = document.getElementsByClassName("form__item");
    var _loop_1 = function (i) {
        var input = customInputs[i].querySelector("input, textarea");
        if (input.value !== "")
            customInputs[i].classList.add("focused");
        input.addEventListener("focus", function () {
            customInputs[i].classList.add("focused");
        });
        input.addEventListener("focusout", function () {
            if (input.value === "")
                customInputs[i].classList.remove("focused");
        });
    };
    for (var i = 0; i < customInputs.length; i++) {
        _loop_1(i);
    }
}