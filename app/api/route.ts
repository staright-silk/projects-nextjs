import {NextResponse} from "next/server"
export async function GET(){
    return NextResponse.json({
       hello : "world"
    })
}

export async function PATCH() {
    return NextResponse.json({
     hello : "i like mice"
    })
}