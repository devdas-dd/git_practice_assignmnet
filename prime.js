function Prime(element){
    let c = 0;
    
    for (let i=1; i<=element; i++)
    {
        
        if(element % i == 0)
        {
            c++;
        } 
    }
            if(c=2)
            {
               return true;
            }
            else
            {
              return false;
            }
            
}
    let result = Prime(13)
 if (result == true){
   console.log("Prime")
 }else{
   console.log("Not Prime")
 }
