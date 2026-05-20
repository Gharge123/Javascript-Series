// for (i = 1; i <= 3; i++) {
//     for (j = 1; j <= 3; j++) {
//         console.log(i, j);
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         if (j < 3) {
//             console.log("* ");
//         } else {
//             console.log("*\n");
//         }
//     }
// }

for (let i = 1; i <= 4; i++) {

    let row = "";

    for (let k = 1; k <= i; k++) {
        row = row + "* ";
    }

    console.log(row);
}



