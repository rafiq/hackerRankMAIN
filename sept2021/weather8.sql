SELECT DISTINCT city FROM station WHERE city NOT LIKE 'A%' AND city NOT LIKE 'E%' AND city NOT LIKE 'I%' AND city NOT LIKE 'O%' AND city NOT LIKE 'U%';


SELECT DISTINCT city FROM station WHERE (city LIKE '%a' OR city LIKE '%e' OR city LIKE '%i' OR city LIKE '%o' OR city LIKE '%u') AND (city LIKE 'A%' OR city LIKE 'E%' OR city LIKE 'I%' OR city LIKE 'O%' OR city LIKE 'U%');