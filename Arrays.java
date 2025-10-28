public class Arrays {
    public static void main(String args[]) {
        int arr[] = {1, 2, 3, 4, 5, 6, 7};
        // int k = 3;
        // k %= arr.length;

       
        // rotate(arr, 0, arr.length - 1);
       
        // rotate(arr, 0, k - 1);
      
        // rotate(arr, k, arr.length - 1);

        // // Print rotated array 
        // for(int ele : arr){
        //     System.out.print(ele + " ");
        // }
        System.out.println("The largest number is :" + getLargest(arr));
    }

    public static void rotate(int arr[] , int start , int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    public static int getLargest(int arr[]){
        int largest = arr[0];
        for(int i = 0 ; i<arr.length ; i++){
            if(largest<arr[i]){
                largest = arr[i];
            }
        }
        return largest;
    }
}

