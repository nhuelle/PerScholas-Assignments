import java.util.ArrayList;
import java.util.Collections;

 
public class Main {
    public static void main(String[] args) {

    // 4. Write a Java program to test an array list is empty or not
        ArrayList<String> myList = new ArrayList<String>();
         
        if(myList.isEmpty()) {
            System.out.println("ArrayList is empty.");
        } else {
            System.out.println("ArrayList is not empty.");
        }

    //5. Write a Java program to replace the second element of a ArrayList with the specified element.
        ArrayList<String>  color = new ArrayList<String>();

        color.add("Purple");
        color.add("Yellow");

        System.out.println("Original array list: " + color);
        String new_color = "Chartreuse";
        color.set(1,new_color);

        int num=color.size();
        System.out.println("Replace second element with 'Chartreuse'."); 
        for(int i=0;i<num;i++)
        System.out.println(color.get(i));

    //6. Write a Java program to trim the capacity of an array list the current list size.
        ArrayList<String> c1= new ArrayList<String>();
          c1.add("Lions");
          c1.add("Tigers");
          c1.add("Bears");
          c1.add("Oh");
          c1.add("My!");
          System.out.println("Original array list: " + c1);
          System.out.println("Let trim to size the above array: ");
          c1.trimToSize();
          System.out.println(c1);

    }
}