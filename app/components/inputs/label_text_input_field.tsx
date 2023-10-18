import TextInputField from "./text_input_field";

const LabelAndTextInputField = ({label, name, placeholder} : {label: string, name: string, placeholder: string,}) => {
  return (
    <>
      <p className="text-xs text-gray-500 capitalize">{label}</p>
      <div className="mt-1">
        <TextInputField
          name={name}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default LabelAndTextInputField;