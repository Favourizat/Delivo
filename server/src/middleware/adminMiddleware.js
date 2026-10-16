
import { prisma } from "../config/db.js"

export const adminMiddleware = async ( req, res, next ) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id}
        })

        if(!user || user.role !== "ADMIN"){
            return res.status(403).json({
                message: "Access denied. Admins only."
            })
        }

        next()
    } catch(error){
        console.error("Admin authorization error:", error)

        return res.status(500).json({
            message: "Failed to verify admin permissions."
        })
    }
}