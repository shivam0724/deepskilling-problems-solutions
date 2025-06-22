public class Test {
    public static void main(String[] args) {
        System.out.println("Test Started\n");

        DocumentFactory wordFactory = new WordDocumentFactory();
        Document word = wordFactory.createDocument();
        word.open();
        word.save();
        word.close();
        System.out.println();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();
        pdf.save();
        pdf.close();
        System.out.println();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document xl = excelFactory.createDocument();
        xl.open();
        xl.save();
        xl.close();
        System.out.println();

        System.out.println("Test Ended");
    }
}