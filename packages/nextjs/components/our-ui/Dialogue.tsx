import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  fullText: string;
  setShowButtons: Dispatch<SetStateAction<boolean>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const Typewriter = ({ fullText, setShowButtons, text, setText }: Props) => {
  // const [text, setText] = useState("");
  const realText = fullText.slice(0, 2).concat(fullText.slice(1));

  let currentIndex = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === realText.length - 1) {
        clearInterval(interval);

        setShowButtons(true);
      } else {
        setText(prevText => prevText.concat(realText[currentIndex]));
        currentIndex++;
      }
    }, 25); // Adjust the typing speed (milliseconds per character) to your preference

    return () => clearInterval(interval);
  }, [fullText]);

  return <span className="text-white font-semibold">{text}</span>;
};

export default Typewriter;
