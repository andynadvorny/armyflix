import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import PageTitle from '../../components/PageTitle';
import PageDescription from '../../components/PageDescription';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import categoriesRepository from '../../repositories/categories';

function NewCategory() {
  const initialValues = {
    label: '',
    description: '',
    color: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://armyflix.herokuapp.com/categories';
    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategories([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <PageTitle>
        <h1>
          Create Category:
          {values.label}
        </h1>
      </PageTitle>
      <PageDescription>
        Didn&apos;t findn the category you want? Register a new one by filling out the form bellow:
      </PageDescription>
      <form onSubmit={function handleSubmit(changeInfo) {
        changeInfo.preventDefault();

        if (values.color !== '#000000') {
          setCategories([
            ...categories,
            values,
          ]);

          categoriesRepository.createNewCategory({
            label: values.label,
            description: values.description,
            color: values.color,
          })
            .then(() => {
              console.log('Cadastrou com sucesso!');
            });

          clearForm();
        }
      }}
      >
        <FormField
          label="Category Name"
          type="text"
          name="label"
          value={values.label}
          onChange={handleChange}
        />
        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button solid big type="submit">
          Save
        </Button>
        <Button big className="greyButton" onClick={clearForm}>Clear</Button>
      </form>

      <h2>Registered Categories:</h2>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.label}`}>
            {category.label}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default NewCategory;
