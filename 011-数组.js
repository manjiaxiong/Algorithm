/**
 * 已知任意两个数组A\B，比如A[1, 2, 3, 4]、B[1, 1, 2, 5]，则数组C的内容为[1, 3, 4, 5]
如果A中出现了一次元素，B中也出现了一个相同元素，则移除；如果元素在数组A中不在数组B中，则添加到C；
如果A中出现了两次元素，B中只出现了一次相同元素，则该元素添加到数组C；
如果A中出现了一次或多次元素，B中没有该元素，则这个元素全添加到数组C
例子：A[1, 2, 3, 4, 4] - B[1, 1, 2, 5] = C[1, 3, 4, 4, 5]
A[1, 1] - B[1] = C[1]
A[1, 1] - B[] = C[1, 1]
A[1, 1] - B[2] = C[1, 1, 2]
 */
function checkArray(arrA,arrB){
    var left,right;
    let result = []
    while(arrA.length||arrB.length){
        if(arrA.length>arrB.length){
            left = arrA.shift()//弹出第一项
            if (arrB.indexOf(left)!==-1){//找到
                arrB.splice(arrB.indexOf(left),1)
            }else { //删除B数组第一项
                
                result.push(left)
            }
        }else {
            left = arrB.shift()//弹出第一项
            if (arrA.indexOf(left)!==-1){//找到
                arrA.splice(arrA.indexOf(left),1)
            }else { //删除B数组第一项
                result.push(left)
                
            }
        }
    }
    console.log(result.sort((n1,n2)=>n1-n2))
    return result
}
checkArray([1, 2, 3, 4, 4],[1, 1, 2, 5])