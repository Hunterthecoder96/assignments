try{
   throw function (x,y){
    return x+y;
}
}


catch(err){
console.log(err)
}

finally{
    console.log("i am running")
}