import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email format."
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
})

const Login: React.FC = () => {
    // const { isAuthenticated, login, role, isVerified, update, setUpdate } = useAuth();
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            // const payload: LoginRequest = {
            //     email: data.email,
            //     password: data.password
            // };
            // setUpdate(true);

            // login(payload);

            toast.success("Login successful");
        } catch (error) {
            console.error("Submit error:", error);
            const err = error as AxiosError;
            toast.error((err.response?.data as { message: string })?.message || 'Server is unreachable. Please try again later.');
        } finally {
            // setUpdate(false);
        }
    }
    
    return (
        <main className="flex flex-row w-full min-h-screen">
            <div className="w-[55%] h-screen bg-color-grey">
            </div>

            <div className="w-[45%] h-screen bg-white content-center p-[10%] justify-center">
                <div className="flex flex-col w-full gap-3">
                    <p className="font-figtree text-4xl font-semibold">Welcome back!</p>
                    <p className="font-figtree text-base font-normal mb-4">Login to your account</p>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                        <Input type="email" placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button 
                                type="submit" 
                                className="w-full color-blue-40 text-white rounded-full hover:bg-color-blue-50 transition-transform duration-300 transform hover:scale-105" 
                                // disabled={update}
                            >
                                {/* {update ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Logging In
                                    </>
                                ) : ( */}
                                    Login
                                {/* )} */}
                            </Button>
                        </form>
                    </Form>
                    <div className="flex flex-row gap-1 justify-center">
                        <p className="text-sm">Not registered yet?</p>
                        <a className="text-sm text-blue-40" href="/register">Create an account</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
