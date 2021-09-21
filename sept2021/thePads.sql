SELECT concat(NAME,concat("(",concat(substr(OCCUPATION,1,1),")"))) FROM OCCUPATIONS ORDER BY NAME ASC;

SELECT "There are a total of", count(OCCUPATION), concat(lower(occupation),"s.") FROM OCCUPATIONS GROUP BY OCCUPATION ORDER BY count(OCCUPATION) ASC




SELECT name, CONCAT('(', LEFT(occupation,1), ')') FROM occupations  ORDER BY name;


SELECT "There are a total of ", COUNT(occupation), concat(lower(occupation),"s.")  FROM occupations
GROUP BY 2
ORDER BY 1;

SELECT concat(NAME,concat("(",concat(substr(OCCUPATION,1,1),")"))) FROM OCCUPATIONS ORDER BY NAME ASC;

SELECT "There are total ", count(OCCUPATION), concat(lower(occupation),"s.") FROM OCCUPATIONS GROUP BY OCCUPATION ORDER BY count(OCCUPATION) ASC


select concat(Name,'(',Substring(Occupation,1,1),')') as Name

from occupations

Order by Name

select concat('There are total',' ',count(occupation),' ',lower(occupation),'s.') as total

from occupations

group by occupation

order by total


CONCAT('(',UPPER(Title),')')