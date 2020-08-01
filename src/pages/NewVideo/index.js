import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import PageTitle from '../../components/PageTitle';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import videosRepository from '../../repositories/videos';
import categoriesRepository from '../../repositories/categories';

function NewVideo() {
  const initialValues = {
    category: '',
    title: '',
    url: '',
  };

  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ label }) => label);
  const { handleChange, values } = useForm(initialValues);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <PageTitle>
        <h1>New Video</h1>
      </PageTitle>

      <form onSubmit={(event) => {
        event.preventDefault();

        const chosenCategory = categories.find((category) => {
          return category.label === values.category;
        });

        videosRepository.createNewVideo({
          categoryId: chosenCategory.id,
          title: values.title,
          url: values.url,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Title"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <FormField
          label="Video URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Category"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button solid big type="submit">
          Save
        </Button>
      </form>

      <Button solid as={Link} to="/register/category">New Category</Button>
    </PageDefault>
  );
}

export default NewVideo;
