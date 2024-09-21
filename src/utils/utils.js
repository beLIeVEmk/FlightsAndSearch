module.exports={
    compareTime(time1,time2){
        try{
            if(new Date(time1)<=new Date(time2)){
                return true;
            }
            return false;
        }catch(error){
            throw error;
        }
    }
}