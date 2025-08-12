
export interface CreateUsersDto {
    name: string,
    email: string,
    password_hash: string,
    // created_at: Date,
    // profile_picture?: string,
    // role?: 'user' | 'manager'
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