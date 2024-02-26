import { PrismaService } from "prisma/prisma.service";
import { Cat } from "./cat.model";
import { Injectable } from "@nestjs/common";
import { v4 } from 'uuid';
import { CreateCatDTO } from "src/dto/CreateCat.dto";

@Injectable()
export class CatService{
    constructor(private prisma: PrismaService){}

    async getAllCats(): Promise<Cat[]>{
        return this.prisma.cat.findMany()
    }

    async getCat(id:string): Promise<Cat | null>{
        return this.prisma.cat.findUnique({where: {id:String(id)}})
    }

    async createCat(body: CreateCatDTO): Promise<Cat>{
        return this.prisma.cat.create({
            data: {
                id: v4(),
                name: body.name,
                color: body.color
            },
        })
    }
    
    async updateCat(id:string, data: Cat): Promise<Cat>{
        return this.prisma.cat.update({
            where: {id:String(id)},
            data: {name: data.name, color: data.color}
        })
    }

    async deleteCat(id:string): Promise<Cat>{
        return this.prisma.cat.delete({where: {id:String(id)}})
    }
}