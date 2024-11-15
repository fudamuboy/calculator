function calcul(){
    var val1,val2,
    val1=document.getElementById("nbre1").value;
    val2=document.getElementById("nbre2").value;
    var operation=document.getElementById("operation").value;

    console.log(val1+":ilk degeri");
    console.log(val2+":ikinci degeri");

    if(operation=="add")
    {
        var resultat=parseInt(val1)+parseInt(val2);
        document.getElementById("sonuc").value=resultat;
        
    } 
    else if(operation=="remove")
    {
        var resultat=parseInt(val1)-parseInt(val2);
        document.getElementById("sonuc").value=resultat;
    }
    else if(operation=="multiply")
    {
        var resultat=parseInt(val1)*parseInt(val2);
        document.getElementById("sonuc").value=resultat;
    }
    else if(operation=="divide"){
        var resultat=parseInt(val1)/parseInt(val2);
        document.getElementById("sonuc").value=resultat;
    }


 


}

document.getElementById("btn").onclick=calcul;