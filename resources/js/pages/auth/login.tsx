import { Head, useForm } from '@inertiajs/react';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div>
            <Head title="Log in" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                {/* Add your login form fields here */}
            </form>
            {status && <div>{status}</div>}
        </div>
    );
}
