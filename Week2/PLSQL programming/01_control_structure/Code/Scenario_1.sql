-- Scenario 1: The bank wants to apply a discount to loan interest rates for customers above 60 years old.

DECLARE
    v_age NUMBER;
BEGIN
    FOR cust IN (SELECT c.CustomerID, c.DOB, l.LoanID, l.InterestRate
                 FROM Customers c
                 JOIN Loans l ON c.CustomerID = l.CustomerID) 
    LOOP
        v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12);

        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = cust.LoanID;
        END IF;
    END LOOP;

    COMMIT;
END;
/