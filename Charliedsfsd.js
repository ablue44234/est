import java.util.Arrays;

public class SortStringArray {
    public static void main(String[] args) {
        String[] names = {"John", "Alice", "Bob", "Eve", "Charlie"};
        Arrays.sort(names);
        System.out.println("Sorted names:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
