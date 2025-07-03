<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enums\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Scope a query to sort users by the given column and direction.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $column
     * @param string $direction
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSorted($query, string $column = 'sort_order', string $direction = 'asc')
    {
        return $query->orderBy($column, $direction);
    }

    /**
     * Check if user has the specified role
     */
    public function hasRole(Role|string $role): bool
    {
        $userRoleEnum = \App\Enums\Role::tryFrom($this->role);
        if ($role instanceof \App\Enums\Role) {
            return $userRoleEnum === $role;
        }
        return $userRoleEnum?->value === $role;
    }

    /**
     * Check if user has any of the specified roles
     */
    public function hasAnyRole(array $roles): bool
    {
        foreach ($roles as $role) {
            if ($this->hasRole($role)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Get formatted role label
     */
    public function getRoleLabel(): ?string
    {
        $enum = \App\Enums\Role::tryFrom($this->role);
        return $enum ? $enum->label() : null;
    }

    // Role helpers

    public function isSuperadmin(): bool
    {
        return $this->hasRole(Role::SUPERADMIN);
    }

    public function isAdmin(): bool
    {
        return $this->hasRole(Role::ADMIN);
    }

    public function isManager(): bool
    {
        return $this->hasRole(Role::MANAGER);
    }

    public function isStaff(): bool
    {
        return $this->hasRole(Role::STAFF);
    }

    public function isAffiliatePremium(): bool
    {
        return $this->hasRole(Role::AFFILIATE_PREMIUM);
    }

    public function isAffiliateNormal(): bool
    {
        return $this->hasRole(Role::AFFILIATE_NORMAL);
    }

    /**
     * Check if user is staff or higher level
     */
    public function isStaffOrHigher(): bool
    {
        return $this->hasAnyRole([
            Role::STAFF,
            Role::MANAGER,
            Role::ADMIN,
            Role::SUPERADMIN,
        ]);
    }

    /**
     * Check if user is admin or higher level
     */
    public function isAdminOrHigher(): bool
    {
        return $this->hasAnyRole([
            Role::ADMIN,
            Role::SUPERADMIN,
        ]);
    }
}