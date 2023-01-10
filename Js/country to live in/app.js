function countryToLiveIn(
    language,isIsland,population, country
){
    found=true;
    //if nice country
    if(language!="English")
    found=false
    
    if(isIsland==false)
    found=false

    if(population>=50)
    found=false;

    if(found)
    console.log("You should live in ",country)

    else
    console.log(country,"does not meet your criteria")
}

countryToLiveIn("English",false,50,"Finland")

countryToLiveIn("English",true,50,"Finland")

countryToLiveIn("English",true,40,"Finland")