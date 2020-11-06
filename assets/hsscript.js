var highScoreUl = document.getElementById("highScoreUl")



function createList() {
    var currentLocal = JSON.parse(localStorage.getItem("highScoreStore"))
    for (let i = 0; i < currentLocal.length; i++) {
        arrList = document.createElement("li")
        arrList.innerHTML = currentLocal[i]
        arrList.setAttribute("id", i)
        highScoreUl.appendChild(arrList)
    }
}

createList();



