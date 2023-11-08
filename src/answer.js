const getAnswer = () => 42;


var stack = [];

const getStack = () => {
    tokens.forEach(t => {
        if(typeof t === 'string' && !Number.isNaN(t)) {
            stack.push(t)
        }
    });
    return stack;
};

const rpn = (string) => {
    const tokens = string.split(' ')
    const operators = ["+", "-"]

    
    tokens.forEach(t => {
        if(typeof t === 'string' && !Number.isNaN(t)) {
            stack.push(t)
        }
        var res;
        switch (t) {
            case "+":
                stack.push(stack.pop() + stack.pop());
                break;
            
            case "-":
                res = -stack.pop() + stack.pop();
                break;
                
        
            default:
                new Error("invalid entry");
                break;
        }
        
    });

    return stack;
}


module.exports = {getAnswer, getStack, rpn};

// 20 2 +
