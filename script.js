const butiones = document.getElementById("butao")
const selectGol = document.getElementById("goleiro")
const selctFixo = document.getElementById("fixo")
const ad = document.getElementById("alaDireita")
const al = document.getElementById("alaEsquerda")
const pivas = document.getElementById("pivo")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")
const testp = document.getElementById("testp")
const funcbut = () => {
    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2")
    const img3 = document.getElementById("img3")
    const img4 = document.getElementById("img4")
    const img5 = document.getElementById("img5")
    const testp = document.getElementById("testp")
    if (selectGol.value === "Cassio") {
        img1.src = "assets/Cassio.jpeg"
    }
    if (selectGol.value === "Weverton") {
        img1.src = "assets/we.jpeg"
    }
    if (selctFixo.value === "Andre") {
        img2.src = "assets/andre.jpeg"
    }
    if (selctFixo.value === "Gerson") {
        img2.src = "assets/gerson.jpeg"
    }
    if (ad.value === "Gabigol") {
        img3.src = "assets/gabi.jpeg"
    }
    if (ad.value === "Hulk") {
        img3.src = "assets/Hulk.jpeg"
    }
    if (al.value === "Dudu") {
        img4.src = "assets/dudu.jpeg"
    }
    if (al.value === "Bruno Henrique") {
        img4.src = "assets/bh.jpeg"
    }
    if (pivas.value === "Pedro") {
        img5.src = "assets/pedro.jpeg"
    }
    if ( pivas.value === "Cano"){
        img5.src = "assets/cano.jpeg"
    }
}
    butiones.addEventListener("click", funcbut)  