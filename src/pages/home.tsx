import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconUpload } from "@tabler/icons-react"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
} from "@/components/ui/empty"

export default function HomePage() {
  return (
    <div className="flex min-h-svh p-6 items-center justify-center">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl">YourPath</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="px-12 rounded-2xl">Data Science</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>IT Governance</DropdownMenuItem>
                <DropdownMenuItem>Digital Product Development</DropdownMenuItem>
                <DropdownMenuItem>Data Science</DropdownMenuItem>
                <DropdownMenuItem>Information and Cyber Security</DropdownMenuItem>
                <DropdownMenuItem>Infrastructure and Technology</DropdownMenuItem>
                <DropdownMenuItem>IT Services</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-12">
          <p className="text-center text-muted-foreground">
            Upload your CV, get your insights.
          </p>
          <Empty className="border border-dashed mt-4 h-60">
            <EmptyHeader>
              <IconUpload />
              <EmptyDescription className="mt-8">
                Drop your CV here or click to browse
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline" size="sm">
                Upload Files
              </Button>
            </EmptyContent>
          </Empty>
        </div>
        <Button className="p-4 rounded-2xl">Analyze</Button>
      </div>
    </div>
  )
}