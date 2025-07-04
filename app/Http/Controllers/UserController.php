<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        // Transform users to include string role and role_label
        $users = User::all()->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role, // always a string
                'role_label' => \App\Enums\Role::tryFrom($user->role)?->label(),
                // add other fields if needed
            ];
        });
        return Inertia::render('users/index', [
            'users' => $users
        ]);
    }
    
    public function create()
    {
        return Inertia::render('users/create', [
            'availableRoles' => $this->getAvailableRolesForCurrentUser()
        ]);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', Rules\Password::defaults()],
            'role' => 'required|string|in:' . implode(',', $this->getAvailableRolesForCurrentUser()),
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        return redirect()->route('users.index')->with('success', 'User created successfully');
    }
    
    public function edit(User $user)
    {
        return Inertia::render('users/edit', [
            'user' => $user,
            'availableRoles' => \App\Enums\Role::values(), // Allow all roles for editing
        ]);
    }
    
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:users,email,' . $user->id,
            'role' => 'required|string|in:' . implode(',', \App\Enums\Role::values()), // Allow all roles
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
        ];

        if ($request->filled('password')) {
            $request->validate([
                'password' => ['required', Rules\Password::defaults()],
            ]);
            $data['password'] = Hash::make($request->password);
        }

        $user->update($data);

        return redirect()->route('users.index')->with('success', 'User updated successfully');
    }
    
    public function destroy(User $user)
    {
        // Prevent deleting yourself
        if (auth()->id() === $user->id) {
            return redirect()->route('users.index')->with('error', 'You cannot delete your own account');
        }
        
        $user->delete();
        
        return redirect()->route('users.index')->with('success', 'User deleted successfully');
    }
    
    private function getAvailableRolesForCurrentUser()
    {
        $userRole = auth()->user()->role;
        
        // Define which roles each role can create
        $rolePermissions = [
            Role::SUPERADMIN->value => [
                Role::ADMIN->value,
                Role::MANAGER->value, 
                Role::STAFF->value,
                Role::AFFILIATE_PREMIUM->value, 
                Role::AFFILIATE_NORMAL->value
            ],
            Role::ADMIN->value => [
                Role::MANAGER->value, 
                Role::STAFF->value,
                Role::AFFILIATE_PREMIUM->value, 
                Role::AFFILIATE_NORMAL->value
            ],
            Role::MANAGER->value => [
                Role::AFFILIATE_NORMAL->value
            ]
        ];
        
        return $rolePermissions[$userRole] ?? [];
    }
}
