public class Main {

    static boolean getUp(boolean squawk, int currentHour) {
        if(currentHour > 6 && currentHour < 22) {
            squawk = true;
        }else if(currentHour < 0 && currentHour > 23) {
            squawk = false;
        }
        return squawk;
    }
    public static void main(String[] args) {
        System.out.println("Is the parrot squawking? The answer is: " + getUp(false, 1));
    }
}
