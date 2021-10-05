function AccionFormulario()
{
    if (document.getElementById("Nombres").value == "" || document.getElementById("Comentario").value == "")
    {
        alert("Es necesario que llenes todos los campos, gracias.");
        return false;
    }
    else{
        return true;
    }
}