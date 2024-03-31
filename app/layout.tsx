import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata: Metadata = {
  title: {
    template: "%s | NewYork-Times-Best-Seller-List",
    default: "Loading!"
  },
  description: 'This is NewYork-Times-Best-Seller-List',
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
