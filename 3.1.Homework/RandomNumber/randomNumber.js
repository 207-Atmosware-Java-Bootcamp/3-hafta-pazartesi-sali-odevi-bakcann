//ÖDEV: Math.round(Math.random()*10+1))
// bilgisayar tarafında rastgele  sayılar 1-10 arasında rastgele olsun oluştursun ve bitiş değeri 1<=X<=kullanıcı tarafından bitiş sayısına göre sayılar oluşturulsun 
// bu sayıları bir diziye atama yapalım
// bu sayılardan ilk eleman  ===> dizi[0]
// bu sayılardan son eleman ===> dizi[dizi.length-1]
// bu sayıların küçükten büyüğe sıralama ===> dizi.sort()
// bu sayıların büyükten küçüğe sıralama ===> dizi.sort().reverse()
// bu sayıların toplamları  ===> sum=0  sum+=i;
// bu sayıların çift sayı toplamları  ===> if(dizi[i]%2==0)
// bu sayıların tek sayı toplamları  ===> if(dizi[i]%2==1)
// bu sayıların her birine 1 ekleyerek yeni bir dizi oluşturalım ==> iterative for ile her bir eleman erişmek ve 1 eklemek bunun dinamik kısmını ES kısmında göreceğiz.

var arrayLimit = prompt("Bir sayı giriniz :");
var arrayList = [];
var newArray = [];
total = 0;
totalEven = 0;
totalOdd = 0;

for(var i =0; i<arrayLimit; i++){
  //  arrayList[i]=Math.round(Math.random()*10);
   arrayList.push(Math.round(Math.random()*10));
    

    if(arrayList[i]%2==0){
        totalEven +=arrayList[i];
    }else{
        totalOdd += arrayList[i];
    }
    total += arrayList[i];
    newArray[i] = arrayList[i]+1;
}


document.write("Dizi :" +arrayList + '<br/>');
document.write("Dizinin ilk elemanı :" + arrayList[0] + '<br/>');
document.write("Dizinin son elemanı :" + arrayList[arrayList.length-1] + '<br/>');
document.write("Dizinin küçükten büyüğe sıralanışı :" + arrayList.sort() + '<br/>');
document.write("Dizinin büyükten küçüğe sıralanışı :" + arrayList.sort().reverse() + '<br/>');
document.write("Dizideki sayıların toplamı :" + total + '<br/>');
document.write("Dizideki çift sayıların toplamı :" + totalEven + '<br/>');
document.write("Dizideki tek sayıların toplamı :"+ totalOdd + '<br/>');
document.write("Dizideki elemanlara 1 eklenerek yeni oluşan dizi :" + newArray + '<br/>');