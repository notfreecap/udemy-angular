export interface AuthResponse {
    status: boolean;
    result: Result;
}

export interface Result {
    message: string;
    user?:    User;
    auth?:    AuthClass;
    errors:  any[];
}

export interface AuthClass {
    token: string
}

export interface User {
    _id:      string;
    username: string;
    email:    string;
    password?: string;
    __v:      number;
}
