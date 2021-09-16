SELECT ROUND(Abs(MIN(lat_n) - MAX(lat_n)) + Abs(MIN(long_w) - MAX(long_w)),4) FROM station;


SELECT si.roll_number, si.name FROM student_information si
JOIN faculty_information fi ON fi.employee_id = si.advisor
WHERE (fi.gender = 'M' AND fi.salary >15000) OR (fi.gender = 'F' AND fi.salary > 20000);