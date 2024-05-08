
module.exports = (sal,callback)=>{

    if(sal < 0){
        callback(new Error('Invalid Salary'),null)
    }else if(sal > 0 && sal < 10000){
        callback(null,{
            bonus : () => sal*10/100,
            per : '10%'
        }) 
    }else if(sal < 20000){
        callback(null,{
            bonus : () => sal*20/100,
            per : '20%'
        }) 
    }else if(sal < 30000){
        callback(null,{
            bonus : () => sal*30/100,
            per : '30%'
        }) 
    }else if(sal > 30000){
        callback(('Not Eligible for Bonus'),null)
    }
}