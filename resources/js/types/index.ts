export interface User {
    id: number;
    name: string;
    email: string;
    role?: string;
    role_label?: string; // Added for formatted role labels
    avatar?: string;
    // ...any other existing user properties
}