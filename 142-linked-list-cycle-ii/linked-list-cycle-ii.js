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
    if(!head || !head.next){
        return null
    }
    let slow = head
    let fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            let pointer1 = head
            let pointer2 = slow

            while(pointer1 != pointer2){
                pointer1= pointer1.next
                pointer2 = pointer2.next
            }
            return pointer1
        }
    }
    return null
};