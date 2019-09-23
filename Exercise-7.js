//Menyusun Barisan Bintang
var rows1=5;

for(var i=0;i<rows1;i++){
  console.log("*\n");
}

//Menyusun Barisan Bintang Dengan Nested Looping

var rows2=5;
var bintang="";

for(var i=0;i<rows2;i++){
  for(var j=rows2;j>0;j--){
    bintang=bintang + "*";
  }
  console.log(bintang);
  bintang=""
  console.log("\n");
}

//Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
var bintang = '';

for(var i=1;i<=rows3;i++){
  for(var j=1;j<=i;j++){
    bintang = bintang + '*';
  }
  console.log(bintang);
  bintang = '';
  console.log("\n");
}