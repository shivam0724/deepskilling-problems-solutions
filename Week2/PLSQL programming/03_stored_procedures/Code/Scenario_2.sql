-- Scenario 2: The bank wants to implement a bonus scheme for employees based on their performance.

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_bonus_percent / 100))
    WHERE Department = p_department;

    COMMIT;
END;
/

-- to execute the procedure
EXECUTE UPDATEEMPLOYEEBONUS('IT', 10);

-- to verify changes
SELECT * FROM EMPLOYEES;