import { Head } from '@inertiajs/react';

export default function Features() {
    return (
        <>
            <Head title="Features" />
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white shadow">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <h1 className="text-xl font-bold tracking-tight">Features</h1>
                        <a href="/" className="text-blue-600 hover:text-blue-800 text-sm">
                            Back to Home
                        </a>
                    </div>
                </nav>
                <main className="container mx-auto px-4 py-12">
                    <h2 className="text-3xl font-bold mb-4 text-center">Uni Edu Connect Affiliate System</h2>
                    <p className="mb-8 text-gray-600 text-center">A comprehensive platform for education affiliate management</p>

                    {/* User Roles Section */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-semibold mb-4">User Roles</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-lg font-medium text-blue-700">Super Admin</h4>
                                <p className="mt-2 text-gray-600">Complete system control with access to all features and settings.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-lg font-medium text-blue-700">Admin</h4>
                                <p className="mt-2 text-gray-600">Manages users, handles manual payouts, and oversees affiliate operations.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-lg font-medium text-blue-700">Student Manager</h4>
                                <p className="mt-2 text-gray-600">Manages student leads and can add normal affiliate users to the system.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-lg font-medium text-blue-700">Promoter</h4>
                                <p className="mt-2 text-gray-600">Uses social platforms like YouTube and Facebook to promote, can add normal affiliates.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-lg font-medium text-blue-700">Staff</h4>
                                <p className="mt-2 text-gray-600">Assists in day-to-day operations with limited administrative privileges.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-lg font-medium text-blue-700">Premium Affiliate</h4>
                                <p className="mt-2 text-gray-600">Added by admin, receives higher commission rates and exclusive benefits.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-lg font-medium text-blue-700">Normal Affiliate</h4>
                                <p className="mt-2 text-gray-600">Added by student managers or promoters, standard commission structure.</p>
                            </div>
                        </div>
                    </section>

                    {/* Features Sections with Subfeatures */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6">Core Features</h3>
                        
                        <div className="mb-8 bg-white p-6 rounded-lg shadow">
                            <h4 className="text-lg font-medium text-blue-700 mb-3">Affiliate Management</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Registration workflow:</strong> Different processes for premium and normal affiliates</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Profile management:</strong> Detailed affiliate profiles with performance metrics</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Hierarchy system:</strong> Premium affiliates (admin-added) vs normal affiliates (added by student managers/promoters)</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="mb-8 bg-white p-6 rounded-lg shadow">
                            <h4 className="text-lg font-medium text-blue-700 mb-3">Commission & Payouts</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Commission tracking:</strong> Real-time tracking of earned commissions per affiliate</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Manual payout system:</strong> Admin-managed payout process with verification</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Commission tiers:</strong> Different rates for premium and normal affiliates</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Payment history:</strong> Complete record of all transactions and pending payments</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-8 bg-white p-6 rounded-lg shadow">
                            <h4 className="text-lg font-medium text-blue-700 mb-3">Lead Management</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Student lead tracking:</strong> Capture and assign leads to appropriate managers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Lead qualification:</strong> Tools to qualify and categorize incoming leads</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Conversion pipeline:</strong> Track leads from initial contact to enrollment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Student data management:</strong> Secure handling of prospect and student information</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="mb-8 bg-white p-6 rounded-lg shadow">
                            <h4 className="text-lg font-medium text-blue-700 mb-3">Marketing Tools</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Customizable referral links:</strong> Unique tracking links for each affiliate</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Social media integration:</strong> Tools for YouTube and Facebook promotions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Promotional materials:</strong> Downloadable assets for marketing campaigns</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Campaign tracking:</strong> Monitor performance across different marketing channels</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="mb-8 bg-white p-6 rounded-lg shadow">
                            <h4 className="text-lg font-medium text-blue-700 mb-3">Reporting & Analytics</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Performance dashboard:</strong> Customized views for different user roles</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Revenue reports:</strong> Detailed breakdowns of commission and conversions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Affiliate performance metrics:</strong> Compare performance across different affiliates</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Export capabilities:</strong> Download reports in multiple formats</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h4 className="text-lg font-medium text-blue-700 mb-3">Partner Institution Directory</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Comprehensive listings:</strong> Detailed profiles of all partner institutions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Program information:</strong> Course details, entry requirements, and fees</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Commission structures:</strong> Different rates for various institutions and programs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Application tracking:</strong> Monitor student applications to partner institutions</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                    <div className="text-center mt-12">
                        <a 
                            href="/" 
                            className="inline-block rounded-md border border-blue-500 px-5 py-2 text-sm font-medium text-blue-700 bg-white shadow-sm hover:bg-blue-50 hover:border-blue-700 transition-colors"
                        >
                            Return to Homepage
                        </a>
                    </div>
                </main>
            </div>
        </>
    );
}
