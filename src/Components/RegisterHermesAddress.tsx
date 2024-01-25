import { AddressRegistrationForm } from "./AddressRegistrationForm";
import logo from "../images/logo.png";

export const RegisterHermesAddress = () => {
  const registerHermesAddressStyles =
    "flex flex-col gap-10 items-center bg-primary p-10 rounded-2xl shadow-xl";

  return (
    <div className={registerHermesAddressStyles}>
      <img className="h-64 w-64 rounded-2xl" src={logo} alt="hermes logo" />
      <div>
        <h1>Register Hermes Address</h1>
        <h2>(Async, Noncustodial Lightning Address Messenger using Fedimint)</h2>
      </div>
      <AddressRegistrationForm />
    </div>
  );
};
