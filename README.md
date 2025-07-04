# Laravel React Starter Kit

This is a starter kit for building modern web applications using Laravel and React. It includes a pre-configured setup with Inertia.js, Tailwind CSS, and other essential tools.

## Features

- **Laravel 12**: Backend framework for building robust applications.
- **React 19**: Frontend library for building user interfaces.
- **Inertia.js**: Seamless integration between Laravel and React.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **Pest**: Testing framework for PHP.
- **Prettier & ESLint**: Code formatting and linting tools.

## Requirements

- PHP 8.2 or higher
- Node.js 18 or higher
- Composer
- SQLite (default database)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/laravel-react-starter-kit.git
   cd laravel-react-starter-kit
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Install Node.js dependencies:
   ```bash
   pnpm install
   ```

4. Set up the environment:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. Run database migrations:
   ```bash
   php artisan migrate
   ```

6. Start the development server:
   ```bash
   pnpm run dev
   ```

7. Open your browser and navigate to `http://localhost`.

## Scripts

- `pnpm run dev`: Start the Vite development server.
- `pnpm run build`: Build the project for production.
- `pnpm run lint`: Run ESLint to fix code issues.
- `pnpm run format`: Format code using Prettier.

## Testing

Run the test suite using Pest:
```bash
php artisan test
```

## License

This project is open-source and available under the [MIT License](LICENSE).
