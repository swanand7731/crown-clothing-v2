import './form-input.styles.scss';

const FormInput = ({ label, ...additionalProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...additionalProps} />
      {label && (
        <label
          className={`${
            additionalProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
