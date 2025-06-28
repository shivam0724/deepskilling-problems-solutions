-- Scenario 1: The bank needs to process monthly interest for all savings accounts.

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR acc IN (
        SELECT AccountID, Balance 
        FROM Accounts 
        WHERE AccountType = 'Savings'
    )
    LOOP
        UPDATE Accounts
        SET Balance = Balance * 1.01,
            LastModified = SYSDATE
        WHERE AccountID = acc.AccountID;
    END LOOP;

    COMMIT;
END;
/

-- to executre the procedure
EXECUTE ProcessMonthlyInterest;

-- to verify
SELECT * FROM Accounts WHERE AccountType = 'Savings';