import { PartialType } from "@nestjs/mapped-types"

export interface CreateNotificacoesDto {
    id_usuario: string,
    id_semaforo: number,
    data_hora?: Date,
    tipo?: string,
    mensagem?: string,
    lida?: boolean,
};

export interface UpdateNotificacoesDto extends Partial<CreateNotificacoesDto> {}

export interface ResponseNotificacoesDto {
    id_usuario: string,
    id_semaforo: number,
    data_hora?: Date,
    tipo?: string,
    mensagem?: string,
    lida?: boolean,
};