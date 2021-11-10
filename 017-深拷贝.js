function getDataType(data){
    if(data instanceof Array){//顺序不能颠倒 因为数组类型也是Object
        return 'array'
    }else if(data instanceof Object){
        return 'object'
    }
}
function droopCopy(data){
    let reslut;
    //1确定data的类型
    if(getDataType(data)=='array'){
        reslut=[]
    }else if(getDataType(data)=='object'){
        reslut={}
    }else{
        return data;
    }
    for( let key in data){
        let vlu=data[key];
        if(getDataType(vlu)=='array'||getDataType(vlu)=='object'){
            reslut[key]=droopCopy(vlu);
        }else{
            reslut[key]=vlu;
        }
    }
    return reslut;
}