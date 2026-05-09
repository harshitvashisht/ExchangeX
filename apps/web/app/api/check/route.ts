import { prismaClient } from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(req : NextRequest){
     const {name , password} = await req.json()

     const usercreate = await prismaClient.user.create({
          data : {
               name ,
               password
          }
     })
     return NextResponse.json({
          message : "User-Created !",
          usercreate
     })
}