import { NDKUser } from "@nostr-dev-kit/ndk";
import { WebLNProviderType } from "../utils/webLn";

type RadioGroupProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: string[];
  disabled: boolean;
  webln: WebLNProviderType;
  ndkUser: NDKUser | undefined;
};
export const RadioGroup = ({
  name,
  value,
  onChange,
  options,
  disabled,
  webln,
  ndkUser,
}: RadioGroupProps) => {
  const radioStyles =
    "py-2.5 px-5 rounded-full outline outline-1 outline-primaryLt cursor-pointer transition hover:bg-primaryDrk hover:shadow-md";
  const selectedStyles =
    "py-2.5 px-5 rounded-full outline outline-[3px] outline-secondary cursor-pointer transition bg-[#7D3B8A40] hover:shadow-md";

  const disabledStyles =
    "py-2.5 px-5 rounded-full outline outline-1 outline-primaryLt cursor-not-allowed transition hover:bg-primaryDrk hover:shadow-md opacity-50";

  return (
    <div className="flex gap-5 my-2.5 justify-center">
      {options.map((option, index) => {
        const getDisabled = () => {
          if (disabled) {
            return true;
          }
          if (option === "XMPP" && !webln.webln) {
            return true;
          }
          if (option === "Nostr" && !ndkUser) {
            return true;
          }
          return false;
        };
        const isDisabled = getDisabled();
        const id = `${option}-${index}`;
        return (
          <div key={id} className="group relative w-max">
            <input
              className="hidden"
              type="radio"
              id={id}
              name={name}
              value={option}
              onChange={onChange}
              checked={value === option}
              disabled={isDisabled}
            />

            <label
              htmlFor={id}
              className={`${
                isDisabled ? disabledStyles : value === option ? selectedStyles : radioStyles
              }`}
            >
              {option}
            </label>
            {isDisabled && (
              <span className="bg-primaryLt text-primaryDrk p-1.5 px-2.5 rounded pointer-events-none absolute z-10 bottom-10 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100">
                Enable {option} provider to select.
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
