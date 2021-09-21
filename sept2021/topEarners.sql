SELECT salary * months earnings FROM employee ORDER BY 1 DESC LIMIT 1), COUNT(*) FROM (SELECT salary * months earnings FROM employee ORDER BY 1 DESC LIMIT 1);

SELECT salary * months AS earnings , count(*) FROM employee
GROUP BY 1
ORDER BY 1 DESC LIMIT 1;