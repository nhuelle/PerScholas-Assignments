import java.util.*;
import java.util.Iterator;
  public class Main {
  public static void main(String[] args) {

      // 8. Write a Java program to get the number of elements in a hash set.
      // Create a empty hash set
     HashSet<String> h_set = new HashSet<String>();
   // use add() method to add values in the hash set
          h_set.add("Lions");
          h_set.add("Tigers");
          h_set.add("Cheetahs");
          h_set.add("Bears");
          h_set.add("Bonobos");
          h_set.add("Boa Constrictors");
    System.out.println("Original Hash Set: " + h_set);
    System.out.println("Size of the Hash Set: " + h_set.size());

   }
}

