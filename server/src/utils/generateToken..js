
import jwt from "jsonwebtoken"

export const generateToken = ( userId, email, res ) => {
    const payload = {
        id: userId,
        email: email,
    }

    const token = jwt.sign(
        payload, 
        process.env.JWT_SECRET, 
        {
        expiresIn: process.env.JWT_EXPIRES_In || "7d",
        })

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: (1000 * 60 * 60 * 27) * 7
    })
    return token
}