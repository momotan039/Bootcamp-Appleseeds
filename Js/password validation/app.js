function isValidPassword(
    password
) {
    if (password.length < 7)
        return "Weak"
    else
    return "Strong"
}

function isValidPassword2(
    password
) {
    return password.length < 7 ? "Weak" : "Strong"
}

function isValidPassword4(
    password
) {
   const len=password.length;
if(len<7)
return "Weak"

if(len>7 && password.toLowerCase()!=password)
return "very Strong"

return "Strong"
}
