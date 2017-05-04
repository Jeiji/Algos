function plusMinus( r , n ){
  let neg = 0 , pos = 0 , zer = 0;
  for (let i = 0; i < r.length; i++) {
    if ( r[i] > 0 ) {
      pos += 1/n;
    }
    else if ( r[i] < 0 ) {
      neg += 1/n;
    }
    else {
      zer += 1/n;
    }
  }
  console.log(pos);
  console.log(neg);
  console.log(zer);
}

plusMinus( r , n );
