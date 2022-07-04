import "./progressLinear.scss";

export interface ProgressLinearProps {
  active: boolean;
}
export default function ProgressLinear(props: ProgressLinearProps) {
  const { active = false } = props;
  if (!active) return <></>;
  return (
    <>
      <div className='linear-activity'>
        <div className='indeterminate' />
      </div>
      <div className='blockqued' />
    </>
  );
}
