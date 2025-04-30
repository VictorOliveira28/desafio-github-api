type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <>
      <div className="button-container">{text}</div>
    </>
  );
}
