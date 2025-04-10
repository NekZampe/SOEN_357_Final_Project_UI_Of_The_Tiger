import { useState } from 'react';
import { Mail, Calendar, List, FileText, Home, Settings, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ConcordiaLogo from '../assets/concordia_logo.png';

export default function ClassSchedule() {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', 'NOON', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM'];

  const classes = [
    { day: 'MON', startTime: '9 AM', endTime: '11 AM', course: 'SOEN 331', room: 'H907', type: 'LEC SS', professor: 'prof', color: 'bg-yellow-200' },
    { day: 'MON', startTime: '2 PM', endTime: '4 PM', course: 'SOEN 341', room: 'MB51.330', type: 'LEC XX', professor: 'prof', color: 'bg-green-200' },
    { day: 'WED', startTime: '9 AM', endTime: '11 AM', course: 'SOEN 331', room: 'H907', type: 'LEC SS', professor: 'prof', color: 'bg-yellow-200' },
    { day: 'THU', startTime: '2 PM', endTime: '4 PM', course: 'SOEN 341', room: 'MB51.330', type: 'LEC XX', professor: 'prof', color: 'bg-green-200' },
    { day: 'FRI', startTime: '6 PM', endTime: '8 PM', course: 'SOEN 341', room: 'MB51.330', type: 'LEC XX', professor: 'prof', color: 'bg-slate-500' }
  ];
  
  // Calculate class position and width
  const getClassStyle = (startTime, endTime) => {
    const startIndex = hours.indexOf(startTime);
    const endIndex = hours.indexOf(endTime);
    const startPercent = (startIndex / hours.length) * 100;
    const width = ((endIndex - startIndex) / hours.length) * 100;
    
    return {
      left: `${startPercent}%`,
      width: `${width}%`
    };
  };
  const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-red-500">

      {/* Left sidebar */}
      <aside className="bg-red-500 w-16 flex flex-col items-center py-4">
        <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center mb-8">
          <img src={ConcordiaLogo} alt="Concordia Logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-6 items-center text-white">
          <Mail className="w-6 h-6 cursor-pointer" onClick={() => navigate('/mail')} />
          <div className="bg-blue-300 p-1 rounded">
          <Calendar className="w-6 h-6 cursor-pointer" onClick={() => navigate('/calendar')} /></div>
          <List className="w-6 h-6 cursor-pointer" onClick={() => navigate('/list')} />
          <FileText className="w-6 h-6 cursor-pointer" onClick={() => navigate('/documents')} />
          <Home className="w-6 h-6 cursor-pointer" onClick={() => navigate('/')} />
          <Settings className="w-6 h-6 cursor-pointer" onClick={() => navigate('/settings')} />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl overflow-hidden border-red-500 border w-full">

          <div className="bg-white py-4 px-6 text-center">
            <h2 className="text-red-800 text-xl font-semibold">Class Schedule</h2>
          </div>

          <div className="overflow-x-auto p-4">
            <div className="w-full">
              {/* Time Header */}
              <div className="flex">
                <div className="w-24 shrink-0"></div>
                <div className="flex flex-1 bg-slate-100 rounded-lg">
                  {hours.map((hour, index) => (
                    <div 
                      key={index} 
                      className="flex-1 px-1 py-2 text-center text-xs font-medium text-gray-600 border-r border-gray-200 last:border-r-0"
                    >
                      {hour}
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar Grid */}
              {days.map((day, index) => (
                <div key={index} className="flex border-t border-gray-200">
                  <div
                    className={`w-16 flex items-center justify-center py-4 text-sm font-medium text-white my-1
                      ${day === 'SAT' || day === 'SUN'
                        ? 'bg-red-500 rounded-lg'
                        : 'bg-slate-500 rounded-lg'
                      }`}
                    
                    
                  >
                    {day}
                  </div>
                  <div className="flex-1 relative border-b border-gray-200 last:border-b-0" style={{ height: '80px' }}>
                    {/* Hour dividers */}
                    <div className="flex h-full">
                      {hours.map((_, hourIndex) => (
                        <div 
                          key={hourIndex} 
                          className="flex-1 border-r border-gray-100 last:border-r-0"
                        ></div>
                      ))}
                    </div>
                    {/* Classes for this day */}
                    {classes
                      .filter(cls => cls.day === day)
                      .map((cls, classIndex) => {
                        const styles = getClassStyle(cls.startTime, cls.endTime);

                        let bgColor = cls.day === 'FRI' ? 'bg-slate-500' :
                          cls.course === 'SOEN 331' ? 'bg-yellow-400' : 'bg-green-300';

                        const textColor = bgColor === 'bg-slate-500' ? 'text-white' : 'text-gray-800';

                        return (
                          <div
                            key={classIndex}
                            className={`absolute ${bgColor} rounded-xl flex my-2 overflow-hidden shadow-md`}
                            style={{
                              left: styles.left,
                              width: '200px',
                              top: '4px',
                              height: 'calc(100% - 20px)'
                            }}
                          >
                            <div className={`flex flex-col justify-center p-2 text-xs w-2/3 ${textColor}`}>
                              <div className="font-semibold leading-4">{cls.course}</div>
                              <div className="text-xs leading-8">{cls.room}</div>
                            </div>
                            <div className={`flex flex-col justify-center p-2 text-xs w-1/3 border-l ${textColor} ${bgColor === 'bg-slate-500' ? 'border-gray-400' : 'border-gray-300'}`}>
                              <div className="font-semibold leading-4">{cls.type}</div>
                              <div className="text-xs leading-5 mt-1">{cls.professor}</div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}