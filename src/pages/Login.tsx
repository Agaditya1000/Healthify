import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Lock, Mail, UserCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

type LoginForm = {
  email: string;
  password: string;
};

type UserRole = 'patient' | 'doctor' | 'admin';

export default function Login() {
  const [selectedRole, setSelectedRole] = useState<UserRole>('patient');
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      // Simulated login - replace with actual API call
      const userData = {
        id: '1',
        name: 'John Doe',
        email: data.email,
        role: selectedRole
      };
      
      login(userData);
      toast.success('Login successful!');
      
      // Redirect based on role
      switch (selectedRole) {
        case 'patient':
          navigate('/patient-dashboard');
          break;
        case 'doctor':
          navigate('/doctor-dashboard');
          break;
        case 'admin':
          navigate('/admin-dashboard');
          break;
      }
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Lock className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Sign in to your account
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
                    flex justify-center items-center px-4 py-3 border rounded-md
                    capitalize font-medium text-sm focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-blue-500 transition-colors
                    ${selectedRole === role
                      ? 'border-blue-600 text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
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
                  autoComplete="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`
                    appearance-none block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
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
                  <UserCircle2 className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  className={`
                    appearance-none block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                    ${errors.password ? 'border-red-300' : 'border-gray-300'}
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white
                  `}
                />
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded
                    dark:border-gray-600 dark:bg-gray-700"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
                  font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2
                  focus:ring-offset-2 focus:ring-blue-500 transition-colors
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                  dark:bg-blue-600 dark:hover:bg-blue-700
                `}
              >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  New to Healthify?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="/register"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm
                  text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors
                  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
              >
                Create an account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}