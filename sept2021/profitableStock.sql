

SELECT ptod.stock_code FROM price_today ptod
JOIN price_tomorrow ptom ON ptod.stock_code = ptom.stock_code
WHERE ptom.price > ptod.price
ORDER BY 1;