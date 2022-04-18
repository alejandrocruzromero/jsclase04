comprahelado
function comprahelado(){

    const Helado = 20;
	let topping ;
	let valorTopping;
	let total    ;
	let textofinal;
    let precioActual
	topping = ""   ;                        
    valorTopping = 0;

	do {
        precioActual = Helado + valorTopping;
		topping = prompt ("Precio Actual = " + precioActual + "<BR>Seleccione el Topping :<BR> (NO)Sin Topping<BR>	(A)Oreo<BR>	(B)Kitkat<BR>	(C)Brownie<BR>	(D)Lacasitos<BR>	(FIN)Terminar");         
		switch(topping)	{
			case "A":
				valorTopping = valorTopping + 5
				textofinal = textofinal & "Oreo $5" &vbcrlf
			case "B" :       
				valorTopping =valorTopping + 5.50             
				textofinal = textofinal & "kitkat $5.50" &vbcrlf
			case "C" :       
				valorTopping =valorTopping + 5.75 
				textofinal = textofinal & "brownie $5.70" &vbcrlf
			case "D"  :      
				valorTopping =valorTopping + 5.95             
				textofinal = textofinal & "lacasitos $5.95" &vbcrlf   
			case "NO", "FIN":
				alert ("El total a pagar es : " +  Helado + Valortopping + "<BR>"  + textofinal);
			default:
                alert ("No tenemos ese Topping, Lo sentimos");
		}
	}while (topping != "FIN" && topping != "NO")

}