# Running Tests in Laravel

This project uses [Pest](https://pestphp.com/) as the primary testing framework, built on top of PHPUnit.

## Running Tests Locally

1. **Install dependencies**  
   Make sure you have installed all PHP and Node dependencies:
   ```bash
   composer install
   pnpm install
   ```

2. **Set up your environment**  
   Copy the example environment file and generate an application key:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Run the tests**  
   Use the following command to run all tests:
   ```bash
   ./vendor/bin/pest
   ```
   Or, you can use the Laravel test runner:
   ```bash
   php artisan test
   ```

## Running Tests in CI

Tests are automatically run in GitHub Actions on every push or pull request to the `main` or `develop` branches.  
See `.github/workflows/tests.yml` for details.

## Additional Notes

- You can run a specific test file:
  ```bash
  ./vendor/bin/pest tests/Feature/ExampleTest.php
  ```
- For more options, see the [Pest documentation](https://pestphp.com/docs/installation).

