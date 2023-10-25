const SelectInputField = ({name, select, options} : {name: string, select: string, options: string[]}) => {
  return (
    <select name={name} defaultValue={select} id="gender" className="bg-content-main/10 w-full rounded h-10 px-2 border-2 focus:border-2 focus:border-content-main/20 focus:bg-content-main/10 outline-none placeholder:font-normal mt-1">
      {options.map((value, index) => (<option key={index} value={value.toLowerCase()} className="bg-content-main">{value}</option>))}
    </select>
  );
}

export default SelectInputField;