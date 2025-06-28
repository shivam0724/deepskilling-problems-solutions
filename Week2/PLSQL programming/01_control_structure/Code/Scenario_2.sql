-- Scenario 2: A customer can be promoted to VIP status based on their balance.

ALTER TABLE Customers ADD IsVIP BOOLEAN; -- adding the IsVIP column

BEGIN
    FOR cust IN (SELECT CustomerID, Balance FROM Customers) 
    LOOP
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = TRUE
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/

SELECT * FROM CUSTOMERS;