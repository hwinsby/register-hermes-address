import { useState } from "react";

import { Input } from "./Input";
import { RadioGroup } from "./RadioGroup";
import { Button } from "./Button";
import { Select } from "./Select";

export const AddressRegistrationForm = () => {
  type FormValues = {
    username: string;
    publicKey: string;
    provider: "XMPP" | "Nostr" | "";
    federation: string;
  };
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    publicKey: "",
    provider: "",
    federation: "",
  });
  const { username, publicKey, provider, federation } = formValues;

  const formValid = Object.values(formValues).every((value) => value !== "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO: Implement API logic
    event.preventDefault();
    console.log(formValues);
    alert(`Form submitted! (not really)
    Username: ${username}
    Public Key: ${publicKey}
    Provider: ${provider}
    Federation: ${federation}`);
  };

  const federationOptions = ["Fediment 1", "Fediment 2"];
  const providerOptions = ["XMPP", "Nostr"];

  console.log("formValues", formValues);

  const inputStyles = "rounded p-2.5 bg-primaryDrk focus: border-secondary outline-none w-full";

  return (
    <form className="flex flex-col items-center gap-2.5 w-full" onSubmit={handleSubmit}>
      <Input
        className={inputStyles}
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
      <Input
        className={inputStyles}
        type="text"
        name="publicKey"
        value={publicKey}
        onChange={handleChange}
        placeholder="Public Key"
      />
      <RadioGroup
        name="provider"
        value={provider}
        onChange={handleChange}
        options={providerOptions}
      />
      <Select
        className={inputStyles}
        name="federation"
        value={federation}
        onChange={handleChange}
        options={federationOptions}
      />
      <Button text="Register" disabled={!formValid} type="submit" />
    </form>
  );
};
