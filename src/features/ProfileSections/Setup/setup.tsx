import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Item, ItemContent, ItemMedia } from "@/components/ui/item"
import { Cpu, Gpu, Keyboard, Layers, MemoryStick, MonitorCog, MonitorPc, Mouse, Server, SquareChartGantt } from "lucide-react"
import type { ReactNode } from "react"

type SetupItemProps = {
  icon: ReactNode;
  title: string;
  name: string;
}

const PCSETUP: SetupItemProps[] = [
  {
    icon: <Gpu />,
    title: "GPU",
    name: "NVIDIA GeForce RTX 5080"
  },
  {
    icon: <Cpu />,
    title: "CPU",
    name: "AMD Ryzen 7 9800X3D 8-Core"
  },
  {
    icon: <MemoryStick />,
    title: "RAM",
    name: "32GB DDR5"
  },
  {
    icon: <MonitorCog />,
    title: "OS",
    name: "Windows 11 / CachyOs dual boot"
  },
  {
    icon: <Keyboard />,
    title: "Keyboard",
    name: "VGN S99 PRO Elden Ring Edition Mechanical"
  },
  {
    icon: <Mouse />,
    title: "Mouse",
    name: "VGN F1 PRO Max JOJO"
  }
];

const DEVSETUP: SetupItemProps[] = [
  {
    icon: <SquareChartGantt />,
    title: "IDE",
    name: "Visual Studio Code / IntelliJ"
  },
  {
    icon: <Layers />,
    title: "Tech Stack",
    name: "React / TypeScript / Redux / Angular / Java"
  },
  {
    icon: <Server />,
    title: "Code Hosting",
    name: "Github"
  },
]

const SetupItem = ({icon, title, name}: SetupItemProps) => {
  return (
    <Item>
      <ItemMedia>
        <Badge variant="secondary">
          {icon}
          <span>{title}</span>
        </Badge>
      </ItemMedia>
      <ItemContent>
        {name}
      </ItemContent>
    </Item>
  )
}


export const Setup = () => {
  return (
    <div className="flex flex-col gap-2">
      <Card className="p-2">
        <CardHeader className="flex justify-between items-center">
          <span className="text-lg font-bold">Setup</span>
          <MonitorPc size={16} className="text-secondary-foreground" />
        </CardHeader>
        <CardContent>
          {
            PCSETUP.map(({icon, title, name}) => (
              <SetupItem icon={icon} title={title} name={name} />
            ))
          }
        </CardContent>
      </Card>
      <Card className="p-2">
        <CardHeader className="flex justify-between items-center">
          <span className="text-lg font-bold">Development</span>
          <MonitorPc size={16} className="text-secondary-foreground" />
        </CardHeader>
        <CardContent>
          {
            DEVSETUP.map(({icon, title, name}) => (
              <SetupItem icon={icon} title={title} name={name} />
            ))
          }
        </CardContent>
      </Card>
    </div>
  )
}