import { PartialType } from "@nestjs/mapped-types";

export interface CreateSemaforoConfigDto {
    id_semaforo: number,
    nome_config?: string,
    valor?: string,
    data_atualizacao?: Date
}

export interface UpdateSemaforoConfigDto extends Partial<CreateSemaforoConfigDto> {}

export interface ResponseSemaforoConfigDto {
    id_semaforo: number,
    nome_config?: string,
    valor?: string,
    data_atualizacao?: Date
}