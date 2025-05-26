import './globals.css';


export const metadata = {
  
  title: 'Alris Wong Portfolio',
  description: 'Alris Wong - Game Developer, Gameplay Designer, based in Hong Kong and Taiwan',
  
  verification: {
    google: 'nR2GWzX_rCIvu6k2q_1ZCexIePS_RiVpeXvGsoZUDaM',
  },
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
