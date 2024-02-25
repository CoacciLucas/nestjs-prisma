import { Prisma } from "@prisma/client";

export class Cat implements Prisma.CatCreateInput{
    id: string;
    name: string;
    color: string;
}