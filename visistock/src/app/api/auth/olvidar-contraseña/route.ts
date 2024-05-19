import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import { messages } from "@/utils/messages";
import User from "@/models/User";
import { Resend } from "resend";
import jwt from "jsonwebtoken";


const resend = new Resend("re_Tqp7JV1V_7gLAtAm86KfLJCiDnvVKb9qZ")

export async function POST(request: NextRequest) {

    try {
        const body: { email: string } = await request.json();

        const { email } = body

        await connectMongoDB();
        const userFind = await User.findOne({ email });

        // Validar que exista el usuario
        if (!userFind) {
            return NextResponse.json(
                { message: messages.error.userNotFound },
                { status: 400 }
            );
        }

        const tokenData = {
            email: userFind.email,
            userId: userFind._id,
        };

        const token = jwt.sign({ data: tokenData }, "secreto", {
            expiresIn: 86400,
        });

        const forgetUrl = "http://localhost:3000/recuperar-contraseña?token=${token}";

        // @ts-ignore
        await resend.emails.send({
            from: "onboarding@resend.dev",
            // para: email
            to: email,
            subject: "Cambio de contraseña",
            html: "<a href=${forgetUrl}> Cambiar contraseña</a>",
        });

        return NextResponse.json(
            { message: messages.succes.emailSent },
            { status: 200 }
        );  

    }   catch (error) {
        return NextResponse.json(
            { message: messages.error.default, error },
            { status: 500 }
        );   
    }
}