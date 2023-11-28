export function isValidUsername(text) {
    const minLength =2;
    const maxLength =20;

    if (typeof text !== 'string') {
        return false;
    }
    if (text.length < minLength.Length) {
        return false; 
    }
    if (text.length > maxLength.Length) {
        return false; 
    }

    //tik rides, skaiciai ir _
    const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';

    for (const letter of text) {
        if (!abc.includes(letter)) {
            return false;
        }
    }

    return true;
}

export function isValidEmail(text) {
    const minLength = 6;
    const maxLength = 50;

    if (typeof text!== 'string') {
        return false;
    }
    if (text.length < minLength.Length) {
        return false; 
    }
    if (text.length > maxLength.Length) {
        return false; 
    }

    return true;
}

export function isValidPhone(text) {
        if (typeof text !== 'string') {
            return false;
        }
    
        return true;
    }
    
    export function isValidPassword(text) {
        if (typeof text !== 'string') {
            return false;
        }
    
        return true;
    }