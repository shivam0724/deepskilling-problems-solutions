package Excercise2;
import java.util.Arrays;
import java.util.Scanner;

class Product {
    private int productId;
    private String productName;
    private String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public int getProductId() { return productId; }
    public String getProductName() { return productName; }
    public String getCategory() { return category; }

    @Override
    public String toString() {
        return "{ id: " + productId + ", Product Name: " + productName + ", Category: " + category + "}";
    }
}

public class SearchingExample {
    public static int linearSearch(Product[] products, String targetName) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductName().equalsIgnoreCase(targetName)) {
                return i;
            }
        }
        return -1;
    }

    public static int binarySearch(Product[] products, String targetName) {
        int s = 0, e = products.length - 1;
        while (s <= e) {
            int m = s + (e - s) / 2;
            int cmp = products[m].getProductName().compareToIgnoreCase(targetName);
            if (cmp == 0) return m;
            else if (cmp < 0) s = m + 1;
            else e = m - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] inventory = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "PC", "Electronics"),
            new Product(103, "Printer", "Accessories"),
            new Product(104, "Backpack", "Accessories")
        };

        Scanner scn = new Scanner(System.in);
        System.out.print("Enter Product Name: ");
        String userInput = scn.nextLine();

        int idx1 = linearSearch(inventory, userInput);
        System.out.println("Linear Search: " + idx1 + " -> " + (idx1 >= 0 ? inventory[idx1] : "Not Found"));

        Product[] sortedInv = Arrays.copyOf(inventory, inventory.length);
        Arrays.sort(sortedInv, (a, b) -> a.getProductName().compareToIgnoreCase(b.getProductName()));

        int idx2 = binarySearch(sortedInv, userInput);
        System.out.println("Binary Search: " + idx2 + " -> " + (idx2 >= 0 ? sortedInv[idx2] : "Not Found"));

        scn.close();
    }
}