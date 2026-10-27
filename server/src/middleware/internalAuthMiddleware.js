


export const internalAuthMiddleware = (req, res, next) => {
    const secret = req.headers["x-internal-api-secret"]

    if (!process.env.INTERNAL_API_SECRET) {
        console.error("INTERNAL_API_SECRET")

        return res.status(500).json({
            message: "internal authentication is not configured"
        })
    }

    if (typeof secret !== "string" ||
        secret !== process.env.INTERNAL_API_SECRET
    ) {
        return res.status(401).json({
            message: "Unauthorized internal request",
        })
    }

    return next()
}