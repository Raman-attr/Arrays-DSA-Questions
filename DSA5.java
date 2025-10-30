public class DSA5{
    public static void main (String args[]){
        int nums[] = {0,1,0,3,12};
        
        zeroToend(nums);
        for(int ele:nums){
            System.out.print(ele+" ");
        }
    }
    public static void zeroToend(int nums[]){
         int n = nums.length;
        int j = 0 ;
        for(int i = 0 ; i<n ; i++){
            if(nums[i]!= 0){
                if(i!=j){
                    int temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
                j++;
            }
        }
    }
}