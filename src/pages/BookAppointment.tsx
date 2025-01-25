import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Calendar, Clock, User, Phone, MessageSquare, Stethoscope } from 'lucide-react';

type AppointmentForm = {
  name: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  notes: string;
};

const departments = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Dermatology',
  'General Medicine',
];

const doctors = {
  Cardiology: ['Dr. John Smith', 'Dr. Sarah Johnson'],
  Neurology: ['Dr. Michael Chen', 'Dr. Emily Brown'],
  Orthopedics: ['Dr. David Wilson', 'Dr. Lisa Anderson'],
  Pediatrics: ['Dr. Robert Taylor', 'Dr. Maria Garcia'],
  Dermatology: ['Dr. James Lee', 'Dr. Anna White'],
  'General Medicine': ['Dr. William Davis', 'Dr. Rachel Moore'],
};

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
];

export default function BookAppointment() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<AppointmentForm>();
  const department = watch('department');

  const onSubmit = async (data: AppointmentForm) => {
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Appointment data:', data);
      toast.success('Appointment booked successfully!');
    } catch (error) {
      toast.error('Failed to book appointment');
    }
  };

  // Get tomorrow's date as the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8">
            <h1 className="text-3xl font-bold text-white text-center">Book an Appointment</h1>
            <p className="mt-2 text-blue-100 text-center">
              Schedule your visit with our healthcare professionals
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^\+?[\d\s-]+$/,
                        message: 'Invalid phone number'
                      }
                    })}
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Department and Doctor Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Department
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Stethoscope className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    {...register('department', { required: 'Department is required' })}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                {errors.department && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.department.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Doctor
                </label>
                <select
                  {...register('doctor', { required: 'Doctor is required' })}
                  className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={!department}
                >
                  <option value="">Select Doctor</option>
                  {department && doctors[department as keyof typeof doctors].map((doctor) => (
                    <option key={doctor} value={doctor}>{doctor}</option>
                  ))}
                </select>
                {errors.doctor && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.doctor.message}</p>
                )}
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    {...register('date', { required: 'Date is required' })}
                    min={minDate}
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.date.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred Time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    {...register('time', { required: 'Time is required' })}
                    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                {errors.time && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.time.message}</p>
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Additional Notes
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  {...register('notes')}
                  rows={4}
                  className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Any specific concerns or requirements..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  px-6 py-3 bg-blue-600 text-white rounded-md font-medium
                  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-blue-500 transition-colors
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                `}
              >
                {isSubmitting ? 'Booking...' : 'Book Appointment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}