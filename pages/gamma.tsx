import DefaultLayout from "@/layouts/default";
import DimensionCard from "@/components/dimensionCard";
import { DIMENSIONS } from "../utils/constants";

export default function Gamma() {

  return (
    <DefaultLayout>
      <div className="grid grid-cols-2 gap-4">
        {DIMENSIONS.map((dimension, index) => {
          return (
            <DimensionCard title={dimension.title} color={dimension.color}
                           data={dimension.metrics.map((metric, index) => {
                             return { label: metric.label, value: metric.default };
                           })}
            />
          );
        })}
      </div>
    </DefaultLayout>
  );
}
