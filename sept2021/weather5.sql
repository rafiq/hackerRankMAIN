SELECT (SELECT city FROM station ORDER BY length(city), city LIMIT 1), MIN(length(city)), (SELECT city FROM station ORDER BY length(city) DESC, city LIMIT 1) ,MAX(length(city)) FROM (SELECT city FROM station
ORDER BY 1);

select city, length(city) from station
order by length(city),city asc
limit 1;
select city, length(city) from station
order by length(city) desc
limit 1;