import { Cursor3 } from "./BullayyaHover"
import { Crimson_Pro } from "next/font/google";

const Serif = Crimson_Pro({
  subsets: ['latin'],
  weight: '300'
});

export default function AboutMe() {
    return (
        <>
            <section>
                <h2 className={`text-3xl underline ${Serif.className}`}>About me</h2>
                <Cursor3 />
                <p className="text-wrap font-inherit text-sm sm:text-lg">
                    I am <span className="underline">learning</span> about Data Engineering&#44; Machine Learning&#44; Deep Learning&#44; and Full Stack 
                    development&#46; I enjoy solving problems and have a particular obsession with &quot;invisible 
                    optimization&quot; &#8212; strategies that reduce both client&#45; and server&#45;side runtime 
                    without being immediately noticeable&#46;<br />

                    Currently&#44; I am pursuing a B&#46;Tech in Computer Science and Engineering&#44; graduating in 
                    2026&#46;<br /> My curiosity drives me to constantly explore&#44; whether through educational 
                    content&#44; studying large&#45;scale tech infrastructures&#44; or sometimes even other fields&#46;
                    I prefer a hands&#45;on&#44; practical approach to problem&#45;solving&#44; which began with 
                    installing the MinGW compiler to run simple C programs and has since evolved into exploring 
                    advanced technical concepts&#46;<br />

                    Beyond technology&#44; I enjoy walking&#44; movies&#44; and music&#46; I also pursued extracurricular 
                    interests such as drawing&#44; swimming&#44; and roller&#45;skating during my school
                    years&#46;
                </p>
            </section>
        </>
    )
}