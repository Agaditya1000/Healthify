import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { UserCircle2, Mail, Lock } from 'lucide-react';

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type UserRole = 'patient' | 'doctor' | 'admin';

export default function Register() {
  const [selectedRole, setSelectedRole] = useState<UserRole>('patient');
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    try {
      if (data.password !== data.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }

      // Simulate user registration - Replace with actual API call
      const newUser = {
        name: data.name,
        email: data.email,
        role: selectedRole,
      };

      console.log('Registered User:', newUser); // Debug purpose
      toast.success('Account created successfully!');
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <UserCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-xl rounded-lg sm:px-10">
          {/* Role Selection */}
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-3">
              {(['patient', 'doctor', 'admin'] as UserRole[]).map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`
                    flex justify-center items-center px-4 py-3 border rounded-md capitalize font-medium text-sm
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors
                    ${selectedRole === role
                      ? 'border-green-600 text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400'
                      : 'border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCircle2 className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Full name is required' })}
                  className={`
                    block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm placeholder-gray-400
                    focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm
                    ${errors.name ? 'border-red-300' : 'border-gray-300'}
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white
                  `}
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`
                    block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm placeholder-gray-400
                    focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm
                    ${errors.email ? 'border-red-300' : 'border-gray-300'}
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white
                  `}
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Password must be at least 6 characters' },
                  })}
                  className={`
                    block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm placeholder-gray-400
                    focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm
                    ${errors.password ? 'border-red-300' : 'border-gray-300'}
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white
                  `}
                />
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword', { required: 'Confirm your password' })}
                  className={`
                    block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400
                    focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm
                    ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'}
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white
                  `}
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
                  font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2
                  focus:ring-offset-2 focus:ring-green-500 transition-colors
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                  dark:bg-green-600 dark:hover:bg-green-700
                `}
              >
                {isSubmitting ? 'Creating Account...' : 'Sign up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
