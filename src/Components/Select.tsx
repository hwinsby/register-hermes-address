type SelectProps = {
  className: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

export const Select = ({ className, name, value, onChange, options }: SelectProps) => {
  const optionStyles = "bg-primaryDrk hover:bg-primaryLt cursor-pointer transition";

  return (
    <select className={className} name={name} onChange={onChange} value={value}>
      <option value="" disabled>
        Select Federation
      </option>
      {options.map((option, index) => {
        const id = `${option}-${index}`;
        return (
          <option className={optionStyles} value={option} key={id}>
            {option}
          </option>
        );
      })}
    </select>
  );
};
