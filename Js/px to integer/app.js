function isLeapYear(year){
// divisible by 4
// not divisible by 100
// divisible by 400

found=false;//found year divisible by 400
//note every year divisible by 400 it is also divisible by 4

if(year%400==0)
found=true;

if(year%100==0 && !found)
return false;

return true;
}
