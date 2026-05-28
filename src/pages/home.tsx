import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconUpload, IconFile, IconX } from "@tabler/icons-react"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
} from "@/components/ui/empty"

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null)

  const handleFile = (selectedFile: File) => {
    if (selectedFile.type === "application/pdf") {
      setFile(selectedFile)
    } else {
      alert("Hanya file PDF yang diperbolehkan")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) handleFile(e.target.files[0])
  }

  const handleRemove = () => setFile(null)

  return (
    <div className="flex min-h-svh p-6 items-center justify-center">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        
        {/* Header */}
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

        {/* Upload Area */}
        <div className="mt-12">
          <p className="text-center text-muted-foreground">
            Upload your CV,<br/><span>get your insights.</span>
          </p>

          {!file ? (
            <Empty className="border border-dashed mt-4 h-60 w-60">
              <EmptyHeader>
                <IconUpload />
                <EmptyDescription className="mt-4">
                  Drop your CV here.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <label htmlFor="cv-upload">
                  <Button variant="outline" size="sm" asChild>
                    <span>Upload Files</span>
                  </Button>
                </label>
                <input
                  id="cv-upload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleInputChange}
                />
              </EmptyContent>
            </Empty>

          ) : (
            <div className="border border-primary/40 bg-primary/5 rounded-lg mt-4 h-60 flex flex-col items-center justify-center gap-3">
              <IconFile size={36} className="text-primary" />
              <div className="text-center px-4">
                <p className="font-medium text-sm w-60">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(1)} KB · PDF
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive gap-1"
                onClick={handleRemove}
              >
                <IconX size={14} /> Remove
              </Button>
            </div>
          )}
        </div>

        <Button className="p-4 rounded-2xl" disabled={!file}>
          Analyze
        </Button>

      </div>
    </div>
  )
}