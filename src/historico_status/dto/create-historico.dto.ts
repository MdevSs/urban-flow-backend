export interface CreateHistoricoDto {
    id_semaforo: number,
    data_hora?: Date,
    status_ativo?: boolean,
    status_funcionando?: boolean,
    observacao?: string,
}

export interface UpdateHistoricoDto extends Partial<CreateHistoricoDto> {}

export interface ResponseHistoricoDto {
    id_semaforo: number,
    data_hora?: Date,
    status_ativo?: boolean,
    status_funcionando?: boolean,
    observacao?: string,
}