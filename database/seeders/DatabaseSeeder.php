<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Enums\Role;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // Add superadmin user
        User::factory()->create([
            'name' => 'superadmin',
            'email' => 'superadmin@example.com',
            'password' => Hash::make('password'),
            'role' => Role::SUPERADMIN->value,
        ]);

        // Add admin user
        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'role' => Role::ADMIN->value,
        ]);

        // Add manager user
        User::factory()->create([
            'name' => 'manager',
            'email' => 'manager@example.com',
            'password' => Hash::make('password'),
            'role' => Role::MANAGER->value,
        ]);

        // Add staff user
        User::factory()->create([
            'name' => 'staff',
            'email' => 'staff@example.com',
            'password' => Hash::make('password'),
            'role' => Role::STAFF->value,
        ]);

        // Add affiliate premium user
        User::factory()->create([
            'name' => 'affiliate_premium',
            'email' => 'affiliate_premium@example.com',
            'password' => Hash::make('password'),
            'role' => Role::AFFILIATE_PREMIUM->value,
        ]);

        // Add affiliate normal user
        User::factory()->create([
            'name' => 'affiliate_normal',
            'email' => 'affiliate_normal@example.com',
            'password' => Hash::make('password'),
            'role' => Role::AFFILIATE_NORMAL->value,
        ]);
    }
}
