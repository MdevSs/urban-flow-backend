import { PartialType } from "@nestjs/mapped-types";

export interface CreateManutencoesDto {
    id_semaforo: number
    data_inicio?: Date
    data_fim?: Date
    tipo?: string
    responsavel?: string
    observacao?: string    
}

export interface UpdateManutencoesDto extends Partial<CreateManutencoesDto> {}

export interface ResponseManutencoesDto{
    id_semaforo: number
    data_inicio?: Date
    data_fim?: Date
    tipo?: string
    responsavel?: string
    observacao?: string   
}