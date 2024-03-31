function btnclick(e){
    document.getElementById("inp").value += e         
}
function eq (){
    var get =document.getElementById("inp")
    get.value = eval(get.value)
}
function clearall (){
    document.getElementById("inp").value = ''
}
function CLEAR(){
    var get =document.getElementById("inp")
    get.value = get.value.slice(0,-1) 

}