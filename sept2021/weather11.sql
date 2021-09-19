SELECT DISTINCT city FROM station WHERE LEFT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U') OR RIGHT(CITY, 1) NOT IN ('a', 'e', 'i', 'o', 'u');

SELECT DISTINCT city FROM station WHERE (city NOT LIKE '%a' AND city NOT LIKE '%e' AND city NOT LIKE '%i' AND city NOT LIKE '%o' AND city NOT LIKE '%u') AND (SELECT DISTINCT city FROM station WHERE city NOT LIKE 'A%' AND city NOT LIKE 'E%' AND city NOT LIKE 'I%' AND city NOT LIKE 'O%' AND city NOT LIKE 'U%');

SELECT DISTINCT city FROM station WHERE LEFT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U') AND RIGHT(CITY, 1) NOT IN ('a', 'e', 'i', 'o', 'u');