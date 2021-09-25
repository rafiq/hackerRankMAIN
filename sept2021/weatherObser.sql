SELECT city, state FROM station; WHERE lat_n = MAX(lat_n) AND long_w = MIN(long_w);

SELECT city FROM station WHERE id % 2 = 0;