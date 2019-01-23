

/**
 * 把对象格式的参数转成键值对，并以&分割
 * @param arr 要转换的对象参数
 * @returns {string}
 */
function maiyaBuildParam(arr){
    var result = '';
    for(var key in arr)
    {
        result += key + "=" + encodeURIComponent(arr[key]) + "&";
    }
    result = result.substr(0,result.length-1);
    return result;
}