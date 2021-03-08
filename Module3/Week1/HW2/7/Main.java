import java.util.HashSet;
import java.util.Iterator;

public class Main {
 
    public static void main(String[] args) {

    // 7. Write a Java program to test a hash set is empty or not.       
        //create new empty HashSet
        HashSet<String> hsetFruits = new HashSet<String>();
        
        /*
         * To check if the HashSet object is empty or not, use
         * the isEmpty method
         */
        
        //this will return true as the set is empty
        System.out.println("HashSet empty: " + hsetFruits.isEmpty());
        
        //add some elements
        hsetFruits.add("Cherry");
        hsetFruits.add("Apple");
        
        //this will return false as there are two elements in the set
        System.out.println("HashSet empty: " + hsetFruits.isEmpty()); 
    }
}