//first creat a tree of our data
const data = {
    aaa:
        [
            null,
            {
                bbb:
                {
                    names: ['sina', 'sajad']
                }
            }
        ]
};
//create a function with two parameter and split with '.'
const searchVariable = (obj, variable) => {
    const keyes = variable.split('.');
    let result = obj;

    // use a loop to search for value

    for (let key of keyes) {
        if (result && typeof result === 'object' && key in result) {
            result = result[key];
        }
        else {
            return undefined;
        }
    }
    return result;
};
