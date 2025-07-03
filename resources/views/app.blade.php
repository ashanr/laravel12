<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Uni Edu Connect Affiliate') }}</title>
        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-background text-foreground">
        @inertia
    </body>
</html>
                <nav>
                    <ul class="flex space-x-4">
                        <li><a href="/dashboard" class="hover:underline">Dashboard</a></li>
                        <li><a href="/about" class="hover:underline">About</a></li>
                        <li><a href="/contact" class="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main class="container mx-auto py-8">
            <section class="text-center">
                <h2 class="text-2xl font-semibold mb-4">Welcome to Laravel Starter Kit</h2>
                <p class="text-muted-foreground">This is a simple landing page for your Laravel application.</p>
            </section>
        </main>

        <footer class="bg-secondary text-secondary-foreground p-4">
            <div class="container mx-auto text-center">
                <p>&copy; {{ date('Y') }} Laravel Starter Kit. All rights reserved.</p>
            </div>
        </footer>

        @inertia
    </body>
</html>
</html>
