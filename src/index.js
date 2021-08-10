
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof matrix=="undefined"||matrix.length<1){
    return []
  }

  const lenMat=matrix.length
  const arrTowelSort=[]
  let reverseMatrix;

  for(let i=0;i<lenMat;i+=2){

  typeof matrix[i+1]=='undefined'?reverseMatrix=false:reverseMatrix=matrix[i+1].reverse()

  arrTowelSort.push(matrix[i])

  if(reverseMatrix){
    arrTowelSort.push(reverseMatrix) 
  }
  
  }

return arrTowelSort.flat()
  
}
