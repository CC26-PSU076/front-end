import { LoginForm } from "@/components/login-form"
import { Button } from "@/components/ui/button"
import { IconArrowBackUp } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const navigate = useNavigate()
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <Button 
                className="text-white hover:text-white/80 w-fit justify-start pl-0" 
                variant="link"
                onClick={() => navigate("/")}
                >
                <IconArrowBackUp stroke={2} className="mr-2 h-4 w-4" /> Back to Home
            </Button>
            <div className="w-60 max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}
