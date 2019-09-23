//Melakukan Looping Menggunakan While

console.log("LOOPING PERTAMA");
var pertama = 2;
while(pertama<=20){
  console.log(pertama+" - I love coding");
  pertama += 2;
}
var kedua = 20;
console.log("LOOPING KEDUA");
while (kedua>=2){
  console.log(kedua+" - I will become fullstack developer");
  kedua -=2;
}

//Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for(var pertama=1;pertama<=20;pertama++){
  console.log(pertama+" - I love coding");
}
console.log("LOOPING KEDUA");
for(var kedua=20;kedua>=1;kedua--){
  console.log(kedua+" - I will become fullstack developer");
}

//Angka Ganjil dan Genap

let counter = 1
while(counter<=100){
  if(counter%2 === 0){
    console.log("Genap");
  }
  else{
    console.log("Ganjil");
  }
  counter++;
}
counter=1;

while(counter<100){
  if(counter%3 === 0){
    console.log(counter+" kelipatan 3");
  }
  else{
    console.log();
  }
  counter +=2;
}
counter = 1;

while(counter<100){
  if(counter%6 === 0){
    console.log(counter+" kelipatan 6");
  }
  else{
    console.log();
  }
  counter +=5;
}
counter = 1;

while(counter<=100){
  if(counter%10 === 0){
    console.log(counter+" kelipatan 10");
  }else{
    console.log();
  }
  counter +=9;
}