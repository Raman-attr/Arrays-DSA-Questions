import java.util.*;
public class DSA4 {
    public static void main (String args[]){
        int height[] = {1,8,6,2,5,4,8,3,7};
        System.out.println("MaxWater in container is :" + containerWater(height));
    }
    public static int containerWater(int height[]){
        int maxWater = 0;
        int lp = 0, rp = height.length - 1; 

        while (lp < rp) {
            int w = rp - lp;
            int ht = Math.min(height[lp], height[rp]); 
            int currWater = w * ht;
            maxWater = Math.max(maxWater, currWater);  

            
            if (height[lp] < height[rp]) {
                lp++;
            } else {
                rp--;
            }
        }
        return maxWater;
    }
}
