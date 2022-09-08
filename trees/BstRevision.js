//----------- creating a Node ---------
class Node
{
   constructor(data)
   {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}
//------------ creating a binary search Tree ----------
class BinarySearchTree
{
   constructor ()
   {
      this.root = null;
   }

   getRootNode()
   {
      return this.root;
   }

   insert(data) 
   {
      var newNode = new Node(data);

      if(this.root == null)
      {
         this.root = newNode;
      }
      else{
         this.insertNode(this.root, newNode);
      }
   }
//----- insert method in BST ---------
   insertNode(node, newNode) 
   {
      if(newNode.data < node.data) //left case
      {
         if(node.left == null)
         {
            node.left = newNode;
         }
         else {
            this.insertNode(node.left, newNode);
         }
      }
      else  // Right case
      {
         if(node.right == null)
         {
            node.right = newNode;
         }
         else {
            this.insertNode(node.right, newNode);
         }
      }
   }
   
   inOrder(node) // left - root - right
   {
      if(node !== null)
      {
         this.inOrder(node.left);
         console.log(node.data);
         this.inOrder(node.right);
      }
   }

   preOrder(node) // root - left - right
   {
      if(node !== null)
      {
         console.log(node.data);
         this.preOrder(node.left);
         this.preOrder(node.right);
      }
   }

   postOrder(node) // left - right - root
   {
      if(node !== null)
      {
         this.postOrder(node.left);
         this.postOrder(node.right);
         console.log(node.data);
      }
   }

}

// 15,25,10,7,22,17,13,5,9,27
var arr = [15,25,10,7,22,17,13,5,9,27]

var BST = new BinarySearchTree();
for(let i=0 ; i < arr.length ; i++)
{
   BST.insert(arr[i]);
}
// BST.insert(15)
// BST.insert(25)
// BST.insert(10)
// BST.insert(7)
// BST.insert(22)
// BST.insert(17)
// BST.insert(13)
// BST.insert(5)
// BST.insert(9)
// BST.insert(27)


var root = BST.getRootNode();
// // console.log(root)
// BST.inOrder(root)
// console.log("**************")
// BST.preOrder(root)
// console.log("**************")
// BST.postOrder(root)

// ----------- Q . Print right side nodes ------------------


let rightNodes = [];

let rightSideView = function(root) {
   if(root == null)
   {
      return rightNodes;
   }
   givenRightView(root, 0);
   return rightNodes;
}

function givenRightView(node, level) {
   console.log(node.data + " " + level);
   rightNodes.push(node.data);
   // if(node.right != null)
   // {
   //    givenRightView(node.right, level + 1);
   // }
   if(node.left != null)
   {
      givenRightView(node.left, level +1);
   }
}

rightSideView(root)