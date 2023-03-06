export const fourierAggregate = (b, x_arr, y_arr) => {
    let a = 0;
    for(let i = 0; i< x_arr.length; i++){
        a+= y_arr[i] * Math.sin( x_arr[i] * b )
    }
    return a;
}