<?php

namespace App\Enums;

enum Role: string
{
    case SUPERADMIN = 'superadmin';
    case ADMIN = 'admin';
    case MANAGER = 'manager';
    case STAFF = 'staff';
    case AFFILIATE_PREMIUM = 'affiliate_premium';
    case AFFILIATE_NORMAL = 'affiliate_normal';

    /**
     * Get a user-friendly label for the role.
     */
    public function label(): string
    {
        return match($this) {
            self::SUPERADMIN => 'Super Administrator',
            self::ADMIN => 'Administrator',
            self::MANAGER => 'Manager',
            self::STAFF => 'Staff Member',
            self::AFFILIATE_PREMIUM => 'Premium Affiliate',
            self::AFFILIATE_NORMAL => 'Affiliate',
        };
    }

    /**
     * Get all available role values.
     * 
     * @return array<string>
     */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
    
    /**
     * Get all roles as options for select lists (value => label pairs).
     * 
     * @return array<string, string>
     */
    public static function options(): array
    {
        return array_reduce(self::cases(), function ($options, $role) {
            $options[$role->value] = $role->label();
            return $options;
        }, []);
    }
}
