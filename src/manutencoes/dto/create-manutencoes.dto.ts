import { PartialType } from "@nestjs/mapped-types";

export class CreateManutencoesDto {
    id_semaforo: number
    data_inicio?: Date
    data_fim?: Date
    tipo?: string
    responsavel?: string
    observacao?: string    
}

export class UpdateManutencoesDto extends PartialType(CreateManutencoesDto) {}

export interface ResponseManutencoesDto{
    id_semaforo: number
    data_inicio?: Date
    data_fim?: Date
    tipo?: string
    responsavel?: string
    observacao?: string   
}