Test_arr = [1, 3, 5, 22, 0, 6, 66, 124, 9]

function LoopArray(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%6 === 0){
            console.log('buzzfizz')
        }
        else if(arr[i]%2 === 0){
            console.log('fizz')
        }
        else if(arr[i]%3 === 0){
            console.log('buzz')
        }
        else{
            console.log(arr[i])
        }
    }
}

LoopArray(Test_arr)