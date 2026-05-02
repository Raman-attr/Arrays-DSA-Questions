import java.util.*;

public class patterns{
    public static void main (String args[]){
        Scanner sc = new Scanner(System.in);
        rectangle(sc);
        square(sc);
    }
    // print rectangle
    public static void rectangle(Scanner sc){
        int rows = sc.nextInt();
        int col = sc.nextInt();

        for(int i = 1 ; i<= rows ; i++){
            for(int j = 1 ; j<=col ; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    // print Square
    public static void square (Scanner sc){
        int rows = sc.nextInt();
        int col = sc.nextInt();

        for(int i = 1 ; i<=rows ; i++){
            for(int j = 1 ; j<=col ; j++){
                System.out.print("* ");
            }
            System.out.println();
        }

    }
}
