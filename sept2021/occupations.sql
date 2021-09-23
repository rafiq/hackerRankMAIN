SELECT name FROM occupations
WHERE occupation = 'Doctor' ORDER BY name;


SELECT
    [Doctor], [Professor], [Singer], [Actor]
FROM
(
    SELECT ROW_NUMBER() OVER (PARTITION BY OCCUPATION ORDER BY NAME) [RowNumber], * FROM OCCUPATIONS
) AS tempTable
PIVOT
(
    MAX(NAME) FOR OCCUPATION IN ([Doctor], [Professor], [Singer], [Actor])
) AS pivotTable



SELECT
MIN(CASE WHEN Occupation = 'Doctor' THEN Name ELSE NULL END) AS Doctor,
MIN(CASE WHEN Occupation = 'Professor' THEN Name ELSE NULL END) AS Professor,
MIN(CASE WHEN Occupation = 'Singer' THEN Name ELSE NULL END) AS Singer,
MIN(CASE WHEN Occupation = 'Actor' THEN Name ELSE NULL END) AS Actor
FROM (
  SELECT a.Occupation,
         a.Name,
         (SELECT COUNT(*)
            FROM Occupations AS b
            WHERE a.Occupation = b.Occupation AND a.Name > b.Name) AS rank
  FROM Occupations AS a
) AS c
GROUP BY c.rank;


SET @r1=0,@r2=0,@r3=0,@r4=0;
SELECT MIN(Doctor),MIN(Professor),MIN(Singer),MIN(Actor)

FROM (
SELECT CASE
    WHEN OCCUPATION = 'Doctor' THEN (@r1:=@r1+1)
    WHEN OCCUPATION = 'Professor' THEN (@r2:=@r2+1)
    WHEN OCCUPATION = 'Singer' THEN (@r3:=@r3+1)
    WHEN OCCUPATION = 'Actor' THEN (@r4:=@r4+1) END AS RowNumber,
    CASE WHEN OCCUPATION = 'Doctor' THEN Name END AS Doctor,
    CASE WHEN OCCUPATION = 'Professor' THEN Name END AS Professor,
    CASE WHEN OCCUPATION = 'Singer' THEN Name END AS Singer,
    CASE WHEN OCCUPATION = 'Actor' THEN Name END AS Actor
FROM OCCUPATIONS
ORDER BY Name) as temp




set @r1=0, @r2=0, @r3=0, @r4=0;
select min(Doctor), min(Professor), min(Singer), min(Actor)
from(
  select case when Occupation='Doctor' then (@r1:=@r1+1)
            when Occupation='Professor' then (@r2:=@r2+1)
            when Occupation='Singer' then (@r3:=@r3+1)
            when Occupation='Actor' then (@r4:=@r4+1) end as RowNumber,
    case when Occupation='Doctor' then Name end as Doctor,
    case when Occupation='Professor' then Name end as Professor,
    case when Occupation='Singer' then Name end as Singer,
    case when Occupation='Actor' then Name end as Actor
  from OCCUPATIONS
  order by Name
) Temp
group by RowNumber