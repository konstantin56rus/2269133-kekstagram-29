const isFormValidation = (str, num) => str.length === num;

isFormValidation('bourbon', 7);

const isPalindrome = (str) => str.toUpperCase() === str.toUpperCase().split('').reverse().join('');

isPalindrome('level');


function isMeetingWithinWorkday(startTime, endTime, meetingStart, meetingDuration) {
  // Преобразование из строк в числа и в том числе минуты
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // Переводим строки в минуты
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  const meetingStartMinutes = timeToMinutes(meetingStart);

  // Расчитываем время окончания встречи в минутах
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  // Проверяем условия встречи (в рабочем дне или нет)
  return meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes;
}

isMeetingWithinWorkday('14:00', '17:30', '08:0', 90);
