import { getSlicedString } from '../../utils/string-slicer';

function SelectProfileAddress({
  heading,
  addressList,
  selectedAddress,
  setSelectedAddress,
}) {
  function handleChange(clickedId) {
    if (clickedId === selectedAddress) return;
    setSelectedAddress(+clickedId);
  }

  const isSelected = (id) => id === selectedAddress;

  return (
    <div>
      <h2 className="mt-6 mb-2 text-[13px] font-bold text-zinc-900">
        {heading}
      </h2>
      {addressList.map(
        ({
          id,
          name,
          mobileNo,
          address,
          pincode,
          locality,
          city,
          state,
          addressType,
          isDefault,
        }) => (
          <div
            key={id}
            onClick={() => handleChange(id)}
            className="mb-4 w-full rounded-xs border-1 border-zinc-100 px-5 py-3 shadow-sm hover:shadow-md"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[14px] font-bold text-zinc-600">{name}</p>
              <p className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-bold text-zinc-500">
                {addressType}
              </p>
            </div>
            <div className="py-1 text-[14.5px] leading-4 text-zinc-500">
              <p>{isSelected(id) ? address : getSlicedString(address, 34)}</p>
              <p>{locality}</p>
              <p>
                {city} - {pincode}
              </p>
              {isSelected(id) && (
                <>
                  <p className="mb-3">{state}</p>
                  <p>Mobile: {mobileNo}</p>
                </>
              )}
            </div>
            {isSelected(id) && !isDefault && (
              <button className="mt-3 cursor-pointer text-xs font-bold text-emerald-400">
                MAKE THIS DEFAULT
              </button>
            )}
            {isSelected(id) && (
              <div className="mt-4 flex w-full items-center border-t-1 border-zinc-200">
                <button className="mt-2 w-1/2 cursor-pointer border-r-1 border-zinc-200 py-1 text-sm font-bold text-indigo-500">
                  EDIT
                </button>
                <button className="mt-2 w-1/2 cursor-pointer py-1 text-sm font-bold text-indigo-500">
                  REMOVE
                </button>
              </div>
            )}
          </div>
        ),
      )}
    </div>
  );
}

export default SelectProfileAddress;
