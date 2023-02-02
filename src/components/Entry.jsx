export const Entry = ({ label, pointValue, value, onChange, type }) => {
  console.log(label);
  return (
    <div className="flex gap-2">
      <label className="font-medium text-black">
        {label} {!pointValue ? '' : `(${pointValue})`}:
      </label>
      <input
        max={type === 'number' ? pointValue : undefined}
        type={type}
        onChange={onChange}
        value={value}
        className="my-1 border"
        placeholder={label}
      ></input>
    </div>
  );
};
