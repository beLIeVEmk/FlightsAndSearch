
const compareTime=(time1,time2)=>{
    try{
        if(new Date(time1)<=new Date(time2)){
            return true;
        }
        return false;
    }catch(error){
        throw error;
    }
}

const createResBody=(statusCode,msg,data,res)=>{
    res.status(statusCode).json({
        statusCode,
        message:msg,
        data:data
    })
}

module.exports={
    compareTime,
    createResBody
}