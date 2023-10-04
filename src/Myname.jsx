import React from "react";

const Myname = ()=>{

    const getCurrenday=()=>{

        const weekly=["sun","mon","tue","wed","thu","fri","sat"];
        
        const currentDate=new Date();
        var day=weekly[currentDate.getDay()];
        return day;
        
           }
        
           const getCurrentdate=()=>{
        
            const currentDate=new Date();
             var month=["JAN","FEB","MARCH","APR","MAY","JUN","JULY","Aug","sep","oct","nov","dec"];
            var months=month[currentDate.getMonth()+1];
            
             var date=currentDate.getDate();
        
             var hour=currentDate.getHours();
             var min=currentDate.getMinutes();
             let session = "AM";

             if(hour>12){
                session="PM";
             }
          
             
        
        hour=(hour<10)? "0"+hour:hour;
        min=(min<10)? "0"+min:min;
        
        return `${months} ${date} | ${hour} : ${min}  ${session}`;
           }
        

   
        
return(<>

<p>{ getCurrenday()  +" | "+  getCurrentdate()}</p>
       
</>)
}

export default Myname;
