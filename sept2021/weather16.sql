SELECT ROUND(MIN(lat_n),4) FROM station WHERE lat-N > 38.778;


SELECT ROUND(long_w,4) FROM station WHERE MIN(lat_n) > 38.778;