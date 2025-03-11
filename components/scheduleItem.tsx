import styles from "./components.module.css";

type ScheduleItemProps = {
  name: String;
  start?: String;
  end?: String;
};

export default function ScheduleItem({ name, start, end }: ScheduleItemProps) {
  return (
    <div className={styles.scheduleItem}>
      <h2>Scheduled Item: {name}</h2>
      <h4>Description</h4>
      <h4>Start: {start} / End: {end}</h4>
    </div>
  );
};
