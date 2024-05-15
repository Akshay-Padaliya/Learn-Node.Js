const express = require("express");
const app = express();

const index = require("./route/v1/index")

app.use("/api/v1", index );

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



// console.log("hello ok");

// const rectangle = require("./rectangle");

// version 1.0

// rectangle.area(10, 20)
// const ans = rectangle.perimeter(10, 20)
// console.log(ans);


// // version 2.0

// const solvRev = (l, b) => {
//     if (l <= 0 || b <= 0) {
//         // console.log("Enter valid values");
//         console.log(new Error("l and b always positive integer"));
//     } else {
//         rectangle.area(l, b)
//         const ans = rectangle.perimeter(l, b)
//         console.log(ans);
//     }
// }

// solvRev(10,20);
// solvRev(10,-20);
// solvRev(-10,20);

// version 3.0


// rectangle(20,10,(err,obj)=>{
//     if(err){
//         console.log("Error:",err.message);
//     }else{
//         console.log(obj.area());
//         console.log(obj.perimeter());
//     }
// })


// const employeeSal = require("./employee");


// employeeSal(15000,(err,bonus)=>{
//     if(err){
//         console.log("Error:",err);
//     }else{
//         console.log("Youre Bouns is ", bonus );
//     }
// })






