export {}

interface Authentication {
    email: string;
    password: string

    login(): void
    logout(): void
}