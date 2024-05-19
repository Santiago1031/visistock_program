import { connectMongoDB } from "@/libs/mongodb";
import { messages } from "@/utils/messages";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function GET() {
    try {
        const headerList = headers()
        const token = headerList.get("token");

        // Validar que haya token
        if(!token) {
            return NextResponse.json(
                { message: messages.error.notAuthorized}, 
                { status: 400 }
            );
        }

        try {
            const isTokenValid = jwt.verify(token, "secreto");
            //@ts-ignore
            const { data } = isTokenValid;

            await connectMongoDB();
            const userFind = await User.findById(data._id);

            // Verificamos que exista el usuario.
            if (!userFind) {
                return NextResponse.json(
                    { message: messages.error.userNotFound },
                    { status: 400 }
                );
            }

            return NextResponse.json(
                { isAuthorized: true, message: messages.succes.authorized },
                { status: 200 }
            );
        } catch (error) {
            return NextResponse.json(
                { message: messages.error.tokenNotValid, error },
                { status: 400 }
            );
        }
    }   catch (error) {
        return NextResponse.json(
            { message: messages.error.default, error },
            { status: 400 }
        );
    }
}