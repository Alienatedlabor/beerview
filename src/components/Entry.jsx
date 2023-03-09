export const Entry = ({
  label,
  pointValue,
  value,
  onChange,
  type,
  disabled,
}) => {
  return (
    <div className="flex gap-2">
      <label className="font-medium text-black">
        {!label ? '' : `${label}`} {!pointValue ? '' : `(${pointValue})`}:
      </label>
      <input
        max={type === 'number' ? pointValue : undefined}
        type={type}
        onChange={onChange}
        value={value}
        checked={type === 'checkbox' && !!value}
        className="my-1 border text-black"
        placeholder={label}
        disabled={disabled}
      ></input>
    </div>
  );
};
