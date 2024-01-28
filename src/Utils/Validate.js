

export const formValidation =(email,password)=>{

    const isValidEmail  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const ispasswordValid = /^\d+$/.test(password)

    if(!isValidEmail) return "Email ID not valid";
    if(!ispasswordValid) return "Type in numbers"

    return null;
}