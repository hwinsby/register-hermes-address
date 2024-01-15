type InputProps = {
  className: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};
export const Input = ({ className, type, name, value, onChange, placeholder }: InputProps) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
