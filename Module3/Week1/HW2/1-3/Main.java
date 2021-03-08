import java.util.*;
import java.util.ArrayList; 
import java.util.Collections; 

public class Main {

   // 1. Write a Java program to copy one array list into another. 
   public static void main (String[] args) {
      List<String> zoo = new ArrayList<String>();
      zoo.add("Lions");
      zoo.add("Tigers");
      zoo.add("Bears");
      List<String> list = new ArrayList<String>();
      list.add("Greetings");
      list.add("Hola");
      list.add("Salutations");
      Collections.copy(list,zoo); // copying the ArrayList zoo to the ArrayList list
      System.out.println(list);

   // 2.  Write a Java program to extract a portion of a array list.
      List<String> list_Strings = new ArrayList<String>();
      list_Strings.add("Onion");
      list_Strings.add("Potato");
      list_Strings.add("Leek");
      list_Strings.add("Spinach");
      list_Strings.add("Asparagus");
      System.out.println("Original list: " + list_Strings);
      List<String> sub_List = list_Strings.subList(0, 3);
      System.out.println("List of first three elements: " + sub_List);

   // 3. Write a Java program of swap two elements in an array list.
      // Create the Array List 
		ArrayList<String> ArrList = new ArrayList<String>(); 

		// add the values in Array List 
		ArrList.add("Uno"); 
		ArrList.add("Dos"); 
		ArrList.add("Tres"); 
		ArrList.add("Quatro"); 
		ArrList.add("Cinco"); 

		// display Array List before swap 
		System.out.println("ArrayList Before Swap"); 
		System.out.println(ArrList); 

		// Swapping the elements at 1 and 2 indeces 
		Collections.swap(ArrList, 1, 2); 

		// display Array List after swap 
		System.out.println("ArrayList After Swap"); 
		System.out.println(ArrList); 
   }
}