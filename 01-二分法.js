function search(arr,key) {
    var low=0,
        high=arr.length-1;      //定义一个最高点和最低点
    while (low<=high){          //当最高点小于等于最低点的时候
        var mid=Math.floor((high+low)/2);   //挑一个中间数
        if (arr[mid]==key){return mid;}     //如果中间数等于查找的值，返回这个中间数的位置
        else if (arr[mid]<key){
            low=mid+1;      //中间值小于查找的值的话，将查找的数列段的最低点变成中点+1
        }
        else if (arr[mid]>key){
             high=mid-1;    //大于的话最高点变成中点-1
        }
    }
    return -1;
}
console.log(search([0,1,2,3,4,5,6,7,8,9],3))