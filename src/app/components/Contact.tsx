import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <div>
      <form method="post" className="flex flex-col items-center gap-3">
        <Label htmlFor="name">Name</Label>
        <Input type="name" id="name" placeholder="Aizen Souske" />
        <Label htmlFor="message">Message</Label>
        <Textarea placeholder="Type your message here." />
        <Button type="submit" variant="default">Submit</Button>
      </form>
    </div>
  )
}
