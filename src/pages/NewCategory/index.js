import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import PageTitle from '../../components/PageTitle';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

function NewCategory() {
  const initialValues = {
    label: '',
    description: '',
    color: '#000000',
  };
  const [categories, setCategories] = useState([]);
  const [newCategoryData, setCategoryData] = useState(initialValues);

  function setNewCategory(key, value) {
    setCategoryData({
      ...newCategoryData,
      [key]: value,
    });
  }

  function handleChange(changeInfo) {
    setNewCategory(
      changeInfo.target.getAttribute('name'),
      changeInfo.target.value,
    );
  }

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
          {newCategoryData.label}
        </h1>
      </PageTitle>
      <form onSubmit={function handleSubmit(changeInfo) {
        changeInfo.preventDefault();
        setCategories([
          ...categories,
          newCategoryData.label,
        ]);
        setCategoryData(initialValues);
      }}
      >
        <FormField
          label="Category Name"
          type="text"
          name="label"
          value={newCategoryData.label}
          onChange={handleChange}
        />
        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={newCategoryData.description}
          onChange={handleChange}
        />
        <FormField
          label="Color"
          type="color"
          name="color"
          value={newCategoryData.color}
          onChange={handleChange}
        />

        <Button className="lightBG">
          Save
        </Button>
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
