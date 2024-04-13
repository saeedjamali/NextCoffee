import { compare, hash } from "bcrypt"
import { sign, verify } from "jsonwebtoken"


const hashPassword = async (password) => {
    return await hash(password, 12)

}


const verifyPassword = async (password, hashedPassword) => {
    return await compare(password, hashedPassword);

}

const generateAccessToken = (data) => {

    return sign({ ...data }, process.env.AccessTokenSecretKey, { expiresIn: "60s" });
}

const verifyAccessToken = (token) => {
    try {
        const payloadToken = verify(token, process.env.AccessTokenSecretKey);
        return payloadToken;
    } catch (error) {
        console.log(error);
        return false
    }
}

const generateRefreshToken = (data) => {

    return sign({ ...data }, process.env.RefreshTokenSecretKey, { expiresIn: "15d" });
}

const valiadteEmail = (email) => {
    const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
    return pattern.test(email);
  };
  
  const valiadtePhone = (phone) => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    return pattern.test(phone);
  };
  
  const valiadtePassword = (password) => {
    const pattern =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
    return pattern.test(password);
  };

export {
    hashPassword, generateAccessToken, verifyPassword,
    verifyAccessToken, generateRefreshToken,
    valiadtePassword, valiadteEmail,valiadtePhone
}