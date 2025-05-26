import './globals.css';


export const metadata = {
  
  title: 'Alris Wong Portfolio',
  description: 'Alris Wong - Game Developer, Gameplay Designer, based in Hong Kong and Taiwan',
  
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  )
}
