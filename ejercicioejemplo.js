var agarrouser = document.getElementById("user");
var agarropass = document.getElementById("pass");
var select = document.querySelector('select');
var form = document.querySelector("form")


console.log(select.length)



form.onsubmit = function(evento) {
    evento.preventDefault();
    if (agarrouser.value.length < 3 && agarrouser.value.length > 0 ) {
        agarrouser.classList.add("red")
    };
    if ((agarropass.value.length > 0) && (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ .test(agarropass.value) == false)) {
        agarropass.classList.add("red")
    }
    if ((agarrouser.value.length > 3) && ((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ .test(agarropass.value) == true))) {
        if (select.selectedIndex === 0) {
            location.href = 'https://www.forpet.com.ar/perro-y-gato';
        } else if (select.selectedIndex === 1) {
            location.href = 'https://www.forpet.com.ar/peces';
        } else if (select.selectedIndex === 2) {
            location.href = 'https://www.forpet.com.ar/aves';
    }
}
}





