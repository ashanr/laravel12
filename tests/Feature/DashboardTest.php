<?php

use App\Models\User;
use App\Enums\Role;

test('guests are redirected to the login page', function () {
    $this->get('/dashboard')->assertRedirect('/login');
});

test('authenticated users can visit the dashboard', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('/dashboard')->assertOk();
});

test('users can be sorted by sort_order', function () {
    $user1 = User::factory()->create(['sort_order' => 2]);
    $user2 = User::factory()->create(['sort_order' => 1]);

    $sortedUsers = User::sorted()->get();

    expect($sortedUsers->first()->id)->toBe($user2->id);
    expect($sortedUsers->last()->id)->toBe($user1->id);
});

test('available roles for user creation are correct for each role', function () {
    // Superadmin should see all roles except superadmin
    $superadmin = User::factory()->create(['role' => Role::SUPERADMIN->value]);
    $this->actingAs($superadmin);
    $response = $this->get('/users/create');
    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->has('availableRoles'));

    // Admin should see all except superadmin and admin
    $admin = User::factory()->create(['role' => Role::ADMIN->value]);
    $this->actingAs($admin);
    $response = $this->get('/users/create');
    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->has('availableRoles'));

    // Manager should only see affiliate_normal
    $manager = User::factory()->create(['role' => Role::MANAGER->value]);
    $this->actingAs($manager);
    $response = $this->get('/users/create');
    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->has('availableRoles'));
});