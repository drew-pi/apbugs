
// Removes the specified element from the list and returns the new list
export const removeElement = (list : string[],element: string) => {
    let i = list.indexOf(element);
    if (i > -1) {
       list.splice(i,1)
    }
    return list
}

// adds the specified element into the list and returns the modeified list
export const addElement = (list : string[], element: string) => {
    list.push(element)
    return list
}