import { useState } from 'react';
import useAddresses from '../hooks/useAddresses';
import NoAddressFallback from '../ui/my-addresses/NoAddressFallback';
import SelectProfileAddress from '../ui/my-addresses/SelectProfileAddress';

function MyAddresses() {
  const { defaultAddress, otherAddresses } = useAddresses();

  const [selectedAddress, setSelectedAddress] = useState(
    defaultAddress[0]?.id ?? null,
  );

  const isAddressesPresent = !!selectedAddress;

  return (
    <div className="m-4 w-[730px]">
      {isAddressesPresent ? (
        <>
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-[19px] font-bold text-zinc-900">
              Saved Addresses
            </h1>
            <button className="cursor-pointer rounded-sm border-1 border-zinc-300 px-4 py-2 text-sm font-bold text-indigo-500">
              + ADD NEW ADDRESS
            </button>
          </div>
          <SelectProfileAddress
            heading="DEFAULT ADDRESS"
            addressList={defaultAddress}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
          <SelectProfileAddress
            heading="OTHER ADDRESSES"
            addressList={otherAddresses}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
        </>
      ) : (
        <NoAddressFallback />
      )}
    </div>
  );
}

export default MyAddresses;
