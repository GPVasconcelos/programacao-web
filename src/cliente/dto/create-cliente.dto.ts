import {IsString} from 'class-validator';

export class CreateClienteDto {
    @IsString()
    id: string;
    nome: string;
    cnpj: string;
    endereco: string;
    email: string; 
    telefone: string; 
}
