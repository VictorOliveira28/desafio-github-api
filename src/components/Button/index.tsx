type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <>
      <button type="submit" className="button-container">
        {text}
      </button>
    </>
  );
}
