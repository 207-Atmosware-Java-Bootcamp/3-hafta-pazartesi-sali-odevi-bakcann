
var kelime = prompt("Bir kelime giriniz :(En az 3 karakterli giriniz)");





function kelimeKarakter(kelime){
    if(kelime.length>=3){
        return kelime;
    }else{
        kelime = prompt("Yeniden kelime giriniz (3 karakterden fazla olmak koşuluyla)");
    }
}

kelimeKarakter(kelime);

     var diziKelime=[];

    for(var i=0; i<kelime.length; i++){
        diziKelime[i]=kelime.charAt(i);
    }

    for(var i=1; i<diziKelime.length-1; i++){
        diziKelime[i]="*";
    }
    document.write(diziKelime.join(''));






