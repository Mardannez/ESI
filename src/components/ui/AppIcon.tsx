'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';

type IconVariant = 'outline' | 'solid';

interface IconProps {
    name: string; // Changed to string to accept dynamic values
    variant?: IconVariant;
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    [key: string]: any;
}

function Icon({
    name,
    variant = 'outline',
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: IconProps) {
    const normalizedName = name?.replace(/Icon$/, '');
    const iconSet = LucideIcons as unknown as Record<string, React.ComponentType<any>>;
    const IconComponent = iconSet[normalizedName] ?? LucideIcons.CircleHelp;
    const strokeWidth = variant === 'solid' ? 2.5 : props.strokeWidth;

    return (
        <IconComponent
            width={size}
            height={size}
            strokeWidth={strokeWidth}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon; 
