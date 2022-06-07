//toString Metodu
document.write("toString METODU" + "<br/>")
document.write("--------------------------------------" +"<br/>");

var sayi = 14;

document.write("sayi :" + sayi + "<br/>");
document.write("sayi çıktısı veri türü :" + typeof(sayi) + "<br/>");

var cikti = sayi.toString();

document.write("çıktı : " + cikti + "<br/>");
document.write("çıktı veri türü :" + typeof(cikti) + "<br/>");


//------------------------------------------------------

document.write("--------------------------------------" +"<br/>");
document.write("toString METODU" + "<br/>")
document.write("--------------------------------------" +"<br/>");

var meyveler = ["Armut","Erik","Elma","Kiraz"];

document.write(meyveler.toString() + "<br/>");

document.write("++++++++++++++++++++++++++++++++++++" +"<br/>");

//----------------------------------------------------------
//Join metodu

document.write("join METODU CESITLERI" + "<br/>")
document.write("--------------------------------------" +"<br/>");

document.write(meyveler.join() + "<br/>");  //Dizide belirtilen meyveleri aralarında , koyarak ayıracak

document.write(meyveler.join('') + "<br/>"); //Dizide belirtilen meyveleri bitişik şekilde yazacak

document.write(meyveler.join('-') + "<br/>");  //dizide belirtilen meyveleri aralarına - koyarak ayıracak.