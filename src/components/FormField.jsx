const FormField = ( label, handleChange, post) => (
  <div>
    <label>{label}</label>
    <input onChange={handleChange} type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]} />
  </div>
);

export default FormField;

