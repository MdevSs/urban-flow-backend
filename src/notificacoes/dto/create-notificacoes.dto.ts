import { PartialType } from "@nestjs/mapped-types"

export class CreateNotificacoesDto {
    id_usuario: string
    id_semaforo: number
    data_hora?: Date
    tipo?: string
    mensagem?: string
    lida?: boolean
};

export class UpdateNotificacoesDto extends PartialType(CreateNotificacoesDto) {}

export class ResponseNotificacoesDto {
    id_usuario: string
    id_semaforo: number
    data_hora?: Date
    tipo?: string
    mensagem?: string
    lida?: boolean
};