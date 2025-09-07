
export interface CreateSemaforoDto {
    endereco?: string
    latitude?: number,
    longitude?: number
    status_ativo?: boolean
    status_funcionando?: boolean,
    data_instalacao?: Date
    ultimo_check?: Date,
    tipo?: string,
    modelo?: string
}
export interface UpdateSemaforoDto extends Partial<CreateSemaforoDto> { }

export interface ResponseSemaforoDto{
    endereco?: string
    latitude?: number,
    longitude?: number
    status_ativo?: boolean
    status_funcionando?: boolean,
    data_instalacao?: Date
    ultimo_check?: Date,
    tipo?: string,
    modelo?: string 
}