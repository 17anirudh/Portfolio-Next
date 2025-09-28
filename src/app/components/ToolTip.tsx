import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface TipType{
    display: string,
    hover: string,
    tag: string
}

export function TooltipDemo(props: TipType) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="link">
            <a href={props.tag} className="text-neutral-50">{props.display}</a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{props.hover}</p>
      </TooltipContent>
    </Tooltip>
  )
}
