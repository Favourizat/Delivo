import jwt from "jsonwebtoken"

export const generateToken = (userId, email, res) => {
    const payload = {
        id: userId,
        email: email,
    }

    const token = jwt.sign(
        payload, 
        process.env.JWT_SECRET, 
        {
            expiresIn: process.env.JWT_EXPIRES_IN || "7d",
        }
    )

    const isProduction = process.env.NODE_ENV === "production"

    // res.cookie("jwt", token, {
    //     httpOnly: true,
    //     // If in production, secure must be true. Locally on HTTP, it must be false.
    //     secure: isProduction, 
    //     // In production (cross-site), use "None". Locally (same-site/ports), use "lax".
    //     sameSite: isProduction ? "None" : "lax", 
    //     maxAge: (1000 * 60 * 60 * 24) * 7 // 7 days (cleaned up the duplicate maxAge)
    // })

    return token
}