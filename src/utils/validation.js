

export const checkValidData = (email, password,name=null)=>{
   
    const isEmailValid = /^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);



    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password must includes special characters, numbers and Capital letter.";
    
    if(name !== null && name.trim() === "") return "Name is not valid.";

    return null;
}