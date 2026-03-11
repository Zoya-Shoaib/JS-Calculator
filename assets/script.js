let input=document.querySelector("#input");
function btn(number){
    input.value+=number;
}
function ac(){
    input.value="";
}
function equalsto(){
    try{

        var solution=eval(input.value);
        input.value=solution;
    }catch(err){
        input.value="Error";
    }
}
function del(){
   input.value= input.value.slice(0,-1)
}