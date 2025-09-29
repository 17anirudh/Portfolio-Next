"use server";
import z from "zod";
import { formSchema } from "./utils/zodSchema";

export async function submit(values: z.infer<typeof formSchema>) {
    const result = formSchema.safeParse(values);
    console.log(result.data, result);
    if(!result.success) {
        return {
            status: 'error',
            message: result.error.message
        };
    }

    try {
        const jsTime: Date = new Date();
        const times: Array<string> = [
            jsTime.toUTCString(),
            jsTime.toString()
        ];
        
        const payload: {content: string} = {
            content: `**SENDER**: ${result.data.email}\n**NAME**: ${result.data.name}\n**UTC TIME**: ${times[0]}\n**LOCAL TIME**: ${times[1]}\n\n**MESSAGE**: \n{\n${result.data.message}\n}`,
        };
        const response = await fetch(`${process.env.DISCORD_WEBHOOK_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
			return {
                status: 'error',
                message: 'Failed to submit your message',
                code: response.status
            };
		} 
        else {
			return {
                status: 'success',
                message: 'Submitted your message',
                code: response.status
            };
		}
    } 
    catch {
        return {
            status: 'error',
            message: 'Failed to submit your message',
        };
    }
}