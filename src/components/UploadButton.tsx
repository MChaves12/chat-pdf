"use client"

import { useState } from "react"
import { Dialog, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"

const UploadButton = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={(visible) => {
        if (!visible) {
            setIsOpen(visible)
        }
    }}>
        <DialogTrigger asChild>
            <Button>Upload PDF</Button>
        </DialogTrigger>
    </Dialog>
  )
}

export default UploadButton