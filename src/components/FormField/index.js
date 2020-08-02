import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const InputField = styled.div`
    position: relative;
    
    textarea {
      min-height: 150px;
      padding-top: 20px;
    }

    input[type="color"] {
      padding-left: 56px;
    }
`;

const Label = styled.label`
`;

Label.Text = styled.span`
  color: var(--grayLight);
  height: 57px;
  position: absolute; 
  top: -5px;
  left: 10px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 16px;
  font-weight: 400;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: var(--white);
  color: var(--black);
  display: block;
  width: min(500px, 100%);
  height: 48px;
  font-size: 16px;
  
  border: 1px solid var(--grayLight);
  outline: 0;
  
  padding: 10px 10px 0;
  margin-bottom: 32px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &[type='color'] {
    padding: 5px 6px 5px;
    outline: none;

    ::-webkit-color-swatch {
      border: none;border-radius:4px;
    }
  } 
  
  &:focus {
    border-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.7) translateY(-6px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.7) translateY(-6px);
        }
      `;
  }
}
`;

function FormField({
  label, type, name, value, onChange, suggestions
}) {
  const fieldId = `id_${name}`;
  const isTextArea = (type === 'textarea');
  const tag = isTextArea ? 'textarea' : 'input';

  const hasSuggestions = Boolean(suggestions.length);

  return (
    <InputField>
      <Label htmlFor={name}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
              suggestions.map((suggestion) => (
                <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                  {suggestion}
                </option>
              ))
            }
            </datalist>
          )
        }
      </Label>
    </InputField>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: ' ',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
