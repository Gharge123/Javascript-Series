//multer
//blob

// for (let i = 1; i<=3; i++) {
//     for(let j=1;j<=3; j++){
//        console.log(i,j);
//     }
// }

//outer loop rows
//innter loop columns
/*let n =6;

for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<n;j++){
         row += " * ";
    }
    console.log(row);
}
*/

// let n=5;
// for(let i=1;i<=n;i++){
//     let row="";
//     for(let j=0;j<=n;j++){
//         row += "*";
//     }
//     console.log(row);
// }

// for(i=1;i<=3;i++){
//     let row = "";
//     for(j=1;j<=3-i;j++){
//       row = row + " ";
//     }
//     for(k=1;k<=i;k++){
//       row = row + "* ";
//     }
//     console.log(row);
// }

// for(i=1;i<=3;i++){
//     let row = "";
//     for(j=1;j<=3-i;j++){
//       row = row + " ";
//     }
//     for(k=1;k<=i;k++){
//       row = row + "*";
//     }
//     console.log(row);
// }


for(i=1;i<=3;i++){
    let row = "";
    for(j=i;j<=3;j++){
      row = row + "*";
    }
    console.log(row);
}
