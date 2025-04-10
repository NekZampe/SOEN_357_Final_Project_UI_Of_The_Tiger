import { useState } from 'react';
import { Mail, Calendar, List, FileText, Home, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ConcordiaLogo from '../assets/concordia_logo.png';

export default function StudentDashboard() {
  const [userName] = useState('Bob');
  
  // Calendar data
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const calendarDays = [
    { day: 26, month: 'prev' }, { day: 27, month: 'prev' }, { day: 28, month: 'prev' }, 
    { day: 29, month: 'prev' }, { day: 30, month: 'prev' }, { day: 31, month: 'prev' }, 
    { day: 1, month: 'current' },
    { day: 2, month: 'current' }, { day: 3, month: 'current' }, { day: 4, month: 'current' }, 
    { day: 5, month: 'current' }, { day: 6, month: 'current' }, { day: 7, month: 'current' }, 
    { day: 8, month: 'current' },
    { day: 9, month: 'current' }, { day: 10, month: 'current' }, { day: 11, month: 'current', active: true }, 
    { day: 12, month: 'current' }, { day: 13, month: 'current' }, { day: 14, month: 'current' }, 
    { day: 15, month: 'current' },
    { day: 16, month: 'current' }, { day: 17, month: 'current' }, { day: 18, month: 'current' }, 
    { day: 19, month: 'current' }, { day: 20, month: 'current' }, { day: 21, month: 'current' }, 
    { day: 22, month: 'current' },
    { day: 23, month: 'current' }, { day: 24, month: 'current' }, { day: 25, month: 'current' }, 
    { day: 26, month: 'current' }, { day: 27, month: 'current' }, { day: 28, month: 'current' }, 
    { day: 29, month: 'current' },
    { day: 30, month: 'current' }, { day: 1, month: 'next' }, { day: 2, month: 'next' }, 
    { day: 3, month: 'next' }, { day: 4, month: 'next' }, { day: 5, month: 'next' }, 
    { day: 6, month: 'next' }
  ];

  // Classes data
  const classes = [
    { id: 241, name: 'Econ 241', time: '9:00-10:15', days: 'MWF' },
    { id: 113, name: '12:00-13:15', time: '12:00-13:15', days: 'MWF' },
    { id: 357, name: 'Stats 357', time: '9:00-11:15', days: 'TuTh' }
  ];

  // Todo items
  const todoItems = [
    { id: 1, text: 'Pay for fee increase', completed: false },
    { id: 2, text: 'Update your address', completed: true },
    { id: 3, text: 'Email Dr Nagy', completed: true },
    { id: 4, text: 'Practice proof of something', completed: false }
  ];

  // Important dates
  const importantDates = [
    { name: 'Course schedule card ready', date: 'March 10' },
    { name: 'Class registration starts', date: 'March 12' },
    { name: 'Last day of classes', date: 'April 12' },
    { name: 'Exams start', date: 'April 15' }
  ];
  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-screen bg-white text-black">
      {/* Left sidebar */}
      <aside className="bg-red-500 w-16 flex flex-col items-center py-4">
        <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center mb-8">
        <img src={ConcordiaLogo} alt="Concordia Logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-6 items-center text-white">
        <Mail className="w-6 h-6 cursor-pointer" onClick={() => navigate('/mail')} />
        <Calendar className="w-6 h-6 cursor-pointer" onClick={() => navigate('/calendar')} />
        <List className="w-6 h-6 cursor-pointer" onClick={() => navigate('/list')} />
        <FileText className="w-6 h-6 cursor-pointer" onClick={() => navigate('/documents')} />
        <div className="bg-blue-300 p-1 rounded">
        <Home className="w-6 h-6 cursor-pointer" onClick={() => navigate('/')} /></div>
        <Settings className="w-6 h-6 cursor-pointer" onClick={() => navigate('/settings')} />
      </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-white overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-red-800 m-0">Hello, {userName}</h1>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="bg-gray-100 rounded-full py-1 px-4 text-sm w-48 outline-none text-gray-800"
            />
          </div>
        </header>

        {/* Dashboard grid */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Schedule */}
          <div className="bg-red-500 rounded-lg p-4 text-white">
            <h2 className="text-lg font-semibold mb-4">Schedule</h2>
            
            {/* Calendar */}
            <div className="bg-white rounded-md p-2 text-gray-800 mb-4">
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium">
                {daysOfWeek.map((day) => (
                  <div key={day} className="py-1">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {calendarDays.map((day, index) => (
                  <div 
                    key={index} 
                    className={`py-1 ${day.active ? 'bg-red-500 text-white rounded-full' : ''} ${day.month !== 'current' ? 'text-gray-400' : ''}`}
                  >
                    {day.day}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Classes */}
            <div className="space-y-2">
              {classes.map((cls) => (
                <div key={cls.id} className="bg-white rounded-md p-2 text-gray-800">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-medium">{cls.name}</div>
                      <div className="text-xs text-gray-500">{cls.time}</div>
                    </div>
                    <div className="text-xs font-medium">{cls.days}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle column - GPA, TODO, etc. */}
          <div className="flex flex-col gap-4">
            {/* GPA Card */}
            <div className="bg-green-500 rounded-lg p-8 text-white text-center">
              <h2 className="text-lg font-semibold mb-2">GPA</h2>
              <p className="text-6xl font-bold">3.87</p>
            </div>

            {/* Todo Card */}
            <div className="bg-blue-500 rounded-lg p-4 text-white relative">
              <h2 className="text-xl font-semibold mb-4">TODO</h2>
              <div className="space-y-3">
                {todoItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-2">
                    <div className={`w-5 h-5 mt-0.5 border-2 border-white flex items-center justify-center ${item.completed ? 'bg-white' : ''} rounded`}>
                      {item.completed && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={item.completed ? 'line-through' : ''}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payments Card */}
            <div className="bg-orange-200 rounded-lg p-4 text-gray-800 relative">
              <h2 className="text-xl font-semibold mb-3">Due Today</h2>
              <p className="text-3xl font-bold mb-4">2511$</p>
              <div className="bg-orange-300 rounded-md p-3">
                <p className="text-sm font-medium">Due Total</p>
                <p className="text-2xl font-bold">2511$</p>
              </div>
            </div>
          </div>

          {/* Right column - Important Dates */}
          <div className="bg-red-500 rounded-lg p-4 text-white">
            <h2 className="text-lg font-semibold mb-4">Dates to Keep Track</h2>
            <div className="space-y-3">
              {importantDates.map((date, index) => (
                <div key={index} className="bg-white rounded-md p-3 text-gray-800">
                  <div className="flex justify-between">
                    <p className="font-medium">{date.name}</p>
                    <p className="text-xs text-gray-500">More</p>
                  </div>
                  <p className="text-sm">{date.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
