export interface CreateAnaliseDto {
    id_semaforo: number,
    data_hora?: Date,
    veiculos_contados?: number,
    velocidade_media?: number,
}

export interface UpdateAnaliseDto extends Partial<CreateAnaliseDto> {}

export interface ResponseAnaliseDto {
    id_semaforo: number,
    data_hora?: Date,
    veiculos_contados?: number,
    velocidade_media?: number,
}