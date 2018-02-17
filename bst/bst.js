'use strict';

module.exports = exports = {};

exports.BST = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

// exports.BST = function() {
//     this.root = null;
// }

exports.BST.prototype.add = function(data) {
   if (data <= this.data) {
       if (!this.left) {
           this.left = new exports.BST(data);
       } else {
           this.left.add(data);
       } 
   } else if (data > this.data) {
       if (!this.right) {
           this.right = new exports.BST(data);
       } else {
           this.right.add(data);
       }
   }
}

// exports.BST.isBalanced = function() {
//     exports.prototype.utilIsBalanced(function(bstNodeData) {
//         if (bstNodeData)
//     })
// }

exports.BST.prototype.isBalanced = function() {
   let tally = {};
    function recurse(bst) {
        tally.left = tally.left || 0;
        tally.right = tally.right || 0;

        if (bst.left) {
            tally.left++;
            recurse(bst.left, tally);
        } 
        
        if (bst.right) {
             tally.right++;
             recurse(bst.right, tally);
        }
    }
    recurse(this);
    console.log(tally)

    //TODO: this ternary actually doesn't work for a condition if diff === 2
    let diff = Math.abs(tally.left - tally.right);
    if (diff < 2) {
        return true;
    } else if (diff >= 2) {
        return false;
    }
    // return diff < 2 ? true : false;
}


