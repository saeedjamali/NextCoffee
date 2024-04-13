import connectToDB from "@/utils/db";
import userModel from "@/models/User"
import { generateAccessToken, hashPassword } from "@/utils/auth";
import { rules } from "@/utils/constants"
import { headers } from "next/headers";


export async function POST(req) {
    const { email, name, phone, password } = await req.json();
    try {
        const { isConnected } = await connectToDB();
        if (!isConnected) {
            return Response.json({ status: 500, statusText: "Connect to DB failed :(" })
        }

        //Validation

        const isUserExist = await userModel.findOne({
            $or: [{ name }, { phone }]
        });

        if (isUserExist) {
            return Response.json({ status: 422, statusText: "کاربری با این مشخصات وجود دارد" })
        }

        const hashedPassword = await hashPassword(password);
        const accessToken = generateAccessToken(phone);
        const addUser = await userModel.create({
            name, email, phone, password: hashedPassword, rule: rules.USER
        });

        if (addUser) {
            return Response.json({
                status: 201,
                statusText: "کاربر با موفقیت افزوده شد",
                headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` }
            })
        }
        return Response.json({ status: 422, statusText: "خطای ناشناخته" })



    } catch (error) {
        console.log(error)
        return Response.json({ status: 500, statusText: "error" })
    }



}

