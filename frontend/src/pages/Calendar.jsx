import React, { useState } from 'react';

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const generateCalendar = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();

    const calendarDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    return (
      <>
        {Array.from({ length: firstDayOfWeek }, (_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {calendarDays.map((day) => (
          <div
            key={day}
            className={`text-center py-2 border cursor-pointer ${
              year === new Date().getFullYear() &&
              month === new Date().getMonth() &&
              day === new Date().getDate()
                ? 'bg-blue-500 text-white'
                : ''
            }`}
            onClick={() => handleDateClick(year, month, day)}
          >
            {day}
          </div>
        ))}
      </>
    );
  };

  const showModal = (selectedDate) => {
    setSelectedDate(selectedDate);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleDateClick = (year, month, day) => {
    const selectedDate = new Date(year, month, day);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = selectedDate.toLocaleDateString(undefined, options);
    showModal(formattedDate);
  };

  const handlePrevMonthClick = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
  };

  const handleNextMonthClick = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
            <button onClick={handlePrevMonthClick} className="text-white">
              Previous
            </button>
            <h2 className="text-white">{`${new Date(currentYear, currentMonth).toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}`}</h2>
            <button onClick={handleNextMonthClick} className="text-white">
              Next
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 p-4">{generateCalendar(currentYear, currentMonth)}</div>
          {isModalVisible && (
            <div className="modal fixed inset-0 flex items-center justify-center">
              <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
              <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                  <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold">Selected Date</p>
                    <button
                      onClick={hideModal}
                      className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="text-xl font-semibold">{selectedDate}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
