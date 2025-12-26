const mypromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve("operation completed sucessfully");
        }else{
            reject("operatino failed ");
        }
    },2000);
});
mypromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});