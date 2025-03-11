import React from "react";
import { Switch } from "@heroui/react";
import DefaultLayout from "@/layouts/default";
import ScheduleItem from "@/components/scheduleItem";

export default function Beta() {
  const [isSelected, setIsSelected] = React.useState(true);

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-2">
        <Switch isSelected={isSelected} onValueChange={setIsSelected}>
          Airplane mode
        </Switch>
        <p className="text-small text-default-500">Selected: {isSelected ? "true" : "false"}</p>
      </div>
      <ScheduleItem name="Arrival" start="0800"/>
      <ScheduleItem name="Departure" end="2100"/>
    </DefaultLayout>
  );
}

