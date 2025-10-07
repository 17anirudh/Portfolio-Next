import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vedala Anirudh Portfolio',
    short_name: 'Anirudh Portfolio',
    description: 'Vedala Anirudh is a feverant engineering student, who likes Machine Learning, Deep Learning and Full Stack Web development. He is also a eager learner',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}