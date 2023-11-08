const rpn = (string) => {
    var stack = [];
    var tokens = [];
    tokens = string.split(' ')

    tokens.forEach(t => {
        if(!isNaN(t)) {
            stack.push(parseInt(t))
        }
        else {
        switch (t) {
            case "+":
                stack.push(stack.pop() + stack.pop());
                break;
            
            case "-":
                stack.push(-stack.pop() + stack.pop());
                break;
            
            case "*": 
                stack.push(stack.pop() * stack.pop());
                break;

            case "/": 
                stack.push(rpnDivide(stack.pop(), stack.pop()));
                break;

            case "sqrt":
                stack.push(Math.sqrt(stack.pop()))
                break;

            case "max":
                stack = [parseFloat(Math.max(...stack))];
                break;
                
            default:
                throw new Error(`Invalid entry : ${t}`);
                
        }}
        
    });
    if (stack.length != 1) {
        throw new Error("error of synthax")
    }
    return stack[0];
}

const rpnDivide = (denum, num) => {
    if (denum == 0) {
        throw new Error('Division par 0');
    }
    return num/denum;
}



module.exports = {rpn, rpnDivide};
