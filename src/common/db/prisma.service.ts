import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma";


@Injectable()
export class PrismaService 
extends PrismaClient
implements OnModuleInit, OnModuleDestroy
{
    constructor(){
        super({
            log: ['query', 'warn', 'error'],
        })
    }

    onModuleInit() {
        this.$connect();
    }
    onModuleDestroy() {
        this.$disconnect()
    }   
    // async onModuleDestroy() {
    // await this.$disconnect();
    // }
}