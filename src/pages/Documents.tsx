import { useState } from 'react';
import { Mail, Calendar, List, FileText, Home, Settings, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ConcordiaLogo from '../assets/concordia_logo.png';

// Course card component that matches your new design
interface Course {
  code: string;
  status: string;
  seats: string;
  time: string;
  type: string;
  days: string;
  tutorial?: {
    status: string;
    seats: string;
    time: string;
    days: string;
    type?: string;
  };
  lab?: {
    status: string;
    seats: string;
    time: string;
    day: string;
    type?: string;
  };
}

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="flex items-center w-full mb-4 relative">
      {/* Course Block - Red */}
      <div className="bg-red-500 text-white rounded-l-3xl flex justify-between items-center px-6 py-4 shadow-md w-64">
        <div>
          <h3 className="text-lg font-medium">{course.code}</h3>
          <p className="text-sm">{course.type}</p>
          <p className="text-sm">{course.days}</p>
        </div>
        <div className="text-right">
          <div className={`
            py-1 px-2 rounded-full text-center text-xs
            ${course.status === 'Enrolled' ? 'bg-black text-yellow-400' : 
              course.status === 'Wait List' ? 'bg-black text-yellow-400' : 
              'bg-black text-white'}
          `}>
            {course.status}
          </div>
          <p className="text-sm mt-1">{course.seats} seats</p>
          <p className="text-sm">{course.time}</p>
        </div>
      </div>

      {/* Tutorial Block - Blue */}
      {course.tutorial && (
        <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-4 shadow-md w-56 rounded-r-lg">
          <div>
            <p className="text-sm font-medium">Tutorial</p>
            <p className="text-sm">{course.tutorial.type}</p>
            <p className="text-sm">{course.tutorial.days}</p>
          </div>
          <div className="text-right">
            <div className={`
              py-1 px-2 rounded-full text-center text-xs
              ${course.tutorial.status === 'Enrolled' ? 'bg-black text-yellow-400' : 
                course.tutorial.status === 'Full' ? 'bg-black text-white' : 
                'bg-black text-white'}
            `}>
              {course.tutorial.status}
            </div>
            <p className="text-sm mt-1">{course.tutorial.seats} seats</p>
            <p className="text-sm">{course.tutorial.time}</p>
          </div>
        </div>
      )}

      {/* Lab Block - Purple */}
      {course.lab && (
        <div className="bg-purple-300 text-black flex justify-between items-center px-6 py-4 shadow-md w-56 rounded-r-3xl">
          <div>
            <p className="text-sm font-medium">Lab</p>
            <p className="text-sm">{course.lab.type}</p>
            <p className="text-sm">{course.lab.day}</p>
          </div>
          <div className="text-right">
            <div className={`
              py-1 px-2 rounded-full text-center text-xs
              ${course.lab.status === 'Enrolled' ? 'bg-black text-yellow-400' : 
                course.lab.status === 'Full' ? 'bg-black text-white' : 
                'bg-black text-red-500'}
            `}>
              {course.lab.status}
            </div>
            <p className="text-sm mt-1">{course.lab.seats} seats</p>
            <p className="text-sm">{course.lab.time}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Updated course data to match your image
const courses = [
  {
    code: 'SOEN 345',
    status: 'Enrolled',
    seats: '25/80',
    time: '13:00-14:15',
    type: 'LEC SS',
    days: 'TUE-FRI',
    tutorial: { 
      status: 'Enrolled', 
      seats: '15/20', 
      time: '13:00-14:15', 
      days: 'TUE-FRI', 
      type: 'TUT SX-I' 
    },
    lab: { 
      status: 'Enrolled', 
      seats: '11/20', 
      time: '13:00-14:15', 
      day: 'MON', 
      type: 'LAB SL' 
    }
  },
  {
    code: 'SOEN 357',
    status: 'Enrolled',
    seats: '25/80',
    time: '13:00-14:15',
    type: 'LEC SS',
    days: 'TUE-FRI',
    tutorial: { 
      status: 'Enrolled', 
      seats: '15/20', 
      time: '13:00-14:15', 
      days: 'TUE-FRI', 
      type: 'TUT SX-I' 
    },
    lab: null
  },
  {
    code: 'COMP 999',
    status: 'Wait List',
    seats: '25/80',
    time: '13:00-14:15',
    type: 'LEC SS',
    days: 'TUE-FRI',
    tutorial: null,
    lab: null
  },
  {
    code: 'SOEN 322',
    status: 'Full',
    seats: '80/80',
    time: '13:00-14:15',
    type: 'LEC SS',
    days: 'TUE-FRI',
    tutorial: { 
      status: 'Full', 
      seats: '20/20', 
      time: '13:00-14:15', 
      days: 'TUE-FRI', 
      type: 'TUT SX-I' 
    },
    lab: { 
      status: 'Full', 
      seats: '20/20', 
      time: '13:00-14:15', 
      day: 'MON', 
      type: 'LAB SL' 
    }
  },
  {
    code: 'SOEN 331',
    status: 'Enrolled',
    seats: '25/80',
    time: '13:00-14:15',
    type: 'LEC SS',
    days: 'TUE-FRI',
    tutorial: { 
      status: 'Enrolled', 
      seats: '15/20', 
      time: '13:00-14:15', 
      days: 'TUE-FRI', 
      type: 'TUT SX-I' 
    },
    lab: null
  }
];
export default function CourseCartPage() {
  const terms = [
    { name: "Fall/Winter 2024-25", active: false },
    { name: "Winter 2025", active: true },
    { name: "Summer 2025", active: false },
    { name: "Fall 2025", active: false },
    { name: "Fall/Winter 2025-26", active: false },
    { name: "Winter 2026", active: false }
  ];

  const courses = [
    {
      code: 'SOEN 345',
      status: 'Enrolled',
      seats: '25/80',
      time: '13:00-14:15',
      type: 'LEC SS',
      days: 'TUE-FRI',
      tutorial: { status: 'Enrolled', seats: '15/20', time: '13:00-14:15', days: 'TUE-FRI' },
      lab: { status: 'Enrolled', seats: '11/20', time: '13:00-14:15', day: 'MON' }
    },
    {
      code: 'SOEN 390',
      status: 'Enrolled',
      seats: '270/300',
      time: '15:45-18:00',
      type: 'LEC UI',
      days: 'MON-WED',
      tutorial: { status: 'Enrolled', seats: '15/20', time: '08:45-9:50', days: 'TUE-THU' },
      lab: { status: 'Enrolled', seats: '11/20', time: '18:00-20:15', day: 'TUE' }
    },
    {
      code: 'SOEN 341',
      status: 'Enrolled',
      seats: '30/75',
      time: '10:00-11:15',
      type: 'LEC',
      days: 'MON-WED',
      tutorial: {
        status: 'Enrolled',
        seats: '20/25',
        time: '11:30-12:45',
        days: 'FRI',
        type: 'TUT'
      },
      lab: null
    },
    {
      code: 'COMP 445',
      status: 'Wait List',
      seats: '50/50',
      time: '15:00-16:15',
      type: 'LEC',
      days: 'MON-THU',
      tutorial: null,
      lab: {
        status: 'Wait List',
        seats: '20/20',
        time: '16:30-17:45',
        day: 'THU',
        type: 'LAB'
      }
    }

    // Add more courses here...
  ];
  const navigate = useNavigate();
  return (
    <div className="flex w-full min-h-screen bg-[#E5383B]">
      {/* Left sidebar */}
      <aside className="bg-red-500 w-16 flex flex-col items-center py-4">
        <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center mb-8">
          <img src={ConcordiaLogo} alt="Concordia Logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-6 items-center text-white">
          <Mail className="w-6 h-6 cursor-pointer" onClick={() => navigate('/mail')} />
          <Calendar className="w-6 h-6 cursor-pointer" onClick={() => navigate('/calendar')} />
          <List className="w-6 h-6 cursor-pointer" onClick={() => navigate('/list')} />
          <div className="bg-blue-300 p-1 rounded">
          <FileText className="w-6 h-6 cursor-pointer" onClick={() => navigate('/documents')} /></div>
          <Home className="w-6 h-6 cursor-pointer" onClick={() => navigate('/')} />
          <Settings className="w-6 h-6 cursor-pointer" onClick={() => navigate('/settings')} />
        </div>
      </aside>

      {/* Main Content */}
      <div className="bg-[#FFF8F7] flex-1 shadow-lg p-10 relative">
        {/* Top Menu */}
        <div className="flex gap-4 items-center mb-10">
          <div className="flex items-center gap-2 bg-[#F9F4F3] px-5 py-2 rounded-[20px] shadow">
            <BookOpen className="w-5 h-5 text-[#E5383B]" />
            <span className="text-[#E5383B] text-md">Course Cart</span>
          </div>
          <input type="text" placeholder="Course search" className="bg-[#F9F4F3] px-4 py-2 rounded-[20px] shadow text-sm" />
        </div>

        {/* Course List */}
        <div className="space-y-4 mt-8">
      {courses.map((course, idx) => (
        <CourseCard key={idx} course={course} />
      ))}
    </div>

        {/* Term Selector */}
        <div className="absolute right-10 top-36 w-[283px] bg-[#F9F4F3] rounded-[45px] shadow-lg p-6">
          <h3 className="text-xl text-[#660708] mb-4 text-center">Term selector</h3>
          <div className="flex flex-col gap-4">
            {terms.map((term, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded transition font-medium ${term.active
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-red-500 border border-red-500 hover:bg-red-100'
                  }`}
              >
                {term.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
