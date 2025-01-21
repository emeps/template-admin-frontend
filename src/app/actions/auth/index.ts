import { SignupFormSchema, FormState, LoginFormSchema } from "@/lib/definitions";


export async function signup(state: FormState, formData: FormData){
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name') ,
        email: formData.get('email'),
        password: formData.get('password') ,
    });
    if(!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    // Prepare data for insertion into database
    const {name, email, password} = validatedFields.data;
    // Insert data into database
    console.log(name, email, password)
    // Create session
    // Redirect user
}

export async function login(state: FormState, formData: FormData){
    // Validate form fields
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password') ,
    });
    if(!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    // Prepare data for insertion into database
    const { email, password} = validatedFields.data;
    // Insert data into database
    console.log( email, password)
    // Create session
    // Redirect user
}