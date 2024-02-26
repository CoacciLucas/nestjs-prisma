import { Module } from "@nestjs/common";
import { CatController } from "./cat.controller";
import { CatService } from "./cat.service";
import { PrismaService } from "prisma/prisma.service";



@Module({
     controllers: [CatController],
     providers: [CatService, PrismaService]
})
export class CatModule{}