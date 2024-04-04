import java.util.Random;

public class RandomNumberExample {
    public static void main(String[] args) {
        Random random = new Random();
        int randomNumber = random.nextInt(100); // Генерация случайного числа от 0 до 99
        System.out.println("Random number: " + randomNumber);
    }
}
