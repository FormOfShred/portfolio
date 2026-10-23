import { Card, CardContent, CardHeader } from "@/components/ui/card"

export const ProfileGifs = () => {
  return (
    <Card className="p-2">
      <CardHeader className="p-0">
        <span className="font-bold text-secondary-foreground uppercase">Gifs</span>
      </CardHeader>
      <CardContent className="p-0 flex gap-1 flex-wrap">
        <img src="src/assets/gifs/anderlecht.gif" className="max-w-20" />
        <img src="src/assets/gifs/malenia.gif" className="max-w-20" />
        <img src="src/assets/gifs/initial d.gif" className="max-w-20" />
        <img src="src/assets/gifs/pinkpanthress.gif" className="max-w-20" />
      </CardContent>
    </Card>
  )
}