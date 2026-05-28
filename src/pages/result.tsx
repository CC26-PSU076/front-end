import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { IconArrowBackUp } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom"

export default function ResultPage() {
    const navigate = useNavigate()
    return (
        <div className="flex min-h-svh p-6 items-center justify-center">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
            <Button 
                className="text-white hover:text-white/80 w-fit justify-start pl-0 mt-6" 
                variant="link"
                onClick={() => navigate("/")}
                >
                <IconArrowBackUp stroke={2} className="mr-2 h-4 w-4" /> Back to Home
            </Button>
            <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-2xl">Your Level</h1>
            </div>
            <div className="text-center">
                <div className="flex mx-auto h-20 w-20 my-4 items-center justify-center rounded-full bg-muted text-3xl font-bold text-foreground">
                6
                </div>
                <h2>Teknisi Analis</h2>
                <h3 className="font-bold text-xl">Data Scientist Supervisor</h3>
            </div>
            <div className="text-center text-white/85 leading-tight mt-8">
                <h4>Recommendation for<br/><span>Career Development</span></h4>
                <div className="flex flex-col mt-4 gap-4">
                <Card>
                    <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</CardContent>
                </Card>
                <Card>
                    <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</CardContent>
                </Card>
                <Card>
                    <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</CardContent>
                </Card>
                <Card>
                    <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</CardContent>
                </Card>
                <Card>
                    <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</CardContent>
                </Card>
                <Card>
                    <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</CardContent>
                </Card>
                <Card>
                    <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</CardContent>
                </Card>
                <Card>
                    <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</CardContent>
                </Card>
                </div>
            </div>
        </div>
        </div>
    )
}