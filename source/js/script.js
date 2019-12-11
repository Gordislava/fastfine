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

var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});
lazyLoadInstance.update();


var input = document.querySelector("#phone");
    window.intlTelInput(input, {
        allowDropdown: true,
        autoHideDialCode: false,
        autoPlaceholder: 'aggressive',
        dropdownContainer: null,
        excludeCountries: {},
        formatOnDisplay: true,
        geoIpLookup: function (success) {
            $.get("https://ipinfo.io", function () {
            }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                success(countryCode);
            });
        },
        hiddenInput: "",
        initialCountry: 'ru',
        localizedCountries: {},
        nationalMode: false,
        onlyCountries: {},
        placeholderNumberType: "MOBILE",
        preferredCountries: ["ru", "by", "kz", 'ua', 'lv', 'lt', 'ee'],
        separateDialCode: false,
});

var promoButton = document.querySelector(".form__promo");

promoButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoButton.classList.add("active");
});