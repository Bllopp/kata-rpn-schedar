const rpn = (string) => {
    var stack = [];
    var tokens = [];
    tokens = string.split(' ')

    tokens.forEach(t => {
        if(!isNaN(t)) {
            stack.push(parseInt(t))
        }
        else {
            try{
                stack = operator(stack, t);
            } catch(e) {
                throw e
            };
        }
        
    });
    if (stack.length != 1) {
        throw new Error("error of syntax")
    }
    return stack[0];
}

const rpnDivide = (denum, num) => {
    if (denum == 0) {
        throw new Error('Division par 0');
    }
    return num/denum;
}

const operator = (stack, ope) => {

    const stackL = stack.length;


        
        if (stackL == 0){
            throw new Error("error of syntax");
        }

        else if (stackL > 1 || ope == 'sqrt' || ope == '!'){
            // const last = stack.pop();
            // const penul = stack.pop();
            switch(ope) {
                case 'sqrt':
                    stack.push(Math.sqrt(stack.pop()))
                    break;
                
                case '!':
                    stack.push(factorial(stack.pop()))
                    break;
                
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

                case "max":
                    stack = [parseFloat(Math.max(...stack))];
                    break;
                    
                default:
                    throw new Error(`Invalid entry : ${ope}`);
                    
            }
        }
        
    console.log(stack)
    return stack
}

function factorial(x) {
    if(x==0) {
    return 1;
    }
    return x * factorial(x-1);
    }




module.exports = {rpn, rpnDivide, operator};
