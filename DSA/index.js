const nums = [2, 7, 11, 15];
const target = 9

function loop(arr, tar){

    for (let i = 0; i < nums.length; i++ ){
        if(arr[i] + arr[i + 1] === tar){
            console.log([i, i + 1]);
        }
            
    }

}
console.log(loop(nums, target));
