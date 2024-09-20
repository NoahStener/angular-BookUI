export interface BookDTO {
    bookID: number;
    title: string;
    author: string;
    yearOfRelease: string;
    genre: string;
    description: string;
    isAvaliable: boolean;
}

export interface CreateBookDTO{
    title: string;
    author: string;
    yearOfRelease: string;
    genre: string;
    description: string;
}

export interface UpdateBookDTO {
    bookID: number;
    title: string;
    author: string;
    yearOfRelease: string;
    genre: string;
    description: string;
    isAvaliable: boolean;
}

export interface ApiResponse<T>{
    errorMessages: string[];
    isSuccess: boolean;
    result: T;
    statusCode: number;
}