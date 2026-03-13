import jwt from "jsonwebtoken"

export const generateTokens = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string , {expiresIn: "7d"});
};