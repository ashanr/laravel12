<?php

use App\Models\User;

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