-- Scenario 3: The bank wants to send reminders to customers whose loans are due within the next 30 days.

BEGIN
    FOR loan IN (
        SELECT l.LoanID, l.CustomerID, l.EndDate, c.Name
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) 
    LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan for customer ' || loan.Name || 
                             ' (LoanID: ' || loan.LoanID || ') is due on ' || loan.EndDate);
    END LOOP;
END;
/
