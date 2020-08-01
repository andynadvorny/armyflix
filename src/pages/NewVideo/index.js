import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import PageTitle from '../../components/PageTitle';
import PageDescription from '../../components/PageDescription';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import videosRepository from '../../repositories/videos';
import categoriesRepository from '../../repositories/categories';

function NewVideo() {
  const initialValues = {
    category: '',
    categoryId: '',
    title: '',
    url: '',
  };

  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ label }) => label);
  const { handleChange, clearForm, values } = useForm(initialValues);

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
      <PageDescription>
        Got a new video to share? Add it to our library by filling out the form bellow:
      </PageDescription>

      <form onSubmit={(event) => {
        event.preventDefault();

        const chosenCategory = categories.find((category) => {
          return category.label === values.category;
        });

        if (chosenCategory !== undefined) {
          videosRepository.createNewVideo({
            categoryId: chosenCategory.id,
            title: values.title,
            url: values.url,
          })
            .then(() => {
              history.push('/');
            });
        }
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
        <Button big className="greyButton" onClick={clearForm}>Clear</Button>
      </form>
      <PageDescription>
        Couldn&apos;t find the proper category for your video?
      </PageDescription>

      <Button solid as={Link} to="/register/category">New Category</Button>
    </PageDefault>
  );
}

export default NewVideo;
