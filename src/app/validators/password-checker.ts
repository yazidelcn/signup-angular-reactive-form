import { FormGroup } from "@angular/forms";

export function passworCheker(password: string, confirmPassword: string){
    return (formGroup: FormGroup) =>{
        const pass = formGroup.controls['password'];
        const confPass = formGroup.controls['confirmPassword'];

        if(pass.value !== confPass.value){
            confPass.setErrors({mustMach:true});
        }else{
            confPass.setErrors(null);
        }
    }
}