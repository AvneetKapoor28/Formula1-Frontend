'use server'
import { signIn } from "../../auth";
import { signOut } from "../../auth";

export async function doSocialLogin(formData) {
    const action  = formData.get('action');
    await signIn(action, {redirectTo: '/liverace'});

}

export async function doLogout(){
    await signOut({redirectTo: '/'});
}