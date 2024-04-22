public class StringToCharArrayExample {
    public static void main(String[] args) {
        String str = "Hello";
        char[] chars = str.toCharArray();
        System.out.println("Array of characters:");
        for (char ch : chars) {
            System.out.println(ch);
        }
    }
}
