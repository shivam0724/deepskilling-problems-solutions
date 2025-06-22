public class Logger {
    private static Logger instance = new Logger();

    private Logger() {
        System.out.println("Logger initialized!\n");
    }

    public static Logger getInstance() {
        return instance;
    }

    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}
