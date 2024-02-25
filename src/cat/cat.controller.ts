import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { Cat } from "./cat.model";
import { CatService } from "./cat.service";
import { Request, Response } from "express";

@Controller('api/v1/cat')
export class CatController{

     constructor(private readonly catService: CatService){}


     @Get()
     async getAllCat(@Req() request:Request, @Res() response:Response ):Promise<any>{
          const result =  await this.catService.getAllCats()
          return response.status(200).json({
               status: "Ok!",
               message: "Successfully fetch data!",
               result: result 
          })
     }

     @Post()
     async postCat(@Body() postData: Cat):Promise<Cat>{
          return this.catService.createCat(postData)
     }

     @Get(':id')
     async getCat(@Param('id') id:string):Promise<Cat | null>{
          return this.catService.getCat(id)
     }

     @Delete(':id')
     async deleteCat(@Param('id') id:string):Promise<Cat>{
          return this.catService.deleteCat(id)
     }

     @Put(':id')
     async updateCat(@Param('id') id: string,@Body() data: Cat): Promise<Cat> {
       return this.catService.updateCat(id,data);
     }
}