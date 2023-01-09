function checkSevenDivisble(n){
    result=""
    for(let i=1;i<=n;i++){
        foundSeven=false;
        isDivisble=false;

        if(i.toString().includes(7))
        foundSeven=true

        if(i%7==0)
        isDivisble=true

        if(foundSeven && isDivisble)
        result+="BOOM-BOOM"
        
        else if(foundSeven)
        result+="BOOM"

        else
        result+=i

        if(i!=n)
        result+=","
    }
    console.log(result)
}

checkSevenDivisble(18)