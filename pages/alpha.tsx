import { Button } from "@heroui/react";
import DefaultLayout from "@/layouts/default";

export default function Alpha() {
  return (
    <DefaultLayout>
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    </DefaultLayout>
  );
}
