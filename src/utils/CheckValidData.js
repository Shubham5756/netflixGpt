  const checkValidData = (email , password) => {

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

     if(!isEmailValid) return "email-ID is Invalid";
    if(!isPasswordValid) return "password is Invalid";
   
    return null

}
export default checkValidData;