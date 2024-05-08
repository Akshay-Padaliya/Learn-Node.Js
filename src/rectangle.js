
// const area = (l, b) => {
//     let ans = l * b;
//     console.log(ans);
// }

// const perimeter = (l,b) =>{
//     let ans = 2*(l+b);
//     return ans
// }

// module.exports = {
//     area,
//     perimeter
// }


module.exports = (l,b,callback) =>{
    if (l <= 0 || b <= 0) {
        callback(new Error("l and b always positive integer"), null);
    } else {
        callback(null,{
            area: ()=> l * b,
            perimeter: ()=>2*(l+b)
        })
    }
}