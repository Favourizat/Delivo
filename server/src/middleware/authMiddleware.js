

import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {

    const token = req.cookies.jwt

    if (!token) {
        return res.status(401).json({
            message: "Not authorized, no token",
        })
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.user = decoded

        return next()
    } catch (error) {
        console.error("Authentication error:", error)

        return res.status(401).json({
            message: "Invalid or expired token",
        })
    }
}