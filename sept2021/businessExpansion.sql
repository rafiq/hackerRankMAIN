SELECT u.id, u.first_name, u.last_name, c.id, c.customer_name, COUNT(*) FROM customer c
JOIN contact ON c.id = contact.customer_id
JOIN user_account u ON u.id = contact.user_account_id
HAVING COUNT(contact.user_account_id) > 1 AND HAVING COUNT(contact.customer_id)
GROUP BY 4;


SELECT u.id, u.first_name, u.last_name, c.id, c.customer_name, COUNT(*) FROM customer c
JOIN contact ON c.id = contact.customer_id
JOIN user_account u ON u.id = contact.user_account_id
GROUP BY 1,2,3,4,5
HAVING COUNT(*) > 1;



SELECT country.country_name, COUNT(*), AVG(invoice.total_price) AS avg_by_country FROM country
JOIN city ON country.id = city.country_id
JOIN customer ON customer.city_id = city.id
JOIN invoice ON customer.id = invoice.customer_id
GROUP BY 1;



SELECT AVG(invoice.total_price) FROM country
JOIN city ON country.id = city.country_id
JOIN customer ON customer.city_id = city.id
JOIN invoice ON customer.id = invoice.customer_id;
