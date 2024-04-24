export const validatePassword = (password) =>{
    const regex = /^\S{6,12}$/

    return regex.test(password)
}

export const passwordValidationMessage = 'La contrasena debe de tener entre 6 y 12'