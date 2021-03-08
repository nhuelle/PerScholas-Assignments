import java.util.*;
import java.util.Iterator;
import java.io.*; 

  public class Main {
  public static void main(String[] args) {
      // 9. Write a Java program to iterate through all elements in a hash list.
         // Create a empty hash set
     HashSet<String> h_set = new HashSet<String>();
   // use add() method to add values in the hash set
          h_set.add("Onions");
          h_set.add("Potatoes");
          h_set.add("Apples");
          h_set.add("Peas");
          h_set.add("Beans");
          h_set.add("Barley");

  // set Iterator 
    Iterator<String> p = h_set.iterator();
  // Iterate the hash set
   while (p.hasNext()) {
   System.out.println(p.next());
   }
   }
}