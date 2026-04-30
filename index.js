const showbtn = document.getElementById("show-nav")
const main = document.getElementById("main-part")
const navigation = document.getElementById("nav-part")
const links = document.querySelectorAll(".link")
showbtn.addEventListener("click" , function(){
    navigation.style.display = "flex" ;
    main.style.display = "none"
    showbtn.style.display = "none"
})
links.forEach(function(link) {
    link.addEventListener("click", function () {
        navigation.style.display = "none";
        showbtn.style.display = "block"
        main.style.display = "block";
    });
});
