export const Entry = ({
  label,
  pointValue,
  value,
  onChange,
  type,
  disabled,
  style,
}) => {
  return (
    <div className="flex items-center gap-2">
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
        style={style}
      ></input>
    </div>
  );
};
