export default function LandingPage({ authLinks }: { authLinks: { login: string; register: string } }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold tracking-tight">Welcome to Uni Edu Connect Affiliate</h1>
                    <div className="space-x-2">
                        <a
                            href="/features"
                            className="inline-block rounded-md border border-blue-500 px-5 py-2 text-sm font-medium text-blue-700 bg-white shadow-sm hover:bg-blue-50 hover:border-blue-700 transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href={authLinks.login}
                            className="inline-block rounded-md border border-transparent px-5 py-2 text-sm font-medium text-blue-700 bg-white shadow-sm hover:bg-blue-50 hover:border-blue-200 transition-colors"
                        >
                            Login
                        </a>
                        <a
                            href={authLinks.register}
                            className="inline-block rounded-md border border-blue-500 px-5 py-2 text-sm font-medium text-blue-700 bg-white shadow-sm hover:bg-blue-50 hover:border-blue-700 transition-colors"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </nav>
            <main className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold">Welcome to Uni Edu Connect Affiliate</h2>
                <p className="mt-4 text-gray-600">Your one-stop solution for managing everything.</p>
                <ul className="mt-8 mb-8 list-disc list-inside text-left max-w-md mx-auto text-gray-700">
                    <li>Affiliate registration and management</li>
                    <li>Commission tracking and reporting</li>
                    <li>Student lead management</li>
                    <li>Partner institution directory</li>
                    <li>Automated payouts</li>
                    <li>Performance analytics dashboard</li>
                    <li>Customizable referral links</li>
                    <li>Email notifications and updates</li>
                </ul>
            </main>
        </div>
    );
}
