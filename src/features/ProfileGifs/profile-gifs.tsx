import { Card, CardContent, CardHeader } from "@/components/ui/card"
import anderlecht from '../../assets/gifs/anderlecht.gif';
import malenia from '../../assets/gifs/malenia.gif';
import initialD from '../../assets/gifs/initial d.gif';
import pinkpanthress from '../../assets/gifs/pinkpanthress.gif';
import kompany from '../../assets/gifs/kompany.gif';

export const ProfileGifs = () => {
  return (
    <Card className="p-2">
      <CardHeader className="p-0">
        <span className="font-bold text-secondary-foreground uppercase">Gifs</span>
      </CardHeader>
      <CardContent className="p-0 flex gap-1 flex-wrap">
        <img src={anderlecht} className="max-w-18" />
        <img src={malenia} className="max-w-30" />
        <img src={initialD} className="max-w-22" />
        <img src={pinkpanthress} className="max-w-25" />
        <img src={kompany} className="max-w-18" />
      </CardContent>
    </Card>
  )
}