import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Activity, Code, Gamepad2, SportShoe, Tv } from "lucide-react"
import type { ReactNode } from "react";

type UpdateItemProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

const UPDATES: UpdateItemProps[] = [
  {
    title: "Running",
    subtitle: "I recently started running again. I am trying to build up to 1 hour of running without having to stop/walk.",
    icon: <SportShoe size={16} />
  },
  {
    title: "Witcher 3",
    subtitle: "I'm currently replaying Witcher 3 after the release of the remaster.",
    icon: <Gamepad2 size={16} />
  },
  {
    title: "Castlevania: Belmont's Curse",
    subtitle: "After finishing Castlevania Belmont's Curse, I wanted to practice the bosses. I love metroidvanias.",
    icon: <Gamepad2 size={16} />
  },
  {
    title: "Portfolio",
    subtitle: "Always updating my portfolio",
    icon: <Code size={16} />
  },
  {
    title: "FC De Kampioenen",
    subtitle: "I recently started a rewatch of FC De Kampioenen.",
    icon: <Tv size={16} />
  },
];

export const UpdateItem = ({title, subtitle, icon}: UpdateItemProps) => {
  return (
    <Item>
      <ItemMedia className="text-primary-foreground">
        {icon}
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="text-secondary-foreground">{title}</ItemTitle>
        <ItemDescription>{subtitle}</ItemDescription>
      </ItemContent>
    </Item>
  )
}

export const Updates = () => {
  return (
    <Card className="p-2">
      <CardHeader className="flex justify-between items-center">
        <span className="text-lg font-bold">Updates</span>
        <Activity size={16} className="text-secondary-foreground" />
      </CardHeader>
      <CardContent>
        <span>Here's what I'm currently doing. Things I'm trying to achieve or keeping myself busy with.</span>

        <div>
          { UPDATES.map(({title, subtitle, icon}) => (
            <UpdateItem title={title} subtitle={subtitle} icon={icon} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}