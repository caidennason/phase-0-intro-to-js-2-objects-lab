// Write your solution in this file!
const employee = {
    name: 'nick',
    streetAddress: '396 waller'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newInfo = {...obj}

    newInfo[key] = value

    return newInfo
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}