import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

type DimensionCardProps = {
  title: string;
  color: string;
  data: { label: string; value: string | number }[];
};


const styles = {
  item: {},
  itemContent: {},
};

export default function DimensionCard({
  title,
  color,
  data,
}: DimensionCardProps) {
  const classes = styles;
  return (
    <Card className="max-w-[800px]">
      <CardHeader
        className="flex gap-3"
        style={{
          padding: "10px 10px 10px 20px",
          background: color,
          color: "white",
        }}
      >
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small">heroui.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div style={classes.itemContent}>
          <table>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.label}</td>
                  <td>{item.value}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
