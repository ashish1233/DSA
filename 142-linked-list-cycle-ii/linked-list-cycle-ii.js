/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    let slow = head
    let fast = head
    let hasCycle = false

    if(head == null || head.next == null){
        return null
    }

   
    while(fast !=null &&  fast.next !=null){
       
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            hasCycle = true
            break
        }
         
    }
    
    fast = head
   console.log(slow.val, fast.val, "slooow fast")
    while( hasCycle && fast.next !=null){
        if(slow == fast){
            return slow
          
        }
        slow = slow.next
        fast = fast.next
    }
    
    return null

};


// T.c: O(n), space: O(n)

//  let map = new Map()
//     let temp = head
//     let i = -1
//     while(head !=null){
//       if( map.has(head)){
//           return head
//       }
//       else{
//          map.set(head,  ++i)
//       }
//        head = head.next
//     }
//     return null


//    if(head == null || head.next == null){
//      return null
//    }

//    let slow = head
//    let fast = head
//    let entry = head

//    while(fast.next != null && fast.next.next != null){
//         slow = slow.next
//         fast = fast.next.next

//         if(slow == fast){
//             while(slow != entry){
//                 slow = slow.next
//                 entry = entry.next
//             }
//             return entry
//         }
//    }
//     return null
    