/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head){
        return null
    }
    if(head.next == null){
        return true
    }

    function reverse(node){
        let prev = null
        let next = null
        let current = node
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
    }

    let slow = head
    let fast = head
    
    while(slow && fast && fast.next){
        slow = slow.next
        fast= fast.next.next
    }
    let secondHalf = reverse(slow)
    let left = head
    let right = secondHalf

    let isPalindrome = true;
    while(right){
        if(left.val != right.val){
            isPalindrome= false
            break
        }
        left = left.next;
        right = right.next;
    }

    reverse(secondHalf);

    return isPalindrome
};