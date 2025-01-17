/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let hs = new Set()
    for(const email of emails){
        let [local, domain] = email.split('@')
         
        // correct the local 
        let [name, appended] = local.split('+')

        let fullName = name.split('.')

        let actualLocal = fullName.join('')

        let correctEmail = `${actualLocal}@${domain}`

        if(!hs.has(correctEmail)){
            hs.add(correctEmail)
        }

    }
    return hs.size
};