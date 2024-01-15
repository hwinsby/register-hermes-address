type RadioGroupProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: string[];
};
export const RadioGroup = ({ name, value, onChange, options }: RadioGroupProps) => {
  const radioStyles =
    "py-2.5 px-5 rounded-full outline outline-1 outline-primaryLt cursor-pointer transition hover:bg-primaryDrk hover:shadow-md";
  const selectedStyles =
    "py-2.5 px-5 rounded-full outline outline-[3px] outline-secondary cursor-pointer transition bg-[#7D3B8A40] hover:shadow-md";

  return (
    <div className="flex gap-5 my-2.5 justify-center">
      {options.map((option, index) => {
        const id = `${option}-${index}`;
        return (
          <div key={id}>
            <input
              className="hidden"
              type="radio"
              id={id}
              name={name}
              value={option}
              onChange={onChange}
              checked={value === option}
            />
            <label htmlFor={id} className={`${value === option ? selectedStyles : radioStyles}`}>
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};
