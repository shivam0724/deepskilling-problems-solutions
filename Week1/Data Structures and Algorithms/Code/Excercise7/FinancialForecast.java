package Excercise7;

public class FinancialForecast {

    /**
     * PV - present value
     * rates - array of decimal growth rates (e.g., 0.05 for 5%)
     * n - the number of periods to project
     */
    public static double futureValueRecursive(double PV, double[] rates, int n) {
        if (n == 0) {
            return PV;
        }

        double prevValue = futureValueRecursive(PV, rates, n - 1);
        return prevValue * (1 + rates[n - 1]);
    }

    public static void main(String[] args) {
        double presentValue = 1_000.0;
        double[] growthRates = { 0.05, 0.03, 0.07 }; // 5%, 3%, 7%

        double fv = futureValueRecursive(presentValue, growthRates, growthRates.length);
        System.out.printf("Future Value after %d periods: %.2f%n", growthRates.length, fv);
    }
}
