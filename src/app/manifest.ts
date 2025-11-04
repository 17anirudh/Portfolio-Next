import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vedala Anirudh Portfolio',
    short_name: 'Anirudh Portfolio',
    description: 'Portfolio website of Vedala Anirudh, who is a feverant engineering student interested in Data Science and Computer Vision',
    start_url: '/',
    display: 'standalone',
    background_color: '#22013c',
    theme_color: '#22013c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}