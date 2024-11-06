
// Name: Linked List Matrix
// link: https://www.geeksforgeeks.org/problems/linked-list-matrix/1

class Node {
    constructor(x) {
        this.data = x;
        this.right = null;
        this.down = null;
    }
}

function constructLinkedMatrix(mat) {

    if(mat.length == 0){
        return null
    }

    function constructMatix(mat, i = 0, j = 0) {

        if(i >= mat.length || j >= mat[0].length){
            return null
        }

        let data = new Node(mat[i][j])
        data.right = constructMatix(mat, i, j+1)
        data.down = constructMatix(mat, i+1, j)

        return data
    }

    return constructMatix(mat);
}


console.log(constructLinkedMatrix([ [ 1, 2 ], [ 3, 4 ] ]))
