public class SwitchCaseExample {
    public static void main(String[] args) {
        int day = 3;
        String dayType;
        switch (day) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                dayType = "Weekday";
                break;
            case 6:
            case 7:
                dayType = "Weekend";
                break;
            default:
                dayType = "Invalid day";
        }
        System.out.println("Day type: " + dayType);
    }
}
