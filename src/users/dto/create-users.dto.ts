// import Role from ""

export interface CreateUsersDto {
    name: string,
    email: string,
    tipo_usuario: Role
    telefone?: string
    data_cadastro: Date,
    code: string,
    ativo: boolean
}
export interface UpdateUsersDto extends Partial<CreateUsersDto> { }

export interface ResponseUsersDto{
    id: number,
    name: string,
    email: string,
    password_hash: string,
    // profile_picture?: string,
    // created_at: Date 
}