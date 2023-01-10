function isValidPassword(
    password
) {
    if (password.length < 7)
        console.log("Weak")
    else
        console.log("Strong")
}

function isValidPassword2(
    password
) {
    password.length < 7 ? console.log("Weak") : console.log("Strong")
}

function isValidPassword4(
    password
) {
   const len=password.length;
if(len<7)
return "Weak"

if(len>7)
for (const i in password) {
    const char=password.charAt(i)
   if(char==char.toUpperCase())
   return "ver Strong"
}

return "Strong"
}
isValidPassword4("adsgewgabfd")