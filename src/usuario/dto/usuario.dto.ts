// import Role from ""

export interface CreateUsuarioDto {
    nome: string,
    email: string,
    password: string
    telefone?: string
    tipo_usuario?: string
    data_cadastro?: Date,
    ativo?: boolean
}
export interface UpdateUsuarioDto extends Partial<CreateUsuarioDto> { }

export interface ResponseUsuarioDto{
    nome: string,
    email: string,
    password: string
    telefone?: string
    tipo_usuario?: string
    data_cadastro?: Date,
    ativo?: boolean 
}