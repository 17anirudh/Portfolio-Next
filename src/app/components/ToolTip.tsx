import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link";

interface TipType{
    display: string,
    hover: string,
    tag: string,
    location: string
}

export function TooltipDemo(props: TipType) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="link" className="w-fit">
            <Link href={props.tag} prefetch={false} className="text-neutral-50" target={props.location}>
              {props.display}
            </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{props.hover}</p>
      </TooltipContent>
    </Tooltip>
  )
}
