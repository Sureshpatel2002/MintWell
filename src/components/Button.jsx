'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';

const Button = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center gap-2 justify-center px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-colors duration-200';

  const variants = {
    primary: 'bg-primary-400 text-white border-2 border-primary-400 hover:bg-primary-500',
    secondary: 'bg-gray-200 text-gray-800 border-2 border-gray-200 hover:bg-gray-300',
    outline: 'bg-transparent border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white',
    white: 'bg-white text-primary-400 border-2 border-white hover:bg-gray-100',
    disabled: 'bg-primary-400 text-white border-2 border-primary-400 opacity-60 cursor-not-allowed',
  };

  const buttonClasses = clsx(
    baseStyles,
    disabled ? variants.disabled : variants[variant],
    className
  );

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={!disabled && { scale: 1.02 }}
      whileTap={!disabled && { scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </motion.button>
  );
};

export default Button;
