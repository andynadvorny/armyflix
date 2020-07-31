import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import PageTitle from '../../components/PageTitle';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

function NewVideo() {
  const initialValues = {
    title: '',
    videolink: '',
    thumbnail: '',
  };
  const [newVideoData, setVideoData] = useState(initialValues);

  function setNewVideo(key, value) {
    setVideoData({
      ...newVideoData,
      [key]: value,
    });
  }

  function handleChange(changeInfo) {
    setNewVideo(
      changeInfo.target.getAttribute('name'),
      changeInfo.target.value,
    );
  }

  return (
    <PageDefault>
      <PageTitle>
        <h1>New Video</h1>
      </PageTitle>

      <form>
        <FormField
          label="Title"
          type="text"
          name="title"
          value={newVideoData.title}
          onChange={handleChange}
        />
        <FormField
          label="Video Link"
          type="text"
          name="videolink"
          value={newVideoData.videolink}
          onChange={handleChange}
        />
        <FormField
          label="Thumbnail Link"
          type="text"
          name="thumbnail"
          value={newVideoData.thumbnail}
          onChange={handleChange}
        />

        <button>
          Save
        </button>
      </form>

      <Button as={Link} to="/register/category">New Category</Button>
    </PageDefault>
  );
}

export default NewVideo;
