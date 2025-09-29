import { Cursor3 } from "./HoverCursor"
import { Crimson_Pro } from "next/font/google";

const Serif = Crimson_Pro({
  subsets: ['latin'],
  weight: '300'
});

export default function Info() {
    return (
        <>
            <section>
                <h2 className={`text-3xl underline ${Serif.className}`}>About me</h2>
                <Cursor3 />
                <p className={`text-wrap font-inherit`}>
                    I love working on enhancing my skills and knowledge in computer science, 
                    with a primary focus on Data Engineering, Machine Learning, Deep Learning, 
                    and Full Stack Website Development. Currently senior pursuing an 
                    undergraduate degree in Computer Science Engineering. Beyond technology, 
                    I like to walk and entertainment especially movies and music. I have 
                    also immersed myself in various extracurricular activities like drawing,
                    swimming, and roller-skating during my school years. A feverant student 
                    studying B.Tech Computer Science Engineering in graduating by 
                    2026. My curious nature have gotten me involved in more pratical development 
                    than theoritical approach. Started with the installation of MinGW compiler 
                    to run C programs, I feel to proud to come this far exploring various technical concepts.
                </p>
            </section>
        </>
    )
}