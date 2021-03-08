import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
 
public class Main {
 
    public static void main(String[] args) {
        
        Set<String> setDays = new HashSet<String>();
        setDays.add("Sundas");
        setDays.add("Morndas");
        setDays.add("Tirdas");
        
        
        String[] strDays = setDays.toArray(new String[ setDays.size() ]);
        
        System.out.println( Arrays.toString(strDays) );
 
    }
}
