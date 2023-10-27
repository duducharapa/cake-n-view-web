type User = {
    id: number
    name: string
    email: string
};

type RegisterUserBody = {
    name: string
    email: string
    password: string
}

export type {
    RegisterUserBody,
    User
};
