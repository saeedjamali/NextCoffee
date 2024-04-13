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


export { hashPassword, generateAccessToken, verifyPassword, verifyAccessToken,generateRefreshToken }