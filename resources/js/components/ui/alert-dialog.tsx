import * as React from 'react';

interface AlertDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}

export function AlertDialog({ open, onOpenChange, children }: AlertDialogProps) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded shadow-lg p-6 min-w-[300px]">
                {children}
            </div>
        </div>
    );
}

export function AlertDialogContent({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

export function AlertDialogHeader({ children }: { children: React.ReactNode }) {
    return <div className="mb-4">{children}</div>;
}

export function AlertDialogTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-lg font-bold mb-2">{children}</h2>;
}

export function AlertDialogDescription({ children }: { children: React.ReactNode }) {
    return <p className="text-gray-600 mb-4">{children}</p>;
}

export function AlertDialogFooter({ children }: { children: React.ReactNode }) {
    return <div className="flex justify-end gap-2 mt-4">{children}</div>;
}

export function AlertDialogCancel({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" {...props}>
            {children}
        </button>
    );
}

export function AlertDialogAction({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700" {...props}>
            {children}
        </button>
    );
}
