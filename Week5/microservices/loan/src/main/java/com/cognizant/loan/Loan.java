package com.cognizant.loan;

public record Loan(String number, String type, long loan, long emi, int tenure) {
}