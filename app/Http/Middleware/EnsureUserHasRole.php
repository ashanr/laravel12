<?php

namespace App\Http\Middleware;

use App\Enums\Role;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserHasRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$roles): Response
    {
        if (!$request->user()) {
            return redirect()->route('login');
        }

        $user = $request->user();
        
        // If no roles specified, just check if user is authenticated
        if (empty($roles)) {
            return $next($request);
        }
        
        // Convert role strings to enum values if needed
        $roleEnums = array_map(function($role) {
            return is_string($role) ? Role::tryFrom($role) : $role;
        }, $roles);

        // Convert user role to Enum for comparison
        $userRoleEnum = Role::tryFrom($user->role);

        // Check if user has any of the specified roles
        if ($userRoleEnum && in_array($userRoleEnum, $roleEnums, true)) {
            return $next($request);
        }
        
        return response()->json(['message' => 'Unauthorized. Insufficient permissions.'], 403);
    }
}
