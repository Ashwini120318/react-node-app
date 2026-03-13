import {Request, Response} from "express"
import bcrypt from "bcryptjs"
import User from "../models/User"
import { generateTokens } from "../utils/generateTokens";


export const register = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    const userExists = await User.findOne({email})
    if(userExists){
      return res.status(400).json({message: "User already exists"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({name, email, password: hashedPassword});
    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateTokens(user.id)

    });
};

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({message: "Invalid credentials"})
    } else {
        res.status(200).json({
            _id: user.id,
            email: user.email, 
            token: generateTokens(user.id)

        })
    }
    
    

};