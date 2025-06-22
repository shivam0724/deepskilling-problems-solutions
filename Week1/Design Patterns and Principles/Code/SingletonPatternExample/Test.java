public class Test {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("First Activity Logged");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second Activity Logged");

        if (logger1 == logger2) { // verifying both instances are same
            System.out.println("\nOnly one instance exists. Singleton confirmed.");
        } else {
            System.out.println("\nDifferent instances exist. Singleton failed.");
        }
    }
}