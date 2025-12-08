'use client';

import { CSSProperties, ReactNode } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	label?: ReactNode;
	backgroundClass?: string;
	iconBgClass?: string;
	iconBgColor?: string;
	iconColor?: string;
	icon?: ReactNode;
	variant?: 'default' | 'outline' | 'ghost';
	size?: 'icon' | 'default';
};

const defaultIcon = (
	<svg
		width='15'
		height='15'
		viewBox='0 0 15 15'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='h-5 w-5 text-white'
	>
		<path
			d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
			fill='currentColor'
			fillRule='evenodd'
			clipRule='evenodd'
		/>
	</svg>
);

export function Button({
	label,
	backgroundClass = 'bg-neutral-950 hover:bg-neutral-900',
	iconBgClass = 'bg-neutral-700',
	iconBgColor,
	iconColor,
	icon = defaultIcon,
	className = '',
	...buttonProps
}: ButtonProps) {
	const iconOverlayStyle: CSSProperties = {
		...(iconBgColor ? { backgroundColor: iconBgColor } : {}),
	};
	const iconStyle: CSSProperties = {
		...(iconColor ? { color: iconColor } : {}),
	};

	return (
		<button
			type='button'
			className={`group relative inline-flex h-14 items-center justify-center rounded-full py-1 pl-6 pr-14 font-medium text-white transition shadow-[0_15px_30px_rgba(17,24,39,0.2)] cursor-pointer ${backgroundClass} ${className}`}
			{...buttonProps}
		>
			<span className='z-10 pr-2 text-base'>
				{label ?? buttonProps.children}
			</span>
			<div className='absolute inset-y-0 right-0 left-0 flex items-center pointer-events-none'>
				<span
					className={`absolute inset-y-1 right-1 h-12 w-12 rounded-full transition-[width] ${iconBgClass} group-hover:w-[calc(100%-8px)]`}
					style={iconOverlayStyle}
				/>
				<span
					className='absolute right-1 z-10 flex h-12 w-12 items-center justify-center rounded-full'
					style={iconStyle}
				>
					{icon}
				</span>
			</div>
		</button>
	);
}

type ButtonVariantsOptions = {
	variant?: 'default' | 'outline' | 'ghost';
	size?: 'icon' | 'default';
};

export function buttonVariants(options: ButtonVariantsOptions = {}) {
	const baseClasses =
		'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
	const variant = options.variant ?? 'default';
	let variantClasses = '';

	if (variant === 'outline') {
		variantClasses =
			'border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50';
	} else if (variant === 'ghost') {
		variantClasses = 'bg-transparent text-slate-900 hover:bg-slate-50';
	} else {
		variantClasses = 'bg-slate-900 text-white shadow hover:bg-slate-800';
	}
	return `${baseClasses} ${variantClasses}`;
}
