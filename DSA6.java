import java.util.*;
public class DSA6{
    public static void main (String args[]){
    int arr[] ={0,0,1,1,0};
    Segregate(arr);
    for(int ele : arr){
        System.out.print(ele + " ");
    }
    }
    public static void Segregate(int arr[]){
        int n = arr.length;
        int i = 0 , j = n-1;
        while(i<j){
            if(arr[i]==0) i++;
            else if(arr[j]==1) j--;
            else if(arr[i]==1 && arr[j]==0){
                arr[i]=0;
                arr[j]=1;
                i++;
                j--;
            }
        }
    }
}