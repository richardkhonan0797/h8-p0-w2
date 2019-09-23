function konversiMenit(menit) {
    // you can only write your code here!
    m = Math.floor(menit/60);
    s = menit % 60;
    if(s<10){
      s = '0' + s;
    }
  
    return m+":"+s;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00