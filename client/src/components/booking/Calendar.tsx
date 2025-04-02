import { useState } from "react";

interface CalendarProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

// Calendar Day component
const CalendarDay = ({ 
  day, 
  disabled = false, 
  selected = false, 
  currentMonth = true,
  onSelect 
}: { 
  day: number; 
  disabled?: boolean; 
  selected?: boolean; 
  currentMonth?: boolean;
  onSelect: (day: number) => void 
}) => (
  <div 
    className={`${
      disabled 
        ? 'text-neutral-300 cursor-not-allowed' 
        : 'cursor-pointer hover:bg-neutral-100'
    } ${
      selected 
        ? 'bg-primary text-white rounded-full' 
        : ''
    } ${
      !currentMonth 
        ? 'text-neutral-300' 
        : ''
    } h-10 w-10 flex items-center justify-center mx-auto`}
    onClick={() => !disabled && onSelect(day)}
  >
    {day}
  </div>
);

const Calendar = ({ selectedDate, onDateSelect }: CalendarProps) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Generate days for current month view
  const generateCalendar = () => {
    // Get first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const dayOfWeek = firstDayOfMonth.getDay(); // 0-6, Sunday-Saturday
    
    // Get last day of the month
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    
    // Get last day of previous month
    const lastDayOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    
    // Days from previous month to display
    const prevMonthDays = [];
    for (let i = dayOfWeek - 1; i >= 0; i--) {
      prevMonthDays.push({
        day: lastDayOfPrevMonth - i,
        currentMonth: false,
        disabled: true
      });
    }
    
    // Days from current month
    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      // Disable past days (current month and day or earlier)
      const isDisabled = 
        currentYear < today.getFullYear() || 
        (currentYear === today.getFullYear() && 
          (currentMonth < today.getMonth() || 
            (currentMonth === today.getMonth() && i < today.getDate())));
      
      currentMonthDays.push({
        day: i,
        currentMonth: true,
        disabled: isDisabled
      });
    }
    
    // Days from next month to fill grid (always show 6 rows)
    const totalDaysShown = prevMonthDays.length + currentMonthDays.length;
    const nextMonthDays = [];
    for (let i = 1; i <= 42 - totalDaysShown; i++) {
      nextMonthDays.push({
        day: i,
        currentMonth: false,
        disabled: true
      });
    }
    
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  const days = generateCalendar();
  
  // Navigate to previous month
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  // Navigate to next month
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  // Format month name
  const getMonthName = () => {
    return new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });
  };
  
  // Handle day selection
  const handleDaySelect = (day: number) => {
    const dateString = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    onDateSelect(dateString);
  };
  
  // Check if a day is selected
  const isDaySelected = (day: number) => {
    if (!selectedDate) return false;
    
    const date = new Date(selectedDate);
    return (
      date.getFullYear() === currentYear &&
      date.getMonth() === currentMonth &&
      date.getDate() === day
    );
  };

  return (
    <div className="bg-neutral-50 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <button 
          type="button" 
          onClick={prevMonth}
          className="text-neutral-500 hover:text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="font-semibold">{getMonthName()}</div>
        
        <button 
          type="button" 
          onClick={nextMonth}
          className="text-neutral-500 hover:text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        <div className="text-center font-medium text-neutral-500">Su</div>
        <div className="text-center font-medium text-neutral-500">Mo</div>
        <div className="text-center font-medium text-neutral-500">Tu</div>
        <div className="text-center font-medium text-neutral-500">We</div>
        <div className="text-center font-medium text-neutral-500">Th</div>
        <div className="text-center font-medium text-neutral-500">Fr</div>
        <div className="text-center font-medium text-neutral-500">Sa</div>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <CalendarDay
            key={index}
            day={day.day}
            disabled={day.disabled}
            selected={day.currentMonth && isDaySelected(day.day)}
            currentMonth={day.currentMonth}
            onSelect={handleDaySelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
