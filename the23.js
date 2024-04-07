public class MaximumArrayElement {
    public static void main(String[] args) {
        int[] array = {10, 30, 20, 50, 40};
        int max = array[0];
        for (int num : array) {
            if (num > max) {
                max = num;
            }
        }
        System.out.println("Maximum element in the array: " + max);
    }
}
