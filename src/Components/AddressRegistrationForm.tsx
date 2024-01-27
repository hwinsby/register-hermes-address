import { useMemo, useState } from "react";
import { useWebLNContext } from "../utils/webLn";
import { useNDKContext, useNDKUser } from "../utils/nostr";

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
  const [isLoading, setIsLoading] = useState(true);
  const [providerConnected, setProviderConnected] = useState(false);
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

  const webln = useWebLNContext();

  const ndk = useNDKContext();
  const ndkUser = useNDKUser();

  useMemo(() => {
    if (!webln.isLoading && !webln.error) {
      setIsLoading(false);
      setProviderConnected(true);
      if (webln.webln.isEnabled) {
        setFormValues({ ...formValues, provider: "XMPP" });
      }
    }

    if (!ndk.isLoading && !ndk.error) {
      setIsLoading(false);
      setProviderConnected(true);
      setFormValues({ ...formValues, provider: "Nostr", publicKey: ndkUser?._pubkey });
    }

    if (webln.error && ndk.error) {
      setIsLoading(false);
      setProviderConnected(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webln, ndk]);

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
      {!isLoading && !providerConnected && <Alert />}
      <RadioGroup
        name="provider"
        value={provider}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event);
          if (event.target.value === "XMPP") {
            setFormValues((prev) => {
              return { ...prev, publicKey: "" };
            });
          }
          if (event.target.value === "Nostr") {
            setFormValues((prev) => {
              return { ...prev, publicKey: ndkUser ? ndkUser._pubkey : "" };
            });
          }
        }}
        options={providerOptions}
        disabled={isLoading || !providerConnected}
        webln={webln}
        ndkUser={ndkUser}
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

const Alert = () => {
  return (
    <div className="bg-[#ffeed5cc] border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
      <p>Please connect to a lightning wallet to register address.</p>
    </div>
  );
};
