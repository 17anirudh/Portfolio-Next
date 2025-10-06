import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export default function DisplayAvatar() {
    return (
        <div className="mt-3.5 m-1 sm:m-7 cursor-none" style={{ pointerEvents: "none" }}>
            <Avatar>
                <AvatarImage src="https://github.com/17anirudh.png" alt="@17anirudh" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}