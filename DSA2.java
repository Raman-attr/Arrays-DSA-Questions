public class DSA2 {
    // Reverse an array
    public static void main (String[] args){
        int arr[] = {5,6,7,8,9};
        reverse(arr);
    }
    public static void reverse(int arr[]){
        int first = arr[0] , last = arr.length-1;
        while(first<last){
           int temp = arr[first];
           arr[first] = arr[last];
           arr[last] = temp;
           first++;
           last--;
           
        }
        System.out.print("Reversed Array is :");
        for(int num : arr){
            System.out.print(num + " ");
        }
    }
}
