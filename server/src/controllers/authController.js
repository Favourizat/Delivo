

import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken..js";

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email, password are required",
            })
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: email },
        })

        if (existingUser) {
            return res.status(400).json({ error: "User already exists with this email" })
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        })

        const { password: _, ...userWithoutPassword } = user

        return res.status(201).json({
            message: "User registered successfully!",
            user: userWithoutPassword,
        })

    } catch (error) {
        console.error("Registration error:", error)

        return res.status(500).json({
            message: "Something went wrong while registering the user"
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            })
        }

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
            })
        }

        // Generate Token
        const token = generateToken(user.id, user.email, res)

        const { password: _, ...userWithoutPassword } = user

        return res.status(200).json({
            message: "Login successful",
            user: userWithoutPassword,
        })
    } catch (error) {
        console.log("Login error:", error)

        return res.status(500).json({
            message: "Something went wrong while logging in"
        })
    }
}

const logout = (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({
        status: "success",
        message: "Logged out successfully",
    })
}
     const profile = async (req, res) => {
    res.status(200).json({
        user: {
            id: req.user.id,
            email: req.user.email,
        },
    })
}


export { register, login, logout, profile } 