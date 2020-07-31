import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputField = styled.div`
    background-color: var(--white);
    border-radius: 4px;
    border: 1px solid var(--grayMedium);

    padding: 5px 20px;
    margin-bottom: 10px;
    max-width: 480px;

    > label {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    input, textarea {
        width: 100%;
    }
`;

const Label = styled.label`
`;

Label.Text = styled.span`

`;

const Input = styled.input`
`;

function FormField({
  label, type, name, value, onChange,
}) {
  const isTextArea = (type === 'textarea');
  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <InputField>
      <Label htmlFor={name}>
        <Label.Text>
          {label}
          :
        </Label.Text>
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </Label>
    </InputField>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: ' ',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
